---
title: Airbnb 在 Bedrock 上用「每任务成本」运营编码 Agent
slug: airbnb-bedrock-cost-per-task
description: >-
  AWS 案例：Airbnb AirChat 经 LLM 网关打 Bedrock；上线前用自有任务评测 score 与 cost per
  task 定默认模型与 reasoning 上限，上线后用 CloudWatch 对照生产。
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - AWS
  - Bedrock
  - Airbnb
  - Coding Agents
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/how-airbnb-uses-cost-per-task-to-operate-coding-agents-on-amazon-bedrock/
sourceLevel: A
publisher: aws
faqs:
  - question: cost per task 定义？
    answer: 完成一个评测任务所消耗全部 token 按公开标价折算的成本（含所选 reasoning effort）。
  - question: 生产看什么？
    answer: CloudWatch Bedrock 延迟、限流与 token（含缓存读写）；并与评测结果对照调整默认与 effort 上限。
draft: false
candidateId: amazon-ml-2026-11-18-32f6f88176
---
AWS 与 Airbnb 合写案例（**2026-11-18**）：内部编码工具 **AirChat**（及 Remote 云 Agent）经 LLM 网关调用 **Amazon Bedrock**。约五周内上线八个新模型后，中旬约三分之二请求打到新模型——发布说明无法代表自家工程负载，故并行跑两套系统。

上线前：在自有任务上评测各模型与 reasoning effort 的 **score** 与 **cost per task**（完成一题的 token 标价成本），据此设默认与 effort 上限。上线后：用 CloudWatch（延迟、TTFT、限流、输入/缓存/输出 token）对照生产，偏离评测再回溯。属**运营实践**文，非新 AWS 产品发版。
