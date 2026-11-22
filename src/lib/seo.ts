import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { ArticleMeta, ContentLocale, FaqItem } from "@/lib/types";

type CreateMetadataInput = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  image?: string;
  /** Page content locale — drives og:locale and default hreflang pair. */
  locale?: ContentLocale;
  /** hreflang map (`zh-CN` / `en` / `x-default`). Prefer absolute URLs. */
  languages?: NonNullable<Metadata["alternates"]>["languages"];
};

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") {
    return new URL("/", siteConfig.url).toString();
  }
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  // Keep file-like paths (feed.xml, llms.txt) without a trailing slash.
  const looksLikeFile = /\.[a-z0-9]+$/i.test(withSlash.split("/").pop() || "");
  const normalized =
    looksLikeFile || withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
  return new URL(normalized, siteConfig.url).toString();
}

export function absoluteAssetUrl(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return new URL(path.startsWith("/") ? path : `/${path}`, siteConfig.url).toString();
}

/** Build hreflang map for a zh path and its `/en…` twin (same trailing slash). */
export function bilingualLanguages(
  zhPath: string,
): NonNullable<Metadata["alternates"]>["languages"] {
  const zh = zhPath === "/" ? "/" : zhPath.endsWith("/") ? zhPath : `${zhPath}/`;
  const en = zh === "/" ? "/en/" : `/en${zh}`;
  return {
    "zh-CN": absoluteUrl(zh),
    en: absoluteUrl(en),
    "x-default": absoluteUrl(zh),
  };
}

export function createMetadata({
  title,
  description,
  path = "/",
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
  image,
  locale,
  languages,
}: CreateMetadataInput): Metadata {
  const resolvedLocale: ContentLocale =
    locale ??
    (path === "/en/" || path.startsWith("/en/") ? "en" : "zh");
  const url = absoluteUrl(path);
  const brand =
    resolvedLocale === "en" ? siteConfig.nameEn : siteConfig.name;
  const fullTitle =
    title === brand || title === siteConfig.name
      ? brand
      : `${title} · ${brand}`;
  const imageUrl = absoluteAssetUrl(image);
  const ogLocale = resolvedLocale === "en" ? "en_US" : "zh_CN";
  const altLocale = resolvedLocale === "en" ? "zh_CN" : "en_US";

  const languageAlternates =
    languages ??
    (path === "/en/" || path.startsWith("/en/")
      ? bilingualLanguages(path.replace(/^\/en/, "") || "/")
      : bilingualLanguages(path));

  return {
    title: fullTitle,
    description,
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {
          alternates: {
            canonical: url,
            languages: languageAlternates,
            types: {
              "application/rss+xml":
                resolvedLocale === "en"
                  ? absoluteUrl("/feed-en.xml")
                  : absoluteUrl("/feed.xml"),
            },
          },
        }),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: ogLocale,
      alternateLocale: [altLocale],
      type,
      publishedTime,
      modifiedTime,
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export function organizationJsonLd() {
  return {
    "@type": "NewsMediaOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteAssetUrl("/brand/7news-logo.jpg"),
    },
    description: siteConfig.description,
    publishingPrinciples: absoluteUrl("/about/"),
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["zh-CN", "en"],
    publisher: { "@id": `${siteConfig.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        // SiteShell SearchDialog opens when ?q= is present (sitelinks search).
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path?: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function articleJsonLd(
  article: ArticleMeta,
  options: {
    locale: ContentLocale;
    breadcrumb: { name: string; path?: string }[];
    faqs?: FaqItem[];
  },
) {
  const url = absoluteUrl(article.href);
  const image = absoluteAssetUrl(article.image);
  const inLanguage = options.locale === "en" ? "en" : "zh-CN";

  const graph: Record<string, unknown>[] = [
    {
      "@type": "NewsArticle",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.updated ?? article.date,
      inLanguage,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      url,
      isAccessibleForFree: true,
      ...(image
        ? {
            image: {
              "@type": "ImageObject",
              url: image,
              ...(article.imageAlt ? { caption: article.imageAlt } : {}),
            },
          }
        : {}),
      author: {
        "@type": article.author ? "Person" : "Organization",
        name: article.author || siteConfig.name,
      },
      publisher: { "@id": `${siteConfig.url}/#organization` },
      ...(article.tags.length ? { keywords: article.tags.join(", ") } : {}),
    },
    breadcrumbJsonLd(options.breadcrumb),
    organizationJsonLd(),
  ];

  const faqs = options.faqs ?? article.faqs;
  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd()],
  };
}
