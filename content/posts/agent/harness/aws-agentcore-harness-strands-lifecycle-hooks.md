---
title: AgentCore Harness 升级：默认搭上 Strands，并加生命周期钩子
slug: aws-agentcore-harness-strands-lifecycle-hooks
description: >-
  AgentCore Harness 默认改用开源 Strands；内置工具与上下文管理；生命周期钩子可 allow/deny 工具调用；现有
  harness 自动获得升级。
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: harness
tags:
  - AWS
  - AgentCore
  - Strands
  - Lifecycle Hooks
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-harness-adds-strands-harness-defaults-built-in-tools-and-lifecycle-hooks/'
sourceLevel: A
publisher: aws
faqs:
  - question: 要不要新建资源？
    answer: 否；现有 harness 自动获得升级，显式配置仍优先。
  - question: 钩子做什么？
    answer: 在 before/after invocation 与 tool call 等点跑确定性代码，可允许/拒绝工具调用。
draft: false
candidateId: amazon-ml-2026-11-19-576cfc788a
---

AWS 机器学习博客（**2026-11-19**）宣布 **Amazon Bedrock AgentCore Harness** 升级：托管默认改为基于开源 **Strands harness**（Apache 2.0），并引入**生命周期钩子**，在 agent loop 的固定点跑确定性检查或通知。

## 默认能力与钩子

用托管默认时，可拿到推荐模型、任务导向系统提示、（Bedrock Anthropic 等）自动 prompt caching、主动上下文摘要，以及 `todo_write`、`subagent`、`web_fetch`、细粒度读写编辑等内置工具。文中称上下文瘦身后相对其他主流 harness 可约 **34%** 更低 token 成本——厂商自述。显式 `model` / `systemPrompt` / `truncation` / `allowedTools` 仍覆盖默认。

钩子支持 `before_invocation`、`before_tool_call`、`after_tool_call`、`after_invocation`；Lambda 可同步 allow/deny，SNS / EventBridge 仅通知；子 agent 工具调用同样过钩子。属**托管 harness 能力升级**，不是新资源类型；固定安全边界应显式列出工具。现有 harness 自动获得升级。
