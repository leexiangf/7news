import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { TokenEstimateTool } from "@/components/TokenEstimateTool";
import { createMetadata } from "@/lib/seo";
import {
  getTool,
  toolDescription,
  toolPurpose,
  tools,
  toolScenarios,
  toolTitle,
} from "@/lib/tools";

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return createMetadata({
    title: toolTitle(tool, "en"),
    description: toolDescription(tool, "en"),
    path: `/en/tools/${tool.slug}/`,
  });
}

export default async function ToolDetailEnglishPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[
          { href: "/en/", label: "Home" },
          { href: "/en/tools/", label: "Tools" },
          { label: toolTitle(tool, "en") },
        ]}
      />
      <h1 className="section-title text-3xl">{toolTitle(tool, "en")}</h1>
      <p className="mt-3 max-w-2xl text-mute">{toolDescription(tool, "en")}</p>

      <section className="mt-8 max-w-2xl">
        <h2 className="section-title text-xl">What it solves</h2>
        <p className="mt-3 text-mute">{toolPurpose(tool, "en")}</p>
        <h3 className="mt-6 font-semibold">Typical uses</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-mute">
          {toolScenarios(tool, "en").map((scenario) => (
            <li key={scenario}>{scenario}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-2xl">
        <h2 className="section-title text-xl mb-4">Try it</h2>
        {tool.slug === "token-estimate" ? <TokenEstimateTool /> : null}
      </section>

      <section className="mt-12 max-w-2xl">
        <h2 className="section-title text-xl">FAQ</h2>
        <details className="border-b border-rule py-4">
          <summary className="cursor-pointer font-semibold">
            How accurate is the result?
          </summary>
          <p className="mt-3 text-mute">
            This is a rough estimate for planning and budgeting. For billing or
            strict context trimming, use the target model’s official tokenizer.
          </p>
        </details>
        <details className="border-b border-rule py-4">
          <summary className="cursor-pointer font-semibold">
            Is my text uploaded?
          </summary>
          <p className="mt-3 text-mute">
            No. Calculation runs locally in the browser; text is not sent to our
            servers.
          </p>
        </details>
      </section>
    </PageWithSidebar>
  );
}
