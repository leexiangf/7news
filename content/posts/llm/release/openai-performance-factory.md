---
title: OpenAI Performance Factory：用 Codex Agent 把性能回归从告警修到验收
slug: openai-performance-factory
description: >-
  OpenAI 介绍 Performance Factory：工程师定义可配置工作流，云端 Codex Agent 在性能告警后调查、提案修复，并由另一
  Agent 验收是否回到基线。
date: '2026-11-18'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - OpenAI
  - Codex
  - 性能
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - 'https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast'
sourceLevel: S
publisher: openai
faqs:
  - question: Performance Factory 解决什么问题？
    answer: 把反复出现的性能调查从人工排障，变成可配置工作流驱动的 Agent 自动化，并保留工程师审核修复。
  - question: 工作流怎么跑？
    answer: >-
      公告描述四块：可配置工作流的任务服务、分派循环、云端 Codex，以及变更时唤醒 Agent 的订阅。回归工作流在告警时开任务，Agent
      查根因并提案，部署后再验收是否回到基线。
draft: false
candidateId: openai-2026-11-18-6687f7be62
---
OpenAI 发文介绍名为 Performance Factory 的内部系统，核心目标是让 ChatGPT 相关性能问题更快被发现、定位与修复。叙事重点不是新模型发布，而是把「告警 → 调查 → 修复 → 验收」做成可重复的 Agent 工作流。

系统被拆成四块：带可配置工作流的任务服务、负责任务分派的循环、在云端执行的 Codex，以及在相关变更发生时唤醒 Agent 的订阅机制。工程师为常见重复任务写工作流与指令；其中回归工作流（Regression Workflow）在性能告警触发时打开任务，由 Agent 调查变慢原因、把发现写入任务，并提出供工程师审核的修复方案。部署后，另一 Agent 会接过同一任务，检查性能是否回到基线。

对工程读者，可把这当成「把 Codex 嵌进 SRE/性能值班」的参考架构：人工仍掌握合并与上线，Agent 负责缩短从告警到有依据结论的时间。文中未给出公开 SLA 或开源仓库，落地细节仍以 OpenAI 原文为准。
