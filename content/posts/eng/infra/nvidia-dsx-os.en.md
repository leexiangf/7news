---
title: 'NVIDIA DSX OS: operate GPU Kubernetes clusters with recipes and continuous certification'
slug: nvidia-dsx-os
description: >-
  DSX OS open layer: AICR recipes, NVCRE readiness/perf gates, NVSentinel health
  loop—turning GPU clusters from one-shot acceptance into a re-certifiable
  lifecycle.
date: '2026-11-05'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Kubernetes
  - DSX
  - AICR
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/configure-certify-and-operate-kubernetes-gpu-clusters-with-nvidia-dsx-os/
sourceLevel: A
publisher: nvidia
faqs:
  - question: What do the three pieces do?
    answer: AICR emits version-pinned recipes and deploy bundles; NVCRE runs NCCL/training gates; NVSentinel monitors and can isolate bad nodes then re-validate.
  - question: Relation to Vera Rubin recipes?
    answer: AICR is the same DSX / AI Factory software layer; this post writes the full configure–certify–operate loop.
draft: false
candidateId: nvidia-developer-2026-11-05-527bad4b47
---

A single “healthy-looking” GPU that tanks a distributed training job is a familiar ops failure mode. NVIDIA’s Developer Blog (**5 Nov 2026**) introduces **DSX OS**: an open software layer on the DSX AI Factory that chains **configure, certify, and continuously operate** accelerated Kubernetes.

## Three components

| Component | Job |
| --- | --- |
| **AICR** | Version-pinned recipes (versions, dependency graph, health assertions) → render Argo CD / Flux / Helm deploy bundles |
| **NVCRE** (Cluster Readiness Engine) | Run NCCL and training loads against configurable perf floors; binary-search suspect nodes on failure |
| **NVSentinel** | Continuous GPU / node / network health → node conditions; optional cordon/drain/repair then hand back to NVCRE |

Lifecycle controllers gate nodes on join or return-from-repair; AICR drift detection can re-certify after driver upgrades and peers. Same software layer as Vera Rubin Preview recipes and OpenShell / Snapshot narratives—this post is the **ops loop**, not a one-shot bring-up script.

For platform teams: one-time acceptance at handoff is not enough; after patches and scale-outs you must be able to **prove again** the cluster still meets the bar.
