"use client";

import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { useUiLocale } from "@/hooks/useUiLocale";
import { localizedHref, uiCopy } from "@/lib/ui-locale";

export function SiteFooter() {
  const locale = useUiLocale();
  const copy = uiCopy[locale];
  const homeHref = localizedHref("/", locale);

  return (
    <footer className="site-footer border-t border-rule mt-10">
      <div className="site-container flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href={homeHref}
            className="shrink-0 no-underline hover:opacity-90"
            aria-label={siteConfig.name}
          >
            <Image
              src="/brand/7news-logo.jpg"
              alt={siteConfig.name}
              width={120}
              height={36}
              className="brand-logo-img brand-logo-img--footer"
            />
          </Link>
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mute">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(item.href, locale)}
                className="no-underline hover:text-signal"
              >
                {locale === "en" ? item.labelEn : item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mute">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span aria-hidden>·</span>
          <span>{copy.footerTech}</span>
        </div>
      </div>
    </footer>
  );
}
