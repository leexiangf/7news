---
title: MiniMax H3 Image 上线 Vercel AI Gateway（含 Highspeed）
slug: vercel-minimax-h3-gateway
description: >-
  Vercel Changelog：minimax/minimax-h3-image 与 highspeed 变体可在 AI Gateway
  文生图与改图，支持自定义尺寸至 2K/4K，无需单独 MiniMax 账号。
date: '2026-11-10'
updated: '2026-11-20'
category: ai-creation
subcategory: gen-image
tags:
  - Vercel
  - MiniMax
  - AI Gateway
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://vercel.com/changelog/minimax-h3-image-and-highspeed-now-available-on-ai-gateway
sourceLevel: A
publisher: vercel
faqs:
  - question: 模型 ID？
    answer: minimax/minimax-h3-image 与 minimax/minimax-h3-image-highspeed。
  - question: 能否改图？
    answer: 可以；把已生成图与文本指令一并传入，亦支持 OpenAI 兼容的 /v1/images 路由。
draft: false
candidateId: vercel-2026-11-10-39585ac01d
---
Vercel Changelog 宣布 **MiniMax H3 Image** 与 **H3 Image Highspeed** 经 **AI Gateway** 可用，模型名分别为 **`minimax/minimax-h3-image`** 与 **`minimax/minimax-h3-image-highspeed`**。一次 API Key 即可文生图与改图，无需单独 MiniMax 账号。

两款均支持自定义尺寸与宽高比，含 **2K / 4K**；Highspeed 在相同生成/编辑能力下更快。示例用 AI SDK `generateImage`，改图时把图像与文本指令一并传入；亦兼容 OpenAI 风格的 `/v1/images/generations` 与 `/v1/images/edits`。价目与限额见 Gateway 模型页。
