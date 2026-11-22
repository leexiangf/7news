import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/ArticleList";
import { ArticleToc } from "@/components/ArticleToc";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { FaqSection } from "@/components/FaqSection";
import { MarkdownBody } from "@/components/MarkdownBody";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { SourceLinks } from "@/components/SourceLinks";
import { JsonLd } from "@/components/JsonLd";
import {
  getAllArticles,
  getAlternateLocaleArticle,
  getArticleBySubcategorySlug,
  getArticlesBySubcategory,
  getRelatedArticles,
} from "@/lib/content";
import {
  absoluteUrl,
  articleJsonLd,
  bilingualLanguages,
  createMetadata,
} from "@/lib/seo";
import { getPublisher, publisherName } from "@/lib/publishers";
import {
  getSubcategory,
  getTopic,
  subcategoryLabel,
  topicLabel,
  topics,
} from "@/lib/taxonomy";

export const dynamicParams = false;

export function generateStaticParams() {
  const categoryPaths = topics.flatMap((topic) =>
    topic.subcategories.map((sub) => ({
      topic: topic.id,
      subcategory: sub.id,
    })),
  );

  const articlePaths = getAllArticles("en").map((article) => ({
    topic: article.subcategory,
    subcategory: article.slug,
  }));

  return [...categoryPaths, ...articlePaths];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string; subcategory: string }>;
}) {
  const { topic: first, subcategory: second } = await params;
  const topic = getTopic(first);

  if (topic) {
    const sub = topic.subcategories.find((item) => item.id === second);
    if (!sub) return {};
    const path = `/en/${topic.id}/${sub.id}/`;
    return createMetadata({
      title: subcategoryLabel(sub, "en"),
      description: `${topicLabel(topic, "en")} / ${subcategoryLabel(sub, "en")}`,
      path,
      locale: "en",
      languages: bilingualLanguages(`/${topic.id}/${sub.id}/`),
    });
  }

  const article = getArticleBySubcategorySlug(first, second, "en");
  if (!article) return {};
  const pair = getAlternateLocaleArticle(article);
  return createMetadata({
    title: article.title,
    description: article.description,
    path: article.href,
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
    image: article.image,
    locale: "en",
    languages: {
      en: absoluteUrl(article.href),
      ...(pair ? { "zh-CN": absoluteUrl(pair.href) } : {}),
      "x-default": absoluteUrl(pair?.href ?? article.href),
    },
  });
}

export default async function EnglishTopicOrArticlePage({
  params,
}: {
  params: Promise<{ topic: string; subcategory: string }>;
}) {
  const { topic: first, subcategory: second } = await params;
  const topic = getTopic(first);

  if (topic) {
    const sub = topic.subcategories.find((item) => item.id === second);
    if (!sub) notFound();
    const articles = getArticlesBySubcategory(sub.id, "en");

    return (
      <PageWithSidebar>
        <Breadcrumbs
          items={[
            { href: "/en/", label: "Home" },
            { href: `/en/${topic.id}/`, label: topicLabel(topic, "en") },
            { label: subcategoryLabel(sub, "en") },
          ]}
        />
        <h1 className="section-title text-3xl">
          {subcategoryLabel(sub, "en")}
        </h1>
        <p className="mt-3 text-mute">
          Latest in {topicLabel(topic, "en")} / {subcategoryLabel(sub, "en")}.
        </p>
        {sub.id === "pricing" ? (
          <p className="mt-2 text-sm text-mute">
            Pricing change notes live here; for systematic cost notes see the{" "}
            <Link
              href="/en/columns/llm-cost-desk/"
              className="no-underline hover:text-signal"
            >
              LLM Cost Desk
            </Link>{" "}
            column.
          </p>
        ) : null}
        {sub.id === "cost" ? (
          <p className="mt-2 text-sm text-mute">
            Engineering cost notes here; vendor price moves:{" "}
            <Link
              href="/en/llm/pricing/"
              className="no-underline hover:text-signal"
            >
              Models · Pricing
            </Link>
            {" · "}
            <Link
              href="/en/columns/llm-cost-desk/"
              className="no-underline hover:text-signal"
            >
              LLM Cost Desk
            </Link>
            .
          </p>
        ) : null}
        <div className="mt-8">
          <ArticleList articles={articles} locale="en" />
        </div>
      </PageWithSidebar>
    );
  }

  const article = getArticleBySubcategorySlug(first, second, "en");
  if (!article) notFound();

  const loc = getSubcategory(article.subcategory);
  const related = getRelatedArticles(article);
  const crumb = [
    { name: "Home", path: "/en/" },
    ...(loc
      ? [
          {
            name: topicLabel(loc.topic, "en"),
            path: `/en/${loc.topic.id}/`,
          },
          {
            name: subcategoryLabel(loc.subcategory, "en"),
            path: `/en/${loc.topic.id}/${loc.subcategory.id}/`,
          },
        ]
      : []),
    { name: article.title },
  ];
  const jsonLd = articleJsonLd(article, {
    locale: "en",
    breadcrumb: crumb,
  });

  return (
    <PageWithSidebar
      sidebar={
        article.headings.length ? (
          <ArticleToc headings={article.headings} />
        ) : undefined
      }
    >
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { href: "/en/", label: "Home" },
          ...(loc
            ? [
                {
                  href: `/en/${loc.topic.id}/`,
                  label: topicLabel(loc.topic, "en"),
                },
                {
                  href: `/en/${loc.topic.id}/${loc.subcategory.id}/`,
                  label: subcategoryLabel(loc.subcategory, "en"),
                },
              ]
            : []),
          { label: article.title },
        ]}
      />
      <h1 className="lead-title !text-[clamp(1.75rem,3.5vw,2.5rem)]">
        {article.title}
      </h1>
      <p className="meta-line mt-4">
        {article.date}
        {article.publisher && getPublisher(article.publisher) ? (
          <>
            {"  |  "}
            <Link
              href={`/en/publishers/${article.publisher}/`}
              className="no-underline hover:text-signal"
            >
              {publisherName(getPublisher(article.publisher)!, "en")}
            </Link>
          </>
        ) : null}
        {loc
          ? `  |  ${topicLabel(loc.topic, "en")} / ${subcategoryLabel(loc.subcategory, "en")}`
          : ""}
        {`  |  ${article.readingMinutes} min`}
        {article.author ? `  |  ${article.author}` : ""}
      </p>
      <hr className="rule my-6" />
      <MarkdownBody content={article.content} />
      <SourceLinks urls={article.sourceUrls} />
      <FaqSection faqs={article.faqs} />
      <section className="mt-12">
        <h2 className="section-title">Related</h2>
        <div className="mt-3">
          {related.length === 0 ? (
            <p className="text-mute">No related stories.</p>
          ) : (
            related.map((item) => (
              <Link key={item.href} href={item.href} className="list-row">
                <span className="list-row-title text-base">{item.title}</span>
              </Link>
            ))
          )}
        </div>
      </section>
      <div className="mt-8">
        <CopyLinkButton />
      </div>
    </PageWithSidebar>
  );
}
