---
title: Vercel AI Gateway 上线 Thinking Machines Inkling 2 Small
slug: vercel-inkling-2-small
description: >-
  Vercel Changelog：thinkingmachines/inkling-2-small 接入 AI Gateway，支持文本+图像输入、文本输出，面向编码 Agent
  与知识工作。
date: '2026-11-12'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Vercel
  - Inkling
  - Thinking Machines
  - AI Gateway
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/inkling-2-small-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: 模型 ID？
    answer: thinkingmachines/inkling-2-small；可用 AI SDK、fx、Chat Completions，或经 vercel ai-gateway setup 接入编码 Agent。
  - question: 输入输出模态？
    answer: 文本与图像输入，文本输出；Changelog 强调编码、读图与专业交付物。
draft: false
candidateId: vercel-2026-11-12-06d3068d8b
---
Vercel Changelog 宣布 Thinking Machines 的 **Inkling 2 Small** 已上 **AI Gateway**，模型名 `thinkingmachines/inkling-2-small`。定位多模态推理：文本与图像进、文本出，覆盖编码 Agent、读图（图表/界面）与把工具搜集结果写成文档/表格等交付物；视觉开发场景可用截图检查生成界面再迭代。

调用可走 AI SDK，或 `npx vercel ai-gateway setup` 后在 Claude Code / Codex / Cursor 中选用。架构参数与自托管数字见同日 vLLM 日零支持稿；本篇仅为 **Gateway 上架** 短讯。
