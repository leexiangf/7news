import taxonomy from "@/config/taxonomy.json";
import type { ContentLocale } from "@/lib/types";

export type Subcategory = {
  id: string;
  label: string;
  labelEn?: string;
};

export type Topic = {
  id: string;
  label: string;
  labelEn?: string;
  /** Distinct channel accent for tags / filters. */
  accent?: string;
  description: string;
  descriptionEn?: string;
  subcategories: Subcategory[];
};

const fallbackTopicAccent = "#5c6578";

export function topicAccent(topic: Topic | undefined | null): string {
  return topic?.accent || fallbackTopicAccent;
}

export const topics = taxonomy.topics as Topic[];

export function getTopic(id: string): Topic | undefined {
  return topics.find((topic) => topic.id === id);
}

export function getSubcategory(id: string): {
  topic: Topic;
  subcategory: Subcategory;
} | undefined {
  for (const topic of topics) {
    const subcategory = topic.subcategories.find((item) => item.id === id);
    if (subcategory) {
      return { topic, subcategory };
    }
  }
  return undefined;
}

export function topicLabel(topic: Topic, locale: ContentLocale = "zh"): string {
  return locale === "en" ? topic.labelEn || topic.label : topic.label;
}

export function subcategoryLabel(
  subcategory: Subcategory,
  locale: ContentLocale = "zh",
): string {
  return locale === "en"
    ? subcategory.labelEn || subcategory.label
    : subcategory.label;
}

export function topicDescription(
  topic: Topic,
  locale: ContentLocale = "zh",
): string {
  return locale === "en"
    ? topic.descriptionEn || topic.description
    : topic.description;
}

export function assertUniqueSubcategoryIds() {
  const seen = new Set<string>();
  for (const topic of topics) {
    for (const subcategory of topic.subcategories) {
      if (seen.has(subcategory.id)) {
        throw new Error(`Duplicate subcategory id: ${subcategory.id}`);
      }
      seen.add(subcategory.id);
    }
  }
}
