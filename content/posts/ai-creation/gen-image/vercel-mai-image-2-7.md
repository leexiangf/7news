---
title: Microsoft MAI-Image-2.7 / Flash 上架 Vercel AI Gateway（公测）
slug: vercel-mai-image-2-7
description: >-
  Vercel Changelog：microsoft/mai-image-2.7 与 mai-image-2.7-flash 公测入 AI Gateway；
  最高 2048×2048，支持透明背景与最多五张参考图编辑；无需微软账号。
date: '2026-11-17'
updated: '2026-11-20'
category: ai-creation
subcategory: gen-image
tags:
  - Vercel
  - Microsoft
  - MAI-Image
  - AI Gateway
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://vercel.com/changelog/mai-image-2-7-and-mai-image-2-7-flash-now-available-on-ai-gateway
sourceLevel: A
publisher: vercel
faqs:
  - question: 两档怎么选？
    answer: mai-image-2.7 偏最终成片质量；mai-image-2.7-flash 偏更快更便宜的试 prompt / 变体。
  - question: 透明底怎么开？
    answer: AI SDK 设 providerOptions.azure.background 为 transparent；需 AI SDK 6+。
draft: false
candidateId: vercel-2026-11-17-b56b81dd41
---
Vercel Changelog（**2026-11-17**）宣布 Microsoft **MAI-Image-2.7** 与 **MAI-Image-2.7-Flash** 以**公测**上 **AI Gateway**，ID `microsoft/mai-image-2.7` 与 `microsoft/mai-image-2.7-flash`。一钥文生图或编辑，无需微软账号；最高输出 **2048×2048**，生成与编辑均可透明背景；称支持写实、文字渲染，以及对产品/人像/版式的定向编辑，最多 **五张**参考图。

2.7 偏质量优先成片，Flash 偏探索与变体。示例用 **AI SDK 6+** 的 `generateImage`，透明 PNG 设 `providerOptions.azure.background: 'transparent'`；亦可用 AI CLI。本稿为 **Gateway 公测上架** 短讯；商用边界以微软与 Gateway 文档为准。
