---
title: NVIDIA AICR 接入 k8s-aibom：用运行时 AIBOM 盘点 GPU 集群上的 AI 负载
slug: nvidia-dsx-aicr-aibom
description: >-
  AICR 将 Google 开源 k8s-aibom 纳入合格组件，为 GKE 推理配方默认启用 CycloneDX 1.6 AIBOM；稳态约
  4 次/分钟 API 请求、约 2.2 millicores CPU。
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
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/validating-gpu-platforms-with-runtime-ai-inventory-via-the-nvidia-dsx-ai-factory/
sourceLevel: S
publisher: nvidia
faqs:
  - question: AICR 与 k8s-aibom 各管什么？
    answer: AICR 锁定并验证 GPU 平台配方；k8s-aibom 观察集群里受支持的 AI 工作负载并产出 AIBOM。
  - question: 默认哪些配方带 inventory？
    answer: h100-gke-cos-inference 与 h100-gke-cos-inference-dynamo；其他 GKE 配方可用 --runtime-inventory。
draft: false
candidateId: nvidia-developer-2026-11-11-29a3eb7181
---

NVIDIA 技术博客（约 **2026-11-11**）介绍 **DSX** 组件 **AI Cluster Runtime（AICR）** 新增合格的 **AI 物料清单（AIBOM）** 能力：绑定 Google 开源 **k8s-aibom**，观察 Kubernetes 上受支持的 AI 负载，发出 **CycloneDX 1.6** 记录（含置信度层级与证据定位）。

## 为什么配方不够

AICR recipe 能钉死驱动、Operator、网络组合，但应用侧镜像 tag（如 `:latest`）仍可能漂移——平台「已知良好」不等于「实际在跑什么」。运行时盘点补上这一层。

| 问题 | 谁回答 |
| --- | --- |
| GPU 基建是否来自已知良好配置？ | AICR |
| 上面跑了哪些 AI 资产？ | k8s-aibom → AIBOM |

## 落地与开销（官方验证环境）

示例基于 **AICR v1.2.0** 钉死 **k8s-aibom 1.6.2**。默认带 inventory 的配方：`h100-gke-cos-inference`、`h100-gke-cos-inference-dynamo`；其他 GKE 配方用 `--runtime-inventory` 开关。覆盖含 Dynamo、NIMService、LeaderWorkerSet 等受支持种类，可按命名空间 opt-in。

稳态观测称约 **4 次/分钟** API Server 请求、平均约 **2.2 millicores** CPU、控制器内存工作集约 **28–34 MiB**。对平台合规读者：把 AIBOM 当「运行时 SBOM 亲戚」接进既有供应链流水线，而不是替代 recipe 门禁。
