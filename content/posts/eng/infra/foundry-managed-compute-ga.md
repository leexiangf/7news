---
title: Foundry Managed Compute 正式 GA，托管 GPU 上直接跑开源模型
slug: foundry-managed-compute-ga
description: >-
  Microsoft：Foundry Managed Compute 正式 GA，目录 150+ 开源模型，可选 NVIDIA A100/H100/H200
  与 AMD MI300X；另预览 LoRA 适配器部署与自带权重。
date: '2026-11-20'
updated: '2026-11-22'
category: eng
subcategory: infra
tags:
  - Microsoft
  - Foundry
  - Open Models
  - GPU
author: 编辑部
locale: zh
sourceUrls:
  - 'https://devblogs.microsoft.com/foundry/managed-compute-ga/'
sourceLevel: A
publisher: microsoft
faqs:
  - question: 和托管模型 API 有何不同？
    answer: 面向开源权重，在专用 GPU 上由 Foundry 管容器与 serving 运行时，按实例/加速器按小时计费。
  - question: 预览能力？
    answer: LoRA 适配器部署与 Bring Your Own Weights（有限公测）同日宣布。
draft: false
candidateId: microsoft-foundry-2026-11-20-e52310c474
---
Microsoft Foundry 博客（**2026-11-20**）宣布 **Managed Compute** 正式 **GA**：自 Build 预览以来扩容、加强 prompt 复用，并覆盖美/欧 Data Zone；目标是「选开源模型，像调托管 API 一样上线」，由平台配 GPU、维护镜像与运行时。

目录称 **150+** Hugging Face 开源模型可筛「Managed Compute」部署；模板决定上下文长度、运行时与 GPU（NVIDIA A100/H100/H200 或 AMD MI300X）。扩容靠提高 `capacity` 加实例；支持前缀亲和的 prompt caching 与负载感知路由，部分模型开 speculative decoding。供应链侧称权重复核、SafeTensors、镜像扫描签名，权重落 Azure 不必连 HF Hub。同日预览：Foundry 微调产出的 **LoRA** 多适配器共卡，以及自带完整权重（有限公测）。属**托管开源推理 GA**；配额与区域以门户为准。
