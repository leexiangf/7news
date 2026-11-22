import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { columnDescription, columns, columnTitle } from "@/lib/columns";
import { getAllColumnArticles } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Columns",
  description:
    "Structured reading paths for deeper study—not a stream of fragments.",
  path: "/en/columns/",
});

export default function ColumnsEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/en/", label: "Home" }, { label: "Columns" }]}
      />
      <h1 className="section-title text-3xl">Columns</h1>
      <p className="mt-3 max-w-2xl text-mute">
        Columns are structured paths: start with the goal, then move chapter by
        chapter. Sequential series work best in order; collections can be read as
        needed.
      </p>
      <div className="mt-8">
        {columns.map((column) => {
          const count = getAllColumnArticles(column.id).length;
          return (
            <Link
              key={column.id}
              href={`/en/columns/${column.id}/`}
              className="list-row"
            >
              <span className="list-row-title">
                {columnTitle(column, "en")}
              </span>
              <span className="meta-line mt-2 block">
                {column.sequential ? "Sequential" : "Collection"}
                {`  |  ${count} articles`}
              </span>
              <span className="mt-2 block text-sm text-mute">
                {columnDescription(column, "en")}
              </span>
            </Link>
          );
        })}
      </div>
    </PageWithSidebar>
  );
}
