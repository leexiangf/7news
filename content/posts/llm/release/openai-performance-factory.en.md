---
title: 'OpenAI’s Performance Factory: Codex agents from alert to baseline check'
slug: openai-performance-factory
description: >-
  OpenAI describes Performance Factory—configurable workflows where cloud Codex
  agents investigate performance alerts, propose fixes for human review, then
  verify recovery against baseline after deploy.
date: '2026-11-18'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - OpenAI
  - Codex
  - performance
  - agents
author: Editors
locale: en
sourceUrls:
  - 'https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast'
sourceLevel: S
publisher: openai
faqs:
  - question: What problem does it target?
    answer: >-
      Recurring performance investigations move from manual digs into
      workflow-driven agents, with engineers still reviewing fixes.
  - question: How does a run work?
    answer: >-
      Four parts: a task service with configurable workflows, a dispatch loop,
      Codex in the cloud, and subscriptions that wake agents on change. The
      regression workflow opens on alerts; an agent diagnoses and proposes a
      fix; after deploy, another agent checks return to baseline.
draft: false
candidateId: openai-2026-11-18-6687f7be62
---
OpenAI published a look at Performance Factory, an internal system aimed at keeping ChatGPT-related performance issues found and fixed faster. The story is process and agents, not a new model drop.

The post splits the system into four pieces: a task service with configurable workflows, a dispatch loop, Codex running in the cloud, and subscriptions that wake agents when something changes. Engineers define workflows and instructions for recurring jobs. In the regression workflow, a performance alert opens a task; an agent investigates the slowdown, records findings, and proposes a fix for human review. After deployment, another agent picks up the same task to check whether performance has returned to baseline.

For engineering readers, treat it as a reference pattern for embedding Codex in performance on-call: humans keep merge and ship authority; agents compress time from alert to an evidenced diagnosis. The article does not publish an external SLA or open-source repo—use the OpenAI post as the source of record.
