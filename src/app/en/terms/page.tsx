import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Use",
  description: `Terms of use for ${siteConfig.nameEn}.`,
  path: "/en/terms/",
});

export default function TermsEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/en/", label: "Home" }, { label: "Terms of Use" }]}
      />
      <article className="prose-desk">
        <h1 className="section-title text-3xl !mt-0">Terms of Use</h1>
        <p>
          Content on this site is for professional reference and learning.
          Please credit the source when quoting or republishing. Commercial reuse
          requires prior authorization.
        </p>
        <p>
          Tools and estimates are not warranties for investment, procurement, or
          production deployment. Verify against vendor documentation, contracts,
          and your own measurements before acting.
        </p>
        <p>
          We aim for factual accuracy but are not liable for direct or indirect
          loss arising from reliance on this site.
        </p>
      </article>
    </PageWithSidebar>
  );
}
