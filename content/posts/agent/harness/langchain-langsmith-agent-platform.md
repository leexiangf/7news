---
title: LangChain 以 Agent 记录重建 LangSmith，贯通构建到治理
slug: langchain-langsmith-agent-platform
description: >-
  LangChain 博客：Series C 后推出以 Agent 为核心对象的 LangSmith Agent Platform——owner/ID/类型、
  环境与 traces 挂在同一记录；治理覆盖任意 OTLP 运行时。
date: '2026-11-16'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - LangSmith
  - Agent Platform
  - Governance
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/we-rebuilt-langsmith-around-the-agent'
sourceLevel: A
publisher: langchain
faqs:
  - question: 数据模型变了什么？
    answer: 从扁平 project 改为每个 Agent 一条记录；本地/dev/staging/prod 与 traces、evals、部署同挂一 ID。
  - question: 已有运行时怎么办？
    answer: 可只接 traces/治理，不必迁运行时；支持 OTLP；云、BYOC、自托管均可。
draft: false
candidateId: langchain-2026-11-16-fc9fb307ba
---
LangChain 博客（Sam Crowder，**2026-11-16**）解释：在 Series C 与 **LangSmith Agent Platform** 发布后，为何把产品数据模型重排到以 **Agent** 为核心对象——让构建、运行、改进、治理挂在同一条记录上，减少工程师跨界面跳转，也让平台团队能回答「有哪些 Agent、谁负责、成本与质量如何」。

每条 Agent 记录含 **owner**、全局唯一不可变 **ID**、以及决定仪表盘与评测口径的 **type**（起步含 general purpose 与 coding；voice 等在路线图）。本地到生产环境同 ID 并列；Studio/自然语言构建、自有代码 harness 或第三方框架均可；运行可走 Agent Server 或保留原 runtime，只要把 traces 送进 LangSmith。治理侧强调 **Agent registry** 与 **LLM Gateway**，并可登记支持 **OTLP** 的外部/厂商 Agent。云、BYOC、自托管已可用。属**产品架构叙事**，非单点功能 changelog。
