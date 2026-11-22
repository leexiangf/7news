# 7News

Bilingual (zh / en) AI news site for engineers and product leads.

- **Live:** [https://7news.aiaaii.com](https://7news.aiaaii.com)
- **Stack:** Next.js App Router · TypeScript · Tailwind · Markdown · static export
- **Host:** Cloudflare Workers (static assets)
- **License:** [7News Attribution License 1.0](./LICENSE) — keep visible credit to 7News and this repo

This public repository contains the **reader-facing site** (pages, components, published posts). Editorial collectors, crawl pipelines, and internal tooling are intentionally not published.

## Develop

```bash
npm install
npm run dev
```

Default port `3618`.

## Build

```bash
npm run build
```

Static output lands in `out/` for Cloudflare Workers.

## Attribution

If you fork and deploy your own site, keep a visible link to **7News** and [github.com/leexiangf/7news](https://github.com/leexiangf/7news) (footer or About page is fine).
