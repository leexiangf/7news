---
title: Foundry Local runs Qwen3.8-27B on-device for Copilot coding
slug: foundry-local-qwen38
description: >-
  Microsoft Foundry shows Foundry Local serving Qwen3.8-27B on developer
  hardware, ONNX Runtime–optimized and wired to GitHub Copilot for private,
  offline, predictable local coding.
date: '2026-11-05'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Foundry Local
  - Qwen
  - Copilot
  - local inference
author: Editorial
locale: en
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/foundry-local-agentic-coding-qwen3-8-27b/
sourceLevel: A
publisher: microsoft
faqs:
  - question: How much VRAM is needed?
    answer: >-
      With 4-bit quantization the post cites ~18 GB, runnable on 24 GB consumer
      GPUs at about 64K context; 32 GB+ can approach the model’s ~262K max.
  - question: What optimizations ship?
    answer: >-
      DFlash2 speculative decoding, CUDA graph/kernel work for SM121, INT4 and KV
      quantization, prefix caching, and continuous batching.
draft: false
candidateId: microsoft-foundry-2026-11-05-f4483e1a93
---
Microsoft Foundry’s blog shows **Foundry Local** running **Qwen3.8-27B** on developer hardware and connecting it to **GitHub Copilot**. The pitch is agentic coding without cloud round-trips: code and context stay on the machine, with more predictable inference cost, stronger privacy, and offline continuity.

Qwen3.8-27B is the primary optimization target for its coding-benchmark balance at a local-friendly size. Serving rides **ONNX Runtime** on NVIDIA GPUs end to end—**DFlash2** speculative decoding, CUDA graph/kernel tuning for SM121, INT4 weights and KV-cache quantization, embedding sharing, and CPU offload. The post says 4-bit shrinks the model to about **18 GB**, fitting **24 GB** cards at roughly **64K** context; **32 GB+** can approach the model’s ~**262K** max. Prefix caching and continuous batching keep multi-request, long-context flows responsive. Optimization recipes live in the Olive recipes repo.
