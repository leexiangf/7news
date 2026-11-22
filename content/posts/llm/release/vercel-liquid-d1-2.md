---
title: Liquid AI d1.2 / d1.2-ultra 上架 Vercel AI Gateway
slug: vercel-liquid-d1-2
description: >-
  Vercel：Liquid AI d1.2 / d1.2-ultra 决策模型上架 AI Gateway；Boolean / Choice / Score /
  Box；支持音频与图像；调用名 liquid/d1.2(-ultra)。
date: '2026-11-19'
updated: '2026-11-21'
category: llm
subcategory: release
tags:
  - Vercel
  - Liquid AI
  - AI Gateway
  - d1.2
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://vercel.com/changelog/liquid-ais-d1-2-and-d1-2-ultra-are-now-available-on-ai-gateway
sourceLevel: A
publisher: vercel
faqs:
  - question: 和生成模型有何不同？
    answer: 决策模型返回结构化答案而非长文；可对同一输入挂多个 Boolean / Choice / Score / Box 问题。
  - question: 两档怎么选？
    answer: d1.2 更快更省；d1.2-ultra 为 Liquid 最准决策模型。
draft: false
candidateId: vercel-2026-11-19-d50f4c5c00
---

Vercel Changelog（**2026-11-19**）宣布 **Liquid AI** 的 **d1.2** 与 **d1.2-ultra** 已在 **AI Gateway** 可用，并支持音频输入与边界框。定位是**决策模型**：返回结构化判定，而不是生成长文本。

## 题型与选型

| 题型 | 用途 |
| --- | --- |
| Boolean | 是否 / 概率 |
| Choice | 选类 |
| Score | 按量表打分 |
| Box | 图像定位（top/bottom/left/right 为高宽分数） |

同一输入可一次挂多个问题。**d1.2** 更快、成本更低；**d1.2-ultra** 为最准档。调用名 `liquid/d1.2` / `liquid/d1.2-ultra`，需 `AI_GATEWAY_API_KEY`。示例：AI SDK 7（≥7.0.136）`experimental_decide` 读 voicemail.flac 判退款概率；Decisions API（`/v1/decisions`）对表单图做 box。决策请求进 Gateway 日志并计入预算。价目与限额以 Gateway 文档为准。
