import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { FaqSection } from "@/components/FaqSection";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { columns, getColumn } from "@/lib/columns";
import { getAllColumnArticles, getColumnArticle } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return columns.flatMap((column) =>
    getAllColumnArticles(column.id).map((article) => ({
      columnId: column.id,
      slug: article.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ columnId: string; slug: string }>;
}) {
  const { columnId, slug } = await params;
  const article = getColumnArticle(columnId, slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.description,
    path: article.href,
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
  });
}

export default async function ColumnArticlePage({
  params,
}: {
  params: Promise<{ columnId: string; slug: string }>;
}) {
  const { columnId, slug } = await params;
  const column = getColumn(columnId);
  const article = getColumnArticle(columnId, slug);
  if (!column || !article) notFound();

  const siblings = getAllColumnArticles(columnId);
  const index = siblings.findIndex((item) => item.slug === slug);
  const prev = index > 0 ? siblings[index - 1] : undefined;
  const next = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : undefined;

  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[
          { href: "/", label: "首页" },
          { href: "/columns/", label: "专栏" },
          { href: `/columns/${column.id}/`, label: column.title },
          { label: article.title },
        ]}
      />
      <p className="meta-line mb-3">
        专栏进度 {index + 1} / {siblings.length}
        {next ? (
          <>
            {"  |  下一章："}
            <Link href={next.href} className="text-signal no-underline hover:underline">
              {next.title}
            </Link>
          </>
        ) : null}
      </p>
      <h1 className="lead-title !text-[clamp(1.75rem,3.5vw,2.5rem)]">{article.title}</h1>
      <p className="meta-line mt-4">
        {article.date}  |  {article.readingMinutes} 分钟
      </p>
      <hr className="rule my-8" />
      <MarkdownBody content={article.content} />
      <FaqSection faqs={article.faqs} />
      <div className="mt-10 flex flex-wrap gap-3">
        {prev ? (
          <Link href={prev.href} className="btn btn-ghost">
            上一章
          </Link>
        ) : null}
        {next ? (
          <Link href={next.href} className="btn btn-primary">
            下一章
          </Link>
        ) : null}
        <CopyLinkButton />
      </div>
    </PageWithSidebar>
  );
}
