import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FlashList } from "@/components/FlashList";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { getAllArticles } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "今日快讯",
  description: "全部正式稿按发布时间倒序排列。",
  path: "/flash/",
  locale: "zh",
});

export default function FlashPage() {
  const articles = getAllArticles("zh");

  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/", label: "首页" }, { label: "今日快讯" }]}
      />
      <h1 className="section-title text-3xl">今日快讯</h1>
      <p className="mt-3 text-mute">
        按发布时间倒序的全部稿件，共 {articles.length}{" "}
        条。与首页「最新动态」同源；首页可用频道筛选浏览。
      </p>
      <div className="mt-8">
        <FlashList articles={articles} locale="zh" />
      </div>
    </PageWithSidebar>
  );
}
