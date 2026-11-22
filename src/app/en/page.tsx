import { HomeDesk } from "@/components/HomeDesk";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { getAllArticles } from "@/lib/content";
import { absoluteUrl, createMetadata, homeJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: `${siteConfig.nameEn} · English`,
  description: siteConfig.descriptionEn,
  path: "/en/",
  locale: "en",
  languages: {
    "zh-CN": absoluteUrl("/"),
    en: absoluteUrl("/en/"),
    "x-default": absoluteUrl("/"),
  },
});

export default function EnglishHomePage() {
  const articles = getAllArticles("en");

  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <HomeDesk articles={articles} locale="en" />
    </>
  );
}
