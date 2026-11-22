"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { channelExtraNav } from "@/config/nav";
import { useUiLocale } from "@/hooks/useUiLocale";
import { topicAccent, topicLabel, topics } from "@/lib/taxonomy";
import { localizedHref } from "@/lib/ui-locale";

export function HomeSideNav() {
  const pathname = usePathname() || "/";
  const locale = useUiLocale();
  const homeHref = localizedHref("/", locale);
  const topicsHref = localizedHref("/topics/", locale);

  function isActive(href: string) {
    const normalized = href.endsWith("/") ? href : `${href}/`;
    return (
      pathname === href ||
      pathname === normalized ||
      pathname.startsWith(normalized)
    );
  }

  const homeActive =
    pathname === "/" || pathname === "/en" || pathname === "/en/";

  return (
    <nav
      aria-label={locale === "en" ? "Browse" : "浏览"}
      className="home-side-nav"
    >
      <ul className="home-side-nav-list">
        <li>
          <Link
            href={homeHref}
            className={`home-side-nav-link ${homeActive ? "is-active" : ""}`}
            aria-current={homeActive ? "page" : undefined}
          >
            {locale === "en" ? "Latest" : "最新动态"}
          </Link>
        </li>
        <li>
          <Link
            href={topicsHref}
            className={`home-side-nav-link ${isActive(topicsHref) && !homeActive ? "is-active" : ""}`}
          >
            {locale === "en" ? "All channels" : "全部频道"}
          </Link>
        </li>
      </ul>

      <ul className="home-side-nav-list mt-4">
        {topics.map((topic) => {
          const href = localizedHref(`/${topic.id}/`, locale);
          const active = isActive(href) && !homeActive;
          const accent = topicAccent(topic);
          return (
            <li key={topic.id}>
              <Link
                href={href}
                className={`home-side-nav-link home-side-nav-link--topic ${active ? "is-active" : ""}`}
                style={{ "--nav-accent": accent } as CSSProperties}
                aria-current={active ? "page" : undefined}
              >
                <span
                  className="home-side-nav-swatch"
                  style={{ backgroundColor: accent }}
                  aria-hidden
                />
                {topicLabel(topic, locale)}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="home-side-nav-list mt-4">
        {channelExtraNav.map((item) => {
          const href = localizedHref(item.href, locale);
          const active = isActive(href);
          return (
            <li key={item.href}>
              <Link
                href={href}
                className={`home-side-nav-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {locale === "en" ? item.labelEn : item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
