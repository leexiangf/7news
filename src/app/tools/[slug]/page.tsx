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
    title: toolTitle(tool, "zh"),
    description: toolDescription(tool, "zh"),
    path: tool.href,
  });
}

export default async function ToolDetailPage({
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
          { href: "/", label: "首页" },
          { href: "/tools/", label: "工具" },
          { label: toolTitle(tool, "zh") },
        ]}
      />
      <h1 className="section-title text-3xl">{toolTitle(tool, "zh")}</h1>
      <p className="mt-3 max-w-2xl text-mute">{toolDescription(tool, "zh")}</p>

      <section className="mt-8 max-w-2xl">
        <h2 className="section-title text-xl">它解决什么问题</h2>
        <p className="mt-3 text-mute">{toolPurpose(tool, "zh")}</p>
        <h3 className="mt-6 font-semibold">适用场景</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-mute">
          {toolScenarios(tool, "zh").map((scenario) => (
            <li key={scenario}>{scenario}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-2xl">
        <h2 className="section-title text-xl mb-4">开始使用</h2>
        {tool.slug === "token-estimate" ? <TokenEstimateTool /> : null}
      </section>

      <section className="mt-12 max-w-2xl">
        <h2 className="section-title text-xl">常见问题</h2>
        <details className="border-b border-rule py-4">
          <summary className="cursor-pointer font-semibold">结果准确吗？</summary>
          <p className="mt-3 text-mute">
            这是粗估工具，方便排期与预算。正式计费或严格上下文裁剪请使用目标模型的官方
            tokenizer。
          </p>
        </details>
        <details className="border-b border-rule py-4">
          <summary className="cursor-pointer font-semibold">数据会上传吗？</summary>
          <p className="mt-3 text-mute">
            不会。计算在浏览器本地完成，文本不会发送到本站服务器。
          </p>
        </details>
      </section>
    </PageWithSidebar>
  );
}
