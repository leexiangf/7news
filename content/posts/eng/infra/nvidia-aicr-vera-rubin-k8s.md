---
title: NVIDIA AICR：为 Vera Rubin NVL72 准备 Day-1 的 Kubernetes 配方
slug: nvidia-aicr-vera-rubin-k8s
description: >-
  AI Cluster Runtime 把 Vera Rubin 的驱动 R615.23、DRA v0.5.0、Ubuntu 26.04 64k 内核等收成
  Preview recipe；参考集群 NCCL all-reduce 门禁约 744.71 GB/s。
date: '2026-11-02'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Kubernetes
  - Vera Rubin
  - AICR
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/making-kubernetes-ai-ready-for-nvidia-vera-rubin-on-day-one/
sourceLevel: A
publisher: nvidia
faqs:
  - question: 相对 GB200 要改什么？
    answer: >-
      新驱动分支（验证用 R615.23）、ConnectX-9 / BlueField-4 与 DOCA-OFED 3.3.0、托盘拓扑与 MIG
      档位差异；AICR recipe 把选择固化。
  - question: Preview 意味着什么？
    answer: 早期接入路径，尚未等同 Supported 配方的生产支持与生命周期认证。
draft: false
candidateId: nvidia-developer-2026-11-02-0a321f63fb
---

NVIDIA Developer Blog（**2026-11-02**）介绍 **AI Cluster Runtime（AICR）**（属 DSX AI Factory）：把调优配置收成可复现 **recipe**，生成部署包，并对运行中集群做校验——目标是 **Vera Rubin NVL72** 托盘在 Kubernetes 上 Day-1 可起。

## 相对 GB200：用户可见差异

| 项 | 变化 |
| --- | --- |
| GPU 驱动 | 新分支；验证基线 **R615.23** open-kernel-module（早期瞄 R610，正式平台支持写 R620） |
| 网卡 / DPU | ConnectX-7 / BF-3 → **ConnectX-9** / **BlueField-4**；测试镜像含 **DOCA-OFED 3.3.0** |
| 拓扑 | 托盘仍 2 CPU + 4 GPU，但 CX-9 PCI 功能组更多；NUMA / GPU–NIC 亲和需重核 |
| IMEX | 多节点 NVLink 仍用 IMEX；DRA 管 IMEX 时需停掉主机静态 `nvidia-imex` |
| MIG | Rubin 新档位；AICR 本批 recipe **整卡分配、不配 MIG** |

## Recipe 固化了什么

Vera Rubin 家族（RKE2 + vr200 + Ubuntu；训练 / 推理 / Dynamo 变体）标 **Preview**。编码选择包括：主机预装驱动故 `driver.enabled: false`；**DRA v0.5.0** + ComputeDomains；**Kubernetes ≥ 1.34.1**；**Ubuntu 26.04** arm64 **64k 页**内核；抬高 NFD topology updater 内存上限（多 TB 节点默认 60Mi 会 OOM）。

工作流：`aicr recipe` → `aicr bundle` → `snapshot` / `validate`（deployment / conformance / performance）。验证用 **GPU Operator v26.7.0** + 官方 DRA **v0.5.0**。训练配方跨节点 NCCL all-reduce 门禁：文中给出 **744.71 GB/s** bus bandwidth（16 GiB、NVLink fabric）通过口径。

早期硅片验证还曾暴露 go-nvlib 未映射 Rubin 架构值导致 DRA kubelet 插件 crash-loop，修复进入正式 DRA v0.5.0。对平台组：用 recipe 当「已验证组合」清单，勿把 Preview 当成生产 Supported 生命周期。
