"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ContentLocale } from "@/lib/types";
import { localeFromPathname } from "@/lib/ui-locale";

const STORAGE_KEY = "7news-locale";

export function useUiLocale(): ContentLocale {
  const pathname = usePathname() || "/";
  const [locale, setLocale] = useState<ContentLocale>(() =>
    localeFromPathname(pathname),
  );

  useEffect(() => {
    const fromPath = localeFromPathname(pathname);
    setLocale(fromPath);
    document.documentElement.lang = fromPath === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.locale = fromPath;
    window.localStorage.setItem(STORAGE_KEY, fromPath);
  }, [pathname]);

  useEffect(() => {
    function onLocale(event: Event) {
      const detail = (event as CustomEvent<ContentLocale>).detail;
      if (detail === "zh" || detail === "en") {
        setLocale(detail);
        document.documentElement.lang = detail === "zh" ? "zh-CN" : "en";
        document.documentElement.dataset.locale = detail;
      }
    }
    window.addEventListener("7news:locale", onLocale as EventListener);
    return () =>
      window.removeEventListener("7news:locale", onLocale as EventListener);
  }, []);

  return locale;
}
