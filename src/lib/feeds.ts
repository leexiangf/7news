import type { ContentLocale } from "@/lib/types";

/** Site-relative path for the site-wide or channel RSS feed. */
export function feedPath(
  locale: ContentLocale = "zh",
  topicId?: string,
): string {
  if (topicId) {
    return locale === "en"
      ? `/feed-${topicId}-en.xml`
      : `/feed-${topicId}.xml`;
  }
  return locale === "en" ? "/feed-en.xml" : "/feed.xml";
}
