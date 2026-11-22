---
title: LangSmith Coding Agents 公测，按合并 PR 追踪花费
slug: langchain-coding-agents-roi
description: >-
  LangChain：LangSmith Cloud 公测 Coding Agents 看板，用 outcomes 把 GitHub/GitLab
  PR/MR 与会话花费关联；支持 Claude Code、Codex、Cursor、Copilot、Deep Agents。
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - LangSmith
  - Coding Agents
  - ROI
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/langsmith-coding-agents-roi'
sourceLevel: A
publisher: langchain
faqs:
  - question: outcomes 是什么？
    answer: 把 PR/MR 与产生它们的 threads 关联，可看合并成本与从未产出 PR 的 unattributed 花费。
  - question: 怎么开通？
    answer: 为各编码 Agent 装 LangSmith 插件 → 连接 GitHub → 打开 coding agent overview；痕迹计入常规 tracing 用量。
draft: false
candidateId: langchain-2026-11-18-6985c741cc
---
LangChain 博客（Jacob Lee，**2026-11-18**）宣布 **LangSmith for Coding Agents** 在 Cloud **公测**：在 Agent Platform 的 coding agent 类型上，用 **outcomes** 把 GitHub PR / GitLab MR 与 threads 花费挂钩，汇总 open/closed/merged 与**未归因**花费（审查/排查等未必落 PR 的工作）。

看板含按工作类型、技能、最贵 PR、会话长度等切片，并可点回具体 thread。支持 Claude Code、Codex、Cursor、VS Code 中 Copilot、Deep Agents。开通三步：装各 Agent 的 LangSmith 插件、连 GitHub、打开 overview。属**观测/ROI**能力，非新编码模型。
