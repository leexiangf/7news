import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { columns } from "@/lib/columns";
import { getAllArticles, getAllColumnArticles } from "@/lib/content";
import { publishers } from "@/lib/publishers";
import { topics } from "@/lib/taxonomy";
import { tools } from "@/lib/tools";
import { BILINGUAL_STATIC_PATHS } from "@/lib/ui-locale";

export const dynamic = "force-static";

function entry(
  path: string,
  lastModified: Date | string,
  opts?: Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteConfig.url}${path}`,
    lastModified: typeof lastModified === "string" ? new Date(lastModified) : lastModified,
    ...opts,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const hubDate = new Date("2026-11-22");

  const staticPaths = [
    "/",
    "/en/",
    ...BILINGUAL_STATIC_PATHS,
    ...BILINGUAL_STATIC_PATHS.map((path) => `/en${path}`),
  ];

  const entries: MetadataRoute.Sitemap = [
    entry("/", hubDate, { changeFrequency: "hourly", priority: 1 }),
    entry("/en/", hubDate, { changeFrequency: "hourly", priority: 0.95 }),
    ...staticPaths
      .filter((path) => path !== "/" && path !== "/en/")
      .map((path) =>
        entry(path, hubDate, {
          changeFrequency: "weekly",
          priority: path.includes("/about/") || path.includes("/topics/") ? 0.8 : 0.6,
        }),
      ),
    ...topics.flatMap((topic) => [
      entry(`/${topic.id}/`, hubDate, {
        changeFrequency: "daily",
        priority: 0.85,
      }),
      entry(`/en/${topic.id}/`, hubDate, {
        changeFrequency: "daily",
        priority: 0.8,
      }),
      ...topic.subcategories.flatMap((sub) => [
        entry(`/${topic.id}/${sub.id}/`, hubDate, {
          changeFrequency: "daily",
          priority: 0.75,
        }),
        entry(`/en/${topic.id}/${sub.id}/`, hubDate, {
          changeFrequency: "daily",
          priority: 0.7,
        }),
      ]),
    ]),
    ...getAllArticles("zh").map((article) =>
      entry(article.href, article.updated ?? article.date, {
        changeFrequency: "weekly",
        priority: 0.7,
      }),
    ),
    ...getAllArticles("en").map((article) =>
      entry(article.href, article.updated ?? article.date, {
        changeFrequency: "weekly",
        priority: 0.65,
      }),
    ),
    ...publishers.flatMap((publisher) => [
      entry(`/publishers/${publisher.id}/`, "2026-11-20", {
        changeFrequency: "weekly",
        priority: 0.65,
      }),
      entry(`/en/publishers/${publisher.id}/`, "2026-11-20", {
        changeFrequency: "weekly",
        priority: 0.6,
      }),
    ]),
    ...columns.flatMap((column) => [
      entry(`/columns/${column.id}/`, hubDate, {
        changeFrequency: "weekly",
        priority: 0.65,
      }),
      entry(`/en/columns/${column.id}/`, hubDate, {
        changeFrequency: "weekly",
        priority: 0.6,
      }),
      ...getAllColumnArticles(column.id).map((article) =>
        entry(article.href, article.updated ?? article.date, {
          changeFrequency: "monthly",
          priority: 0.55,
        }),
      ),
    ]),
    ...tools.flatMap((tool) => [
      entry(tool.href, hubDate, {
        changeFrequency: "monthly",
        priority: 0.5,
      }),
      entry(`/en${tool.href}`, hubDate, {
        changeFrequency: "monthly",
        priority: 0.45,
      }),
    ]),
  ];

  return entries;
}
