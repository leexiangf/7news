import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { createMetadata } from "@/lib/seo";
import { topicDescription, topicLabel, topics } from "@/lib/taxonomy";

export const metadata = createMetadata({
  title: "All channels",
  description: "Browse every top-level channel on 7News.",
  path: "/en/topics/",
});

export default function TopicsEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/en/", label: "Home" }, { label: "All channels" }]}
      />
      <h1 className="section-title text-3xl">All channels</h1>
      <p className="mt-3 max-w-2xl text-mute">
        Browse coverage by theme. Each channel tracks a sustained beat.
      </p>
      <div className="mt-8">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/en/${topic.id}/`} className="list-row">
            <span className="list-row-title">{topicLabel(topic, "en")}</span>
            <span className="mt-2 block text-sm text-mute">
              {topicDescription(topic, "en")}
            </span>
          </Link>
        ))}
      </div>
    </PageWithSidebar>
  );
}