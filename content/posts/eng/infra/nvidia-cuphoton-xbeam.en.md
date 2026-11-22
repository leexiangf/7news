---
title: 'NVIDIA cuPhoton.xBeam: GPU-accelerated black-hole interferometry correlation'
slug: nvidia-cuphoton-xbeam
description: >-
  cuPhoton.xBeam correlates VLBI/EHT voltages on GPUs; Vera Rubin NVL72 with 64
  GPUs processes 10 TB in ~70 s—~460× vs an x86 baseline; read BW up to ~170
  GB/s.
date: '2026-11-13'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - cuPhoton
  - EHT
  - scientific computing
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/run-gpu-powered-black-hole-interferometry-with-nvidia-cuphoton/
sourceLevel: S
publisher: nvidia
faqs:
  - question: What does it output?
    answer: Station-pair visibilities (SWIN or xbeam-v1); calibration and imaging sit outside (HOPS / eht-imaging, etc.).
  - question: How does it scale?
    answer: Single-node --devices; multi-node --shard-count/--shard-index then merge-shards; optional GPUDirect Storage.
draft: false
candidateId: nvidia-developer-2026-11-13-4194ee659d
---

NVIDIA’s technical blog (**13 Nov 2026**) introduces **cuPhoton.xBeam**, the FX correlator in the cuPhoton toolkit: turn Event Horizon Telescope (EHT)–style VLBI VDIF voltage recordings into visibilities. Built with Harvard-Smithsonian CfA and MIT Haystack. Image reconstruction (e.g. Gaussian splatting) is **out of scope**.

## Five pipeline steps

1. **Ingest** — build `.vdix` indexes so later reads jump by timestamp without rewriting recordings  
2. **Delay / fringe** — apply job-model delays and phase correction (geometry + clocks, etc.)  
3. **Channelize** — FFT into frequency channels  
4. **Cross-multiply & accumulate** — station-pair products with invalid-sample masks and weights  
5. **Write** — DiFX **SWIN** or **xbeam-v1**

CPU reference correlator: DiFX. I/O path: pinned-host POSIX or **cuFile / GPUDirect Storage**.

## Bench and scale (vendor)

| Setup | Claim |
| --- | --- |
| Vera Rubin NVL72 · **64** GPUs + GDS compat mode | **10 TB** in ~**70 s** |
| x86 CPU baseline | ~**31,992 s** (~**460×**) |
| Read bandwidth | ~**20 GB/s** @ 4 GPUs → ~**170 GB/s** @ 64 |

Single-node `--devices`; multi-node time shards via `--shard-count` / `--shard-index`, then `merge-shards` (checks same job and full time cover). AI agents are mentioned as potential orchestrators for VDIF → JSON job → cluster submit. Cite figures with GDS mode and GPU count attached.
