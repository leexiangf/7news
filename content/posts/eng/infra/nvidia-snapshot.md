---
title: NVIDIA Snapshot：GPU 推理副本秒级检查点恢复
slug: nvidia-snapshot
description: >-
  开源 Snapshot 捕获已初始化 CPU+GPU 态；B200 自测恢复约 3.6–42.7 秒（约 8×–36×）；Crusoe / Saturn
  称冷启从数分钟到数十秒。
date: '2026-11-10'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Snapshot
  - Dynamo
  - Kubernetes
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/start-and-restore-gpu-workloads-in-seconds-with-nvidia-snapshot/
sourceLevel: S
publisher: nvidia
faqs:
  - question: 解决什么问题？
    answer: 跳过权重加载、torch.compile 与 CUDA graph 捕获等冷启动步骤，让推理副本更快扩容与恢复。
  - question: 如何接入？
    answer: PodSnapshot / SnapshotJob CR；恢复时加 nvidia.com/restore-from 注解；有 vLLM、SGLang、TRT-LLM 示例。
draft: false
candidateId: nvidia-developer-2026-11-10-ce98a6a1f2
---

**NVIDIA Snapshot**（`ai-dynamo/snapshot`，**2026-11-10**）作为 DSX 开源组件发布：在 Kubernetes 上对已完全初始化的 GPU 工作负载做检查点 / 恢复，捕获 **CPU + GPU** 内存态，在**同 GPU 型号与驱动**的节点上拉起——跳过权重加载、`torch.compile`、CUDA graph 捕获等冷启动阶段。镜像拉取与机位供给仍在测量路径外。

## 两个操作

| 操作 | 做法 |
| --- | --- |
| Checkpoint | 对已 ready 的 Pod 建 `PodSnapshot`，或用 `SnapshotJob` 起服并就绪后快照 |
| Restore | 新 Pod 加注解 `nvidia.com/restore-from` 指向快照；引擎需短握手暂停 / 恢复 |

支持单节点多 GPU 一张工件（TP / DEP / DCP 等）；检查点可达约 **1 TB / 8 GPU**。仓库含 vLLM、SGLang、TensorRT-LLM 示例。

## 基准（B200 + VAST NFS）

官方矩阵（vLLM 0.31 / SGLang 0.5.21 / TRT-LLM 1.3.0）：恢复约 **3.6–42.7 秒**，相对冷启动约 **8×–36×**；检查点创建约 **15 秒–5.5 分钟**，且「检查点 + 恢复」在所有测过配置上短于单次冷启动。大 MoE 上 **CUDA restore**（约 18–29 秒）常主导；CRIU 主机态约 4.2–10.8 秒。

设计伙伴：Crusoe 称 GLM-5.3 就绪约 **8 分钟→31 秒**；Saturn Cloud 称 vLLM 约 **2–8.5 分钟→6–34 秒**（HGX B300）。数字为厂商与伙伴自测；恢复前会释放 KV，故 KV 不进工件。
