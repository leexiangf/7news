import fs from "node:fs";
import path from "node:path";
import { getAllArticles } from "@/lib/content";
import type { ArticleMeta, ContentLocale } from "@/lib/types";

export type HeadlineItem = {
  slug: string;
  addedAt: string;
};

export type HeadlinesFile = {
  maxItems: number;
  items: HeadlineItem[];
};

const HEADLINES_PATH = path.join(process.cwd(), "content", "headlines.json");
export const HEADLINE_MAX = 5;

export function readHeadlinesFile(): HeadlinesFile {
  if (!fs.existsSync(HEADLINES_PATH)) {
    return { maxItems: HEADLINE_MAX, items: [] };
  }
  try {
    const raw = JSON.parse(fs.readFileSync(HEADLINES_PATH, "utf8")) as HeadlinesFile;
    const items = Array.isArray(raw.items) ? raw.items : [];
    return {
      maxItems: typeof raw.maxItems === "number" ? raw.maxItems : HEADLINE_MAX,
      items: items.filter((item) => item?.slug),
    };
  } catch {
    return { maxItems: HEADLINE_MAX, items: [] };
  }
}

/** Resolve curated headline slugs to published articles for a locale (newest pin first). */
export function getHeadlineArticles(
  locale: ContentLocale = "zh",
): ArticleMeta[] {
  const { items, maxItems } = readHeadlinesFile();
  const bySlug = new Map(
    getAllArticles(locale).map((article) => [article.slug, article]),
  );
  const resolved: ArticleMeta[] = [];
  for (const item of items.slice(0, maxItems || HEADLINE_MAX)) {
    const article = bySlug.get(item.slug);
    if (article) resolved.push(article);
  }
  return resolved;
}
