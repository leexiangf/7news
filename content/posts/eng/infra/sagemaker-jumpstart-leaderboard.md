---
title: SageMaker JumpStart 上线模型排行榜，统一比质量速度与成本
slug: sagemaker-jumpstart-leaderboard
description: >-
  AWS：Studio 内 JumpStart Model Leaderboard，自跑 BBH/GPQA Diamond/MMLU-Pro，并测
  TTFT、吞吐与实例时价；首发 70+ 开源权重模型，可按用例与优化目标筛选后部署。
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - JumpStart
  - Benchmarks
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/introducing-the-amazon-sagemaker-jumpstart-model-leaderboard/
sourceLevel: A
publisher: aws
faqs:
  - question: 比什么？
    answer: 质量三榜（BBH、GPQA Diamond、MMLU-Pro）+ 标准化负载下的 TTFT、每请求吞吐、实例 $/hr。
  - question: 成本怎么读？
    answer: 仅为按需实例时价估算，不含流量/存储/折扣；最终以账单与计算器为准。
draft: false
candidateId: amazon-ml-2026-11-18-fa8035bde7
---
AWS（**2026-11-18**）在 SageMaker Studio 的 JumpStart 模型页增加 **Model Leaderboard**：用同一套评测与部署配置，并排比较质量、速度与成本。质量侧 AWS 自跑 **BIG-Bench Hard、GPQA Diamond、MMLU-Pro**；性能侧对各 JumpStart 部署配置发标准化负载，给出 TTFT、每请求吞吐与实例时价。

首发覆盖 Meta、Google、Qwen、IBM、Arcee 等 **70+** 模型。可按用例 profile（默认 Max Context）与优化目标（Balanced / Cost / Latency / Throughput）切换数字，再 Deploy 或 Customize。属**选型工具**上线，非新模型；小差距应按噪声处理，上线前仍需自有数据复测。
