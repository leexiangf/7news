"use client";

import { useUiLocale } from "@/hooks/useUiLocale";
import { uiCopy } from "@/lib/ui-locale";

type SourceLinksProps = {
  urls: string[];
};

export function SourceLinks({ urls }: SourceLinksProps) {
  const locale = useUiLocale();
  if (!urls.length) return null;

  return (
    <section className="mt-12">
      <h2 className="section-title">{uiCopy[locale].sources}</h2>
      <ul className="mt-3 space-y-2">
        {urls.map((url) => (
          <li key={url} className="border-b border-rule py-3">
            <a
              href={url}
              className="break-all text-signal no-underline hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              {url}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
