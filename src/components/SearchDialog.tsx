"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useUiLocale } from "@/hooks/useUiLocale";
import { localizedHref, uiCopy } from "@/lib/ui-locale";

type SearchHit = {
  title: string;
  description: string;
  href: string;
  score: number;
};

type SearchDoc = {
  title: string;
  description: string;
  body: string;
  tags: string[];
  href: string;
};

function scoreDoc(doc: SearchDoc, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;
  const terms = q.split(/\s+/).filter(Boolean);
  let score = 0;
  for (const term of terms) {
    if (doc.title.toLowerCase().includes(term)) score += 8;
    if (doc.description.toLowerCase().includes(term)) score += 4;
    if (doc.tags.some((tag) => tag.toLowerCase().includes(term))) score += 3;
    if (doc.body.toLowerCase().includes(term)) score += 1;
  }
  return score;
}

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<SearchDoc[]>([]);
  const [loaded, setLoaded] = useState(false);
  const locale = useUiLocale();
  const copy = uiCopy[locale];

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("signaldesk:open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("signaldesk:open-search", onOpen);
    };
  }, []);

  // Google sitelinks SearchAction lands on /?q=… — open dialog with that query.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q")?.trim();
    if (!q) return;
    setQuery(q);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open || loaded) return;
    fetch("/data/search-index.json")
      .then((res) => res.json())
      .then((data: SearchDoc[]) => {
        setDocs(data);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [open, loaded]);

  const hits: SearchHit[] = useMemo(() => {
    if (!query.trim()) return [];
    return docs
      .map((doc) => ({
        title: doc.title,
        description: doc.description,
        href: doc.href,
        score: scoreDoc(doc, query),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [docs, query]);

  return (
    <>
      <button
        type="button"
        className="btn btn-ghost !min-h-9 !px-3 text-sm"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        {copy.search}
        <kbd className="hidden sm:inline text-mute text-xs font-normal">Ctrl K</kbd>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-ink/35 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={copy.search}
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto max-w-2xl rounded-lg border border-rule bg-panel shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-rule p-3">
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.searchPlaceholder}
                className="w-full bg-transparent text-base outline-none placeholder:text-mute"
              />
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {!query.trim() ? (
                <p className="p-4 text-sm text-mute">
                  {locale === "en"
                    ? "Type a keyword to search."
                    : "输入关键词开始搜索。"}
                </p>
              ) : hits.length === 0 ? (
                <p className="p-4 text-sm text-mute">{copy.noResults}</p>
              ) : (
                <ul>
                  {hits.map((hit) => (
                    <li key={hit.href} className="border-b border-rule last:border-b-0">
                      <Link
                        href={
                          hit.href.startsWith("/en/") || locale === "zh"
                            ? hit.href
                            : localizedHref(hit.href, locale)
                        }
                        className="block px-4 py-3 no-underline hover:bg-paper"
                        onClick={() => setOpen(false)}
                      >
                        <span className="list-row-title text-base">{hit.title}</span>
                        <span className="mt-1 block text-sm text-mute line-clamp-2">
                          {hit.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
