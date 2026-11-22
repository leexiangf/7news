import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import { SearchDialog } from "@/components/SearchDialog";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteUtilityNav } from "@/components/SiteUtilityNav";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="site-header sticky top-0 z-40 bg-paper/95 backdrop-blur-sm">
        <div className="site-container flex items-center justify-between gap-4 py-3">
          <SiteUtilityNav />
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <SearchDialog />
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
