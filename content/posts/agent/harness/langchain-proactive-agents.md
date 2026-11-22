---
title: LangChain 谈主动式 Agent：记忆与审核 UX 决定注意力预算
slug: langchain-proactive-agents
description: >-
  LangChain：主动式 Agent 由事件/日程触发并朝目标推进；内部 GTM Agent 与 Robin 超 70% 运行来自日程；
  强调记忆（seed/反馈/结果）与高信号审核 UX。
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - Proactive Agents
  - Memory
  - Deep Agents
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/what-weve-learned-building-proactive-agents'
sourceLevel: A
publisher: langchain
faqs:
  - question: 触发从哪来？
    answer: 现实事件（如新 PR）、开发者日程、以及 Agent 自设日程；文称 Managed Deep Agents 上超 70% 运行来自日程而非临时 prompt。
  - question: 两点必备？
    answer: 记忆（seed/反馈/结果，含 dreaming 维护）与审核 UX（高信号、易批、落在已有工作面如 Slack）。
draft: false
candidateId: langchain-2026-11-17-226d5fe68e
---
LangChain 博客（Sydney Runkle，**2026-11-17**）总结建设**主动式 Agent**的经验：像新员工一样从任务走向目标，在后台响应事件并必要时请示。触发来自现实事件、开发者日程与 Agent 自设日程；内部 **GTM Agent**（销售）与 **Robin**（工程，前 Open SWE）建在 Managed Deep Agents 上，称超过 **70%** 运行来自日程而非临时人工 prompt。

两点被视为关键：**记忆**（seed、当下反馈、事后结果；需处理显著性、过期与去重，常用「dreaming」后台整理）与 **UX**（高信号、为审核而建、出现在 Slack 等已有工作面）。并回扣 Goal Engineering——目标要划在人最容易给反馈的范围。属**实践观点稿**，可对照 Managed Deep Agents / Deep Agents 文档动手。
