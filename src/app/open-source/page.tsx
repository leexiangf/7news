import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "许可与开源",
  description: `${siteConfig.name} 开源仓库、署名协议与第三方许可说明。`,
  path: "/open-source/",
});

export default function OpenSourcePage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/", label: "首页" }, { label: "许可与开源" }]}
      />
      <article className="prose-desk">
        <h1 className="section-title text-3xl !mt-0">许可与开源</h1>

        <h2>开源仓库</h2>
        <p>
          面向读者的站点模板与页面源码公开在{" "}
          <a
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {siteConfig.githubRepo}
          </a>
          。你可以 fork、修改并部署成自己的站点。
        </p>
        <p>
          公开范围限于可重建本站页面的代码与已发布内容；采集器、编辑链路、内部配置与未发布材料不在仓库内。
        </p>

        <h2>7News Attribution License 1.0</h2>
        <p>
          采用 <strong>7News Attribution License 1.0</strong>
          ：允许使用、修改与再分发本仓库中的站点代码，但须在衍生站点保留指向{" "}
          {siteConfig.name} 与上述 GitHub 仓库的<strong>可见署名</strong>
          （页脚、关于页或同等显著位置均可）。
        </p>
        <p>
          协议全文见仓库根目录{" "}
          <a
            href={`${siteConfig.githubUrl}/blob/main/LICENSE`}
            rel="noopener noreferrer"
            target="_blank"
          >
            LICENSE
          </a>
          。站点介绍见{" "}
          <Link href="/about/">关于</Link>。
        </p>

        <h2>内容版权</h2>
        <p>
          除非另有标注，本站原创报道、摘要与分析的版权归 {siteConfig.name}{" "}
          及署名作者所有。来源链接指向原始发布方，便于读者核验；开源站点模板不等于放弃内容版权。
        </p>

        <h2>第三方组件</h2>
        <p>
          页面中使用的第三方字体、图标与样式库遵循其各自许可证。配图若来自可授权图库，仅作氛围与版式用途，不作为新闻事实本身。
        </p>
      </article>
    </PageWithSidebar>
  );
}
