"use client";

import { useUiLocale } from "@/hooks/useUiLocale";
import type { FaqItem } from "@/lib/types";
import { uiCopy } from "@/lib/ui-locale";

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const locale = useUiLocale();
  if (!faqs.length) return null;

  return (
    <section className="mt-12">
      <h2 className="section-title">{uiCopy[locale].faq}</h2>
      <div className="mt-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="border-b border-rule py-4 group"
          >
            <summary className="cursor-pointer list-none font-semibold marker:content-none">
              {faq.question}
            </summary>
            <p className="mt-3 text-mute">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
