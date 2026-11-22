export type FaqItem = {
  question: string;
  answer: string;
};

export type SourceLevel = "S" | "A" | "B" | "C";

export type ContentLocale = "zh" | "en";

export type ArticleMeta = {
  title: string;
  slug: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  subcategory: string;
  tags: string[];
  faqs: FaqItem[];
  draft: boolean;
  href: string;
  readingMinutes: number;
  sourceLevel?: SourceLevel;
  sourceUrls: string[];
  /** Vendor / org id from src/config/publishers.json */
  publisher?: string;
  author?: string;
  locale: ContentLocale;
  /** Site-relative path (/images/...) or absolute URL */
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
};

export type Article = ArticleMeta & {
  content: string;
  headings: { id: string; text: string; level: number }[];
};

export type ColumnMeta = {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  sequential: boolean;
};

export type ColumnArticleMeta = ArticleMeta & {
  columnId: string;
  order?: number;
};

export type ToolMeta = {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  purpose: string;
  purposeEn?: string;
  scenarios: string[];
  scenariosEn?: string[];
  href: string;
};
