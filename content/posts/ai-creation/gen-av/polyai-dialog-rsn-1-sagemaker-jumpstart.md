---
title: PolyAI Dialog-RSN-1 上架 SageMaker JumpStart，可私有化部署实时对话
slug: polyai-dialog-rsn-1-sagemaker-jumpstart
description: >-
  PolyAI Dialog-RSN-1 登陆 Marketplace 与 JumpStart：自有 VPC 部署实时语音端点，兼容 OpenAI
  Realtime；16-bit PCM mono 16/24 kHz；连接最长约 30 分钟；目前仅英语。
date: '2026-11-19'
updated: '2026-11-21'
category: ai-creation
subcategory: gen-av
tags:
  - PolyAI
  - SageMaker
  - Voice
  - Realtime
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/polyai-dialog-rsn-1-is-now-on-amazon-sagemaker-jumpstart/'
sourceLevel: A
publisher: aws
faqs:
  - question: 协议与音频？
    answer: OpenAI Realtime；16-bit PCM mono 16/24 kHz；连接最长约 30 分钟。
  - question: 语言？
    answer: 通稿称目前仅英语。
draft: false
candidateId: amazon-ml-2026-11-19-0a5e507963
---

AWS 机器学习博客（**2026-11-19**）宣布 **PolyAI Dialog-RSN-1** 上架 **AWS Marketplace** 与 **Amazon SageMaker JumpStart**：面向实时复杂对话的推理模型，可在客户自有账号 / VPC 部署为 SageMaker 端点，账单走 AWS，受既有 IAM 与监控约束。

## 能力边界

| 项 | 口径 |
| --- | --- |
| 推理形态 | 单遍听音频、推理并回应——无单独 ASR 再交接 |
| 协议 | **OpenAI Realtime**（改 base URL 即可） |
| 音频 | **16-bit PCM mono**，**16/24 kHz** |
| 连接 | 最长约 **30** 分钟 |
| 语言 | **目前仅英语** |

JumpStart 提供一键部署与延迟 / 吞吐 / 成本等优化配置档。属**模型上架 + 托管部署**，不是 PolyAI 托管 SaaS 的替代说明；评测细节回厂商 launch 文。上线前在目标口音与最长会话时长做压测。
