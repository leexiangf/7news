import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { createMetadata } from "@/lib/seo";
import { toolDescription, tools, toolTitle } from "@/lib/tools";

export const metadata = createMetadata({
  title: "工具",
  description: "浏览器本地运行的实用工具，辅助估算与决策，无需登录。",
  path: "/tools/",
});

export default function ToolsPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs items={[{ href: "/", label: "首页" }, { label: "工具" }]} />
      <h1 className="section-title text-3xl">工具</h1>
      <p className="mt-3 max-w-2xl text-mute">
        每个工具先说明用途与适用场景，再提供交互面板。输入默认留在您的浏览器本地。
      </p>
      <div className="mt-8">
        {tools.map((tool) => (
          <Link key={tool.slug} href={tool.href} className="list-row">
            <span className="list-row-title">{toolTitle(tool, "zh")}</span>
            <span className="mt-2 block text-sm text-mute">
              {toolDescription(tool, "zh")}
            </span>
          </Link>
        ))}
      </div>
    </PageWithSidebar>
  );
}
