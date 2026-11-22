---
title: 'NVIDIA: serve GLM-5.3 NVFP4 across two DGX Stations with vLLM TP'
slug: nvidia-glm-53-dual-dgx-vllm
description: >-
  753B MoE (~464 GB) will not fit one GB300 (252 GB HBM3e); ConnectX-8 RDMA +
  vLLM TP=2; AIPerf ~607.8 tok/s at concurrency 16, ~385 at 32.
date: '2026-11-13'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - DGX
  - vLLM
  - GLM
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/when-one-gpu-isnt-enough-serving-glm-5-3-across-two-nvidia-dgx-stations-with-vllm/
sourceLevel: S
publisher: nvidia
faqs:
  - question: Why two Stations?
    answer: GLM-5.3 NVFP4 is ~753B total / ~40B active; weights ~464 GB exceed one GB300’s 252 GB HBM3e—sparse activation still needs all weights resident.
  - question: Throughput reference?
    answer: On SPEED-Bench Coding, AIPerf cites ~607.8 tok/s output at concurrency 16; ~385 tok/s and ~453.5 s mean latency at 32.
draft: false
candidateId: nvidia-developer-2026-11-13-dbb6a7059a
---

NVIDIA’s technical blog (**13 Nov 2026**) shows serving **GLM-5.3 NVFP4** locally across **two GB300 DGX Stations** over **ConnectX-8** RDMA with **vLLM**. The MoE has ~**753B** parameters and ~**40B** activated per token; sparse activation saves compute, but routing still needs **all weights resident**—checkpoint ~**464 GB**, past one GPU’s **252 GB** HBM3e. The tutorial disables CPU weight offload.

## Topology: TP=2, one endpoint

| Role | Behavior |
| --- | --- |
| Station A (rank 0) | Exposes the OpenAI-compatible API |
| Station B (rank 1) | Worker only—no API |
| Fabric | Direct ConnectX-8 rails; run the official “Connect Two DGX Stations” playbook including GPU-memory RDMA tests first |

Each GPU holds and computes roughly half the weights; both Stations compute every request, A returns the answer. Prerequisites: ~464 GB free disk per Station for checkpoint copies; accept NVIDIA Open Model and GLM licenses.

## Bench notes (tutorial environment)

Multi-token prediction, FP8 KV-cache, and prefix caching are enabled. **AIPerf** on SPEED-Bench Coding:

| Concurrency | Aggregate output | Mean request latency |
| --- | --- | --- |
| 16 | ~**607.8 tok/s** | — |
| 32 | ~**385.0 tok/s** | ~**453.5 s** |

DIY local-serving tutorial—not a managed product launch; numbers hold for this stack and dataset. Pair with the Snapshot post: large-MoE cold starts still run minutes; checkpoint restore is the other acceleration path.
