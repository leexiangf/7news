"use client";

import Link from "next/link";
import { HeadingMark } from "@/components/HeadingMark";
import type { ArticleMeta } from "@/lib/types";

type FlashTickerProps = {
  articles: ArticleMeta[];
  allHref: string;
  title: string;
  allLabel: string;
  emptyLabel: string;
  moreLabel?: string;
  totalCount?: number;
};

export function FlashTicker({
  articles,
  allHref,
  title,
  allLabel,
  emptyLabel,
  moreLabel,
  totalCount,
}: FlashTickerProps) {
  const loop = articles.length > 3;
  const track = loop ? [...articles, ...articles] : articles;

  return (
    <section id="flash" className="flash-rail scroll-mt-28">
      <div className="flash-rail-head">
        <h2 className="section-title heading-with-mark text-lg !mt-0">
          <HeadingMark variant="rail" />
          {title}
        </h2>
        <Link href={allHref} className="text-sm text-signal no-underline">
          {allLabel}
        </Link>
      </div>

      {articles.length === 0 ? (
        <p className="py-4 text-mute">{emptyLabel}</p>
      ) : (
        <div className="flash-ticker group">
          <div
            className={
              loop
                ? "flash-ticker-track flash-ticker-track--animate"
                : "flash-ticker-track"
            }
          >
            {track.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                className="flash-ticker-item"
                tabIndex={loop && index >= articles.length ? -1 : undefined}
                aria-hidden={loop && index >= articles.length ? true : undefined}
              >
                <time className="meta-line block tabular-nums">{item.date}</time>
                <span className="list-row-title mt-1 block text-[0.95rem] leading-snug">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {moreLabel && totalCount && totalCount > articles.length ? (
        <p className="flash-rail-foot">
          <Link href={allHref} className="text-sm text-signal no-underline">
            {moreLabel}
          </Link>
        </p>
      ) : null}
    </section>
  );
}
