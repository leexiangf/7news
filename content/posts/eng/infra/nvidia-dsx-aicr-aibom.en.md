---
title: 'NVIDIA AICR adds k8s-aibom: runtime AIBOM inventory for GPU-cluster AI loads'
slug: nvidia-dsx-aicr-aibom
description: >-
  AICR qualifies Google’s open-source k8s-aibom and defaults CycloneDX 1.6 AIBOM
  on GKE inference recipes; steady state ~4 API calls/min and ~2.2 millicores
  CPU.
date: '2026-11-11'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - DSX
  - AICR
  - AIBOM
  - Kubernetes
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/validating-gpu-platforms-with-runtime-ai-inventory-via-the-nvidia-dsx-ai-factory/
sourceLevel: S
publisher: nvidia
faqs:
  - question: What do AICR and k8s-aibom each cover?
    answer: AICR locks and validates GPU platform recipes; k8s-aibom observes supported AI workloads and emits an AIBOM.
  - question: Which recipes include inventory by default?
    answer: h100-gke-cos-inference and h100-gke-cos-inference-dynamo; other GKE recipes use --runtime-inventory.
draft: false
candidateId: nvidia-developer-2026-11-11-29a3eb7181
---

NVIDIA’s technical blog (~**11 Nov 2026**) adds a qualified **AI Bill of Materials (AIBOM)** path to **AI Cluster Runtime (AICR)** under DSX: wire in Google’s open-source **k8s-aibom**, observe supported AI workloads on Kubernetes, and emit **CycloneDX 1.6** records with confidence tiers and evidence pointers.

## Why recipes alone fall short

AICR recipes can pin drivers, operators, and network combos, but app-side image tags (e.g. `:latest`) still drift—“known-good platform” ≠ “what is actually running.” Runtime inventory closes that gap.

| Question | Answered by |
| --- | --- |
| Is GPU infra from a known-good config? | AICR |
| Which AI assets are running on it? | k8s-aibom → AIBOM |

## Landing and overhead (vendor validation env)

Example pins **k8s-aibom 1.6.2** under **AICR v1.2.0**. Default inventory recipes: `h100-gke-cos-inference`, `h100-gke-cos-inference-dynamo`; other GKE recipes flip `--runtime-inventory`. Coverage includes Dynamo, NIMService, LeaderWorkerSet, and peers, with namespace opt-in.

Steady-state observations cite ~**4** API Server requests/min, ~**2.2 millicores** CPU average, and controller working set ~**28–34 MiB**. For compliance readers: treat AIBOM as a runtime SBOM cousin feeding existing supply-chain pipelines—not a replacement for recipe gates.
