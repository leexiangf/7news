---
title: Amazon Bedrock AgentCore Web Answer 正式可用
slug: aws-bedrock-web-answer
description: >-
  AWS 宣布 AgentCore 上的 Web Answer GA：一次工具调用返回带出处的综合答案，与只返回检索结果的
  Web Search 形成互补。
date: '2026-11-05'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - AWS
  - Bedrock
  - AgentCore
  - MCP
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/getting-started-with-web-answer-on-amazon-bedrock-agentcore/
sourceLevel: A
publisher: amazon
faqs:
  - question: 和 Web Search 怎么选？
    answer: Web Search 返回排序 URL/摘要由你方模型综合；Web Answer 托管检索—核验—综合—引用，直接给成品答案。
  - question: 怎么接到 Agent？
    answer: 在 AgentCore Gateway 上添加 Web Answer 目标，经 MCP tools/list 与 tools/call 暴露；需相应 IAM 权限。
draft: false
candidateId: amazon-ml-2026-11-05-6dde141103
---
AWS 机器学习博客宣布 **Amazon Bedrock AgentCore** 上的 **Web Answer** 正式可用。Agent 用一次工具调用提交自然语言问题，即可拿回**带来源引用的综合答案**，不必自建「搜索 → 抓页 → 综合 → 抽引用」流水线。

路径是：Agent → **AgentCore Gateway**（IAM 或 JWT 鉴权）→ AWS 托管的 Web Answer 连接器。连接器自行规划并并行搜索、阅读关键页核验，证据不足会再搜，再把每条主张绑到 URL；结果以 **MCP** tool result 返回。相对 **Web Search**（只给排序结果、综合仍归你），Web Answer 适合作为更大 Agent 里的事实子任务。入门需在 Gateway 授 `bedrock-agentcore:InvokeWebAnswer` 等权限并添加目标；计费以 AWS 价目为准。
