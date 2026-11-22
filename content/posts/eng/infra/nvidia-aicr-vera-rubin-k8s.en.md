---
title: 'NVIDIA AICR: Day-1 Kubernetes recipes for Vera Rubin NVL72'
slug: nvidia-aicr-vera-rubin-k8s
description: >-
  AI Cluster Runtime packs Vera Rubin choices—R615.23 drivers, DRA v0.5.0,
  Ubuntu 26.04 64k kernel—into Preview recipes; reference NCCL all-reduce gate
  ~744.71 GB/s.
date: '2026-11-02'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Kubernetes
  - Vera Rubin
  - AICR
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/making-kubernetes-ai-ready-for-nvidia-vera-rubin-on-day-one/
sourceLevel: A
publisher: nvidia
faqs:
  - question: What changes vs GB200?
    answer: >-
      New driver branch (validated R615.23), ConnectX-9 / BlueField-4 with
      DOCA-OFED 3.3.0, tray topology and MIG profile deltas—encoded in AICR
      recipes.
  - question: What does Preview mean?
    answer: Early-adopter path—not yet production Supported lifecycle qualification.
draft: false
candidateId: nvidia-developer-2026-11-02-0a321f63fb
---

NVIDIA’s Developer Blog (**2 Nov 2026**) introduces **AI Cluster Runtime (AICR)** (part of DSX AI Factory): capture tuned configs as reproducible **recipes**, generate deployment bundles, and validate running clusters—so **Vera Rubin NVL72** trays can be Kubernetes-ready on Day 1.

## Versus GB200: user-visible deltas

| Item | Change |
| --- | --- |
| GPU driver | New branch; validated **R615.23** open-kernel-module (early R610; official platform support noted as R620) |
| NIC / DPU | ConnectX-7 / BF-3 → **ConnectX-9** / **BlueField-4**; test image ships **DOCA-OFED 3.3.0** |
| Topology | Still 2 CPUs + 4 GPUs, but more CX-9 PCI function groups; re-check NUMA / GPU–NIC affinity |
| IMEX | Still required for multi-node NVLink; stop host static `nvidia-imex` when DRA owns IMEX |
| MIG | New Rubin profiles; this AICR recipe set uses **whole-GPU allocation, no MIG** |

## What the recipe freezes

The Vera Rubin family (RKE2 + vr200 + Ubuntu; training / inference / Dynamo variants) is marked **Preview**. Encoded choices: host-preinstalled driver so `driver.enabled: false`; **DRA v0.5.0** with ComputeDomains; **Kubernetes ≥ 1.34.1**; **Ubuntu 26.04** arm64 **64k-page** kernel; raised NFD topology-updater memory (default 60Mi OOMs on multi-TB nodes).

Workflow: `aicr recipe` → `aicr bundle` → `snapshot` / `validate` (deployment / conformance / performance). Validation used **GPU Operator v26.7.0** and official DRA **v0.5.0**. Training recipes gate on cross-node NCCL all-reduce: **744.71 GB/s** bus bandwidth (16 GiB over NVLink fabric) as the published pass figure.

Early-silicon bring-up also hit an unmapped Rubin architecture value in go-nvlib that crash-looped the DRA kubelet plugin—fixed into official DRA v0.5.0. For platform teams: treat the recipe as a validated combination checklist; Preview is not Supported production lifecycle.
