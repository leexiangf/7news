"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { channelExtraNav, footerNav, utilityNav } from "@/config/nav";
import { useUiLocale } from "@/hooks/useUiLocale";
import { topicLabel, topics } from "@/lib/taxonomy";
import { localizedHref, uiCopy } from "@/lib/ui-locale";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const locale = useUiLocale();
  const copy = uiCopy[locale];

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // footerNav ∩ utilityNav only (channelExtraNav never overlaps footer hrefs)
  const moreLinks = footerNav.filter(
    (item) => !utilityNav.some((u) => u.href === item.href),
  );

  return (
    <>
      <button
        type="button"
        className="btn btn-ghost !min-h-11 !min-w-11 !px-3 md:hidden text-sm"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
      >
        {copy.menu}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-ink/35 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label={copy.siteMenu}
            className="ml-auto flex h-full w-[min(100%,20rem)] flex-col bg-panel shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-rule px-4 py-3">
              <span className="brand-mark text-lg">{copy.menu}</span>
              <button
                type="button"
                className="btn btn-ghost !min-h-11 !px-3 text-sm"
                onClick={() => setOpen(false)}
              >
                {copy.close}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <p className="text-xs font-semibold text-mute">{copy.channels}</p>
              <ul className="mt-2 space-y-1">
                {topics.map((topic) => (
                  <li key={topic.id}>
                    <Link
                      href={localizedHref(`/${topic.id}/`, locale)}
                      className="block min-h-11 py-2.5 no-underline hover:text-signal"
                      onClick={() => setOpen(false)}
                    >
                      {topicLabel(topic, locale)}
                    </Link>
                  </li>
                ))}
                {channelExtraNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localizedHref(item.href, locale)}
                      className="block min-h-11 py-2.5 no-underline hover:text-signal"
                      onClick={() => setOpen(false)}
                    >
                      {locale === "en" ? item.labelEn : item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <hr className="rule my-4" />
              <p className="text-xs font-semibold text-mute">{copy.more}</p>
              <ul className="mt-2 space-y-1">
                {[...utilityNav, ...moreLinks].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localizedHref(item.href, locale)}
                      className="block min-h-11 py-2.5 no-underline hover:text-signal"
                      onClick={() => setOpen(false)}
                    >
                      {locale === "en" ? item.labelEn : item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
