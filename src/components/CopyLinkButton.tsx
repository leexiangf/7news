"use client";

import { useState } from "react";
import { useUiLocale } from "@/hooks/useUiLocale";
import { uiCopy } from "@/lib/ui-locale";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  const locale = useUiLocale();
  const copy = uiCopy[locale];

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="btn btn-ghost !min-h-9 text-sm" onClick={onCopy}>
      {copied ? copy.copied : copy.copyLink}
    </button>
  );
}
