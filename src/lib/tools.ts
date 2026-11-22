import toolsConfig from "@/config/tools.json";
import type { ContentLocale, ToolMeta } from "@/lib/types";

export const tools: ToolMeta[] = toolsConfig.tools.map((tool) => ({
  ...tool,
  href: `/tools/${tool.slug}/`,
}));

export function getTool(slug: string): ToolMeta | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function toolTitle(tool: ToolMeta, locale: ContentLocale = "zh"): string {
  return locale === "en" && tool.titleEn ? tool.titleEn : tool.title;
}

export function toolDescription(
  tool: ToolMeta,
  locale: ContentLocale = "zh",
): string {
  return locale === "en" && tool.descriptionEn
    ? tool.descriptionEn
    : tool.description;
}

export function toolPurpose(
  tool: ToolMeta,
  locale: ContentLocale = "zh",
): string {
  return locale === "en" && tool.purposeEn ? tool.purposeEn : tool.purpose;
}

export function toolScenarios(
  tool: ToolMeta,
  locale: ContentLocale = "zh",
): string[] {
  return locale === "en" && tool.scenariosEn?.length
    ? tool.scenariosEn
    : tool.scenarios;
}
