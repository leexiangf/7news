---
title: AWS：把 OpenAI Codex 接到 Amazon Bedrock 的企业试点路径
slug: aws-codex-on-bedrock
description: >-
  AWS 博客说明 Codex 可走 Bedrock 推理，并给出 Native AWS Access、AgentCore Gateway 与 LLM
  Gateway 三条落地路径及开源 Guidance 仓库。
date: '2026-11-11'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - AWS
  - Bedrock
  - Codex
  - OpenAI
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/openai-codex-on-amazon-bedrock/'
sourceLevel: A
publisher: aws
faqs:
  - question: Codex 跑在哪里？
    answer: 仍在开发者工作站；变化在于模型请求如何到达 Bedrock，以及身份、策略与观测落在何处。
  - question: 建议从哪条路径起步？
    answer: 小范围 least-privilege 试点优先 Native AWS Access；需要托管网关或 Guardrails 再看 AgentCore Gateway；要在请求路径强制策略则用 LLM Gateway。
draft: false
candidateId: amazon-ml-2026-11-11-8983976445
---
AWS 机器学习博客面向平台团队：开发者已在用 **OpenAI Codex** 探索代码与处理重复工程，但企业不想另建一套模型访问、身份与运维栈。要点是 **Codex 仍跑在工作站**，模型请求可走 **Amazon Bedrock** 上受支持的 OpenAI 模型；示例以 **GPT-5.6 Sol** 为主，并提醒按 Region 核验 Sol / Terra / Luna 可用性。

三条推荐路径：**Native AWS Access**（IAM Identity Center + 最小权限，默认试点）；**AgentCore Gateway**（托管路由与 Bedrock Guardrails 等）；**LLM Gateway**（在请求路径强制控制，自建网关是其进阶形态）。配套开源 **Guidance for Codex on AWS** 含 Native、AgentCore、ECS 上 LiteLLM、Portkey、ADOT 与 CloudWatch 等 quick start。文中强调先定准用范围、模型/区域、配置归属、遥测分摊与允许的 skills/MCP，再扩大访问——这是企业接入指南，不是新 Codex 客户端发版。
