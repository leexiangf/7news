"use client";

import Link from "next/link";
import { useState } from "react";
import { MoreDividerButton } from "@/components/MoreDivider";
import { LIST_PAGE_SIZE } from "@/lib/list-pagination";
import type { ArticleMeta, ContentLocale } from "@/lib/types";
import {
  getSubcategory,
  subcategoryLabel,
  topicLabel,
} from "@/lib/taxonomy";
import { uiCopy } from "@/lib/ui-locale";

type FlashListProps = {
  articles: ArticleMeta[];
  locale?: ContentLocale;
};

export function FlashList({ articles, locale = "zh" }: FlashListProps) {
  const [visible, setVisible] = useState(LIST_PAGE_SIZE);

  if (articles.length === 0) {
    return <p className="text-mute">{uiCopy[locale].flashEmpty}</p>;
  }

  const shown = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  return (
    <div>
      {shown.map((item) => {
        const loc = getSubcategory(item.subcategory);
        if (locale === "en") {
          return (
            <Link key={item.href} href={item.href} className="list-row">
              <span className="list-row-title text-base">{item.title}</span>
              <span className="meta-line mt-1 block">
                {item.date}
                {loc
                  ? `  |  ${topicLabel(loc.topic, "en")} / ${subcategoryLabel(loc.subcategory, "en")}`
                  : ""}
                {`  |  ${item.readingMinutes} min`}
              </span>
            </Link>
          );
        }
        return (
          <Link key={item.href} href={item.href} className="list-row">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
              <time className="meta-line shrink-0 tabular-nums">{item.date}</time>
              <span className="min-w-0">
                <span className="list-row-title text-base">{item.title}</span>
                <span className="meta-line mt-1 block">
                  {loc
                    ? `${loc.topic.label} / ${loc.subcategory.label}`
                    : item.category}
                  {`  |  ${item.readingMinutes} 分钟`}
                </span>
              </span>
            </div>
          </Link>
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
