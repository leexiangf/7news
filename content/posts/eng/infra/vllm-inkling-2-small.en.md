---
title: 'vLLM day-0 for Inkling 2 Small: 594B MoE, mixed precision, DSpark'
slug: vllm-inkling-2-small
description: >-
  vLLM adds Thinking Machines Inkling 2 Small (~594B total / 17B active, 1M
  context) on day 0 with NVFP4+MXFP8 MoE and native DSpark; up to ~630 TPS/user
  on GB200 TP4.
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - Inkling
  - Thinking Machines
  - MoE
author: Editorial
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-12-inkling2-small'
sourceLevel: S
publisher: vllm
faqs:
  - question: Scale and modalities?
    answer: ~594B total, 17B active, up to 1M context; text+image in, text out (audio-in dropped vs prior Inkling).
  - question: How to serve?
    answer: vllm serve thinkingmachines/Inkling-2-Small with Inkling parsers and DSpark speculative-config; LoRA and SkyRL RL supported.
draft: false
candidateId: vllm-blog-2026-11-12-8d207d08ba
---
vLLM announces day-0 support for Thinking Machines’ **Inkling 2 Small**: a multimodal MoE at about **594B** total / **17B** active parameters with up to **1M** context (48 layers, 384 experts, top-8). Versus Inkling it adds block attention residuals, attention sink, gated attention, and a 23-layer ViT image encoder; MoE experts use **NVFP4** on layers 0–39 and **MXFP8** on 40–47 so a single node can serve it.

The checkpoint ships a native **DSpark** draft (RNN head, ~7 speculative tokens/step). Optimizations include kernel fusion, PDL, a tuned Gluon attention kernel, and sequence parallelism—up to about **630 TPS/user** on GB200 at **TP4** with acceptance length 3.5. LoRA and RL via SkyRL are supported. Example serve lines need Inkling reasoning/tool parsers plus speculative-config. Figures are vendor measurements.
