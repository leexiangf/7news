---
title: SageMaker Inference 支持 MIG：一卡多分区部署模型
slug: sagemaker-multi-instance-gpu
description: >-
  AWS 宣布 SageMaker Inference 可用 NVIDIA MIG
  做 GPU 分区：在 inference component 上按分区要算力，提高多模型利用率并保留硬件隔离。
date: '2026-11-06'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - MIG
  - 推理
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/sagemaker-inference-now-supports-multi-instance-gpu-to-maximize-gpu-utilization-for-model-endpoints/
sourceLevel: A
publisher: amazon
faqs:
  - question: 哪些端点可用？
    answer: 需使用 inference components 的端点；单模型、无服务器与异构实例池不可分区。
  - question: 分区有何限制？
    answer: 单卡分区数取决于加速器且不超过 7；布局在创建端点时选定；跨多 GPU 的模型仍需整卡。
draft: false
candidateId: amazon-ml-2026-11-06-b620342f92
---
AWS 宣布 **SageMaker Inference** 支持用 **NVIDIA Multi-Instance GPU（MIG）** 做 GPU 分区：物理 GPU 切成硬件隔离的份额，各有固定算力与显存。部署侧基于 **inference components**——分区像 CPU/内存一样成为组件可申请的资源，从而在同一实例上放更多模型，或选「新卡的一小块」而不是整卡代际跳变。

相对多模型端点的软共享或自建 K8s MIG，SageMaker 托管配置、放置与扩缩，强调可预期延迟、故障隔离、无冷启动与租户隔离。边界：分区数 ≤7 且随卡型变化；布局在创建端点时选定；需要多 GPU 的模型仍占整设备。Salesforce 等出现在需求共创叙述中；成本与利用率数字以原文测量为准。
