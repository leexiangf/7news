---
title: Ollama 0.40.17：上线 Inkling 2 Mini，Apple Silicon 可并发多请求
slug: ollama-0-40-17
description: >-
  Ollama v0.40.17 加入 Thinking Machines 的 Inkling 2 Mini（约 26B/5.4B 活跃），并宣布 Apple
  Silicon 可同时服务多请求；本版仅支持 Apple Silicon。
date: '2026-11-21'
updated: '2026-11-22'
category: eng
subcategory: infra
tags:
  - Ollama
  - Inkling
  - Local Inference
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/ollama/ollama/releases/tag/v0.40.17'
sourceLevel: A
publisher: ollama
faqs:
  - question: Inkling 2 Mini？
    answer: 约 26B 参数、5.4B 活跃；多模态、工具与思考；通稿称约 20GB 可上 Mac，SWE-Bench Verified 约 79.2%。
  - question: PC？
    answer: 本版 Inkling 仅 Apple Silicon；PC 支持称将随后续版本。
draft: false
candidateId: ollama-releases-2026-11-21-6dc7986520
---
Ollama 发布 **v0.40.17**（池内稳定签 **2026-11-21**）。主推 **Inkling 2 Mini**（Thinking Machines）：约 **26B** 参数、**5.4B** 活跃，环状层换算力；通稿称约 **20GB** 可跑在 Mac，支持文本/图像、工具与思考，SWE-Bench Verified 约 **79.2%**（厂商数字）。`ollama run inkling-2-mini`；**本版仅 Apple Silicon**，PC 待后续。

其它：Apple Silicon 可**同时服务多请求**；`ollama launch claude` 支持 Claude Code 延迟加载 MCP；Vulkan/Windows iGPU KV、工具 JSON schema 保留等修复。同日 RC 不另写。属**本地运行时点版本+新模型**。
