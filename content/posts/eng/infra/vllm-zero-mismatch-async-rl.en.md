---
title: >-
  vLLM — zero mismatch lets unclipped IS stabilize async RL (REINFORCE Zero)
slug: vllm-zero-mismatch-async-rl
description: >-
  Blog splits weight lag from kernel mismatch: align kernels, then unclipped IS
  corrects smooth lag without rejection gates. REINFORCE Zero cites ~20k stable
  updates, lag 64, and coverage for DeepSeek-V4.1-Flash and Kimi K3.1.
date: '2026-11-06'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - RL
  - DeepSeek
  - Kimi
author: Editorial
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-06-zero-mismatch-async-rl'
  - 'https://github.com/Inferact/zero-mismatch-rl'
sourceLevel: A
publisher: vllm
faqs:
  - question: What does zero mismatch fix?
    answer: >-
      Kernel disagreement between rollout and trainer at identical weights;
      after alignment, unclipped IS corrects the remaining smooth weight lag.
  - question: Headline numbers?
    answer: >-
      ~2.40× training-step throughput vs sync with aligned kernels; ~20k stable
      updates; learning at policy lag 64—paper/blog figures.
draft: false
candidateId: vllm-blog-2026-11-06-c60e39ad41
---

Async RL is faster but off-policy by design. The vLLM blog (**6 Nov 2026**) builds on train–inference consistency work and highlights **REINFORCE Zero** (NVIDIA Research and Inferact): remove **kernel mismatch** first, then let unclipped importance sampling (IS) correct smooth **weight lag**—without sample-rejection gates.

## Two gaps, two behaviors

```text
log π_θk − log μ_v  =  (log π_θk − log π_θv)  +  (log π_θv − log μ_v)
                         weight lag                 kernel mismatch
```

| Gap | Behavior | Can IS alone fix it? |
| --- | --- | --- |
| Weight lag | Moves smoothly with updates | Yes—what unclipped IS targets |
| Kernel mismatch | Jitters with batch/numerics | No; peak importance-weight deviation can hit **442×** the median on standard kernels |

With aligned kernels, D3 peaks at about **1.50×** its median. Without alignment, the same async IS recipe sees KL blow-ups, huge gradient norms, or sequence gates rejecting roughly a quarter of samples.

## REINFORCE Zero in three steps

1. **Align kernels** so rollout and learner agree bit-for-bit at identical weights (diff 0).  
2. **Unclipped token-level IS** using the rollout-recorded μ under the learner’s π.  
3. **Plain REINFORCE** with group-mean-centered advantages—no value model, no rejection gates.

| Setting | Paper/blog figure |
| --- | --- |
| Throughput (16 GPUs, 12K updates) | ~**2.40×** training-step throughput vs sync with aligned kernels |
| Long run | ~**20,000** stable updates (lag 2/8) |
| High lag | Qwen3-4B + tools learns at lag **64** for ~5,000 updates |
| 1.5B reasoning @ 6K | REINFORCE Zero (lag 2/8) near sync-aligned; standard-kernel IS variants trail |

Alignment has a cost—e.g. ~**6.8%** longer mean step vs gated standard-kernel IS on OSWorld.

## Flagship coverage

| Model / platform | Notes |
| --- | --- |
| DeepSeek-V4.1-Flash | Release-precision path; diff 0 on SWE-bench Pro setups; DAPO rollout step within ~**10%** of fast baseline |
| Kimi K3.1 | Day-0 alignment; KDA prefill/decode arithmetic matched; DAPO+LoRA multi-step diff 0 |
| AMD MI355X | DeepSeek-V4-Flash / Kimi K3.1 also report diff 0 after fixing shape-dependent kernels |

Code and recipes: [Inferact/zero-mismatch-rl](https://github.com/Inferact/zero-mismatch-rl). Figures are harness-bound—align kernels and the agent skill before putting 2.40× into capacity plans.
