import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "License & open source",
  description: `Open-source repository, attribution license, and third-party notes for ${siteConfig.nameEn}.`,
  path: "/en/open-source/",
});

export default function OpenSourceEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[
          { href: "/en/", label: "Home" },
          { label: "License & open source" },
        ]}
      />
      <article className="prose-desk">
        <h1 className="section-title text-3xl !mt-0">License & open source</h1>

        <h2>Public repository</h2>
        <p>
          The public site template and page source live at{" "}
          <a
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {siteConfig.githubRepo}
          </a>
          . You may fork, modify, and redeploy it as your own site.
        </p>

        <h2>7News Attribution License 1.0</h2>
        <p>
          Released under the <strong>7News Attribution License 1.0</strong>: you
          may use, modify, and redistribute the site code in this repository,
          provided derivative sites keep <strong>visible attribution</strong> to{" "}
          {siteConfig.nameEn} and the GitHub repository above (footer, about
          page, or an equally prominent place).
        </p>
        <p>
          Full text:{" "}
          <a
            href={`${siteConfig.githubUrl}/blob/main/LICENSE`}
            rel="noopener noreferrer"
            target="_blank"
          >
            LICENSE
          </a>
          . Site overview: <Link href="/en/about/">About</Link>.
        </p>

        <h2>Content copyright</h2>
        <p>
          Unless otherwise noted, original reporting, summaries, and analysis on
          this site remain copyright {siteConfig.nameEn} and the credited
          authors. Source links point to original publishers for verification.
          Opening the site template does not waive content copyright.
        </p>

        <h2>Third-party components</h2>
        <p>
          Third-party fonts, icons, and style libraries follow their respective
          licenses. Cover imagery from licensed stock libraries is used for layout
          and atmosphere only—not as documentary evidence of the news itself.
        </p>
      </article>
    </PageWithSidebar>
  );
}
