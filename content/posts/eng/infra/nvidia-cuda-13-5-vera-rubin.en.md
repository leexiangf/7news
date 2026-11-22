---
title: CUDA 13.5 GA brings Vera Rubin to production with MPS v3 and Tile upgrades
slug: nvidia-cuda-13-5-vera-rubin
description: >-
  CUDA Toolkit 13.5: Vera Rubin support reaches GA; Windows on Arm extends to
  DGX Station for Windows; locality-domain splits, MPS v3 weighted timeslicing,
  CUDA Tile multi-GPU, cuda.core 1.2, and CCCL 3.5.
date: '2026-11-04'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - CUDA
  - Vera Rubin
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/nvidia-cuda-13-5-brings-nvidia-vera-rubin-ga-support/
sourceLevel: A
publisher: nvidia
faqs:
  - question: Is TCC still available on Rubin?
    answer: No. Rubin+ supports WDDM/MCDM only; TCC is unsupported—update toolchains that assume TCC.
  - question: Windows on Arm vs 13.4?
    answer: WoA was GA in 13.4; 13.5 extends it to NVIDIA DGX Station for Windows.
draft: false
candidateId: nvidia-developer-2026-11-04-8e7c0f560f
---

NVIDIA’s Developer Blog (**4 Nov 2026**) ships **CUDA Toolkit 13.5**. Headlines: **Vera Rubin** architecture support moves from early access to **GA**, and **Windows on Arm**—GA since 13.4—now covers **DGX Station for Windows**.

## Scheduling and sharing

| Capability | Notes |
| --- | --- |
| Locality domains | Uniform SM partitions or include supplemental SMs; discover counts via `cudaDevSmResourceSplit()` |
| MPS weighted timeslicing | Stretch compute turns per server; tune switch aggressiveness |
| SM partition borrow/lend | `--max-chunks` / `--shareable=true`; apps still see a stable base size |
| Cgroup routing | Map cgroup v2 subtrees to MPS namespaces |
| Memory-accounting fallback | `memacct set force_polling=true` when notifications are unreliable |

## Libraries and language stack

CUDA Tile adds unicast/multicast pointers on NVLink/NVSwitch and a public preview of calling device libs (NVSHMEM, CCCL Coop, and peers) from Tile. **cuda.core 1.2** adds `copy_batch()`, programmatic dependent launch, and more flexible Graph updates. **CCCL 3.5** adds public tuning APIs, reproducible FP scans, batched Top-K, and peers.

Driver note: from **Rubin** onward, CUDA supports WDDM/MCDM; **TCC is not supported**—scripts that assume TCC will break.

Downloads: CUDA Downloads. For platforms, 13.5 opens the Rubin production channel and turns multi-tenant sharing (MPS v3) into documentable policy rather than tribal knowledge.
