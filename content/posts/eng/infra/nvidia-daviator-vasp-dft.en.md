---
title: NVIDIA Daviator batches k-points to accelerate plane-wave DFT in VASP
slug: nvidia-daviator-vasp-dft
description: >-
  Daviator batches VASP k-points (including batched Davidson); mixed precision
  ~another 2×; claims up to ~22× vs CPU and ~75% lower cost; enable via ALCHEMI
  INCAR flags.
date: '2026-11-18'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - VASP
  - DFT
  - HPC
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/tackling-gpu-bottlenecks-in-plane-wave-dft-with-k-point-batching-and-mixed-precision/
sourceLevel: S
publisher: nvidia
faqs:
  - question: How to enable?
    answer: On ALCHEMI VASP microservice set LDAVIATOR=True; add LDAVIATOR_MIXED_PRECISION=1 for mixed precision—existing inputs unchanged.
  - question: Figure caveats?
    answer: Author-run projections on OMat24-like workloads; varies with hardware and config.
draft: false
candidateId: nvidia-developer-2026-11-18-b5865e440f
---

NVIDIA’s technical blog (**18 Nov 2026**) introduces **Daviator**, a GPU kernel library for **VASP** plane-wave DFT. Small systems with dense k-meshes leave sequential “one k-point at a time” underusing the GPU; Daviator **batches k-points / spins** (including batched Davidson eigensolves) so many k-points share a launch.

## Mechanism: batching + mixed precision

| Layer | Role |
| --- | --- |
| k-point / spin batching | Share kernel launches across k-points for small problem sizes |
| Batched Davidson | Push eigensolves through the same batch path |
| Mixed precision | Keep FP64 on sensitive steps; FP32 elsewhere—about another **2×** end-to-end claimed on high FP32:FP64 GPUs (e.g. RTX PRO 6000) |

## Self-tests and enablement

Versus CPU, OMat24-like projected workloads claim up to ~**22×** faster and ~**75%** lower cost—vendor figures, hardware- and INCAR-dependent. Enable on the **NVIDIA ALCHEMI VASP** microservice:

- `LDAVIATOR=True` for the batched path  
- `LDAVIATOR_MIXED_PRECISION=1` for mixed precision  
- Existing POSCAR / inputs can stay put  

HPC / materials-simulation engineering—cite speedups with CPU baseline, OMat24-like projection, and GPU model.
