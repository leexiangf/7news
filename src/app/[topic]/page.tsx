import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/ArticleList";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { getArticlesByCategory } from "@/lib/content";
import { feedPath } from "@/lib/feeds";
import { createMetadata } from "@/lib/seo";
import { getTopic, topics } from "@/lib/taxonomy";

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ topic: topic.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) return {};
  return createMetadata({
    title: topic.label,
    description: topic.description,
    path: `/${topic.id}/`,
  });
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) notFound();

  const articles = getArticlesByCategory(topic.id);

  return (
    <PageWithSidebar
      sidebar={
        <section>
          <h2 className="section-title text-lg">二级分类</h2>
          <ul className="mt-4 space-y-2">
            {topic.subcategories.map((sub) => (
              <li key={sub.id}>
                <Link
                  href={`/${topic.id}/${sub.id}/`}
                  className="no-underline hover:text-signal"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      }
    >
      <Breadcrumbs items={[{ href: "/", label: "首页" }, { label: topic.label }]} />
      <h1 className="section-title text-3xl">{topic.label}</h1>
      <p className="mt-3 max-w-2xl text-mute">{topic.description}</p>
      <p className="mt-2 text-sm text-mute">
        本频道只收与「{topic.label}」直接相关的官方信号与解读；横切请看{" "}
        <Link href="/flash/" className="no-underline hover:text-signal">
          快讯
        </Link>
        {" · "}
        <Link href="/publishers/" className="no-underline hover:text-signal">
          厂商
        </Link>
        {" · "}
        <a
          href={feedPath("zh", topic.id)}
          className="no-underline hover:text-signal"
        >
          本频道 RSS
        </a>
        。
      </p>

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {topic.subcategories.map((sub) => (
          <Link
            key={sub.id}
            href={`/${topic.id}/${sub.id}/`}
            className="border-b border-rule pb-0.5 no-underline hover:border-signal hover:text-signal"
          >
            {sub.label}
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <ArticleList articles={articles} />
      </div>
    </PageWithSidebar>
  );
}
