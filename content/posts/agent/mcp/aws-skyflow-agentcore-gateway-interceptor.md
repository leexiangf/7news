---
title: Skyflow 拦截器挂上 AgentCore Gateway，工具调用可去标识
slug: aws-skyflow-agentcore-gateway-interceptor
description: >-
  Skyflow Detect 作为 AgentCore Gateway 请求/响应拦截器：工具参数、模型上下文与文档链接 vault
  令牌化；三种 Shield 模式；默认 fail closed；无需改 agent/工具代码。
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: mcp
tags:
  - AWS
  - AgentCore
  - Skyflow
  - Privacy
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/protect-agent-tool-calls-with-skyflow-and-amazon-bedrock-agentcore-gateway/'
sourceLevel: A
publisher: aws
faqs:
  - question: 三种模式？
    answer: Shield the tool、Shield the model、Shield the document（文档去标识目前为 Detect v2 预览）。
  - question: 失败怎么办？
    answer: 默认 fail closed，去标识未完成则不放行明文。
draft: false
candidateId: amazon-ml-2026-11-19-0752c95e43
---

AWS 机器学习博客（**2026-11-19**）介绍如何把 **Skyflow Detect** 作为 **Amazon Bedrock AgentCore Gateway** 的请求 / 响应拦截器：Agent 经 Gateway 调工具时，在到达第三方工具或回灌模型前对敏感实体做去标识 / 还原，**无需改 agent 或工具代码**。Skyflow 可在 Marketplace 订阅，拦截器开源（MIT）。

## 三种 Shield

| 模式 | 行为 |
| --- | --- |
| Shield the tool | 参数出站令牌化、结果回程还原 |
| Shield the model | 提示与工具结果进模型前去标识 |
| Shield the document | 签名 URL 换成去标识副本（Detect v2 **预览**） |

策略可放 Parameter Store，密钥进 Secrets Manager，决策进 CloudWatch；失败默认 **fail closed**。与 AgentCore Policy、Bedrock Guardrails 分层互补。属**参考架构 + 开源组件**；文档模式仍为预览，需按区域与延迟做试点。
