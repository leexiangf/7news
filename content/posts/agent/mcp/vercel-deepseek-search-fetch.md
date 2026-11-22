---
title: Vercel AI Gateway 上线 DeepSeek Search / Fetch 工具
slug: vercel-deepseek-search-fetch
description: >-
  Vercel Changelog：AI Gateway 提供 DeepSeek Search 与 Fetch，可用同一 Gateway
  key 给任意支持 tool calling 的模型做检索与抓页，无需另开 DeepSeek 账号。
date: '2026-11-06'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - Vercel
  - DeepSeek
  - AI Gateway
  - 工具调用
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://vercel.com/changelog/ai-gateway-adds-deepseek-search-and-fetch-tools
sourceLevel: A
publisher: vercel
faqs:
  - question: 需要 DeepSeek 账号吗？
    answer: 不需要。Changelog 写明用 AI Gateway API key 即可，换模型提供商时可保留同一套工具。
  - question: SDK 版本？
    answer: AI SDK v6 ≥ 6.0.321 或 v7 ≥ 7.0.160。
draft: false
candidateId: vercel-2026-11-06-8d6a841a49
---
Vercel Changelog 宣布 **DeepSeek Search** 与 **DeepSeek Fetch** 经 **AI Gateway** 可用。Search 返回相关页的标题、URL 与摘要；Fetch 把页面内容拉成 Markdown 供模型阅读。任意支持 tool calling 的模型都可调用，**共用一把 Gateway key**，不必另开 DeepSeek 账号，换模型提供商时也可保留同一套工具。

依赖 **AI SDK** v6 ≥ 6.0.321 或 v7 ≥ 7.0.160，配置 `AI_GATEWAY_API_KEY` 后把 `gateway.tools.deepseekSearch` / `deepseekFetch` 传入 `tools` 即可组合「搜 → 抓 → 总结」流程。
