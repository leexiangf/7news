---
title: SGLang v0.5.23 widens models, opt-in low-latency kernels, and upgrade channels
slug: sglang-v0-5-23
description: >-
  SGLang v0.5.23 (~1007 PRs) expands models and DeepSeek-V4.1 throughput paths,
  adds opt-in megakernel/monokernel low-latency mode and Paged Experts, with
  Docker channels and install command.
date: '2026-11-02'
updated: '2026-11-20'
category: eng
subcategory: infra
tags: [SGLang, release]
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/sgl-project/sglang/releases/tag/v0.5.23'
sourceLevel: A
publisher: sglang
faqs:
  - question: Is low-latency mode on by default?
    answer: >-
      No. NVIDIA megakernel and AMD monokernel plugins are opt-in; notes cite
      single-user decode gains for DeepSeek-V4.1-Flash on GB300 / MI350X.
  - question: How to install?
    answer: >-
      `uv pip install --prerelease=allow sglang==0.5.23`; NVIDIA image
      `lmsysorg/sglang:v0.5.23`, plus ROCm / XPU / Xeon / TPU tags.
draft: false
candidateId: sglang-releases-2026-11-20-0247869cbf
---

SGLang tagged **`v0.5.23`** (Published **2 Nov 2026**). The notes claim about **1007** PRs from **257** contributors—for fleets, that means a minor that thickens the **model matrix, throughput paths, and optional kernels** together, not a version-bump-only release.

## How to read models and speed claims

New-model rows include Muse Spark Open, Beam-1.0, MiniMax-M3.1-Flash, MiniCPM-V 4.7, plus Cosmos3 / FastH3 / FLUX.3 diffusion recipes. The roster will keep moving; pin to this tag’s cookbook links before promote.

More actionable for capacity planning are the vendor path claims (model- and hardware-bound—**not** your SLA):

| Claim | Setup summary | Approx. figure |
| --- | --- | --- |
| DeepSeek-V4.1 prefill | GB300 under load | up to ~**1.5×** throughput; ~**28%** lower TTFT at 32K–64K |
| Low-latency decode | opt-in NVIDIA megakernel / AMD monokernel, DeepSeek-V4.1-Flash | single-user decode up to ~**44%** (GB300) / ~**75%** (MI350X) |
| MoE first token | DeepSeek-V4.1-Flash / GLM-5.3-Flash / gpt-oss on H200, 8K prompts | ~**30–58%** sooner |
| Paged Experts (opt-in) | MoE larger than one GPU | up to ~**30×** vs CPU offload (vendor) |

Also new: Google **TPU7x** via SGLang-TorchTPU; opt-in LoRA on quantized MoE (FP8 / NVFP4); DeepSeek-style MLA with decode context parallelism can keep prefix cache in HiCache file L3.

## Upgrade channels

```bash
uv pip install --prerelease=allow sglang==0.5.23
```

| Platform | Docker |
| --- | --- |
| NVIDIA (CUDA 13) | `lmsysorg/sglang:v0.5.23` |
| AMD MI35x | `lmsysorg/sglang:v0.5.23-rocm10-mi35x` |
| AMD MI30x | `lmsysorg/sglang:v0.5.23-rocm10-mi30x` |
| Intel GPU / CPU | `…:v0.5.23-xpu` / `…:v0.5.23-xeon` |
| Google TPU7x | `lmsysorg/sglang:v0.1.0-tpu` |

Treat the full [release body](https://github.com/sgl-project/sglang/releases/tag/v0.5.23) as source of truth for breakages and the speculative / CUDA-graph / MoE subsections. In staging, confirm opt-in kernels did not flip on by accident and that target cookbooks still match—then decide whether any percentage belongs in capacity plans.
