---
title: Foundry Local 本地跑 Qwen3.8-27B，对接 GitHub Copilot
slug: foundry-local-qwen38
description: >-
  Microsoft Foundry 介绍用 Foundry Local 在开发机上跑 Qwen3.8-27B，经 ONNX Runtime
  优化后对接 Copilot，强调隐私、离线与可预期推理成本。
date: '2026-11-05'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Foundry Local
  - Qwen
  - Copilot
  - 本地推理
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/foundry-local-agentic-coding-qwen3-8-27b/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 显存大概要多少？
    answer: >-
      文中称 4-bit 后约 18 GB，可在 24 GB 消费级 GPU 上跑到约 64K
      上下文；32 GB 及以上可逼近模型最大约 262K。
  - question: 优化手段有哪些？
    answer: DFlash2 推测解码、CUDA graph/内核优化、INT4 与 KV 量化、前缀缓存与 continuous batching 等。
draft: false
candidateId: microsoft-foundry-2026-11-05-f4483e1a93
---
Microsoft Foundry 博客介绍如何用 **Foundry Local** 在开发者本机跑 **Qwen3.8-27B**，并接到 **GitHub Copilot**：代码与上下文留在本机，换来更可预期的推理成本、更强隐私，以及断网仍可继续写码。

选型理由是该模型在 Agent 终端、SWE-bench Pro、仓库级生成等公开基准上表现均衡，体积又适合高性能本地部署。推理栈基于 **ONNX Runtime**，面向 NVIDIA GPU 做端到端优化：含 **DFlash2** 推测解码、针对 SM121 的 CUDA graph/内核、INT4 权重与 KV 量化、embedding 共享与 CPU offload。文中称 4-bit 后约 **18 GB**，24 GB 卡可支持约 **64K** 上下文，更大显存可逼近模型约 **262K** 上限；前缀缓存与 continuous batching 支撑多请求长上下文。优化配方见 Olive recipes 仓库。
