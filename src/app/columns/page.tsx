import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { columnDescription, columns, columnTitle } from "@/lib/columns";
import { getAllColumnArticles } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "专栏",
  description: "按主题编排的深度阅读路径，适合系统学习而非碎片浏览。",
  path: "/columns/",
});

export default function ColumnsPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs items={[{ href: "/", label: "首页" }, { label: "专栏" }]} />
      <h1 className="section-title text-3xl">专栏</h1>
      <p className="mt-3 max-w-2xl text-mute">
        专栏提供有结构的阅读路径：先明确目标，再按章节推进。顺序专栏建议依编号阅读；主题合集可按需挑读。
      </p>
      <div className="mt-8">
        {columns.map((column) => {
          const count = getAllColumnArticles(column.id).length;
          return (
            <Link
              key={column.id}
              href={`/columns/${column.id}/`}
              className="list-row"
            >
              <span className="list-row-title">
                {columnTitle(column, "zh")}
              </span>
              <span className="meta-line mt-2 block">
                {column.sequential ? "顺序阅读" : "主题合集"}  |  {count} 篇
              </span>
              <span className="mt-2 block text-sm text-mute">
                {columnDescription(column, "zh")}
              </span>
            </Link>
          );
        })}
      </div>
    </PageWithSidebar>
  );
}
