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
    title: columnTitle(column, "zh"),
    description: columnDescription(column, "zh"),
    path: `/columns/${column.id}/`,
  });
}

export default async function ColumnDetailPage({
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
          { href: "/", label: "首页" },
          { href: "/columns/", label: "专栏" },
          { label: columnTitle(column, "zh") },
        ]}
      />
      <h1 className="section-title text-3xl">{columnTitle(column, "zh")}</h1>
      <p className="mt-3 max-w-2xl text-mute">
        {columnDescription(column, "zh")}
      </p>
      {column.id === "llm-cost-desk" ? (
        <p className="mt-2 text-sm text-mute">
          与频道互补：时效价目变更看{" "}
          <Link
            href="/llm/pricing/"
            className="no-underline hover:text-signal"
          >
            大模型 · 价格与额度
          </Link>
          ；工程取舍看{" "}
          <Link href="/eng/cost/" className="no-underline hover:text-signal">
            工程实践 · 成本与效能
          </Link>
          。
        </p>
      ) : null}
      <p className="meta-line mt-4">
        {column.sequential ? "建议按顺序阅读" : "可按需挑读"}  |  {articles.length} 篇
      </p>

      <ol className="mt-8">
        {articles.map((article, index) => (
          <li key={article.href} className="border-b border-rule">
            <Link href={article.href} className="list-row">
              <span className="list-row-title">
                {column.sequential ? `${index + 1}. ` : ""}
                {article.title}
              </span>
              <span className="meta-line mt-2 block">
                {article.date}  |  {article.readingMinutes} 分钟
              </span>
              <span className="mt-2 block text-sm text-mute">{article.description}</span>
            </Link>
          </li>
        ))}
      </ol>
    </PageWithSidebar>
  );
}
