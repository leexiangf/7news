"use client";

import { useUiLocale } from "@/hooks/useUiLocale";
import { uiCopy } from "@/lib/ui-locale";

export function OpenSearchButton({ className = "btn btn-ghost" }: { className?: string }) {
  const locale = useUiLocale();

  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("signaldesk:open-search"))}
    >
      {uiCopy[locale].search}
    </button>
  );
}
