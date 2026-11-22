import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import type {
  Article,
  ArticleMeta,
  ColumnArticleMeta,
  ContentLocale,
} from "@/lib/types";
const root = process.cwd();
const postsDir = path.join(root, "content", "posts");
const columnsDir = path.join(root, "content", "columns");

const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const frontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().min(1),
  date: z.union([z.string(), z.date()]),
  updated: z.union([z.string(), z.date()]).optional(),
  category: z.string().min(1),
  subcategory: z.string().min(1),
  tags: z.array(z.string()).default([]),
  faqs: z.array(faqSchema).default([]),
  draft: z.boolean().default(false),
  order: z.number().optional(),
  sourceLevel: z.enum(["S", "A", "B", "C"]).optional(),
  sourceUrls: z.array(z.string().url()).default([]),
  publisher: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .optional(),
  author: z.string().optional(),
  locale: z.enum(["zh", "en"]).optional(),
  image: z.string().min(1).optional(),
  imageAlt: z.string().min(1).optional(),
  imageCredit: z.string().min(1).optional(),
});

function toDateString(value: string | Date): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return value.slice(0, 10);
}

function readingMinutes(text: string, locale: ContentLocale): number {
  if (locale === "en") {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  }
  const chars = text.replace(/\s+/g, "").length;
  return Math.max(1, Math.ceil(chars / 450));
}

function extractHeadings(markdown: string) {
  const headings: Article["headings"] = [];
  const lines = markdown.split("\n");
  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const level = match[1].length;
    const text = match[2].replace(/[#*`]/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fff\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }
  return headings;
}

function walkMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(full));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".md") &&
      entry.name.toLowerCase() !== "readme.md"
    ) {
      files.push(full);
    }
  }
  return files;
}

function localeFromFilename(filePath: string): ContentLocale {
  return path.basename(filePath).endsWith(".en.md") ? "en" : "zh";
}

function articleHref(options: {
  locale: ContentLocale;
  subcategory: string;
  slug: string;
  columnId?: string;
}): string {
  if (options.columnId) {
    return `/columns/${options.columnId}/${options.slug}/`;
  }
  return options.locale === "en"
    ? `/en/${options.subcategory}/${options.slug}/`
    : `/${options.subcategory}/${options.slug}/`;
}

