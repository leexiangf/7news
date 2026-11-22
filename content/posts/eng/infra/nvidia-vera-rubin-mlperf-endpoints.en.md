---
title: NVIDIA Vera Rubin NVL72 leads provisional MLPerf Endpoints v1.0
slug: nvidia-vera-rubin-mlperf-endpoints
description: >-
  NVIDIA Technical Blog: provisional MLPerf Endpoints v1.0 shows Vera Rubin
  NVL72 at roughly 5×–10× throughput per kW vs verified GB300 NVL72 at shared
  minimum E2E interactivity; Rubin pending MLCommons review.
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Vera Rubin
  - MLPerf
  - Inference
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/nvidia-vera-rubin-nvl72-leads-agentic-inference-performance-on-mlperf-endpoints-v1-0/
sourceLevel: S
publisher: nvidia
faqs:
  - question: How to read the ratios?
    answer: Best TPS/kW at a shared minimum E2E interactivity floor—about 10× (Kimi K3), 9× (DeepSeek-V4.1-Flash), 5× (Qwen3.6-35B-A3B) vs GB300.
  - question: Result status?
    answer: GB300 verified; Vera Rubin provisional pending MLCommons verification and peer review—subject to change.
draft: false
candidateId: nvidia-developer-2026-11-16-c4c2b3a7c4
---
NVIDIA’s Technical Blog (**16 Nov 2026**) walks **provisional** **MLPerf Endpoints v1.0** numbers for **Vera Rubin NVL72** on multi-turn agentic coding and enterprise workflows. The suite checks generated tool calls and intent; separate SWE-bench Verified runs look at end-to-end task solving.

At a shared minimum end-to-end interactivity floor (about **50 tok/s per user** in the Kimi K3 footnote example), NVIDIA cites roughly **10× / 9× / 5×** **throughput per provisioned kW** versus verified **GB300 NVL72** on **Kimi K3**, **DeepSeek-V4.1-Flash**, and **Qwen3.6-35B-A3B**, with about **3×–5×** E2E interactivity at matched concurrency. Hardware callouts include **HBM4**, Tensor Cores, and sixth-gen **NVLink**; software covers prefix caching, state reuse, **Dynamo** routing, disaggregated prefill/decode, and model-specific kernels such as MegaMoE and multi-token prediction.

Footnotes list result IDs, concurrency, TTFT, system TPS, and power. **Vera Rubin figures are provisional** and may change after MLCommons verification. Cite the MLCommons endpoints page and the blog footnotes when quoting.
