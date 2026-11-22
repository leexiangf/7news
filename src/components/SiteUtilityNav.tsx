"use client";

import Image from "next/image";
import Link from "next/link";
import { utilityNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { useUiLocale } from "@/hooks/useUiLocale";
import { localizedHref } from "@/lib/ui-locale";

export function SiteUtilityNav() {
  const locale = useUiLocale();
  const homeHref = localizedHref("/", locale);

  return (
    <div className="flex min-w-0 items-center gap-4">
      <Link
        href={homeHref}
        className="brand-logo no-underline hover:opacity-90"
        aria-label={siteConfig.name}
      >
        <Image
          src="/brand/7news-logo.jpg"
          alt={siteConfig.name}
          width={220}
          height={72}
          className="brand-logo-img"
          priority
        />
      </Link>
      <nav className="hidden md:flex items-center gap-4 text-sm text-mute">
        {utilityNav.map((item) => (
          <Link
            key={item.href}
            href={localizedHref(item.href, locale)}
            className="min-h-11 inline-flex items-center no-underline hover:text-signal"
          >
            {locale === "en" ? item.labelEn : item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
