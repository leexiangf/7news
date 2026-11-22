---
title: Ollama v0.40.15：Claude/Codex 启动与 OpenAI 兼容采样修复
slug: ollama-v0-40-15
description: >-
  Ollama 发布 v0.40.15：改进 Claude Code / Codex 启动路径、云端网页搜索解码，以及 OpenAI
  兼容端点对模型默认采样参数的行为。
date: '2026-11-06'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Ollama
  - llama.cpp
  - 本地推理
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/ollama/ollama/releases/tag/v0.40.15'
sourceLevel: A
publisher: ollama
faqs:
  - question: OpenAI 兼容端点改了什么？
    answer: 客户端未传 temperature/top_p 时，不再强制 1.0，而使用模型自带采样默认，与 /api/chat 对齐。
  - question: 还有哪些要点？
    answer: Claude 启动尊重输出 token 上限；云搜索响应解码；ChatGPT 断线可重试；更新 MLX 与 llama.cpp。
draft: false
candidateId: ollama-releases-2026-11-06-699ab745e0
---
Ollama 打出 **v0.40.15** 正式标签（相对此前 RC）。公开说明要点包括：`ollama launch claude` 应用模型输出 token 上限，避免云端模型撞上默认 128k 帽；`/api/chat` 上云端网页搜索响应（含压缩）解码修正；**OpenAI 兼容端点**在客户端未传 `temperature` / `top_p` 时改用模型自带采样默认，而不再覆盖为 1.0，以对齐 `/api/chat`；应用侧可对 ChatGPT 断线重试；`ollama launch codex` 在配置前校验 ChatGPT 路由。另更新 MLX 与 llama.cpp。细节以 GitHub Release 正文为准。
