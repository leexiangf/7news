"use client";

import Link from "next/link";
import { useUiLocale } from "@/hooks/useUiLocale";
import { uiCopy } from "@/lib/ui-locale";

export type Crumb = {
  href?: string;
  label: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const locale = useUiLocale();

  return (
    <nav aria-label={uiCopy[locale].breadcrumbs} className="meta-line mb-4">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {index > 0 ? <span className="mx-2 text-rule">/</span> : null}
          {item.href ? (
            <Link href={item.href} className="no-underline hover:text-signal">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
