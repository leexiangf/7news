---
title: Vercel AI Gateway 免费上线 Parallel Decisions Fast（至 11-23）
slug: vercel-parallel-decisions-free
description: >-
  Vercel Changelog：parallel/parallel-decisions-fast 接入 AI Gateway，检索实时网页作答并返回概率与引用；至
  2026-11-23 免费，无需 Parallel 账号。
date: '2026-11-13'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Parallel
  - AI Gateway
  - Decision
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://vercel.com/changelog/parallel-decisions-now-available-on-ai-gateway-for-free
sourceLevel: A
publisher: vercel
faqs:
  - question: 免费到何时？
    answer: Changelog 写明至 2026-11-23；之后计费以 Gateway/厂商政策为准。
  - question: 题型？
    answer: Boolean（是/否概率）、Choice、Score；相关问题可共享检索证据；引用挂在整次请求上。
draft: false
candidateId: vercel-2026-11-13-ef655ff6d1
---
Vercel Changelog（**2026-11-13**）宣布 Parallel 的 **Decisions Fast** 已上 **AI Gateway**，模型名 `parallel/parallel-decisions-fast`，并写明 **至 2026-11-23 免费**，无需单独 Parallel 账号。它检索**实时网页**回答公司、产品、政策等会变的问题，返回概率与带摘录的引用，供 CRM  enrichment、资格判断、线索路由或核验声明。

题型含 Boolean、Choice、Score；同请求内相关问题可共享上下文与证据。调用可走 AI SDK `experimental_decide`、TypeSafe 兼容 API 或 OpenAI 兼容 Decisions API；引用含 URL/标题/摘录，按**整次请求**汇总而非逐题映射。请求计入 Gateway 日志与预算。属**限时免费上架**短讯。
