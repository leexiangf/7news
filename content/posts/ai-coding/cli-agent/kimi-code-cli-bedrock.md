---
title: AWS 说明如何在 Amazon Bedrock 上使用 Kimi Code CLI
slug: kimi-code-cli-bedrock
description: >-
  AWS how-to：把 Kimi Code CLI 接到 Bedrock 模型入口——鉴权、模型 ID、CLI 配置与调用路径；非新模型发版。
date: '2026-11-19'
updated: '2026-11-21'
category: ai-coding
subcategory: cli-agent
tags:
  - AWS
  - Bedrock
  - Kimi Code CLI
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/use-kimi-code-cli-with-models-on-amazon-bedrock/
sourceLevel: A
publisher: amazon
faqs:
  - question: 文章性质？
    answer: 官方 how-to / 集成说明；在 Bedrock 上使用 Kimi Code CLI，不是 Moonshot 或 AWS 的全新模型发布。
draft: false
candidateId: amazon-ml-2026-11-19-712a49f1f6
---

AWS 机器学习博客发布 *Use Kimi Code CLI with models on Amazon Bedrock*，面向希望在 AWS 账户内用 Kimi 代码 CLI、同时走 Bedrock 模型入口的开发者与平台团队。

## 怎么读

| 是 | 不是 |
| --- | --- |
| 跨栈接线清单（鉴权、模型选择、CLI 配置、调用路径） | 新模型 / 新 SKU 发版 |
| 把「CLI 智能体」接到托管模型面 | 替代 Moonshot 官方 CLI 文档的全部细节 |

支持的模型 ID、区域、IAM 权限与计费以原文步骤与 Bedrock 控制台为准。若已在用 Kimi Code 或 Bedrock 其一，可当接线清单；生产前按账号策略做最小权限与审计核对。
