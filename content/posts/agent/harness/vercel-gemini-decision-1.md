---
title: Vercel AI Gateway 上线 Google Gemini Decision 1
slug: vercel-gemini-decision-1
description: >-
  Vercel Changelog：多模态决策模型 google/gemini-decision-1 接入 AI Gateway，可输出布尔概率、选项与分数，用于路由与策略判定。
date: '2026-11-11'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Gemini
  - AI Gateway
  - Decision
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/gemini-decision-1-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: 模型 ID？
    answer: google/gemini-decision-1；可通过 AI SDK、TypeSafe 兼容 API 或 Decisions API 调用。
  - question: 模态支持有何限制？
    answer: PDF/音频/视频需 AI SDK 7；TypeSafe 与 Decisions API 目前支持文本与图像。
draft: false
candidateId: vercel-2026-11-11-ce36778b27
---
Vercel Changelog 宣布 Google 的 **Gemini Decision 1** 已上 **AI Gateway**。该多模态决策模型面向文本、图像、音频、视频与 PDF，返回**布尔概率、选项与分数**，用于请求路由、策略检查、过滤 Agent 工具或结果排序，而**不生成普通输出 token**。

调用模型 ID 为 `google/gemini-decision-1`，可走 **AI SDK**（含 `experimental_decide`）、TypeSafe 兼容 API 或 Decisions API。**PDF / 音频 / 视频**输入需 **AI SDK 7**；TypeSafe 与 Decisions API 当前支持文本与图像。决策调用会出现在 Gateway 日志并计入预算，与其他模型请求一并统计。选型与 Choice / Score / Boolean 题型见 Vercel 决策文档与决策模型目录。
