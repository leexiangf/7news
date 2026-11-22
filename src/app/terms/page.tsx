import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "使用条款",
  description: `${siteConfig.name} 使用条款。`,
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/", label: "首页" }, { label: "使用条款" }]}
      />
      <article className="prose-desk">
        <h1 className="section-title text-3xl !mt-0">使用条款</h1>
        <p>
          本站内容供专业读者参考与学习。转载或引用请注明出处；商业使用请事先取得授权。
        </p>
        <p>
          工具与估算结果不构成投资、采购或生产部署的保证。请以各厂商官方文档、合同与实测为准，自行验证后再决策。
        </p>
        <p>
          我们尽力保证事实准确，但不对因依赖本站内容而产生的直接或间接损失承担责任。
        </p>
      </article>
    </PageWithSidebar>
  );
}
