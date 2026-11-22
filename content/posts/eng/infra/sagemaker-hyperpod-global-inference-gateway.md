---
title: HyperPod Global Inference Gateway：跨 Region 集群共用一个推理入口
slug: sagemaker-hyperpod-global-inference-gateway
description: >-
  AWS：SageMaker HyperPod 推出 Global Inference Gateway，把多集群/多 Region 收成一个 SigV4
  端点，按 KV 余量、队列、邻近与错误率选集群并自动 failover。
date: '2026-11-20'
updated: '2026-11-22'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - HyperPod
  - Inference
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/introducing-amazon-sagemaker-hyperpod-global-inference-gateway-one-endpoint-across-regions-and-clusters/'
sourceLevel: A
publisher: aws
faqs:
  - question: 和集群内 Inference Gateway？
    answer: 集群内 Gateway 仍选 pod；Global 是第二层，在已发布集群之间选集群。
  - question: 可用区域？
    answer: 通稿列 13 个 AWS Region。
draft: false
candidateId: amazon-ml-2026-11-20-62e6c491de
---
AWS 机器学习博客（**2026-11-20**）推出 **Amazon SageMaker HyperPod Global Inference Gateway**：在已有「每集群一个 Inference Gateway」之上，再加一层 **SageMaker 托管全局网关**，把你注册的多个 HyperPod 集群（同区或跨 Region）收成**一个**调用入口。请求经 SigV4/IAM，经 AWS PrivateLink 骨干转发；集群内 Gateway 仍按 KV 利用率等选 pod。

选集群默认权重：RegionProximity **0.40**、QueueDepth **0.25**、KVHeadroom **0.20**、ErrorRate **0.15**（可改，且须和为 1）。故障时自动切走，流式开始后一般不重试。需先在集群 `InferenceGatewayConfig` 开 `globalRouting` 再 `CreateGlobalInferenceGateway`。通稿称在 **13** 个 Region 可用。属**跨集群推理路由**，与同日 SageMaker 跨 Region 端点路由互补但面向 HyperPod。
