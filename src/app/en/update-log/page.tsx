import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Updates",
  description: `Product and editorial updates from ${siteConfig.nameEn}.`,
  path: "/en/update-log/",
});

const logs = [
  {
    date: "2026-11-06",
    items: [
      "Launched 7News as a bilingual AI news publication",
      "Opened channel reading, column paths, and in-browser tools",
      "Established a source-traceable original-summary publishing process",
    ],
  },
];

export default function UpdateLogEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/en/", label: "Home" }, { label: "Updates" }]}
      />
      <h1 className="section-title text-3xl">Updates</h1>
      <p className="mt-3 max-w-2xl text-mute">
        Reader-facing product and editorial milestones—not an engineering diary.
      </p>
      <div className="mt-8">
        {logs.map((log) => (
          <section key={log.date} className="border-b border-rule py-6">
            <h2 className="font-semibold tabular-nums">{log.date}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-mute">
              {log.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageWithSidebar>
  );
}
