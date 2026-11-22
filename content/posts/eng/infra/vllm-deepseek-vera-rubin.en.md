---
title: 'vLLM: DeepSeek-V4.1-Flash on Vera Rubin vs GB300 NVL72'
slug: vllm-deepseek-vera-rubin
description: >-
  Part three of vLLM’s DeepSeek-V4.1-Flash series moves the stack to Vera Rubin
  NVL72, citing ~58× throughput vs GB300 under AgentX with P/D and Wide-EP.
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - DeepSeek
  - Vera Rubin
  - throughput
author: Editors
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-12-deepseek-v41-flash-vera-rubin'
sourceLevel: A
publisher: vllm
faqs:
  - question: How to read “58×”?
    answer: >-
      Vendor-stated under SemiAnalysis AgentX with P/D disaggregation and
      Wide-EP; cite whether cached tokens and power normalization are included.
draft: false
candidateId: vllm-blog-2026-11-12-8e1c72ed6e
---
vLLM’s third DeepSeek-V4.1-Flash post moves the same stack from GB300 NVL72 (P/D + Wide-EP) onto **Vera Rubin NVL72**. The title cites about **58×** throughput versus GB300 and figures such as **387 tokens/s**—all blog measurement narrative.

They use **SemiAnalysis AgentX** as a representative agentic serving load; throughput counts cached input, uncached input, and output tokens, with power-normalized views as well. Optimization groups and hardware facts live in the original.

Cluster readers should **not quote 58× without the benchmark setup**; reproduce only with aligned software, EP/PD config, and AgentX version.
