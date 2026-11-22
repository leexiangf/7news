---
title: LangSmith Coding Agents beta tracks spend by merged PRs
slug: langchain-coding-agents-roi
description: >-
  LangChain: LangSmith Cloud public beta links GitHub/GitLab PR/MR outcomes to
  thread spend for coding agents—Claude Code, Codex, Cursor, Copilot, Deep
  Agents.
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - LangSmith
  - Coding Agents
  - ROI
author: Editorial
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/langsmith-coding-agents-roi'
sourceLevel: A
publisher: langchain
faqs:
  - question: What are outcomes?
    answer: Links between PRs/MRs and the threads that produced them—cost per merge plus unattributed spend that never opened a PR.
  - question: Setup?
    answer: Install LangSmith plugins per coding agent → connect GitHub → open the coding agent overview; traces count toward normal usage.
draft: false
candidateId: langchain-2026-11-18-6985c741cc
---
LangChain’s blog (Jacob Lee, **18 Nov 2026**) launches **LangSmith for Coding Agents** as a Cloud **public beta**. On the Agent Platform’s coding-agent type, **outcomes** tie GitHub PRs / GitLab MRs to thread spend, rolling up open/closed/merged work and **unattributed** spend (reviews and investigations that may never open a PR).

The dashboard slices by work type, skills, most expensive PRs, and conversation length, with drill-down into the exact threads. Supported tracers include Claude Code, Codex, Cursor, Copilot in VS Code, and Deep Agents. Setup: install each agent’s LangSmith plugin, connect GitHub, open the overview. Observability/ROI feature—not a new coding model.
