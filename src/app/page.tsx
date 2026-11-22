import { HomeDesk } from "@/components/HomeDesk";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { getAllArticles } from "@/lib/content";
import { absoluteUrl, createMetadata, homeJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  locale: "zh",
  languages: {
    "zh-CN": absoluteUrl("/"),
    en: absoluteUrl("/en/"),
    "x-default": absoluteUrl("/"),
  },
});

export default function HomePage() {
  const articles = getAllArticles("zh");

  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <HomeDesk articles={articles} locale="zh" />
    </>
  );
}
