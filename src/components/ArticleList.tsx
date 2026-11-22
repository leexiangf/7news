"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { MoreDividerButton } from "@/components/MoreDivider";
import { PublisherLogo } from "@/components/PublisherLogo";
import { LIST_PAGE_SIZE } from "@/lib/list-pagination";
import type { ArticleMeta, ContentLocale } from "@/lib/types";
import {
  getPublisher,
  publisherHref,
  publisherName,
} from "@/lib/publishers";
import {
  getSubcategory,
  getTopic,
  subcategoryLabel,
  topicAccent,
  topicLabel,
} from "@/lib/taxonomy";
import { uiCopy } from "@/lib/ui-locale";

type ArticleListProps = {
  articles: ArticleMeta[];
  showCategory?: boolean;
  locale?: ContentLocale;
};

export function ArticleList({
  articles,
  showCategory = false,
  locale = "zh",
}: ArticleListProps) {
  const [visible, setVisible] = useState(LIST_PAGE_SIZE);

  if (articles.length === 0) {
    return (
      <p className="py-8 text-mute">
        {locale === "en"
          ? "No articles here yet. Check back soon, or use search for what is already live."
          : "这里还没有文章。稍后会有新内容，也可先用搜索查看全站已有条目。"}
      </p>
    );
  }

  const shown = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  return (
    <div>
      {shown.map((article) => {
        const topic = getTopic(article.category);
        const sub = getSubcategory(article.subcategory);
        const articleLocale = article.locale || locale;
        const publisher = getPublisher(article.publisher);
        const accent = topicAccent(topic);
        return (
          <article key={article.href} className="list-row">
            <Link href={article.href} className="no-underline">
              <span className="list-row-title">{article.title}</span>
            </Link>
            <span className="meta-line mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>{article.date}</span>
              {publisher ? (
                <Link
                  href={publisherHref(publisher.id, articleLocale)}
                  className="inline-flex items-center gap-1.5 no-underline hover:opacity-80"
                >
                  <PublisherLogo publisher={publisher} />
                  {publisherName(publisher, articleLocale)}
                </Link>
              ) : null}
              {showCategory && topic ? (
                <span
                  className="topic-chip topic-chip--topic"
                  style={{ "--chip-accent": accent } as CSSProperties}
                >
                  {topicLabel(topic, articleLocale)}
                </span>
              ) : null}
              {sub ? (
                <span
                  className="topic-chip topic-chip--sub"
                  style={{ "--chip-accent": accent } as CSSProperties}
                >
                  {subcategoryLabel(sub.subcategory, articleLocale)}
                </span>
              ) : null}
              <span>
                {article.readingMinutes} {uiCopy[articleLocale].minutes}
              </span>
            </span>
            <Link href={article.href} className="no-underline">
              <span className="mt-2 block text-sm text-mute line-clamp-2">
                {article.description}
              </span>
            </Link>
          </article>
        );
      })}
      {hasMore ? (
        <MoreDividerButton
          label={uiCopy[locale].loadMore}
          onClick={() =>
            setVisible((n) => Math.min(n + LIST_PAGE_SIZE, articles.length))
          }
        />
      ) : null}
    </div>
  );
}
