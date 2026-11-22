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
  title: "Publishers",
  description: "Browse 7News coverage by vendor.",
  path: "/en/publishers/",
});

export default function PublishersEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/en/", label: "Home" }, { label: "Publishers" }]}
      />
      <h1 className="section-title text-3xl">Publishers</h1>
      <p className="mt-3 max-w-2xl text-mute">
        Lightweight vendor desks: our stories plus official entry points. P0
        vendors first—pages earn their keep with published posts.
      </p>
      <div className="mt-8">
        {publishers.map((publisher) => {
          const count = getArticlesByPublisher(publisher.id, "en").length;
          return (
            <Link
              key={publisher.id}
              href={`/en/publishers/${publisher.id}/`}
              className="list-row"
            >
              <span className="list-row-title inline-flex items-center gap-2">
                <PublisherLogo publisher={publisher} size="md" />
                {publisherName(publisher, "en")}
              </span>
              <span className="meta-line mt-2 block">
                {publisher.tier}  |  {count} posts
              </span>
              <span className="mt-2 block text-sm text-mute">
                {publisherDescription(publisher, "en")}
              </span>
            </Link>
          );
        })}
      </div>
    </PageWithSidebar>
  );
}
