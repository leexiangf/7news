"use client";

import { useEffect, useState } from "react";
import { useUiLocale } from "@/hooks/useUiLocale";
import { uiCopy } from "@/lib/ui-locale";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export function ArticleToc({ headings }: { headings: Heading[] }) {
  const locale = useUiLocale();
  const copy = uiCopy[locale];
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    if (!headings.length) return;

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-label={copy.toc}>
      <h2 className="section-title text-lg">{copy.toc}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {headings.map((heading) => {
          const active = heading.id === activeId;
          return (
            <li
              key={heading.id}
              className={heading.level === 3 ? "pl-3" : undefined}
            >
              <a
                href={`#${heading.id}`}
                className={`no-underline ${
                  active ? "toc-active" : "text-mute hover:text-signal"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
