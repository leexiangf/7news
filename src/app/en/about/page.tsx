import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageWithSidebar } from "@/components/PageWithSidebar";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { topicDescription, topicLabel, topics } from "@/lib/taxonomy";

export const metadata = createMetadata({
  title: "About",
  description: siteConfig.descriptionEn,
  path: "/en/about/",
});

export default function AboutEnglishPage() {
  return (
    <PageWithSidebar>
      <Breadcrumbs
        items={[{ href: "/en/", label: "Home" }, { label: "About" }]}
      />
      <article className="prose-desk">
        <h1 className="section-title text-3xl !mt-0">About {siteConfig.nameEn}</h1>
        <p>
          {siteConfig.nameEn} is an AI news publication for engineers, product
          leaders, and technical decision-makers. We cover the signals in models,
          AI coding tools, agents, and production engineering that change how work
          gets done—so readers can decide which story deserves their time, and why.
        </p>

        <h2>Audience</h2>
        <p>
          Practitioners shipping large-language models, coding agents, and agent
          systems into production. You need grounded release analysis, clear fact
          boundaries, and engineering judgment—not calendars or repackaged
          marketing.
        </p>

        <h2>What we cover / what we skip</h2>
        <p>We cover:</p>
        <ul>
          <li>
            Official vendor announcements, release notes, and documentation-level
            changes (capabilities, pricing, quotas, rate limits)
          </li>
          <li>Meaningful open-source releases and engineering notes</li>
          <li>
            Verifiable eval cards, benchmarks, and cost shifts—with scope and
            sources stated
          </li>
        </ul>
        <p>We skip:</p>
        <ul>
          <li>Rumors, screenshots, or chat logs that cannot be traced to a public URL</li>
          <li>Second-hand “leaks” used as the only evidence</li>
          <li>Course ads and opinion pieces with no verifiable facts</li>
        </ul>

        <h2>How stories are made</h2>
        <ol>
          <li>
            Track allowlisted official news, blogs, docs, RSS, and GitHub Releases
          </li>
          <li>Return to the primary source for versions, prices, dates, and scope</li>
          <li>
            Write original zh or en summaries and analysis (never machine-translate
            one locale into the other)
          </li>
          <li>Write finished posts into the published tree and rebuild feeds</li>
          <li>Correct errors and record them in the update log</li>
        </ol>

        <h2>How channels work</h2>
        <p>
          Posts live under one top-level channel; subcategory ids are globally
          unique. Flash, columns, and tools cut across channels without replacing
          the main feeds.
        </p>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/en/${topic.id}/`}>{topicLabel(topic, "en")}</Link>
              {" — "}
              {topicDescription(topic, "en")}
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Link href="/en/flash/">Flash</Link> — short, time-sensitive signals
          </li>
          <li>
            <Link href="/en/publishers/">Publishers</Link> — coverage grouped by
            vendor, with official entry points
          </li>
          <li>
            <Link href="/en/columns/">Columns</Link> — sequential paths or topical
            desks across channels
          </li>
          <li>
            <Link href="/en/tools/">Tools</Link> — small on-site utilities
          </li>
        </ul>

        <h2>Editorial standards</h2>
        <p>
          Each story is an original summary and analysis based on publicly
          verifiable sources. Material claims are cited; opinion stays distinct
          from fact. We do not mirror source structure, and we do not present
          unverified rumor as established fact.
        </p>

        <h2>Primary sources</h2>
        <p>
          We follow official channels from OpenAI, Anthropic, Google / DeepMind,
          Meta, Microsoft, DeepSeek, Qwen, Moonshot, Zhipu, ByteDance Seed / Ark,
          plus Cursor, Claude Code, Codex, GitHub Copilot, and related docs.
          Pricing posts ship only when vendor pricing pages or docs change.
        </p>

        <h2>7News is an open-source project</h2>
        <p>
          The public site template and page source are available in our{" "}
          <a
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub repository
          </a>
          , under the{" "}
          <Link href="/en/open-source/">7News Attribution License 1.0</Link>.
          You may modify and redeploy the site, provided you keep visible
          attribution to 7News and this repository. Editorial crawl tooling,
          internal pipelines, and unpublished material are not part of the public
          repo.
        </p>

        <h2>Subscribe & corrections</h2>
        <p>
          Site-wide RSS:{" "}
          <a href="/feed-en.xml">English</a>
          {" · "}
          <a href="/feed.xml">Chinese</a>
          . Per-channel feeds exist too (e.g.{" "}
          <a href="/feed-llm-en.xml">Models</a>
          {" · "}
          <a href="/feed-ai-coding-en.xml">AI coding</a>
          {" · "}
          <a href="/feed-ai-creation-en.xml">AI creation</a>
          ); each channel page links its own feed. Corrections:{" "}
          <Link href="/en/update-log/">Update log</Link>.
        </p>

        <h2>What we refuse to do</h2>
        <p>
          We are not a firehose of every headline. Volume is not the goal, and
          vendor press releases are not republished wholesale. The home page and
          channels stay deliberately quiet: one clear lead beats a screen of cards.
        </p>
      </article>
    </PageWithSidebar>
  );
}
