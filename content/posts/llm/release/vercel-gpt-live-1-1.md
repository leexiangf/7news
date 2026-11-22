---
title: Vercel AI Gateway 上架 GPT-Live 1.1 全双工语音模型
slug: vercel-gpt-live-1-1
description: >-
  Vercel：openai/gpt-live-1.1 经 AI Gateway 可用；全双工、可打断；转写与跨语言音色更稳；沿用原 Live 端点，通常只换模型
  ID。
date: '2026-11-19'
updated: '2026-11-21'
category: llm
subcategory: release
tags:
  - Vercel
  - AI Gateway
  - GPT-Live
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/gpt-live-1-1-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: 接入要改什么？
    answer: 沿用同一 Live 端点与客户端委托；已有 GPT-Live 集成通常只需换模型 ID（openai/gpt-live-1.1）。
  - question: 相对前代强调什么？
    answer: 全双工边说边听；可中途暂停、打断或补充；转写更准，跨语言口音与音色更一致——厂商口径。
draft: false
candidateId: vercel-2026-11-19-3280196289
---

Vercel Changelog（**2026-11-19**）宣布 **GPT-Live 1.1** 已在 **AI Gateway** 可用。定位为全双工语音模型：边说边听，呼叫方可在回复中途暂停、打断或补充细节。

## 集成与边界

| 项 | 口径 |
| --- | --- |
| 模型 ID | `openai/gpt-live-1.1` |
| 端点 | 同一 Live 端点与 client delegation——通常只换 ID |
| 相对前代（厂商） | 语音转写更准；跨语言口音与音色更一致 |

密钥、计费与示例以 Changelog 与 AI Gateway 文档为准。对实时语音应用：这是**网关侧上架**，能力边界与延迟仍回 OpenAI / Vercel 原文；上线前在目标口音与打断场景做回归。
