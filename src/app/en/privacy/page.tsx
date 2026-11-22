import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.nameEn}.`,
  path: "/en/privacy/",
});

export default function PrivacyEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[
          { href: "/en/", label: "Home" },
          { label: "Privacy Policy" },
        ]}
      />
      <article className="prose-desk">
        <h1 className="section-title text-3xl !mt-0">Privacy Policy</h1>
        <p>
          {siteConfig.nameEn} is primarily a reading experience. Inputs on tool
          pages are processed locally in your browser by default; we do not upload
          that content to our servers to complete the calculation.
        </p>
        <p>
          If we later introduce analytics, advertising, or other third-party
          services, this page will be updated to describe the data involved and
          its purpose. Until then, do not treat this site as a collector of
          sensitive personal information.
        </p>
      </article>
    </PageWithSidebar>
  );
}
