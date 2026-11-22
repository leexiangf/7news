/**
 * Submit priority URLs to IndexNow (Bing / Yandex / others).
 * Usage: node tools/seo/ping-indexnow.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const key = "352af4d081cb45ba87160cd87f34f144";
const host = "7news.aiaaii.com";
const keyLocation = `https://${host}/${key}.txt`;

const siteTs = fs.readFileSync(path.join(root, "src/config/site.ts"), "utf8");
const base =
  siteTs.match(/url:\s*"([^"]+)"/)?.[1]?.replace(/\/$/, "") ||
  `https://${host}`;

const feedPath = path.join(root, "public/data/feed/all.json");
const feed = JSON.parse(fs.readFileSync(feedPath, "utf8"));
const items = Array.isArray(feed) ? feed : feed.items || [];

const priority = [
  `${base}/`,
  `${base}/en/`,
  `${base}/topics/`,
  `${base}/publishers/`,
  `${base}/about/`,
  `${base}/llm/`,
  `${base}/agent/`,
  `${base}/ai-coding/`,
  `${base}/en/topics/`,
  `${base}/en/about/`,
  ...items.slice(0, 20).map((item) => `${base}${item.href}`),
];

const urlList = [...new Set(priority)];

const body = {
  host,
  key,
  keyLocation,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

const text = await res.text();
console.log(`IndexNow ${res.status}: ${text || "(empty)"}`);
console.log(`Submitted ${urlList.length} URLs for ${host}`);
if (!res.ok && res.status !== 202) {
  process.exitCode = 1;
}
