---
title: Vercel AI Gateway 上 Parallel 网页搜索 fast 模式免费至 2027-01-31
slug: vercel-parallel-web-search-free
description: >-
  Vercel Changelog：Parallel web search fast 模式在 AI Gateway 免费至 2027-01-31，默认
  ZDR；eve 经 Gateway 时 web_search 默认走 Parallel fast。
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Parallel
  - Web Search
  - AI Gateway
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://vercel.com/changelog/parallel-web-search-is-free-on-ai-gateway-and-eve-through-january-31
sourceLevel: A
publisher: vercel
faqs:
  - question: 免费范围？
    answer: 仅 fast 模式至 2027-01-31；默认 Zero Data Retention；其他模式按标准计价。
  - question: 怎么调用？
    answer: >-
      AI SDK 加 gateway.tools.parallelSearch({ mode: 'fast' })；无需单独 Parallel API
      key。
draft: false
candidateId: vercel-2026-11-18-309062f186
---
Vercel Changelog（**2026-11-18**）宣布 **Parallel** 网页搜索的 **fast** 模式在 **AI Gateway** 上免费至 **2027-01-31**，且 Parallel 成为 **eve** Agent 的默认网页搜索。任意 Gateway 模型可用，无需单独 Parallel API key；返回链接与短摘录，可按站点或发布日期过滤。

eve 在模型经 Gateway 服务时，内置 `web_search` 自动用 Parallel fast。AI SDK 示例：`gateway.tools.parallelSearch({ mode: 'fast' })`。优惠仅覆盖 fast，默认开 **Zero Data Retention**；其他模式按标准价。属**促销+默认切换**短讯。
