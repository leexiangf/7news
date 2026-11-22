import { BrowseShell } from "@/components/BrowseShell";
import { NewsStream } from "@/components/NewsStream";
import type { ArticleMeta, ContentLocale } from "@/lib/types";

type HomeDeskProps = {
  articles: ArticleMeta[];
  locale?: ContentLocale;
};

export function HomeDesk({ articles, locale = "zh" }: HomeDeskProps) {
  return (
    <BrowseShell>
      <h1 className="sr-only">
        {locale === "en" ? "Latest" : "最新动态"}
      </h1>
      <NewsStream articles={articles} locale={locale} />
    </BrowseShell>
  );
}
