---
title: 'LangChain on Goal Engineering: scope agents for better feedback'
slug: langchain-goal-engineering
description: >-
  Harrison Chase et al.: design long-horizon agent goals so humans can give
  high-quality feedback easily; Actively AI moved from per-account agents to
  cross-account motions on Deep Agents.
date: '2026-11-14'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - Goal Engineering
  - Deep Agents
  - Agent
author: Editorial
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/goal-engineering'
sourceLevel: A
publisher: langchain
faqs:
  - question: Core claim?
    answer: Scope agents so high-quality human feedback is easy inside that scope; review UX is often the bottleneck.
  - question: What changed at Actively?
    answer: From one agent per account to motion agents (e.g. outbound) across accounts; account context gathered in the background.
draft: false
candidateId: langchain-2026-11-14-b576b148cf
---
LangChain’s blog (Harrison Chase with Actively AI co-authors, **14 Nov 2026**) frames **Goal Engineering**: as agents take open-ended goals, design their scope so people can give **high-quality feedback** while they run. Failures often come from context that isn’t written down—brand taste, how bold to be—and must arrive as expert feedback; investing in a delightful review UX is therefore first-class.

**Actively AI** case: v1 used one agent per sales account to push deals forward, but reps context-switched across agents and struggled to share learnings; v2 (on **Deep Agents**) uses **motions**—jobs like outbound or early-stage deal work—across many accounts so similar tasks are reviewed together and feedback transfers. Objective account context is assembled by background gatherers; motions pull it as needed. The close: prompt/context engineering may fade; **goal engineering** remains. Opinion-plus-case study, not a product launch.
