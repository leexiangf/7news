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

  const articlePaths = getAllArticles().map((article) => ({
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
    const path = `/${topic.id}/${sub.id}/`;
    return createMetadata({
      title: sub.label,
      description: `${topic.label} / ${sub.label} 最新文章`,
      path,
      locale: "zh",
      languages: bilingualLanguages(path),
    });
  }

  const article = getArticleBySubcategorySlug(first, second);
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
    locale: "zh",
    languages: {
      "zh-CN": absoluteUrl(article.href),
      ...(pair ? { en: absoluteUrl(pair.href) } : {}),
      "x-default": absoluteUrl(article.href),
    },
  });
}

export default async function TopicOrArticlePage({
  params,
}: {
  params: Promise<{ topic: string; subcategory: string }>;
}) {
  const { topic: first, subcategory: second } = await params;
  const topic = getTopic(first);

  if (topic) {
    const sub = topic.subcategories.find((item) => item.id === second);
    if (!sub) notFound();
    const articles = getArticlesBySubcategory(sub.id);

    return (
      <PageWithSidebar>
        <Breadcrumbs
          items={[
            { href: "/", label: "首页" },
            { href: `/${topic.id}/`, label: topic.label },
            { label: sub.label },
          ]}
        />
        <h1 className="section-title text-3xl">{sub.label}</h1>
        <p className="mt-3 text-mute">
          {topic.label}频道下的「{sub.label}」最新内容。
        </p>
        {sub.id === "pricing" ? (
          <p className="mt-2 text-sm text-mute">
            价格变更短讯在此；系统性对照定价、缓存与批处理请看专栏{" "}
            <Link
              href="/columns/llm-cost-desk/"
              className="no-underline hover:text-signal"
            >
              模型成本台账
            </Link>
            。
          </p>
        ) : null}
        {sub.id === "cost" ? (
          <p className="mt-2 text-sm text-mute">
            工程侧成本与效能笔记在此；厂商价目变更见{" "}
            <Link
              href="/llm/pricing/"
              className="no-underline hover:text-signal"
            >
              价格与额度
            </Link>
            {" · "}
            <Link
              href="/columns/llm-cost-desk/"
              className="no-underline hover:text-signal"
            >
              模型成本台账
            </Link>
            。
          </p>
        ) : null}
        <div className="mt-8">
          <ArticleList articles={articles} />
        </div>
      </PageWithSidebar>
    );
  }

  const article = getArticleBySubcategorySlug(first, second);
  if (!article) notFound();

  const loc = getSubcategory(article.subcategory);
  const related = getRelatedArticles(article);
  const crumb = [
    { name: "首页", path: "/" },
    ...(loc
      ? [
          { name: loc.topic.label, path: `/${loc.topic.id}/` },
          {
            name: loc.subcategory.label,
            path: `/${loc.topic.id}/${loc.subcategory.id}/`,
          },
        ]
      : []),
    { name: article.title },
  ];
  const jsonLd = articleJsonLd(article, {
    locale: "zh",
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
          { href: "/", label: "首页" },
          ...(loc
            ? [
                { href: `/${loc.topic.id}/`, label: loc.topic.label },
                {
                  href: `/${loc.topic.id}/${loc.subcategory.id}/`,
                  label: loc.subcategory.label,
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
              href={`/publishers/${article.publisher}/`}
              className="no-underline hover:text-signal"
            >
              {publisherName(getPublisher(article.publisher)!, "zh")}
            </Link>
          </>
        ) : null}
        {loc ? `  |  ${loc.topic.label} / ${loc.subcategory.label}` : ""}
        {`  |  ${article.readingMinutes} 分钟`}
        {article.author ? `  |  ${article.author}` : ""}
      </p>
      <hr className="rule my-6" />
      <MarkdownBody content={article.content} />
      <SourceLinks urls={article.sourceUrls} />
      <FaqSection faqs={article.faqs} />
      <section className="mt-12">
        <h2 className="section-title">相关阅读</h2>
        <div className="mt-3">
          {related.length === 0 ? (
            <p className="text-mute">暂无相关文章。</p>
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
