---
title: OpenAI GPT-6.2 Astra 与 Sol 上架 Vercel AI Gateway
slug: vercel-gpt-6-2-astra-sol
description: >-
  Vercel Changelog：openai/gpt-6.2-astra 与 openai/gpt-6.2-sol 入 AI Gateway；支持
  Responses、fast mode 与 Ultrafast（service_tier ultrafast）；Astra Ultrafast 输出价称低于
  GPT-6 Astra 约 60%。
date: '2026-11-17'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Vercel
  - OpenAI
  - GPT-6.2
  - AI Gateway
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/gpt-6-2-astra-and-sol-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: 模型 ID？
    answer: openai/gpt-6.2-astra、openai/gpt-6.2-sol；可用 AI SDK、Codex/fx setup、Chat Completions 与 Responses。
  - question: Ultrafast？
    answer: providerOptions.openai.serviceTier 或 service_tier 设为 ultrafast；Changelog 称 Astra Ultrafast 输出价相对 GPT-6 Astra 约低 60%。
draft: false
candidateId: vercel-2026-11-17-bd90ff8837
---
Vercel Changelog（**2026-11-17**）宣布 **GPT-6.2 Astra** 与 **GPT-6.2 Sol** 上 **AI Gateway**，ID 为 `openai/gpt-6.2-astra` 与 `openai/gpt-6.2-sol`。Astra 面向复杂多步项目（既有代码库改动与测试、文档模板、computer use）；Sol 面向日常编码、写作与 Agent（含按简报做交互 Web）。

支持 Responses；可用 **fast mode** 与 OpenAI **Ultrafast**（AI SDK 设 `providerOptions.openai.serviceTier: 'ultrafast'`，或 Chat Completions/Responses 的 `service_tier`）。Changelog 称 Astra 的 Ultrafast **输出**单价相对 **GPT-6 Astra** 约低 **60%**。编码 Agent 经 `npx vercel ai-gateway setup` 选用。本稿为 **Gateway 上架** 短讯；模型评测与完整价目见 OpenAI 发布稿。
