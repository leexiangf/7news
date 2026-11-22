import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const postsDir = path.join(root, "content", "posts");
const outDir = path.join(root, "public", "data", "feed");
const publicDir = path.join(root, "public");
const taxonomy = JSON.parse(
  fs.readFileSync(path.join(root, "src/config/taxonomy.json"), "utf8"),
);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (entry.isFile() && entry.name.endsWith(".md")) return [full];
    return [];
  });
}

function toDateString(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

function fileLocale(file, data) {
  if (data.locale === "en" || data.locale === "zh") return data.locale;
  return path.basename(file).endsWith(".en.md") ? "en" : "zh";
}

function readingMinutes(content, locale) {
  if (locale === "en") {
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  }
  const chars = content.replace(/\s+/g, "").length;
  return Math.max(1, Math.ceil(chars / 450));
}

function siteUrl() {
  const src = fs.readFileSync(path.join(root, "src/config/site.ts"), "utf8");
  return src.match(/url:\s*"([^"]+)"/)?.[1] || "https://7news.example";
}

function siteName() {
  const src = fs.readFileSync(path.join(root, "src/config/site.ts"), "utf8");
  return src.match(/name:\s*"([^"]+)"/)?.[1] || "7News";
}

function escapeXml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absolute(base, href) {
  return new URL(href, base.endsWith("/") ? base : `${base}/`).toString();
}

function buildRss({ title, description, link, language, items, base }) {
  const lastBuild = items[0]?.date
    ? `${items[0].date}T00:00:00Z`
    : new Date().toISOString();
  const entries = items
    .slice(0, 40)
    .map((item) => {
      const url = absolute(base, item.href);
      return `  <item>
    <title>${escapeXml(item.title)}</title>
    <link>${escapeXml(url)}</link>
    <guid isPermaLink="true">${escapeXml(url)}</guid>
    <pubDate>${new Date(`${item.date}T00:00:00Z`).toUTCString()}</pubDate>
    <description>${escapeXml(item.description || "")}</description>
    <category>${escapeXml(item.category)}</category>
  </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(title)}</title>
  <link>${escapeXml(link)}</link>
  <description>${escapeXml(description)}</description>
  <language>${escapeXml(language)}</language>
  <lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>
  <atom:link href="${escapeXml(link)}" rel="self" type="application/rss+xml"/>
  ${entries}
</channel>
</rss>
`;
}

/** Stable public path for a channel feed (zh | en). */
export function channelFeedPath(topicId, locale) {
  return locale === "en"
    ? `/feed-${topicId}-en.xml`
    : `/feed-${topicId}.xml`;
}

const all = walk(postsDir)
  .map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);
    if (data.draft) return null;
    const locale = fileLocale(file, data);
    const href =
      locale === "en"
        ? `/en/${data.subcategory}/${data.slug}/`
        : `/${data.subcategory}/${data.slug}/`;
    return {
      title: data.title,
      slug: data.slug,
      description: data.description,
      date: toDateString(data.date),
      updated: data.updated ? toDateString(data.updated) : undefined,
      category: data.category,
      subcategory: data.subcategory,
      publisher: data.publisher,
      tags: data.tags ?? [],
      locale,
      href,
      image: data.image,
      readingMinutes: readingMinutes(content, locale),
    };
  })
  .filter(Boolean)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

fs.mkdirSync(outDir, { recursive: true });
const zh = all.filter((item) => item.locale === "zh");
const en = all.filter((item) => item.locale === "en");
fs.writeFileSync(path.join(outDir, "all.json"), JSON.stringify(zh, null, 2));
fs.writeFileSync(path.join(outDir, "en.json"), JSON.stringify(en, null, 2));

const base = siteUrl();
const name = siteName();
const zhRss = buildRss({
  title: `${name} · 中文`,
  description: "AI 实战资讯：官方来源上的原创摘要与分析（中文）",
  link: absolute(base, "/feed.xml"),
  language: "zh-CN",
  items: zh,
  base,
});
const enRss = buildRss({
  title: `${name} · English`,
  description:
    "AI news: original summaries and analysis from official sources (English)",
  link: absolute(base, "/feed-en.xml"),
  language: "en",
  items: en,
  base,
});
fs.writeFileSync(path.join(publicDir, "feed.xml"), zhRss);
fs.writeFileSync(path.join(publicDir, "feed-en.xml"), enRss);

const channelStats = [];
for (const topic of taxonomy.topics) {
  const labelZh = topic.label;
  const labelEn = topic.labelEn || topic.label;
  const zhItems = zh.filter((item) => item.category === topic.id);
  const enItems = en.filter((item) => item.category === topic.id);
  const zhPath = channelFeedPath(topic.id, "zh");
  const enPath = channelFeedPath(topic.id, "en");
  fs.writeFileSync(
    path.join(publicDir, zhPath.slice(1)),
    buildRss({
      title: `${name} · ${labelZh}`,
      description: `${labelZh}频道：官方来源上的原创摘要与分析`,
      link: absolute(base, zhPath),
      language: "zh-CN",
      items: zhItems,
      base,
    }),
  );
  fs.writeFileSync(
    path.join(publicDir, enPath.slice(1)),
    buildRss({
      title: `${name} · ${labelEn}`,
      description: `${labelEn} channel: original summaries from official sources`,
      link: absolute(base, enPath),
      language: "en",
      items: enItems,
      base,
    }),
  );
  channelStats.push(`${topic.id} zh=${zhItems.length} en=${enItems.length}`);
}

console.log(
  `Wrote ${zh.length} zh → public/data/feed/all.json + public/feed.xml; ${en.length} en → public/data/feed/en.json + public/feed-en.xml`,
);
console.log(`Channel feeds: ${channelStats.join("; ")}`);
