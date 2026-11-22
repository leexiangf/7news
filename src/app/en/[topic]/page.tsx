import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/ArticleList";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { getArticlesByCategory } from "@/lib/content";
import { feedPath } from "@/lib/feeds";
import { createMetadata } from "@/lib/seo";
import {
  getTopic,
  topicDescription,
  topicLabel,
  topics,
} from "@/lib/taxonomy";

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ topic: topic.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: id } = await params;
  const topic = getTopic(id);
  if (!topic) return {};
  return createMetadata({
    title: topicLabel(topic, "en"),
    description: topicDescription(topic, "en"),
    path: `/en/${topic.id}/`,
  });
}

export default async function EnglishTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: id } = await params;
  const topic = getTopic(id);
  if (!topic) notFound();
  const articles = getArticlesByCategory(topic.id, "en");

  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[
          { href: "/en/", label: "Home" },
          { label: topicLabel(topic, "en") },
        ]}
      />
      <h1 className="section-title text-3xl">{topicLabel(topic, "en")}</h1>
      <p className="mt-3 text-mute">{topicDescription(topic, "en")}</p>
      <p className="mt-2 text-sm text-mute">
        This channel covers official signals and analysis for{" "}
        {topicLabel(topic, "en")} only. Cross-cutting desks:{" "}
        <Link href="/en/flash/" className="no-underline hover:text-signal">
          Flash
        </Link>
        {" · "}
        <Link
          href="/en/publishers/"
          className="no-underline hover:text-signal"
        >
          Publishers
        </Link>
        {" · "}
        <a
          href={feedPath("en", topic.id)}
          className="no-underline hover:text-signal"
        >
          Channel RSS
        </a>
        .
      </p>
      <div className="mt-8">
        <ArticleList articles={articles} locale="en" />
      </div>
      <div className="mt-8">
        {topic.subcategories.map((sub) => (
          <Link
            key={sub.id}
            href={`/en/${topic.id}/${sub.id}/`}
            className="list-row"
          >
            <span className="list-row-title text-base">
              {sub.labelEn || sub.label}
            </span>
          </Link>
        ))}
      </div>
    </PageWithSidebar>
  );
}
