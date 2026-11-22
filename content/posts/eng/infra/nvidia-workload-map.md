---
title: NVIDIA Workload Map：用一份定义解读多框架 Kubernetes 作业
slug: nvidia-workload-map
description: >-
  NVIDIA 开源 Workload Map，用统一的工作负载结构描述替代按 CRD 手写适配器，供调度器与平台复用。
date: '2026-11-02'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Kubernetes
  - 调度
  - 开源
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/support-new-ai-frameworks-faster-using-nvidia-workload-map/
sourceLevel: A
publisher: nvidia
faqs:
  - question: 已有哪些预置定义？
    answer: >-
      目录含 JobSet、PyTorchJob、RayCluster/Job/Service、KServe、Knative、MPIJob、NIM、LeaderWorkerSet、Milvus、Grove
      PodCliqueSet、Dynamo 等；也可自写 YAML 定义。
  - question: 和 Karta 是什么关系？
    answer: 产品现名 Workload Map，CRD 资源 kind 仍为 Karta。
draft: false
candidateId: nvidia-developer-2026-11-02-452b3e36e8
---
Kubernetes 上的分布式训练/推理很少是单个 Pod：JobSet、Ray、MPI 等各自编码角色、副本与状态。平台每接一种 CRD 就要写一套适配器。NVIDIA Developer Blog 介绍开源的 **Workload Map**（前称 Karta；CRD kind 仍叫 Karta）：把「工作负载结构」写成可复用定义，让调度器与控制面不必为每个框架维护解析代码。

一份定义说明去哪读 Pod 模板、副本数与状态字段，并可把原生 condition 映射到共享的 running / completed / failed 词汇。博文以 JobSet 为例：同一条定义支撑 CLI 巡检、**KAI Scheduler** 的 gang scheduling，以及 **Run:ai** 的统一可见性；文中还提到 Elotl Nova 用它做多集群调度解读。仓库附带已测目录，覆盖 JobSet、PyTorchJob、Ray 系列、KServe、NIM、Dynamo 等；新类型通过 YAML 描述结构与状态即可接入。

对平台团队，价值是把「支持新框架」从发版排期里的适配器工程，变成可评审、可下发的数据面变更。
