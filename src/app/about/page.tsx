import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { topicDescription, topicLabel, topics } from "@/lib/taxonomy";

export const metadata = createMetadata({
  title: "关于",
  description: siteConfig.description,
  path: "/about/",
});

export default function AboutPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs items={[{ href: "/", label: "首页" }, { label: "关于" }]} />
      <article className="prose-desk">
        <h1 className="section-title text-3xl !mt-0">关于 {siteConfig.name}</h1>
        <p>
          {siteConfig.name}{" "}
          是面向工程师、产品负责人与技术决策者的 AI 资讯媒体。我们关注模型、AI
          编程、Agent 与工程落地中真正改变工作方式的信号，帮助读者在有限时间里判断：哪一条值得读、为什么值得读。
        </p>

        <h2>读者</h2>
        <p>
          正在将大模型、代码智能体与智能体系统推进生产环境的人——需要可靠的发布解读、可验证的事实边界，以及可落地的工程判断，而不是会议日程或营销口号的再包装。
        </p>

        <h2>我们写什么 / 不写什么</h2>
        <p>会写：</p>
        <ul>
          <li>厂商官方公告、版本说明与文档级变更（能力、价格、额度、限流）</li>
          <li>开源仓库的重要 Release 与工程实践说明</li>
          <li>可核验的评测卡、基准与成本变化（标注出处与适用范围）</li>
        </ul>
        <p>不写：</p>
        <ul>
          <li>无法回溯到公开 URL 的传闻、截图与聊天记录</li>
          <li>二手转述充当唯一依据的「爆料」</li>
          <li>以导流售卖为目的的课程广告与纯观点灌水</li>
        </ul>

        <h2>内容怎么产出</h2>
        <ol>
          <li>跟踪白名单内的官方新闻、博客、文档、RSS 与 GitHub Release</li>
          <li>回到原文核对版本、价格、时间与适用范围</li>
          <li>按中文或英文独立撰写原创摘要与分析（不做机械对译）</li>
          <li>成稿写入正式目录并重建 feed / 搜索索引后上线</li>
          <li>发现错误会更正，并记入更新日志</li>
        </ol>

        <h2>频道怎么用</h2>
        <p>
          文章按一级频道归档，二级分类全局唯一。横切内容用快讯、专栏与工具页，不替代频道流。
        </p>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/${topic.id}/`}>{topicLabel(topic, "zh")}</Link>
              {" — "}
              {topicDescription(topic, "zh")}
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Link href="/flash/">快讯</Link> — 短讯与时效信号，不展开成长文
          </li>
          <li>
            <Link href="/publishers/">厂商</Link> — 按厂商聚合本站稿件与官方入口
          </li>
          <li>
            <Link href="/columns/">专栏</Link> — 跨频道的连续学习路径或主题台账
          </li>
          <li>
            <Link href="/tools/">工具</Link> — 站内实用小工具
          </li>
        </ul>

        <h2>编辑标准</h2>
        <p>
          每篇报道基于可公开核验的来源撰写；关键事实标注出处，观点与事实分开陈述。我们不复制原文结构，不把未经证实的传闻写成定论。
        </p>

        <h2>主要信息源</h2>
        <p>
          长期跟踪 OpenAI、Anthropic、Google / DeepMind、Meta、Microsoft、DeepSeek、通义
          Qwen、月之暗面、智谱、字节跳动 Seed / 方舟，以及 Cursor、Claude Code、Codex、GitHub
          Copilot 等官方渠道；价格与额度以厂商定价页和文档为准，有变更才写稿。
        </p>

        <h2>7News 是一个开源项目</h2>
        <p>
          本站面向读者的站点模板与页面源码以{" "}
          <a
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub 仓库
          </a>{" "}
          公开，采用{" "}
          <Link href="/open-source/">7News Attribution License 1.0</Link>
          。你可以修改源码并部署成自己的站点，但需要保留指向 7News 与本仓库的可见署名。
        </p>

        <h2>订阅与更正</h2>
        <p>
          全站 RSS：
          <a href="/feed.xml">中文</a>
          {" · "}
          <a href="/feed-en.xml">English</a>
          。各频道另有独立 feed，例如{" "}
          <a href="/feed-llm.xml">大模型</a>
          {" · "}
          <a href="/feed-ai-coding.xml">AI 编程</a>
          {" · "}
          <a href="/feed-ai-creation.xml">AI 创作</a>
          ；频道页也提供「本频道 RSS」链接。更正见{" "}
          <Link href="/update-log/">更新日志</Link>。
        </p>

        <h2>我们刻意不做的事</h2>
        <p>
          不做全网热点聚合墙，不追求条目数量，不把厂商通稿原样转载。首页与频道坚持低噪音编排：一条清晰主线，胜过一屏卡片。
        </p>
      </article>
    </PageWithSidebar>
  );
}
