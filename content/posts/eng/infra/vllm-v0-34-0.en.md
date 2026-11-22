---
title: vLLM v0.34.0 defaults to extensible KV and Model Runner V2 only
slug: vllm-v0-34-0
description: >-
  vLLM v0.34.0 turns on extensible KV by default, removes Model Runner V1, and
  moves default block-size to 64. How post-warmup free-memory sizing works, the
  throughput vs TPOT trade-off, and what to change before you upgrade.
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - Inference
  - KV Cache
  - Blackwell
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/vllm-project/vllm/releases/tag/v0.34.0'
sourceLevel: A
publisher: vllm
faqs:
  - question: Why drop gpu_memory_utilization in most setups?
    answer: >-
      Extensible KV sizes the cache from memory actually free after warmup and
      CUDA-graph capture. A utilization cap usually shrinks KV for no benefit.
      Keep the flag when you share a GPU or disable extensible KV.
  - question: Will old launch flags fail immediately?
    answer: >-
      VLLM_USE_V2_MODEL_RUNNER=0 now fails at startup. Default --block-size is 64
      (was 16); pass 16 explicitly for the old behavior (ROCm paged attention
      still uses 16).
  - question: Are the speedup numbers a promise?
    answer: >-
      Release figures are vendor measurements tied to specific models and GPUs
      (e.g. Step5 on GB200, GLM-5.3 long prompts). Re-bench on your own traffic.
draft: false
candidateId: vllm-releases-2026-11-18-6d3739127e
---

vLLM **v0.34.0** (GitHub Published ~**16 Nov 2026**) is not a “add a few models” bump. For production fleets the behavior changes that matter are **extensible KV on by default**, **Model Runner V2 as the only GPU runner**, and a short list of **breaking defaults** that will trip old launch scripts. The release notes cite about **1,061** commits from **412** contributors (**120** new). Below is the operator-facing cut.

## Extensible KV: sizing happens after warmup

On CUDA and ROCm, the KV cache is no longer driven mainly by a pre-start guess. After **CUDA-graph capture and warmup**, vLLM sizes KV from memory that is **actually free** ([#56492](https://github.com/vllm-project/vllm/pull/56492)). Same GPU, often a larger cache, better high-concurrency throughput, lower TTFT. The notes’ example: MiniMax-M3 on H200 roughly **433k → 672k** tokens.

The trade-off is in the same paragraph: some models see **higher per-token decode latency (TPOT)** under load—about **+6–18%** on certain H200 runs at concurrency 128. If tail latency beats max KV for you, use `--gpu-memory-utilization 0.9` or `--no-enable-extensible-kv-cache`.

That is why the upgrade table says most configs should **remove** `gpu_memory_utilization`: the default is already **1.0**, and stacking a lower cap just throws away the newly available KV. The flag still matters when you share a GPU or turn extensible KV off—it is no longer a cargo-cult `0.9` in every values file.

## Model Runner V2 only

**Model Runner V1 is gone.** `VLLM_USE_V2_MODEL_RUNNER=0` fails at startup; custom logits processors move to `vllm.v1.worker.gpu.sample.logits_processor` ([#63373](https://github.com/vllm-project/vllm/pull/63373)). Dual-batch overlap and speculative decoding land on MRV2; suffix decoding runs a GPU speculator on MRV2 without Arctic Inference.

For platform teams this is not a default flip—it is **the old runner fork deleted**. Images, Helm values, and any patch that assumed V1 need a pass before promote.

## Change these before you upgrade

| Change | What to do |
| --- | --- |
| Default `--block-size` **64** (was 16) | Pass `--block-size 16` for the old behavior; ROCm paged attention still uses 16 |
| ROCm **7.2** artifacts dropped | Move to ROCm **10.0** wheels/images; `-rocm72` is unpublished |
| `huggingface_hub >= 2.0` | Also `tokenizers >= 0.23.3`, `timm >= 1.0.30` |
| QuTLASS / `fp_quant`, Marlin W4A8, Keye-VL removed | Retarget old checkpoints and flags (e.g. humming quantization) |

Treat the full [v0.34.0 Before you upgrade](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) table as source of truth; the rows above are the ones that most often survive in stale config repos.

## How to read new models and speedups

“About **10** new models” matters for **capability edges**, not the roster itself: **Mistral Large 4** (~1T total / 52B active, FP8 and NVFP4, cited for Blackwell/Hopper and MI350), **Nemotron-3.5-Transcribe** (speech plus `/v1/audio/transcriptions`), MiniMax-M3.1-Flash, LFM3 variants, Canary / Parakeet ASR paths, and peers. The matrix will keep moving; pin decisions to this tag’s table.

Release speedups are **hardware- and model-bound** vendor measurements—useful to see where kernels won, not as your SLA:

| Scenario (vendor) | Hardware | Approx. gain |
| --- | --- | --- |
| Step5 NVFP4 MoE decode | 4×GB200 | up to ~**1.95×** |
| GLM-5.3-Flash output throughput vs DEP4 | NVIDIA | ~**1.6×** |
| GLM-5.3 long-prompt TTFT (32K–128K) | GB200 setup | ~**1.24–1.40×** |

If your queue is on Blackwell / MI355X with a similar shape, staging is justified; otherwise finish defaults and runner migration first.

Worth a glance on the ops side: CRIU + `cuda-checkpoint` HTTP prepare/status/restore, fault-tolerant DP+EP scale-down that drops dead ranks and redistributes experts without a full restart, and best-effort NUMA binding on by default. Those are adjacent 0.34 surfaces—not caused by the KV default, but part of the same upgrade blast radius.

## How to verify after promote

1. Confirm image/wheel **v0.34.0** and that logs no longer fall back to runner V1.  
2. Remove (or keep with a written reason) `gpu_memory_utilization`; compare **KV token capacity** and high-concurrency TTFT / TPOT before vs after.  
3. If latency-sensitive, A/B extensible KV on/off on the same load and check tails.  
4. ROCm nodes must pull **10.0** artifacts; `-rocm72` should fail.  
5. Failure-inject custom logits processors, legacy quant flags, and Keye-VL paths so long-tail configs do not blow up overnight.

v0.34.0’s through-line: **fill KV from real free memory, and converge on one GPU runner**. The percentage speedups are optional upside; the upgrade succeeds or fails on whether defaults and removals were cleaned out of the config repo.
