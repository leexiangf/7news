import { BrowseShell } from "@/components/BrowseShell";

type PageWithSidebarProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
};

/**
 * Browse pages: fixed left channel nav + right page content.
 * Optional `sidebar` renders as a secondary panel inside the right column.
 */
export function PageWithSidebar({ children, sidebar }: PageWithSidebarProps) {
  return <BrowseShell aside={sidebar}>{children}</BrowseShell>;
}
