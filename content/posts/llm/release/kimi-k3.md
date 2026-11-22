---
title: 月之暗面发布 Kimi K3：开源 2.8T 级前沿模型
slug: kimi-k3
description: >-
  Moonshot 介绍 Kimi K3：2.8T 参数、原生视觉与百万 token
  上下文，基于 KDA 与 Attention Residuals；产品与 API 可用，权重按官方时间表放出。
date: '2026-11-07'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Kimi
  - Moonshot
  - 开源
  - 长上下文
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.kimi.com/en/blog/kimi-k3'
sourceLevel: S
publisher: moonshot
faqs:
  - question: 规模与上下文？
    answer: 官方写 2.8T 参数、原生视觉、100 万 token 上下文；称其为首个开源 3T 量级量级模型叙事。
  - question: 权重何时开源？
    answer: 技术博文写明将按官方时间表释放完整权重，并与推理伙伴对齐；具体日期以 Moonshot 公告为准。
draft: false
candidateId: moonshot-2026-11-07-af0732b9de
---
Moonshot / Kimi 技术博文介绍 **Kimi K3**：定位其「最强」模型，**2.8T** 参数，基于 **Kimi Delta Attention（KDA）** 与 **Attention Residuals**，原生视觉，**100 万 token** 上下文，并称其为开源 **3T 量级**叙事中的首发。产品入口含 Kimi.com、Kimi Work、Kimi Code 与 API；默认 max thinking，低/高 effort 后续提供。

架构侧强调更高 MoE 稀疏（文中 896 专家中激活 16，配合 Stable LatentMoE）及相对 K2 约 **2.5×** 的 scaling 效率说法。能力展示偏长程编程、内核优化、编译器构建与含视觉的工程任务；官方自评在多项基准上达前沿开源水平，但仍落后最强闭源对照。完整权重与技术报告按官方时间表放出，并与推理生态伙伴对齐——引用开源可用性时以 Moonshot 渠道为准，不以第三方镜像为准。
