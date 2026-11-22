import publishersConfig from "@/config/publishers.json";
import type { ContentLocale } from "@/lib/types";

export type Publisher = {
  id: string;
  name: string;
  nameZh?: string;
  description: string;
  descriptionEn?: string;
  website: string;
  newsUrl?: string;
  defaultCategory: string;
  tier: "P0" | "P1" | "P2";
};

/** Brand accent for logo badges (approximate official hues). */
const publisherBrandColors: Record<string, string> = {
  openai: "#10a37f",
  anthropic: "#d4a27f",
  google: "#4285f4",
  microsoft: "#00a4ef",
  meta: "#0668e1",
  deepseek: "#4d6bfe",
  "alibaba-qwen": "#ff6a00",
  moonshot: "#5b5ce2",
  zhipu: "#0f62fe",
  bytedance: "#fe2c55",
  tencent: "#12b7f5",
  cursor: "#1a1a1a",
  mcp: "#5b4ddb",
  langchain: "#1c3c3c",
  github: "#181717",
  ollama: "#1a1a1a",
  vllm: "#2563eb",
  sglang: "#6366f1",
  "llama-cpp": "#0467df",
  runway: "#0f766e",
  "black-forest-labs": "#111827",
  elevenlabs: "#000000",
};

export const publishers = publishersConfig.publishers as Publisher[];

export function getPublisher(id: string | undefined | null): Publisher | undefined {
  if (!id) return undefined;
  return publishers.find((item) => item.id === id);
}

export function publisherName(
  publisher: Publisher,
  locale: ContentLocale = "zh",
): string {
  if (locale === "zh" && publisher.nameZh) return publisher.nameZh;
  return publisher.name;
}

export function publisherDescription(
  publisher: Publisher,
  locale: ContentLocale = "zh",
): string {
  if (locale === "en") {
    return publisher.descriptionEn || publisher.description;
  }
  return publisher.description;
}

export function publisherHref(id: string, locale: ContentLocale = "zh"): string {
  return locale === "en" ? `/en/publishers/${id}/` : `/publishers/${id}/`;
}

export function publisherLogoSrc(id: string): string {
  return `/images/publishers/${id}.svg`;
}

export function publisherBrandColor(id: string): string {
  return publisherBrandColors[id] || "#5c6578";
}
