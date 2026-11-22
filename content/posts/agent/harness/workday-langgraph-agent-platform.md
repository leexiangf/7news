---
title: Workday 用 LangGraph / LangSmith 搭企业级 Agent 平台
slug: workday-langgraph-agent-platform
description: >-
  LangChain 案例：Workday Agent Platform 以 LangGraph 编排、LangSmith
  观测与评测，封装内部网关与合规，服务企业 HR/财务场景 Agent。
date: '2026-11-10'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Workday
  - LangGraph
  - LangSmith
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://www.langchain.com/blog/how-workday-built-an-enterprise-scale-ai-agent-platform-with-langgraph-and-langsmith
sourceLevel: A
publisher: langchain
faqs:
  - question: 平台目标？
    answer: 为内部产品团队提供可上生产的 Agent 开发与运行底座，并满足严格审计与数据治理。
  - question: 技术选型？
    answer: LangGraph 做编排；LangSmith 做追踪、观测与评测；自研 SDK 对接内部 LLM 网关与 RAG 等服务。
draft: false
candidateId: langchain-2026-11-10-8086e15e08
---
LangChain 博客刊出 Workday 案例：为在 2026 年底前把 Agent 推上生产，约四人的 Agent Platform 团队搭建内部开发者平台，用 **LangGraph** 做编排、**LangSmith** 做追踪与评测，并在严格安全与数据留存要求下交付。

首批产品包括 **Agent System of Record**（控制 Agent 可调用哪些 API）以及被称作「Workday LangChain」的 Python SDK——把 LangChain 原语路由到内部 LLM 网关、RAG 与其他服务。团队强调 Agent Server / LangSmith「开箱即用」；谈到 A2A 与 MCP 策略时，称相关能力已在生产。平台还把以往分散的内部 AI 服务收成统一接入面。叙述来自 LangChain 客户故事，规模与进度以文中引述为准。