function parseArticleFile(
  filePath: string,
  options?: { columnId?: string },
): Article | null {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: ${parsed.error.message}`,
    );
  }

  const fm = parsed.data;
  if (fm.draft) return null;

  const locale: ContentLocale = fm.locale ?? localeFromFilename(filePath);
  const date = toDateString(fm.date);
  const updated = fm.updated ? toDateString(fm.updated) : undefined;
  const href = articleHref({
    locale,
    subcategory: fm.subcategory,
    slug: fm.slug,
    columnId: options?.columnId,
  });

  return {
    title: fm.title,
    slug: fm.slug,
    description: fm.description,
    date,
    updated,
    category: fm.category,
    subcategory: fm.subcategory,
    tags: fm.tags,
    faqs: fm.faqs,
    draft: fm.draft,
    href,
    readingMinutes: readingMinutes(content, locale),
    sourceLevel: fm.sourceLevel,
    sourceUrls: fm.sourceUrls,
    publisher: fm.publisher,
    author: fm.author,
    locale,
    image: fm.image,
    imageAlt: fm.imageAlt,
    imageCredit: fm.imageCredit,
    content,
    headings: extractHeadings(content),
    ...(options?.columnId
      ? { columnId: options.columnId, order: fm.order }
      : {}),
  } as Article & Partial<ColumnArticleMeta>;
}

function toArticleMeta(article: Article): ArticleMeta {
  const {
    title,
    slug,
    description,
    date,
    updated,
    category,
    subcategory,
    tags,
    faqs,
    draft,
    href,
    readingMinutes,
    sourceLevel,
    sourceUrls,
    publisher,
    author,
    locale,
    image,
    imageAlt,
    imageCredit,
  } = article;
  return {
    title,
    slug,
    description,
    date,
    updated,
    category,
    subcategory,
    tags,
    faqs,
    draft,
    href,
    readingMinutes,
    sourceLevel,
    sourceUrls,
    publisher,
    author,
    locale,
    image,
    imageAlt,
    imageCredit,
  };
}

const cachedArticles: Record<ContentLocale, ArticleMeta[] | null> = {
  zh: null,
  en: null,
};
const cachedFullArticles: Record<ContentLocale, Article[] | null> = {
  zh: null,
  en: null,
};

function loadPublishedArticles(locale: ContentLocale): Article[] {
  const files = walkMarkdownFiles(postsDir);
  const articles: Article[] = [];
  const keys = new Set<string>();

  for (const file of files) {
    const article = parseArticleFile(file);
    if (!article || article.locale !== locale) continue;
    const key = `${article.locale}:${article.slug}`;
    if (keys.has(key)) {
      throw new Error(`Duplicate slug for ${locale}: ${article.slug}`);
    }
    keys.add(key);
    articles.push(article);
  }

  articles.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return articles;
}

export function getAllArticles(locale: ContentLocale = "zh"): ArticleMeta[] {
  // Dev: always re-read content/posts so new drafts show without restart.
  if (process.env.NODE_ENV === "development") {
    cachedArticles[locale] = null;
    cachedFullArticles[locale] = null;
  }
  if (cachedArticles[locale]) return cachedArticles[locale]!;
  const articles = loadPublishedArticles(locale);
  cachedFullArticles[locale] = articles;
  cachedArticles[locale] = articles.map(toArticleMeta);
  return cachedArticles[locale]!;
}

export function getArticleBySubcategorySlug(
  subcategory: string,
  slug: string,
  locale: ContentLocale = "zh",
): Article | undefined {
  if (!cachedFullArticles[locale]) getAllArticles(locale);
  return cachedFullArticles[locale]?.find(
    (article) => article.subcategory === subcategory && article.slug === slug,
  );
}

/** Same slug in the other locale, if a pair exists (for hreflang). */
export function getAlternateLocaleArticle(
  article: ArticleMeta,
): ArticleMeta | undefined {
  const other: ContentLocale = article.locale === "en" ? "zh" : "en";
  return getAllArticles(other).find((item) => item.slug === article.slug);
}

export function getArticlesByCategory(
  category: string,
  locale: ContentLocale = "zh",
): ArticleMeta[] {
  return getAllArticles(locale).filter(
    (article) => article.category === category,
  );
}

export function getArticlesBySubcategory(
  subcategory: string,
  locale: ContentLocale = "zh",
): ArticleMeta[] {
  return getAllArticles(locale).filter(
    (article) => article.subcategory === subcategory,
  );
}

export function getArticlesByPublisher(
  publisherId: string,
  locale: ContentLocale = "zh",
): ArticleMeta[] {
  return getAllArticles(locale).filter(
    (article) => article.publisher === publisherId,
  );
}

export function getRelatedArticles(
  article: ArticleMeta,
  limit = 3,
): ArticleMeta[] {
  return getAllArticles(article.locale)
    .filter(
      (item) =>
        item.slug !== article.slug &&
        (item.category === article.category ||
          item.tags.some((tag) => article.tags.includes(tag))),
    )
    .slice(0, limit);
}

export function getAllColumnArticles(columnId: string): ColumnArticleMeta[] {
  const dir = path.join(columnsDir, columnId);
  const files = walkMarkdownFiles(dir);
  const articles: ColumnArticleMeta[] = [];

  for (const file of files) {
    const article = parseArticleFile(file, { columnId }) as
      | (Article & ColumnArticleMeta)
      | null;
    if (!article) continue;
    articles.push({
      ...toArticleMeta(article),
      columnId,
      order: article.order,
    });
  }

  articles.sort((a, b) => {
    if (a.order != null && b.order != null) return a.order - b.order;
    if (a.order != null) return -1;
    if (b.order != null) return 1;
    return a.date < b.date ? 1 : -1;
  });

  return articles;
}

export function getColumnArticle(
  columnId: string,
  slug: string,
): (Article & ColumnArticleMeta) | undefined {
  const file = path.join(columnsDir, columnId, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  return parseArticleFile(file, { columnId }) as
    | (Article & ColumnArticleMeta)
    | undefined;
}
