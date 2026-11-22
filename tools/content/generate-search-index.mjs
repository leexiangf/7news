import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const postsDir = path.join(root, "content", "posts");
const columnsDir = path.join(root, "content", "columns");
const outFile = path.join(root, "public", "data", "search-index.json");

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

function indexFile(file, hrefBuilder) {
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  if (data.draft) return null;
  const locale = fileLocale(file, data);
  return {
    title: data.title,
    description: data.description,
    body: content.replace(/[#>*`\[\]()_-]/g, " ").slice(0, 4000),
    tags: data.tags ?? [],
    category: data.category,
    date: toDateString(data.date),
    locale,
    href: hrefBuilder(data, file, locale),
  };
}

const postDocs = walk(postsDir)
  .map((file) =>
    indexFile(file, (data, _f, locale) =>
      locale === "en"
        ? `/en/${data.subcategory}/${data.slug}/`
        : `/${data.subcategory}/${data.slug}/`,
    ),
  )
  .filter(Boolean);

const columnDocs = walk(columnsDir)
  .map((file) => {
    const parts = file.split(path.sep);
    const columnId = parts[parts.length - 2];
    return indexFile(file, (data) => `/columns/${columnId}/${data.slug}/`);
  })
  .filter(Boolean);

const docs = [...postDocs, ...columnDocs];
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(docs, null, 2));
console.log(`Wrote ${docs.length} docs to public/data/search-index.json`);
