---
title: 'AgentCore Harness upgrade: Strands defaults and lifecycle hooks'
slug: aws-agentcore-harness-strands-lifecycle-hooks
description: >-
  AgentCore Harness defaults to open-source Strands; built-in tools and context
  management; lifecycle hooks can allow/deny tool calls; existing harnesses pick
  up the upgrade automatically.
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: harness
tags:
  - AWS
  - AgentCore
  - Strands
  - Lifecycle Hooks
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-harness-adds-strands-harness-defaults-built-in-tools-and-lifecycle-hooks/'
sourceLevel: A
publisher: aws
faqs:
  - question: New resource type?
    answer: No. Existing harnesses get the upgrade automatically; explicit config still wins.
  - question: What do hooks do?
    answer: Run deterministic code at before/after invocation and tool-call points; can allow or deny tool calls.
draft: false
candidateId: amazon-ml-2026-11-19-576cfc788a
---

AWS’s ML Blog (**19 Nov 2026**) upgrades **Amazon Bedrock AgentCore Harness**: managed defaults move to the open-source **Strands harness** (Apache 2.0), and **lifecycle hooks** run deterministic checks or notices at fixed points in the agent loop.

## Defaults and hooks

Managed defaults bring a recommended model, task-oriented system prompt, automatic prompt caching (Bedrock Anthropic and peers), proactive context summarization, and built-ins such as `todo_write`, `subagent`, `web_fetch`, and fine-grained read/write/edit tools. The post cites ~**34%** lower token cost after context thinning versus other mainstream harnesses—vendor claim. Explicit `model` / `systemPrompt` / `truncation` / `allowedTools` still override defaults.

Hooks cover `before_invocation`, `before_tool_call`, `after_tool_call`, `after_invocation`; Lambda can sync allow/deny, SNS / EventBridge notify only; sub-agent tool calls also pass hooks. Managed harness capability upgrade—not a new resource type; hard security boundaries should list tools explicitly. Existing harnesses pick up the upgrade automatically.
