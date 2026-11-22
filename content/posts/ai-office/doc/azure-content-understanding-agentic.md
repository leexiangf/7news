---
title: Azure Content Understanding 推出 Agentic 模式（预览）
slug: azure-content-understanding-agentic
description: >-
  Microsoft Foundry 介绍 Content Understanding 的 agentic
  mode：对跨页表格、图表与长日志等难任务用文档原生工具多步求解，标准单遍模式仍覆盖多数抽取。
date: '2026-11-09'
updated: '2026-11-20'
category: ai-office
subcategory: doc
tags:
  - Azure
  - Content Understanding
  - 文档
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/when-one-pass-isnt-enough-agentic-mode-in-azure-content-understanding/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 何时用 agentic 而非标准模式？
    answer: 答案需跨页检索、多步计算/校验、证据拼装时；简单字段抽取仍用单遍标准模式。
  - question: 状态？
    answer: 博客写明 agentic mode 现为预览。
draft: false
candidateId: microsoft-foundry-2026-11-09-e24cadf382
---
Microsoft Foundry 博客介绍 **Azure Content Understanding** 的 **agentic mode（预览）**：多数文档仍适合「一遍读完、按 schema 抽字段」；少数难题需要在文档内搜索、核对、计算并换策略重试。

示例包括：跨两页财政部公报表格汇总 2003 年 1 月机构支出（含排除项与修订标记规范化），最终算出 **180,681** 百万美元；以及读经济图表、汇总长网络日志等。Agentic 模式提供文档原生 harness 与工具，把答案建立在可追溯证据上，而不是单点抽取。选型原则：简单字段走标准模式，复杂推理走 agentic。
