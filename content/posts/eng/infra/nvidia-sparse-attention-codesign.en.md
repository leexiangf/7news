---
title: >-
  NVIDIA sparse-attention co-design — long-context cost lives in the indexer
slug: nvidia-sparse-attention-codesign
description: >-
  Technical blog: trained-in sparse attention moves full scoring into the
  indexer—about 47% of a DeepSeek V3.2 layer at 128K prefill with Top-k. Eight
  GPU-friendly guidelines (KH=1, Hsz 128/256, fused Top-k, block selection).
date: '2026-11-17'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Sparse Attention
  - Long Context
  - Inference
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/co-designing-sparse-attention-for-efficient-long-context-inference/
sourceLevel: S
publisher: nvidia
faqs:
  - question: Post-training sparsity?
    answer: Out of scope—this primer covers sparsity trained into the model, not drop-ins like BLASST, MInference, or Quest.
  - question: Takeaway?
    answer: Core attention stops scaling with N, but the indexer still touches the full context; co-design intensity with Top-k and block selection.
draft: false
candidateId: nvidia-developer-2026-11-17-c062b882c9
---

NVIDIA’s Technical Blog (**17 Nov 2026**) is a co-design primer for **sparse attention**: each query attends to a small key subset so core attention stops scaling with context—while the **indexer** that finds those keys still scores the full set. Cost moves; it does not vanish. On DeepSeek V3.2 at 128K prefill, indexer + Top-k take about **47%** of a layer.

Scope is explicit: sparsity **trained into** the model—not post-hoc methods such as BLASST, MInference, or Quest.

## Three stages

| Stage | Job | Scales mainly with |
| --- | --- | --- |
| Indexer | Score every key | Full context length |
| Top-k | Keep the top scores | Keys scored |
| Core attention | Softmax over the selected *k* | *k*, not *N* |

## Eight guidelines (compressed)

| # | Guideline |
| --- | --- |
| 1 | Keep **G×(D+1)** inside ~**200** Tensor Core rows (256 with an FP16 epilogue) |
| 2 | Run the indexer epilogue in **FP16**; accumulate in FP16 when QK scaling stays in range |
| 3 | Use **KH=1** with a cross-head reduction so one logit is written per key |
| 4 | Prefer **Hsz 128 or 256** (most designs settle at 128) |
| 5 | Cut scored keys via compression, hierarchy, or index sharing |
| 6 | Budget Top-k with the indexer: fuse it; reuse the prior decode pick (Guess-Verify-Refine cited ~**2.1–2.4×**) |
| 7 | Prefer **large-block** selection for bulk KV fetches shared across queries |
| 8 | Keep a large core-attention group size so many query heads share each KV head |

Pointers: TensorRT-LLM fused Top-k / Guess-Verify-Refine, and FlashInfer’s selective Top-k path. Engineering guidance, not a product launch—re-measure arithmetic intensity and wall-clock share on your own model and kernels.
