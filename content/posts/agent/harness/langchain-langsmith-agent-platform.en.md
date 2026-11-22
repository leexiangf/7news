---
title: LangChain rebuilt LangSmith around the agent record
slug: langchain-langsmith-agent-platform
description: >-
  LangChain blog: after Series C, LangSmith Agent Platform centers one agent
  object—owner, immutable ID, type—with environments and traces under it;
  governance for any OTLP runtime.
date: '2026-11-16'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - LangSmith
  - Agent Platform
  - Governance
author: Editorial
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/we-rebuilt-langsmith-around-the-agent'
sourceLevel: A
publisher: langchain
faqs:
  - question: What changed in the data model?
    answer: Flat projects give way to one agent record; local/dev/staging/prod, traces, evals, and deploys share one ID.
  - question: Keep my runtime?
    answer: Yes—connect traces/governance without moving hosts; OTLP supported; cloud, BYOC, and self-hosted.
draft: false
candidateId: langchain-2026-11-16-fc9fb307ba
---
LangChain’s blog (Sam Crowder, **16 Nov 2026**) explains why, after Series C and the **LangSmith Agent Platform** launch, the product is reorganized around a single **agent** object—so build, run, improve, and govern stop living in disconnected surfaces, and platform teams can answer which agents exist, who owns them, and how they cost and perform.

Each record carries an **owner**, a globally unique immutable **ID**, and a **type** that shapes dashboards and eval defaults (general purpose and coding first; voice and more on the roadmap). Local through production share that ID. Build in Studio’s natural-language builder, open-source harnesses, or any framework; run on Agent Server or keep your host and send traces. Governance leans on the **agent registry** and **LLM Gateway**, including vendor or employee-adopted agents that speak **OTLP**. Available in cloud, BYOC, and self-hosted. This is a **product-architecture** piece, not a point-feature changelog.
