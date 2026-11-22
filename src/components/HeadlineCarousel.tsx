"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ArticleMeta, ContentLocale } from "@/lib/types";

export type HeadlineSlide = ArticleMeta & {
  locationLabel?: string;
};

type HeadlineCarouselProps = {
  articles: HeadlineSlide[];
  locale: ContentLocale;
  emptyTitle: string;
  emptyHint: string;
  readLabel: string;
  eyebrow: string;
};

const SWIPE_THRESHOLD = 48;
const TRANSITION_MS = 420;

export function HeadlineCarousel({
  articles,
  locale,
  emptyTitle,
  emptyHint,
  readLabel,
  eyebrow,
}: HeadlineCarouselProps) {
  const multi = articles.length > 1;
  const n = articles.length;
  // Extended: [last, ...items, first]; real slides at index 1..n
  const [pos, setPos] = useState(1);
  const [dragPx, setDragPx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const dragPxRef = useRef(0);
  const prevLabel = locale === "en" ? "Previous" : "上一条";
  const nextLabel = locale === "en" ? "Next" : "下一条";
  const flashLabel = locale === "en" ? "Flash list" : "看今日快讯";

  const trackSlides = multi
    ? [articles[n - 1], ...articles, articles[0]]
    : articles;

  const activeIndex = multi ? (((pos - 1) % n) + n) % n : 0;

  useEffect(() => {
    setPos(multi ? 1 : 0);
    setDragPx(0);
    setAnimating(false);
  }, [articles, multi]);

  useEffect(() => {
    dragPxRef.current = dragPx;
  }, [dragPx]);

  const goDelta = useCallback(
    (delta: -1 | 1) => {
      if (!multi) return;
      setDragPx(0);
      setAnimating(true);
      setPos((current) => current + delta);
    },
    [multi],
  );

  const goToReal = useCallback(
    (realIndex: number) => {
      if (!multi) return;
      setDragPx(0);
      setAnimating(true);
      setPos(realIndex + 1);
    },
    [multi],
  );

  const onTrackTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>,
  ) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform" || !multi) return;
    if (pos === 0) {
      setAnimating(false);
      setPos(n);
      return;
    }
    if (pos === n + 1) {
      setAnimating(false);
      setPos(1);
    }
  };

  useEffect(() => {
    if (!multi) return;
    const id = window.setInterval(() => {
      if (pointerIdRef.current != null) return;
      goDelta(1);
    }, 7000);
    return () => window.clearInterval(id);
  }, [multi, goDelta]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!multi || event.button !== 0) return;
    // Don't start a drag from interactive controls
    const target = event.target as HTMLElement;
    if (target.closest("a, button")) return;

    pointerIdRef.current = event.pointerId;
    startXRef.current = event.clientX;
    setAnimating(false);
    setDragPx(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;
    const width = viewportRef.current?.clientWidth || 1;
    const raw = event.clientX - startXRef.current;
    const max = width * 0.45;
    setDragPx(Math.max(-max, Math.min(max, raw)));
  };

  const endPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;
    const offset = dragPxRef.current;
    pointerIdRef.current = null;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* already released */
    }

    if (offset <= -SWIPE_THRESHOLD) {
      goDelta(1);
      return;
    }
    if (offset >= SWIPE_THRESHOLD) {
      goDelta(-1);
      return;
    }
    setAnimating(true);
    setDragPx(0);
  };

  if (articles.length === 0) {
    return (
      <div className="max-w-2xl">
        <p className="meta-line mb-4">{eyebrow}</p>
        <h1 className="lead-title">{emptyTitle}</h1>
        <p className="mt-4 text-mute">{emptyHint}</p>
      </div>
    );
  }

  // % is relative to the track box; track is width:100% of viewport, so -100% = one slide.
  const trackStyle = {
    transform: `translate3d(calc(${-pos * 100}% + ${dragPx}px), 0, 0)`,
    transition: animating
      ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
      : "none",
  };

  return (
    <div className="max-w-4xl">
      <p className="meta-line mb-4">{eyebrow}</p>

      <div className="headline-stage">
        <div
          ref={viewportRef}
          className="headline-viewport"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
        >
          <div
            className="headline-track"
            style={trackStyle}
            onTransitionEnd={onTrackTransitionEnd}
          >
            {trackSlides.map((article, slideIndex) => (
              <article
                key={`${article.slug}-${slideIndex}`}
                className="headline-slide"
              >
                <div className="headline-card">
                  <h1 className="lead-title">
                    <Link
                      href={article.href}
                      className="no-underline hover:text-signal"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                    >
                      {article.title}
                    </Link>
                  </h1>
                  <p className="headline-card-desc">{article.description}</p>
                  <div className="headline-card-actions">
                    <Link
                      href={article.href}
                      className="btn btn-primary"
                      draggable={false}
                    >
                      {readLabel}
                    </Link>
                    <a href="#flash" className="btn btn-ghost">
                      {flashLabel}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {multi ? (
          <>
            <button
              type="button"
              className="headline-stage-arrow headline-stage-arrow--prev"
              aria-label={prevLabel}
              onClick={() => goDelta(-1)}
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              className="headline-stage-arrow headline-stage-arrow--next"
              aria-label={nextLabel}
              onClick={() => goDelta(1)}
            >
              <Chevron direction="right" />
            </button>
            <div
              className="headline-stage-dots"
              role="tablist"
              aria-label={eyebrow}
            >
              {articles.map((item, i) => (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`${i + 1} / ${articles.length}`}
                  className={`headline-stage-dot ${
                    i === activeIndex ? "is-active" : ""
                  }`}
                  onClick={() => goToReal(i)}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  const d =
    direction === "left"
      ? "M14.5 4.5L8.5 10.5L14.5 16.5"
      : "M9.5 4.5L15.5 10.5L9.5 16.5";
  return (
    <svg
      width="18"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
