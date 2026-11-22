---
title: Vercel AI Gateway 上线阿里 Qwen4-Max
slug: vercel-qwen4-max
description: >-
  Vercel Changelog：alibaba/qwen4-max 接入 AI Gateway，面向编码与长程
  Agent，支持图像输入、1M 上下文、工具调用与结构化输出；阿里称 Work360 上 token 约少 35%。
date: '2026-11-15'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Vercel
  - Qwen
  - Alibaba
  - AI Gateway
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/qwen4-max-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: 模型 ID？
    answer: alibaba/qwen4-max；可用 AI SDK、fx、Chat Completions 或 vercel ai-gateway setup。
  - question: 能力要点？
    answer: 推理向编码/长程 Agent；图像输入、1M 上下文、工具调用、结构化输出；Work360 相对 Qwen3.8-Max 高推理档约少 35% token（阿里自述）。
draft: false
candidateId: vercel-2026-11-15-0d9461929c
---
Vercel Changelog（**2026-11-15**）宣布阿里 **Qwen4-Max** 已上 **AI Gateway**，模型 ID `alibaba/qwen4-max`。定位推理模型，面向编码与长程 Agent 任务，支持**图像输入**、**1M** 上下文、工具调用与结构化输出；示例场景含驱动 Blender/Unity/Unreal/Godot 并用视觉反馈修错，以及跨文档/图像生成带引用的报表。

阿里称在 **Work360** 基准、高推理力度下相对 **Qwen3.8-Max** 约少 **35%** token（厂商自述）。可通过 AI SDK、fx、`npx vercel ai-gateway setup` 接入编码 Agent。本篇为 **Gateway 上架** 短讯；完整模型卡以阿里官方为准。
