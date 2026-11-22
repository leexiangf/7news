---
title: NVIDIA DSX OS：用配方与持续校验运营 GPU Kubernetes 集群
slug: nvidia-dsx-os
description: >-
  DSX OS 开源层：AICR 配方、NVCRE 就绪/性能门禁、NVSentinel 健康闭环——把 GPU 集群从一次性验收变成可反复认证的生命周期。
date: '2026-11-05'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Kubernetes
  - DSX
  - AICR
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/configure-certify-and-operate-kubernetes-gpu-clusters-with-nvidia-dsx-os/
sourceLevel: A
publisher: nvidia
faqs:
  - question: 三大组件各管什么？
    answer: AICR 产出版本锁定配方与部署包；NVCRE 跑 NCCL/训练负载做就绪与性能门禁；NVSentinel 持续监控并可隔离故障节点后触发再验证。
  - question: 和 Vera Rubin recipe 有何关系？
    answer: AICR 同属 DSX / AI Factory 软件层；本篇把配置—认证—运维闭环写全。
draft: false
candidateId: nvidia-developer-2026-11-05-527bad4b47
---

单卡「看起来正常」却拖垮整份分布式训练，是集群运维常见坑。NVIDIA Developer Blog（**2026-11-05**）介绍 **DSX OS**：DSX AI Factory 上的开源软件层，把加速 Kubernetes 的**配置、认证与持续运维**串成闭环。

## 三块组件

| 组件 | 职责 |
| --- | --- |
| **AICR** | 版本锁定 recipe（版本、依赖图、健康断言）→ 渲染成 Argo CD / Flux / Helm 等部署包 |
| **NVCRE**（Cluster Readiness Engine） | 跑 NCCL 与训练负载，按可配置性能门槛验收；失败组可二分定位嫌疑节点 |
| **NVSentinel** | 持续盯 GPU / 节点 / 网络健康，发 node condition；可 cordon / drain / 修复后再交 NVCRE 复验 |

生命周期控制器在节点入群或修复归来时自动闸门；AICR 漂移检测可在驱动升级等变更后触发再认证。与同日前后的 Vera Rubin Preview recipe、OpenShell / Snapshot 叙事同一软件层——本篇写的是**运营闭环**，不是单次 bring-up 脚本。

对平台团队：交接时的一次性验收不够；补丁与扩容之后必须能**重复证明**集群仍达标。
