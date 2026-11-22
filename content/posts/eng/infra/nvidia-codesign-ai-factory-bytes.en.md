---
title: 'NVIDIA on every AI-factory byte: five co-design levers'
slug: nvidia-codesign-ai-factory-bytes
description: >-
  NVFP4, wide EP, Dynamo KV, Vera CPU, and CMX; Vera Rubin NVL72 claims up to
  ~30× throughput per megawatt vs GB300 at the same 288 GB/GPU on AgentX.
date: '2026-11-05'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - NVFP4
  - Dynamo
  - Vera Rubin
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/five-ways-nvidia-co-design-maximizes-the-value-of-every-byte-in-the-ai-factory/
sourceLevel: A
publisher: nvidia
faqs:
  - question: What are the five levers?
    answer: NVFP4 precision, TensorRT-LLM wide expert parallelism, Dynamo fleet KV, Vera CPU for idle KV, CMX pod-shared KV.
  - question: How to read 30×?
    answer: >-
      On SemiAnalysis AgentX and peers, Vera Rubin NVL72 vs GB300 NVL72 up to
      ~30× throughput per megawatt at the same 288 GB/GPU—vendor contrast; cite
      the workload.
draft: false
candidateId: nvidia-developer-2026-11-05-6823fc9a00
---

NVIDIA’s Developer Blog (**5 Nov 2026**) asks why agentic throughput can jump when HBM capacity holds (~**288 GB/GPU** from GB300 to Rubin). The answer is **co-design**: make each byte do more useful work instead of adding capacity.

## Five levers

| # | Lever | Waste removed |
| --- | --- | --- |
| 1 | **NVFP4** | Excess bits: ~**3.5× / 1.8×** smaller weights vs FP16 / FP8; KV up to ~half vs FP8 |
| 2 | **Wide expert parallelism** (TensorRT-LLM) | Redundant weight copies: spread experts across 8+ GPUs; free HBM for KV / batch |
| 3 | **Dynamo** | Repeated prefill: KV-aware routing, disaggregated serving, KVCR across GPU/CPU/storage via NIXL |
| 4 | **Vera CPU** | Idle residency during tool gaps: 88 Olympus cores, up to ~**1.5 TB** LPDDR5X, NVLink-C2C **1.8 TB/s** |
| 5 | **CMX** | Cross-node duplicate context: pod-level G3.5 KV tier on BlueField-4 STX |

Together, **Vera Rubin NVL72** vs **GB300 NVL72** is cited at up to ~**30×** throughput per megawatt on SemiAnalysis AgentX (real tool-call gaps, growing context)—same 288 GB/GPU. CMX separately claims up to ~**5×** tokens/s and power efficiency versus traditional storage for long-context inference.

## How to cite

Architecture narrative plus vendor bench collage—not a single changelog. Map precision → expert placement → fleet KV → CPU warm tier → pod storage against your stack; quote 30× only with AgentX / same-capacity context, not as a universal workload promise.
