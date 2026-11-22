import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { createMetadata } from "@/lib/seo";
import { toolDescription, tools, toolTitle } from "@/lib/tools";

export const metadata = createMetadata({
  title: "Tools",
  description:
    "In-browser utilities for estimation and decisions—no account required.",
  path: "/en/tools/",
});

export default function ToolsEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/en/", label: "Home" }, { label: "Tools" }]}
      />
      <h1 className="section-title text-3xl">Tools</h1>
      <p className="mt-3 max-w-2xl text-mute">
        Each tool states its purpose and typical uses, then opens an interactive
        panel. Inputs stay in your browser by default.
      </p>
      <div className="mt-8">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/en/tools/${tool.slug}/`}
            className="list-row"
          >
            <span className="list-row-title">{toolTitle(tool, "en")}</span>
            <span className="mt-2 block text-sm text-mute">
              {toolDescription(tool, "en")}
            </span>
          </Link>
        ))}
      </div>
    </PageWithSidebar>
  );
}
