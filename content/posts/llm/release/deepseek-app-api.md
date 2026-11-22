---
title: DeepSeek 把 App 侧能力开放进 API：搜索、文件、链接与语音可组合调用
slug: deepseek-app-api
description: >-
  DeepSeek 于 2026-11-13 宣布 App 同款能力经 API 可用：V4.1-Flash 内置联网搜索、读链、文件解析与安全检查， 并提供
  OCR/ASR/TTS 等独立接口及开源演示。
date: '2026-11-13'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - DeepSeek
  - API
  - V4.1-Flash
  - 工具调用
author: 编辑部
locale: zh
sourceUrls:
  - 'https://api-docs.deepseek.com/news/news261113'
  - 'https://api-docs.deepseek.com/guides/build_a_chatbot'
  - 'https://github.com/deepseek-ai/chat-demo'
sourceLevel: S
publisher: deepseek
faqs:
  - question: 内置能力有哪些？
    answer: >-
      在 V4.1-Flash（deepseek-flash）的 Messages / Responses / Chat Completions
      上，服务端可装配联网搜索（含非思考模式带引用的网页/图片搜索）、深度思考中的检索读页、文件输入（PDF/Office/图片等）、自动读用户消息里的
      URL，以及输入输出安全检查。
  - question: 如何开启、面向公众应用要注意什么？
    answer: >-
      搜索用 deepseek_web_search，读链用
      deepseek_read_url。面向公众的应用必须开启安全检查；开发者仍需自行承担内容审核、适用的模型备案与 AI
      生成内容标识等义务。扩展能力在常规 token 费之外另计工具用量费，细则见官方工具定价表。
draft: false
candidateId: deepseek-news-2026-11-20-c1a85d8bd6
---
DeepSeek 在 API 文档新闻页宣布：原先集中在 DeepSeek App 里的能力，现在可以通过 API 直接调用。官方落款日期为 **2026 年 11 月 13 日**（采集入库日晚于新闻日，正文以官网为准）。目标很直接——少重复造「搜索、读文件、读链接、语音」底座，把精力放在产品差异化上。

能力拆成两条路径。一条是挂在 **V4.1-Flash（`deepseek-flash`）** 上的内置工具：覆盖 `Messages`、`Responses`、`Chat Completions`，工具调用与上下文装配由服务端处理。清单包括：非思考模式下的网页/图片搜索并带引用；多步推理过程中的检索与读页；把 PDF、Office、图片等解析进对话；自动抓取用户消息中的链接；以及对输入输出做安全检查并在风险时返回拒绝指示。开启方式写明为 `deepseek_web_search` 与 `deepseek_read_url`。另一条是独立接口：Search、Fetch、OCR、ASR、TTS，方便嵌进自有流水线。

合规与成本是同一段的硬约束。面向公众的应用**必须**开启安全检查；开发者仍要对内容审核、适用的模型备案以及 AI 生成内容标识负责。扩展能力在常规 token 计费之外另收**工具用量费**，具体数字以页面内工具定价表为准。官方同时放出可导入 DeepSeek 会话历史的开源前端演示：演示页、`deepseek-ai/chat-demo` 仓库，以及 chatbot 构建指南。

对集成方，可把这次更新理解成「App 能力面 API 化」：先选内置工具快速对齐 App 体验，或用独立 OCR/ASR/TTS 拼自定义链路；上线前核对安全开关与工具账单，并对照 chatbot 指南做最小可复现。后续观察点是工具价表是否调整，以及 Flash 之外的型号是否跟进同一工具面。
