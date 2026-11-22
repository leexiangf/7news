---
title: LangChain on proactive agents — memory and review UX
slug: langchain-proactive-agents
description: >-
  LangChain: proactive agents wake on events and schedules toward goals; over
  70% of internal GTM Agent and Robin runs come from schedules; memory
  (seed/feedback/outcomes) plus high-signal review UX are the scarce resources.
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - Proactive Agents
  - Memory
  - Deep Agents
author: Editorial
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/what-weve-learned-building-proactive-agents'
sourceLevel: A
publisher: langchain
faqs:
  - question: Where do wakes come from?
    answer: Real-world events, developer schedules, and agent-set schedules; Managed Deep Agents cited with >70% of runs from schedules vs ad hoc prompts.
  - question: Two essentials?
    answer: Memory (seed, feedback, outcomes—with dreaming maintenance) and review UX (high signal, built for approval, in surfaces like Slack).
draft: false
candidateId: langchain-2026-11-17-226d5fe68e
---
LangChain’s blog (Sydney Runkle, **17 Nov 2026**) shares lessons from **proactive agents**—systems that chase goals in the background, wake on events, and check in only when needed. Triggers span real-world events, developer schedules, and agent-set schedules. Internally, **GTM Agent** and **Robin** (formerly Open SWE) on Managed Deep Agents see more than **70%** of runs from schedules rather than ad hoc human prompts.

Two scarce resources matter most: **memory** (seed, live feedback, downstream outcomes—plus salience, expiry, and dedupe, often via “dreaming” jobs) and **UX** (high signal, built for fast review, living where people already work, e.g. Slack). The piece ties back to Goal Engineering: scope goals so humans can give high-quality feedback. Practice essay—pair with Managed Deep Agents / Deep Agents docs to build.
