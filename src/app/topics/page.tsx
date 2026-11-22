import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { createMetadata } from "@/lib/seo";
import { topicDescription, topicLabel, topics } from "@/lib/taxonomy";

export const metadata = createMetadata({
  title: "全部频道",
  description: "浏览 7News 全部一级频道与说明。",
  path: "/topics/",
});

export default function TopicsPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/", label: "首页" }, { label: "全部频道" }]}
      />
      <h1 className="section-title text-3xl">全部频道</h1>
      <p className="mt-3 max-w-2xl text-mute">
        按主题浏览报道。每个频道对应一类持续跟踪的议题。
      </p>
      <div className="mt-8">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/${topic.id}/`} className="list-row">
            <span className="list-row-title">{topicLabel(topic, "zh")}</span>
            <span className="mt-2 block text-sm text-mute">
              {topicDescription(topic, "zh")}
            </span>
          </Link>
        ))}
      </div>
    </PageWithSidebar>
  );
}