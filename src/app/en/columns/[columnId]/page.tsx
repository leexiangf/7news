import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import {
  columnDescription,
  columns,
  columnTitle,
  getColumn,
} from "@/lib/columns";
import { getAllColumnArticles } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return columns.map((column) => ({ columnId: column.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ columnId: string }>;
}) {
  const { columnId } = await params;
  const column = getColumn(columnId);
  if (!column) return {};
  return createMetadata({
    title: columnTitle(column, "en"),
    description: columnDescription(column, "en"),
    path: `/en/columns/${column.id}/`,
  });
}

export default async function ColumnDetailEnglishPage({
  params,
}: {
  params: Promise<{ columnId: string }>;
}) {
  const { columnId } = await params;
  const column = getColumn(columnId);
  if (!column) notFound();

  const articles = getAllColumnArticles(column.id);

  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[
          { href: "/en/", label: "Home" },
          { href: "/en/columns/", label: "Columns" },
          { label: columnTitle(column, "en") },
        ]}
      />
      <h1 className="section-title text-3xl">{columnTitle(column, "en")}</h1>
      <p className="mt-3 max-w-2xl text-mute">
        {columnDescription(column, "en")}
      </p>
      {column.id === "llm-cost-desk" ? (
        <p className="mt-2 text-sm text-mute">
          Complements the channels: timely price moves in{" "}
          <Link
            href="/en/llm/pricing/"
            className="no-underline hover:text-signal"
          >
            Models · Pricing
          </Link>
          ; engineering trade-offs in{" "}
          <Link href="/en/eng/cost/" className="no-underline hover:text-signal">
            Engineering · Cost
          </Link>
          .
        </p>
      ) : null}
      <p className="meta-line mt-4">
        {column.sequential ? "Best read in order" : "Browse in any order"}
        {`  |  ${articles.length} articles`}
      </p>

      {articles.length === 0 ? (
        <p className="mt-8 text-mute">No essays in this column yet.</p>
      ) : (
        <ol className="mt-8">
          {articles.map((article, index) => (
            <li key={article.href} className="border-b border-rule">
              <Link href={article.href} className="list-row">
                <span className="list-row-title">
                  {column.sequential ? `${index + 1}. ` : ""}
                  {article.title}
                </span>
                <span className="meta-line mt-2 block">
                  {article.date}  |  {article.readingMinutes} min
                </span>
                <span className="mt-2 block text-sm text-mute">
                  {article.description}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </PageWithSidebar>
  );
}
