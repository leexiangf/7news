"use client";

import { HomeSideNav } from "@/components/HomeSideNav";
import { useUiLocale } from "@/hooks/useUiLocale";

type BrowseShellProps = {
  children: React.ReactNode;
  /** Optional secondary panel rendered inside the right column. */
  aside?: React.ReactNode;
};

export function BrowseShell({ children, aside }: BrowseShellProps) {
  const locale = useUiLocale();

  return (
    <div className="site-container py-6 md:py-8">
      <div className="home-desk">
        <aside
          className="home-desk-rail"
          aria-label={locale === "en" ? "Browse" : "浏览"}
        >
          <div className="home-desk-rail-pin">
            <HomeSideNav />
          </div>
        </aside>
        <div className="home-desk-main min-w-0">
          {aside ? (
            <div className="browse-main-split">
              <div className="min-w-0">{children}</div>
              <aside className="browse-main-aside text-sm">{aside}</aside>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
