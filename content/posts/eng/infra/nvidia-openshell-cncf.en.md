---
title: NVIDIA donates OpenShell to CNCF and expands the DSX open-source stack
slug: nvidia-openshell-cncf
description: >-
  At KubeCon, OpenShell enters the CNCF Sandbox; NVIDIA joins Google-led Agent
  Substrate; DSX previews NVKE/NVKR and Snapshot that partners clock from
  multi-minute cold starts down to tens of seconds.
date: '2026-11-10'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - OpenShell
  - CNCF
  - Kubernetes
author: Editorial
locale: en
sourceUrls:
  - 'https://blogs.nvidia.com/blog/open-source-openshell-infrastructure/'
sourceLevel: S
publisher: nvidia
faqs:
  - question: What does OpenShell do?
    answer: >-
      A security/governance runtime for autonomous agents: deterministic policy
      over tools, inference access, and workloads, with hooks for your own
      compute, credentials, and monitoring.
  - question: Snapshot partner numbers?
    answer: >-
      Crusoe: GLM-5.3 ready ~8 min → 31 s; Saturn Cloud: vLLM cold start ~2–8.5
      min → 6–34 s—design-partner benchmarks.
draft: false
candidateId: nvidia-blogs-2026-11-10-b4eac762a1
---

NVIDIA’s blog (**10 Nov 2026**, KubeCon + CloudNativeCon window) bundles three moves: put an agent **security runtime** in community hands, wire **scaled agent execution** to scheduling and inference, and open more **Kubernetes building blocks** for AI factories. The headline is donating **NVIDIA OpenShell** to the **CNCF Sandbox**.

## OpenShell: policy in the open

OpenShell targets autonomous agents: **deterministic controls** as they use tools, hit inference services, and run workloads, with an extensible path to your own compute, inference providers, credential stores, and monitoring. A Linux Foundation quote frames secure agent environments as a new cloud-native infrastructure problem. The post claims hundreds of organizations and tens of thousands of contributions in under a year—vendor figures.

The donation’s practical meaning: **governance rules move under CNCF governance**—inspectable, forkable, product-embeddable—rather than another opaque sidecar.

## Agent Substrate: release idle compute

NVIDIA is also contributing to Google-led **Agent Substrate** (already in the CNCF Sandbox), citing work with **Dynamo** (inference) and **KAI Scheduler** (shared-cluster allocation). The mechanism: **suspend** agent environments between tasks, **release** compute when idle, then resume from a shared pool—so every session need not pin dedicated GPUs. NVIDIA and Google are integrating OpenShell with Substrate for cross-cloud / on-prem governance.

| Layer | Project | Role |
| --- | --- | --- |
| Security / governance | OpenShell | Policy and boundaries |
| Execution lifecycle | Agent Substrate | Suspend / resume / pool |
| Inference | Dynamo | Model serving |
| Scheduling | KAI Scheduler | Shared resource allocation |

## DSX: NVKE, NVKR, Snapshot

**NVKE** (Kubernetes Engine) and **NVKR** (Kubernetes Recipes) enter public preview: open building blocks for managed Kubernetes on GPU infrastructure—automated cluster lifecycle and signed, version-pinned images. Ecosystem names include Mirantis, Rafay, Spectro Cloud, vCluster, Firmus, and SK Telecom.

**NVIDIA Snapshot** targets inference scale-out and recovery: restore checkpointed replicas in seconds **without** model reload or warmup. Design-partner clocks:

| Partner | Scene | Claim |
| --- | --- | --- |
| Crusoe (upstream contributor) | GLM-5.3 / HGX B300 | Ready ~**8 min → 31 s** |
| Saturn Cloud | vLLM scale-from-zero | Cold start ~**2–8.5 min → 6–34 s** |

For platform teams, read the post as same-day narrative for agent security, execution pooling, and inference elasticity—evaluate OpenShell (policy plane) and Snapshot (startup latency) separately.
