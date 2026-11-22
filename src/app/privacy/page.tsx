import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "隐私政策",
  description: `${siteConfig.name} 隐私政策。`,
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/", label: "首页" }, { label: "隐私政策" }]}
      />
      <article className="prose-desk">
        <h1 className="section-title text-3xl !mt-0">隐私政策</h1>
        <p>
          {siteConfig.name}{" "}
          以资讯阅读为主。工具页的输入默认在您的浏览器本地处理，本站不会为完成计算而将内容上传至服务器。
        </p>
        <p>
          若未来引入访问统计、广告或其他第三方服务，我们将在本页更新说明，并标明所涉数据类型与用途。在此之前，请勿将本站视为收集个人敏感信息的服务。
        </p>
      </article>
    </PageWithSidebar>
  );
}
