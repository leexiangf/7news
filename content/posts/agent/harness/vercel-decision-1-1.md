---
title: Microsoft Decision-1.1 上架 Vercel AI Gateway
slug: vercel-decision-1-1
description: >-
  Vercel Changelog：microsoft/decision-1.1 入 AI Gateway；相对 Decision-1 更准、校准更好、更快；
  返回 Boolean/Choice/Score 结构化答案，请求格式兼容，需 AI SDK ≥7.0.128。
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Microsoft
  - Decision
  - AI Gateway
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/decision-1-1-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: 模型 ID 与切换？
    answer: microsoft/decision-1.1；请求格式同 Decision-1，改 ID 即可。
  - question: SDK？
    answer: TypeScript ai ≥7.0.128 的 experimental_decide，或 OpenAI Python SDK ≥3.26.0 的 Decisions API。
draft: false
candidateId: vercel-2026-11-17-ea2cc6d3ea
---
Vercel Changelog（**2026-11-17**）宣布 Microsoft AI 的 **Decision-1.1** 上 **AI Gateway**，ID `microsoft/decision-1.1`。相对 **Decision-1** 称更准、概率校准更好、更快；面向路由客服、选模型、工作流下一步、给回答打分等，返回结构化答案而非自由文本——**Boolean**（条件为真的概率）、**Choice**（类别与各选项概率）、**Score**（自定义量表数值）；同一输入可挂多题。

请求格式与 Decision-1 兼容。可用 AI SDK（`experimental_decide`，**ai ≥7.0.128**）、OpenAI 兼容 Decisions API（Python SDK **≥3.26.0**）或 AI CLI；计入预算与日志，支持 decision fallback。本稿为 **Gateway 上架** 短讯；Foundry 侧 GA 等以微软公告为准。
