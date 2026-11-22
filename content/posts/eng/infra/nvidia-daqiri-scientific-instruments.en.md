---
title: 'NVIDIA DAQIRI: high-bandwidth instrument data straight into the GPU'
slug: nvidia-daqiri-scientific-instruments
description: >-
  Holoscan acquisition library DAQIRI: Berkeley Molecular Foundry HDR EM camera
  >500 Gbps into GPU; adds hardware packet reorder, ~2× ibverbs throughput, and
  ~2–4 µs direct-polling latency.
date: '2026-11-19'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - DAQIRI
  - Holoscan
  - scientific computing
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/enabling-real-time-ai-for-scientific-instruments-with-gpu-native-data-acquisition/
sourceLevel: A
publisher: nvidia
faqs:
  - question: What is DAQIRI?
    answer: A software-defined data-acquisition library on Holoscan that feeds high-bandwidth instrument data into GPU workflows—process during capture, before disk.
  - question: What’s new here?
    answer: Hardware reorder on ConnectX-7+; ibverbs engine ~2× per-core throughput on small packets; direct polling ~2–4 µs loopback latency.
draft: false
candidateId: nvidia-developer-2026-11-19-641b5194ac
---

NVIDIA’s technical blog (**19 Nov 2026**) continues the real-time AI-on-instruments thread. Centerpiece: **DAQIRI**—a Holoscan software-defined acquisition library that moves sensor data into GPU memory so you can process during capture instead of after a disk write.

## Case: Molecular Foundry HDR EM

Lawrence Berkeley Lab’s Molecular Foundry high-dynamic-range electron microscopy camera captures strong and faint signals in one go (classic EELS often needs two optimized exposures then alignment). The cost: more than **500 Gbps**—roughly **500×** faster than conventional EELS streams. Pipeline: FPGA over Ethernet → DAQIRI into GPU memory → assemble/correct frames → reduce to energy-loss spectra, with live ROI tuning. Computation also recovers submicron spatial detail from ~**5 µm** pixels—lab + NVIDIA collaboration narrative.

## Three capabilities in this release

| Capability | Notes |
| --- | --- |
| Hardware packet reorder | ConnectX-7+ NIC places payloads by sequence—no separate software reorder copy |
| ibverbs engine | Default for raw Ethernet; ~**2×** per-core throughput vs prior DPDK on small packets (≤1024 B) at >200 Gbps (DGX Spark / IGX Thor / RTX PRO benches) |
| Direct polling | App thread submits/receives control queues; cabled loopback send→recv ~**2–4 µs** |

For scientific-computing readers: GPU-native acquisition engineering—not a consumer model launch. APIs, hardware prerequisites, and benches live in NVIDIA docs and the `NVIDIA/daqiri` repo.
