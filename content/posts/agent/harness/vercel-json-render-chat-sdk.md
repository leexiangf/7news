---
title: Chat SDK Agent 可用 json-render 流式生成式 UI
slug: vercel-json-render-chat-sdk
description: >-
  Vercel Changelog：Chat SDK Agent 经 json-render
  把类型化组件目录写成 JSON 规格并流式渲染为各平台原生卡片（如 Slack Block Kit、Teams Adaptive
  Cards）。
date: '2026-11-06'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Chat SDK
  - json-render
  - 生成式 UI
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/json-render-and-chat-sdk-agents'
sourceLevel: A
publisher: vercel
faqs:
  - question: Agent 输出什么？
    answer: 按 catalog 写出 JSON 规格；json-render 转成 Chat SDK card，再由适配器发到各 IM 原生格式。
  - question: catalog 里有什么？
    answer: 官方称含表格、图表、按钮等，避免为每种消息形态单独维护工具。
draft: false
candidateId: vercel-2026-11-06-ca6f08fa82
---
Vercel Changelog 宣布：**Chat SDK** Agent 可与 **json-render** 配合，流式输出生成式 UI。做法是维护一份类型化组件 **catalog**，Agent 写出 JSON 规格，由 `json-render` 转成 Chat SDK card，再经适配器发到各平台原生格式（如 Slack **Block Kit**、Teams **Adaptive Cards**）。

catalog 覆盖表格、图表、按钮等常见形态，减少「每种消息形状单独做一个 tool」的维护成本。示例用 `@json-render/core` / `@json-render/chat` 与 AI SDK 的 `streamText` 在 `onNewMention` 里流式出卡。
