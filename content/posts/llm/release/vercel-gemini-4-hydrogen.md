---
title: Vercel AI Gateway 上线 Gemini 4 Hydrogen
slug: vercel-gemini-4-hydrogen
description: >-
  Vercel Changelog：google/gemini-4-hydrogen 接入 AI Gateway，定位接替 3.8
  Flash，强化 agentic 编码、知识工作与工具编排。
date: '2026-11-12'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Vercel
  - Gemini
  - AI Gateway
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/gemini-4-hydrogen-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: 模型 ID？
    answer: google/gemini-4-hydrogen；可用 AI SDK、Claude Code、fx、Chat Completions 等路径。
  - question: 官方模型稿在哪？
    answer: DeepMind/Google 同日发布介绍页；本篇只覆盖 Gateway 上架与调用方式。
draft: false
candidateId: vercel-2026-11-12-12b847596c
---
Vercel Changelog 宣布 Google **Gemini 4 Hydrogen** 已上 **AI Gateway**，模型名 `google/gemini-4-hydrogen`。文中称其接替 **Gemini 3.8 Flash**，在相近延迟档位上改善 agentic 编码、知识工作与工具使用，并更紧跟系统指令、格式与任务边界，减少搜索/编码报告中的无依据声称。

可通过 AI SDK、`npx vercel ai-gateway setup` 接入 Claude Code / Codex / Cursor 等，并在 playground 试用。能力与定价细节以 Google 官方发布为准；本篇仅为 **Gateway 可用性** 短讯。
