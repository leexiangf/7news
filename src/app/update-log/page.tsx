import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "更新日志",
  description: `${siteConfig.name} 产品与内容更新记录。`,
  path: "/update-log/",
});

const logs = [
  {
    date: "2026-11-06",
    items: [
      "正式上线中英双语资讯站点 7News",
      "开放频道阅读、专栏路径与本地实用工具",
      "建立可追溯来源的原创摘要与分析发布流程",
    ],
  },
];

export default function UpdateLogPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/", label: "首页" }, { label: "更新日志" }]}
      />
      <h1 className="section-title text-3xl">更新日志</h1>
      <p className="mt-3 max-w-2xl text-mute">
        记录面向读者的产品与内容里程碑，不含内部实现细节。
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
