---
title: NVIDIA Workload Map describes multi-framework Kubernetes jobs once
slug: nvidia-workload-map
description: >-
  NVIDIA open-sources Workload Map, a shared structural description of
  Kubernetes workloads so schedulers and platforms stop writing per-CRD
  adapters.
date: '2026-11-02'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Kubernetes
  - scheduling
  - open source
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/support-new-ai-frameworks-faster-using-nvidia-workload-map/
sourceLevel: A
publisher: nvidia
faqs:
  - question: Which definitions ship out of the box?
    answer: >-
      The catalog covers JobSet, PyTorchJob, RayCluster/Job/Service, KServe,
      Knative, MPIJob, NIM, LeaderWorkerSet, Milvus, Grove PodCliqueSet, Dynamo,
      and more; custom YAML definitions are supported.
  - question: Is this the same as Karta?
    answer: The product is now called Workload Map; the CRD kind remains Karta.
draft: false
candidateId: nvidia-developer-2026-11-02-452b3e36e8
---
Distributed training and inference on Kubernetes are rarely a single pod. JobSet, Ray, MPI, and peers each encode roles, replicas, and status differently, so every new CRD tends to need a bespoke adapter. NVIDIA’s Developer Blog introduces open-source **Workload Map** (formerly Karta; the CRD kind is still Karta): a shared structural description that schedulers and platforms can reuse without framework-specific parsers.

A definition says where to find pod templates, replica counts, and status fields, and can map native conditions onto a shared running / completed / failed vocabulary. The JobSet walkthrough shows one definition driving CLI inspection, **KAI Scheduler** gang scheduling, and **Run:ai** visibility; Elotl’s Nova is cited as using the same map for multi-cluster decisions. A tested catalog covers JobSet, PyTorchJob, Ray variants, KServe, NIM, Dynamo, and more; new types arrive as YAML.

For platform teams, the pitch is moving “support this framework” from compiled adapter work on the release train into reviewable, cluster-applied data.
