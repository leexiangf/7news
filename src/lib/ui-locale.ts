import type { ContentLocale } from "@/lib/types";

/** Static pages that have a dedicated `/en/...` counterpart. */
export const BILINGUAL_STATIC_PATHS = [
  "/about/",
  "/columns/",
  "/tools/",
  "/topics/",
  "/flash/",
  "/publishers/",
  "/update-log/",
  "/privacy/",
  "/terms/",
  "/open-source/",
] as const;

const BILINGUAL_STATIC = new Set<string>([
  ...BILINGUAL_STATIC_PATHS,
  ...BILINGUAL_STATIC_PATHS.map((p) => p.slice(0, -1)),
]);

export function localeFromPathname(pathname: string): ContentLocale {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return "zh";
}

function withTrailingSlash(href: string): string {
  if (!href || href === "/") return "/";
  return href.endsWith("/") ? href : `${href}/`;
}

function isBilingualStaticTree(pathname: string): boolean {
  const normalized = withTrailingSlash(pathname);
  if (BILINGUAL_STATIC.has(normalized)) return true;
  return BILINGUAL_STATIC_PATHS.some(
    (root) => normalized === root || normalized.startsWith(root),
  );
}

/** Prefix or strip `/en` for content and bilingual static routes. */
export function localizedHref(href: string, locale: ContentLocale): string {
  const normalized = withTrailingSlash(href);

  if (locale === "zh") {
    if (normalized === "/en/") return "/";
    if (normalized.startsWith("/en/")) {
      return normalized.replace(/^\/en/, "") || "/";
    }
    return normalized === "/" ? "/" : normalized;
  }

  // locale === "en"
  if (normalized === "/en/" || normalized.startsWith("/en/")) return normalized;
  if (normalized === "/" || normalized === "") return "/en/";
  if (isBilingualStaticTree(normalized)) {
    return `/en${normalized}`;
  }
  // Topic / article paths
  return `/en${normalized}`;
}

export function pathForLocaleSwitch(
  pathname: string,
  next: ContentLocale,
): string | null {
  const current = localeFromPathname(pathname);
  if (current === next) return null;
  return localizedHref(pathname, next);
}

export const uiCopy = {
  zh: {
    channels: "频道",
    more: "更多",
    menu: "菜单",
    close: "关闭",
    siteMenu: "站点菜单",
    sources: "来源",
    faq: "常见问题",
    related: "相关阅读",
    copyLink: "复制链接",
    copied: "已复制链接",
    search: "搜索",
    searchPlaceholder: "搜索标题、摘要、标签…",
    noResults: "没有匹配结果",
    footerTech: "原创摘要与分析 · 中英双语。",
    minutes: "分钟",
    home: "首页",
    missingCover: "缺封面",
    toc: "目录",
    breadcrumbs: "面包屑",
    allTopics: "全部频道",
    sequential: "顺序阅读",
    collection: "主题合集",
    articlesCount: "{n} 篇",
    readInOrder: "建议按顺序阅读",
    pickAndRead: "可按需挑读",
    toolPurpose: "它解决什么问题",
    toolScenarios: "适用场景",
    toolStart: "开始使用",
    flashTitle: "今日快讯",
    flashAll: "全部快讯",
    flashEmpty: "暂无快讯。",
    loadMore: "加载更多",
  },
  en: {
    channels: "Channels",
    more: "More",
    menu: "Menu",
    close: "Close",
    siteMenu: "Site menu",
    sources: "Sources",
    faq: "FAQ",
    related: "Related",
    copyLink: "Copy link",
    copied: "Link copied",
    search: "Search",
    searchPlaceholder: "Search titles, summaries, tags…",
    noResults: "No matches",
    footerTech: "Original analysis · bilingual zh / en.",
    minutes: "min",
    home: "Home",
    missingCover: "No cover",
    toc: "Contents",
    breadcrumbs: "Breadcrumb",
    allTopics: "All channels",
    sequential: "Sequential",
    collection: "Collection",
    articlesCount: "{n} articles",
    readInOrder: "Best read in order",
    pickAndRead: "Browse in any order",
    toolPurpose: "What it solves",
    toolScenarios: "Typical uses",
    toolStart: "Try it",
    flashTitle: "Flash",
    flashAll: "All flash",
    flashEmpty: "No stories yet.",
    loadMore: "Load more",
  },
} as const;
