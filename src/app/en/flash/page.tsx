import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FlashList } from "@/components/FlashList";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { getAllArticles } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Flash",
  description:
    "All published English stories in reverse chronological order.",
  path: "/en/flash/",
  locale: "en",
});

export default function EnglishFlashPage() {
  const articles = getAllArticles("en");

  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/en/", label: "Home" }, { label: "Flash" }]}
      />
      <h1 className="section-title text-3xl">Flash</h1>
      <p className="mt-3 text-mute">
        All {articles.length} published stories by date—same corpus as the home
        Latest stream, which also filters by channel.
      </p>
      <div className="mt-8">
        <FlashList articles={articles} locale="en" />
      </div>
    </PageWithSidebar>
  );
}
