"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { localeFromPathname, pathForLocaleSwitch } from "@/lib/ui-locale";

type Locale = (typeof siteConfig.locales)[number];

const STORAGE_KEY = "7news-locale";

function applyLocale(next: Locale) {
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.locale = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  window.dispatchEvent(new CustomEvent("7news:locale", { detail: next }));
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const pathname = usePathname() || "/";
  const router = useRouter();

  useEffect(() => {
    const fromPath = localeFromPathname(pathname);
    setLocale(fromPath);
    applyLocale(fromPath);
  }, [pathname]);

  const label = locale === "zh" ? "中文" : "EN";
  const nextHint = locale === "zh" ? "Switch to English" : "切换到中文";

  return (
    <button
      type="button"
      className={`lang-toggle ${className}`}
      aria-label={nextHint}
      title={nextHint}
      onClick={() => {
        const next: Locale = locale === "zh" ? "en" : "zh";
        setLocale(next);
        applyLocale(next);
        const target = pathForLocaleSwitch(pathname, next);
        if (target && target !== pathname) {
          router.push(target);
        }
      }}
    >
      <span className="lang-toggle-icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      </span>
      <span className="lang-toggle-label">{label}</span>
      <span className="lang-toggle-swap" aria-hidden="true">
        {locale === "zh" ? "EN" : "中"}
      </span>
    </button>
  );
}
