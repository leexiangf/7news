---
title: NVIDIA Kubernetes Engine / Recipes 公测：托管 GPU K8s 开源组件
slug: nvidia-kubernetes-engine
description: >-
  NVKE 与 NVKR 以 Apache 2.0 公测：NVKR 钉死节点镜像与包，NVKE 经 REST/控制器供应客户集群；属 DSX，暂不建议生产。
date: '2026-11-10'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Kubernetes
  - DSX
  - NVKE
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/manage-kubernetes-clusters-for-gpu-infrastructure-with-nvidia-kubernetes-engine/
sourceLevel: S
publisher: nvidia
faqs:
  - question: NVKE 与 NVKR 分工？
    answer: NVKR 构建版本钉死的节点镜像与包；NVKE 用这些产物通过 REST API 与控制器供应、管理客户集群。
  - question: 能否上生产？
    answer: 公测阶段，API/行为可能变更，官方明确暂不建议生产负载。
draft: false
candidateId: nvidia-developer-2026-11-10-c71df7975e
---

NVIDIA 技术博客（**2026-11-10** 前后）宣布开源 **NVIDIA Kubernetes Engine（NVKE）** 与 **NVIDIA Kubernetes Recipes（NVKR）**，均属 **DSX AI Factory Platform**，**Apache 2.0**、**公测**。目标：让 AI 工厂在自有 GPU 基建上提供托管 Kubernetes 服务，同时保留软件、运维与客户体验控制权——与同日 OpenShell / Snapshot 叙事配套。

## 分工

| 组件 | 角色 |
| --- | --- |
| **NVKR** | 从版本钉死的源构建可复现节点镜像、容器镜像与包，并记录输入 |
| **NVKE** | 用这些产物经管理平面（`nvkectl` 引导 seed → management cluster）以 REST API / 控制器供应客户工作负载集群 |

机器生命周期经 **NICo / CAPNICo** 管理。二者可合用也可独立。文中称 Firmus、SK Telecom 等在集成，Mirantis、Rafay、Spectro Cloud、vCluster 等伙伴有组件接入计划。

公测期间 API 与行为可能变化，**暂不建议生产**。对平台组：先当「托管 GPU K8s 积木」评估，与 AICR recipe / Snapshot 分开选型。
