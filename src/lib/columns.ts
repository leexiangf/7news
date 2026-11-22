import columnsConfig from "@/config/columns.json";
import type { ColumnMeta, ContentLocale } from "@/lib/types";

export const columns = columnsConfig.columns as ColumnMeta[];

export function getColumn(id: string): ColumnMeta | undefined {
  return columns.find((column) => column.id === id);
}

export function columnTitle(
  column: ColumnMeta,
  locale: ContentLocale = "zh",
): string {
  return locale === "en" && column.titleEn ? column.titleEn : column.title;
}

export function columnDescription(
  column: ColumnMeta,
  locale: ContentLocale = "zh",
): string {
  return locale === "en" && column.descriptionEn
    ? column.descriptionEn
    : column.description;
}
