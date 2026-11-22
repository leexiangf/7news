"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
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
  topics,
} from "@/lib/taxonomy";
import { uiCopy } from "@/lib/ui-locale";

type NewsStreamProps = {
  articles: ArticleMeta[];
  locale?: ContentLocale;
};

function weekdayLabel(date: string, locale: ContentLocale): string {
  const d = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(locale === "en" ? "en-US" : "zh-CN", {
    weekday: "short",
    timeZone: "UTC",
  });
}

function formatDayHeading(date: string, locale: ContentLocale): string {
  const d = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return date;
  if (locale === "en") {
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
  }
  const m = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  return `${m}月${day}日`;
}

export function NewsStream({ articles, locale = "zh" }: NewsStreamProps) {
  const [filter, setFilter] = useState<string>("all");
  const [visible, setVisible] = useState(LIST_PAGE_SIZE);

  const filtered = useMemo(() => {
    if (filter === "all") return articles;
    return articles.filter((item) => item.category === filter);
  }, [articles, filter]);

  useEffect(() => {
    setVisible(LIST_PAGE_SIZE);
  }, [filter]);

  const hasMore = visible < filtered.length;

  const groups = useMemo(() => {
    const map = new Map<string, ArticleMeta[]>();
    for (const item of filtered.slice(0, visible)) {
      const list = map.get(item.date) ?? [];
      list.push(item);
      map.set(item.date, list);
    }
    return [...map.entries()];
  }, [filtered, visible]);

  const filters = [
    {
      id: "all",
      label: locale === "en" ? "All" : "全部",
      accent: undefined as string | undefined,
    },
    ...topics.map((topic) => ({
      id: topic.id,
      label: topicLabel(topic, locale),
      accent: topicAccent(topic),
    })),
  ];

  return (
    <div className="news-stream">
      <div
        className="news-stream-filters"
        role="tablist"
        aria-label={locale === "en" ? "Filter by channel" : "按频道筛选"}
      >
        {filters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={`news-stream-filter ${active ? "is-active" : ""} ${item.accent ? "has-accent" : ""}`}
              style={
                item.accent
                  ? ({ "--filter-accent": item.accent } as CSSProperties)
                  : undefined
              }
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {groups.length === 0 ? (
        <p className="mt-8 text-mute">
          {locale === "en"
            ? "No stories in this filter yet."
            : "该筛选下暂无动态。"}
        </p>
      ) : (
        <div className="mt-6">
          <div className="space-y-10">
            {groups.map(([date, items]) => (
              <section key={date} aria-labelledby={`day-${date}`}>
                <h2 id={`day-${date}`} className="news-stream-day">
                  <span>
                    {formatDayHeading(date, locale)}
                    {weekdayLabel(date, locale)
                      ? ` ${weekdayLabel(date, locale)}`
                      : ""}
                  </span>
                  <span className="news-stream-day-count">
                    {locale === "en"
                      ? `${items.length} ${items.length === 1 ? "story" : "stories"}`
                      : `${items.length} 篇`}
                  </span>
                </h2>
                <ol className="news-stream-list">
                  {items.map((article) => {
                    const topic = getTopic(article.category);
                    const sub = getSubcategory(article.subcategory);
                    const publisher = getPublisher(article.publisher);
                    const accent = topicAccent(topic);
                    return (
                      <li
                        key={article.href}
                        className="news-stream-item"
                        style={{ "--item-accent": accent } as CSSProperties}
                      >
                        <span className="news-stream-dot" aria-hidden />
                        <div className="min-w-0 flex-1">
                          <div className="news-stream-meta">
                            {publisher ? (
                              <Link
                                href={publisherHref(publisher.id, locale)}
                                className="news-stream-publisher no-underline hover:opacity-80"
                              >
                                <PublisherLogo publisher={publisher} />
                                <span>{publisherName(publisher, locale)}</span>
                              </Link>
                            ) : null}
                            {sub ? (
                              <span
                                className="topic-chip topic-chip--sub"
                                style={
                                  { "--chip-accent": accent } as CSSProperties
                                }
                              >
                                {subcategoryLabel(sub.subcategory, locale)}
                              </span>
                            ) : null}
                            {topic ? (
                              <span
                                className="topic-chip topic-chip--topic"
                                style={
                                  { "--chip-accent": accent } as CSSProperties
                                }
                              >
                                {topicLabel(topic, locale)}
                              </span>
                            ) : null}
                          </div>
                          <Link
                            href={article.href}
                            className="news-stream-title no-underline"
                          >
                            {article.title}
                          </Link>
                          <p className="news-stream-desc">
                            {article.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
          </div>
          {hasMore ? (
            <MoreDividerButton
              label={uiCopy[locale].loadMore}
              onClick={() =>
                setVisible((n) =>
                  Math.min(n + LIST_PAGE_SIZE, filtered.length),
                )
              }
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
