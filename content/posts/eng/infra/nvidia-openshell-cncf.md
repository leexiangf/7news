---
title: NVIDIA 将 OpenShell 捐赠 CNCF，并扩展 DSX 开源组件
slug: nvidia-openshell-cncf
description: >-
  KubeCon：OpenShell 入 CNCF Sandbox；参与 Google 主导的 Agent Substrate；DSX 侧公开预览
  NVKE/NVKR，以及可把推理副本从数分钟冷启压到数十秒的 Snapshot。
date: '2026-11-10'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - OpenShell
  - CNCF
  - Kubernetes
author: 编辑部
locale: zh
sourceUrls:
  - 'https://blogs.nvidia.com/blog/open-source-openshell-infrastructure/'
sourceLevel: S
publisher: nvidia
faqs:
  - question: OpenShell 做什么？
    answer: >-
      为自主 Agent 提供确定性策略控制的安全运行时：管工具调用、推理访问与工作负载执行，并可对接自有算力、凭据与监控。
  - question: Snapshot 的自测数字？
    answer: >-
      Crusoe 称 GLM-5.3 就绪时间约 8 分钟→31 秒；Saturn Cloud 称 vLLM 冷启约
      2–8.5 分钟→6–34 秒——均为设计伙伴自测。
draft: false
candidateId: nvidia-blogs-2026-11-10-b4eac762a1
---

NVIDIA 博客（**2026-11-10**，KubeCon + CloudNativeCon 窗口）把三件事捆在一起讲：Agent **安全运行时**进社区、Agent **规模化执行**接上调度与推理、AI Factory 侧再开一批 **K8s 构建块**。头条是把 **NVIDIA OpenShell** 捐入 **CNCF Sandbox**。

## OpenShell：策略进社区，而不是再卖一层黑盒

OpenShell 面向自主 Agent：对工具调用、推理服务访问与工作负载执行施加**确定性策略**，架构可接自有算力、推理提供方、凭据存储与监控。Linux Foundation CEO 引述称云原生社区面临「给 Agent 安全环境」的新基建题。文中称上线未满一年已有数百组织使用、数万次贡献——属厂商口径。

捐赠的实质含义是：**治理规则进 CNCF 治理面**，企业可检查、改、合入产品，而不是只吃闭源 sidecar。

## Agent Substrate：闲时释放算力

NVIDIA 同时参与 Google 主导、已入 CNCF Sandbox 的 **Agent Substrate**，并称与 **Dynamo**（推理）与 **KAI Scheduler**（共享集群分配）协同。机制要点：任务间隙**挂起** Agent 环境、闲时**释放**算力，再在共享池上恢复——避免「每个会话常驻一整台 GPU」。双方还在做 OpenShell × Substrate 集成，让跨云 / 本地治理同一套策略。

| 层 | 项目 | 角色 |
| --- | --- | --- |
| 安全 / 治理 | OpenShell | 策略与边界 |
| 执行生命周期 | Agent Substrate | 挂起 / 恢复 / 池化 |
| 推理 | Dynamo | 模型服务 |
| 调度 | KAI Scheduler | 共享资源分配 |

## DSX：NVKE / NVKR / Snapshot

**NVKE**（Kubernetes Engine）与 **NVKR**（Kubernetes Recipes）公开预览：托管 K8s 服务的开源积木，自动化集群生命周期、签名且版本钉死的镜像；生态名单含 Mirantis、Rafay、Spectro Cloud、vCluster、Firmus、SK Telecom 等。

**NVIDIA Snapshot** 针对推理扩缩与恢复：不整模重载、不重新 warmup，从检查点秒级拉起副本。设计伙伴自测：

| 伙伴 | 场景 | 口径 |
| --- | --- | --- |
| Crusoe（上游贡献者） | GLM-5.3 / HGX B300 | 就绪约 **8 分钟 → 31 秒** |
| Saturn Cloud | vLLM scale-from-zero | 冷启约 **2–8.5 分钟 → 6–34 秒** |

对平台组，这篇是「Agent 安全 + 执行池化 + 推理弹性」同日叙事；选型时把 OpenShell 与 Snapshot 分开评估——前者是策略面，后者是启动时延面。
