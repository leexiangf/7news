---
title: 'NVIDIA Kubernetes Engine / Recipes enter public preview for managed GPU K8s'
slug: nvidia-kubernetes-engine
description: >-
  NVKE and NVKR open under Apache 2.0 in public preview: NVKR pins node images
  and packages; NVKE provisions customer clusters via REST/controllers—DSX
  stack, not production-ready yet.
date: '2026-11-10'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Kubernetes
  - DSX
  - NVKE
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/manage-kubernetes-clusters-for-gpu-infrastructure-with-nvidia-kubernetes-engine/
sourceLevel: S
publisher: nvidia
faqs:
  - question: How do NVKE and NVKR split?
    answer: NVKR builds version-pinned node images and packages; NVKE uses those artifacts to provision and manage customer clusters via REST APIs and controllers.
  - question: Production-ready?
    answer: Public preview—APIs/behavior may change; NVIDIA explicitly advises against production loads for now.
draft: false
candidateId: nvidia-developer-2026-11-10-c71df7975e
---

NVIDIA’s technical blog (around **10 Nov 2026**) open-sources **NVIDIA Kubernetes Engine (NVKE)** and **NVIDIA Kubernetes Recipes (NVKR)** under the **DSX AI Factory Platform**—**Apache 2.0**, **public preview**. Goal: let AI factories offer managed Kubernetes on their own GPU infrastructure while keeping control of software, ops, and customer experience—paired with the same-day OpenShell / Snapshot narrative.

## Split of labor

| Component | Role |
| --- | --- |
| **NVKR** | Build reproducible node images, container images, and packages from version-pinned sources, recording inputs |
| **NVKE** | Use those artifacts via a management plane (`nvkectl` seed → management cluster) and REST APIs/controllers to provision customer workload clusters |

Machine lifecycle runs through **NICo / CAPNICo**. The two can ship together or alone. Firmus and SK Telecom are cited as integrating; Mirantis, Rafay, Spectro Cloud, vCluster, and peers have component plans.

During preview, APIs and behavior may change—**not recommended for production**. For platform teams: evaluate as managed-GPU-K8s building blocks, separately from AICR recipes and Snapshot.
