import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/ArticleList";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { PublisherLogo } from "@/components/PublisherLogo";
import { getArticlesByPublisher } from "@/lib/content";
import {
  getPublisher,
  publisherDescription,
  publisherName,
  publishers,
} from "@/lib/publishers";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishers.map((publisher) => ({ id: publisher.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const publisher = getPublisher(id);
  if (!publisher) return {};
  return createMetadata({
    title: publisherName(publisher, "zh"),
    description: publisherDescription(publisher, "zh"),
    path: `/publishers/${publisher.id}/`,
  });
}

export default async function PublisherPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const publisher = getPublisher(id);
  if (!publisher) notFound();

  const articles = getArticlesByPublisher(publisher.id, "zh");
  const name = publisherName(publisher, "zh");

  return (
    <PageWithSidebar
      sidebar={
        <section>
          <h2 className="section-title text-lg">官方入口</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={publisher.website}
                className="no-underline hover:text-signal"
                rel="noopener noreferrer"
                target="_blank"
              >
                官网
              </a>
            </li>
            {publisher.newsUrl ? (
              <li>
                <a
                  href={publisher.newsUrl}
                  className="no-underline hover:text-signal"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  新闻 / 博客
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/publishers/" className="no-underline hover:text-signal">
                全部厂商
              </Link>
            </li>
          </ul>
        </section>
      }
    >
      <Breadcrumbs
        items={[
          { href: "/", label: "首页" },
          { href: "/publishers/", label: "厂商" },
          { label: name },
        ]}
      />
      <h1 className="section-title flex items-center gap-3 text-3xl">
        <PublisherLogo publisher={publisher} size="md" />
        {name}
      </h1>
      <p className="mt-3 max-w-2xl text-mute">
        {publisherDescription(publisher, "zh")}
      </p>
      <p className="meta-line mt-4">
        {publisher.tier}  |  本站 {articles.length} 篇
      </p>
      <div className="mt-8">
        <ArticleList articles={articles} showCategory />
      </div>
    </PageWithSidebar>
  );
}
