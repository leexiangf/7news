---
title: SageMaker 推出跨 Region 推理路由，单入口兜住区域容量缺口
slug: sagemaker-cross-region-inference-routing
description: >-
  SageMaker AI inference router：把多 Region/账号已有端点注册为目的地；本区健康优先本地，容量不足时把新请求切到其他目的地——不创建容量。
date: '2026-11-19'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - Inference
  - HA
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/keep-inference-running-through-regional-capacity-shortfalls-with-cross-region-inference-routing-in-amazon-sagemaker-ai/'
sourceLevel: A
publisher: aws
faqs:
  - question: 会不会自动扩容？
    answer: 不会；router 不创建容量、不部署模型，只在已注册目的地间调度。
  - question: 应用怎么调？
    answer: 调 router 而不是具体端点；实时响应带回 destination 与 routing reason。
draft: false
candidateId: amazon-ml-2026-11-19-0b5c4561b2
---

AWS 机器学习博客（**2026-11-19**）推出 **Amazon SageMaker AI** 的**跨 Region 推理路由**：新资源 **inference router** 给应用一条统一调用路径，覆盖你已在一个或多个 Region / 账号部署的实时端点、inference component 或异步端点。

## 机制

| 概念 | 含义 |
| --- | --- |
| Router | 区域资源，应用调用入口 |
| Routing target | 逻辑模型名 |
| Destination | 完整端点 ARN |

本区目的地健康时优先本地；不可靠时把**新请求**切到其他已注册目的地，恢复后再逐步回流。`InvokeEndpoint` 直连仍可用；`InferenceId` / `CustomAttributes` 透传；实时响应带回 destination 与 routing reason。

## 边界

Router **不**创建容量、扩缩、部署或复制制品——只调度已有目的地。属**托管 failover 路由**，替代各团队自写跨 Region 重试与防抖。限额与计费回文档；上线前在双区注册真实目的地做一次切流演练。
