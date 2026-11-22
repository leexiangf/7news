import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { PublisherLogo } from "@/components/PublisherLogo";
import { getArticlesByPublisher } from "@/lib/content";
import {
  publisherDescription,
  publisherName,
  publishers,
} from "@/lib/publishers";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "厂商",
  description: "按厂商浏览 7News 已报道的官方动态与解读。",
  path: "/publishers/",
});

export default function PublishersPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs items={[{ href: "/", label: "首页" }, { label: "厂商" }]} />
      <h1 className="section-title text-3xl">厂商</h1>
      <p className="mt-3 max-w-2xl text-mute">
        轻量厂商档案：聚合本站相关稿件，并链到官方入口。先覆盖 P0
        厂商，有稿才显得有内容，不堆空壳。
      </p>
      <div className="mt-8">
        {publishers.map((publisher) => {
          const count = getArticlesByPublisher(publisher.id, "zh").length;
          return (
            <Link
              key={publisher.id}
              href={`/publishers/${publisher.id}/`}
              className="list-row"
            >
              <span className="list-row-title inline-flex items-center gap-2">
                <PublisherLogo publisher={publisher} size="md" />
                {publisherName(publisher, "zh")}
              </span>
              <span className="meta-line mt-2 block">
                {publisher.tier}  |  {count} 篇
              </span>
              <span className="mt-2 block text-sm text-mute">
                {publisherDescription(publisher, "zh")}
              </span>
            </Link>
          );
        })}
      </div>
    </PageWithSidebar>
  );
}
