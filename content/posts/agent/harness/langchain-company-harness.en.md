---
title: LangChain’s five primitives for a company harness
slug: langchain-company-harness
description: >-
  LangChain distills internal GTM, eng, and content agents into five multiplayer
  harness pieces: surface, identity, memory, sandboxed code, and ambient
  schedules—on Managed Deep Agents.
date: '2026-10-24'
updated: '2026-11-12'
category: agent
subcategory: harness
tags:
  - LangChain
  - Harness
  - Agent
author: Editors
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/components-building-company-harness'
\npublisher: langchain
faqs:
  - question: What are the five components?
    answer: >-
      Live where people already work (Slack for them); act OBO or with fixed
      credentials by tool; global and per-user memory; run code in a sandbox
      with controlled auth to services; schedule a large share of runs instead
      of only on-demand invokes.
  - question: Is this a product launch?
    answer: >-
      It is primarily a practice write-up. Their agents sit on Managed Deep
      Agents over the open-source Deep Agents harness—not a new frontier-model
      release.
draft: false
candidateId: langchain-2026-10-24-e7cd8ea3e3
publisher: langchain
---
On 24 October 2026 LangChain published how its marketing, sales, and engineering agents kept hitting the same walls—and the shared “company harness” primitives that stuck. This is not a model launch. It is a field note for teams moving from single-player demos to multiplayer agents.

The five pieces are concrete. Agents live where people already work (Slack DMs and @-mentions, with a “breakout” thread so the bot does not pollute human chat). Identity splits **on-behalf-of** vs **fixed service credentials** per tool—OpenSWE opens PRs as you, but background review uses a GitHub App; GTM keeps personal email tools out of shared channels. Memory is global and per-user, with the agent choosing where a fact lands. Code runs in sandboxes, reaching authenticated services through LangSmith Sandboxes’ secret proxy. A large share of runs are **scheduled or event-driven** (ambient)—PR listeners, or a user-asked daily brief cron—not only manual kicks.

They name three internal agents: GTM, OpenSWE, and Content Studio. Slack is not enough for every UX; bulk email review got a custom UI. The stack sits on Managed Deep Agents over the open-source Deep Agents harness.

Read it as an architecture checklist, not proof that one framework equals reliability. Align on surface, per-tool identity, and how much work is ambient before arguing model brands. Watch your own OBO/service-account matrix and whether sandbox egress auth is centralized.
