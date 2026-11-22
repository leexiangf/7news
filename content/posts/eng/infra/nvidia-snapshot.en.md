---
title: 'NVIDIA Snapshot: restore GPU inference replicas in seconds'
slug: nvidia-snapshot
description: >-
  Open-source Snapshot captures initialized CPU+GPU state; B200 benches restore
  in ~3.6–42.7 s (~8×–36×); Crusoe/Saturn cut cold starts from minutes to tens
  of seconds.
date: '2026-11-10'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Snapshot
  - Dynamo
  - Kubernetes
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/start-and-restore-gpu-workloads-in-seconds-with-nvidia-snapshot/
sourceLevel: S
publisher: nvidia
faqs:
  - question: What problem does it solve?
    answer: Skip weight load, torch.compile, and CUDA graph capture so inference replicas scale and recover faster.
  - question: How to integrate?
    answer: PodSnapshot / SnapshotJob CRs; annotate restores with nvidia.com/restore-from; examples for vLLM, SGLang, TRT-LLM.
draft: false
candidateId: nvidia-developer-2026-11-10-ce98a6a1f2
---

**NVIDIA Snapshot** (`ai-dynamo/snapshot`, **10 Nov 2026**) ships as a DSX open-source component: checkpoint/restore fully initialized GPU workloads on Kubernetes, capturing **CPU + GPU** memory and restoring on nodes with the **same GPU model and driver**—skipping weight load, `torch.compile`, and CUDA graph capture. Image pulls and machine provisioning stay outside the measured restore path.

## Two operations

| Op | How |
| --- | --- |
| Checkpoint | `PodSnapshot` on a ready Pod, or `SnapshotJob` to start then snapshot when ready |
| Restore | Annotate a new Pod with `nvidia.com/restore-from`; engine needs a short pause/resume handshake |

Single-node multi-GPU as one artifact (TP / DEP / DCP, etc.); checkpoints up to ~**1 TB / 8 GPUs**. Repo examples: vLLM, SGLang, TensorRT-LLM.

## Benchmarks (B200 + VAST NFS)

Official matrix (vLLM 0.31 / SGLang 0.5.21 / TRT-LLM 1.3.0): restore ~**3.6–42.7 s**, ~**8×–36×** vs cold start; checkpoint creation ~**15 s–5.5 min**, and checkpoint+restore beat a single cold start in every tested config. On large MoE, **CUDA restore** (~18–29 s) often dominates; CRIU host state ~4.2–10.8 s.

Design partners: Crusoe—GLM-5.3 ready ~**8 min→31 s**; Saturn Cloud—vLLM ~**2–8.5 min→6–34 s** (HGX B300). Vendor/partner figures; KV is released before checkpoint so it is not in the artifact.
