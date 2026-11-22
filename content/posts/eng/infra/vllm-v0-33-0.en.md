---
title: vLLM v0.33.0 goes CUDA 13-only and clears speculative dead ends
slug: vllm-v0-33-0
description: >-
  vLLM v0.33.0 confines official wheels/images to CUDA 13.0, moves to PyTorch
  2.14, widens models and speculative paths, and removes Medusa/legacy Ray
  executor—with image channels and a breakages checklist.
date: '2026-11-01'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - CUDA
  - inference
  - open source
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/vllm-project/vllm/releases/tag/v0.33.0'
sourceLevel: A
publisher: vllm
faqs:
  - question: Still on CUDA 12.9?
    answer: >-
      12.9 wheels and `-cu129` images stop publishing; move to default CUDA 13.0
      artifacts after checking driver/container baselines.
  - question: Highest-risk breakages?
    answer: >-
      Medusa and the MLP speculator are gone, as is the legacy Ray
      compiled-graph executor. Paused generation returns HTTP 503 for new
      requests. NIXL needs 1.5+.
draft: false
candidateId: vllm-releases-2026-11-01-ce1e25ea92
---

vLLM published **v0.33.0** (**1 Nov 2026**). Relative to prior RCs, runtime stack, image policy, and several serving surfaces land together. If you later take **v0.34.0** (extensible KV default, Model Runner V2 only), treat 0.33 as the stop where **CUDA 13 and the breakage list** get cleaned first.

> Note: the GitHub Release page was briefly unreachable while drafting; facts follow previously verified release text—re-open the tag before promote.

## Runtime and images: CUDA 12.9 channel closes

| Change | Action |
| --- | --- |
| Official wheels/images **CUDA 13.0 only** | Drop 12.9 wheels and `-cu129` / `-cu129-ubuntu2404` |
| **PyTorch 2.14.0** | torchvision 0.29.0, Triton 3.8.0; CUDA wheels ABI-stable vs libtorch |
| AWS EFA | `vllm/vllm-openai:v0.33.0-efa`; short alias `vllm/vllm` |
| ROCm | Default **ROCm 10.0** (`-rocm72` still noted at the time) |

The common outage is not the model roster—it is nodes still pulling cu129 images, or drivers below CUDA 13 userspace expectations.

## Models, speculative decoding, APIs

Highlights add Reflection Beam-1.0, Step-5 Preview, Nemotron Parse 3.5, MiniCPM-OCR, and peers. Speculative decoding gains XPress, opt-in FLy verification, quantized draft `lm_head`, lookahead block hashes, plus NVIDIA/AMD opt-in decode paths (MonoKernel, sparse MLA, and peers)—cite PR benches; do not paste multipliers into SLAs.

Serving adds `/v1/decisions` on by default for supported models, embeddings late chunking, and Rust frontend hardening. Those are capability thickeners; the removals below are what block releases.

## Breakage checklist

| Item | Impact |
| --- | --- |
| Medusa / MLP speculator | Removed—old flags fail |
| Legacy Ray compiled-graph executor | Removed |
| New requests while generation paused | **HTTP 503** |
| NIXL connector | Needs **NIXL 1.5+** |
| Other deprecations | Full release notes |

## Suggested verification order

1. Confirm image/wheel **v0.33.0** on the CUDA **13.0** channel.  
2. Failure-inject Medusa/MLP or legacy Ray executor configs—expect startup failure.  
3. Exercise clients during paused generation; they must handle **503**.  
4. NIXL paths need **≥ 1.5**.  
5. If 0.34 is next, keep this release as the CUDA 13 baseline, then schedule KV defaults and Model Runner V2 separately.

0.33’s through-line is **narrow the runtime channel and delete speculative dead ends**; model lists and speedups are optional upside—whether configs still point at cu129 decides the upgrade.
