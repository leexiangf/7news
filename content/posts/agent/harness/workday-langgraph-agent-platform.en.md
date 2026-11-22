---
title: How Workday built an enterprise agent platform on LangGraph and LangSmith
slug: workday-langgraph-agent-platform
description: >-
  LangChain case study: Workday’s Agent Platform uses LangGraph for
  orchestration and LangSmith for tracing and evals, wrapping internal gateways
  under strict enterprise compliance.
date: '2026-11-10'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Workday
  - LangGraph
  - LangSmith
author: Editorial
locale: en
sourceUrls:
  - >-
    https://www.langchain.com/blog/how-workday-built-an-enterprise-scale-ai-agent-platform-with-langgraph-and-langsmith
sourceLevel: A
publisher: langchain
faqs:
  - question: Platform goal?
    answer: >-
      Give internal product teams a production path for agents under Workday’s
      audit, compliance, and retention rules.
  - question: Stack?
    answer: >-
      LangGraph for orchestration; LangSmith for tracing, observability, and
      evals; a custom SDK over Workday’s LLM gateway and RAG services.
draft: false
candidateId: langchain-2026-11-10-8086e15e08
---
LangChain publishes a Workday case study: aiming to ship production agents by end of 2026, a roughly four-person Agent Platform team built an internal developer platform on **LangGraph** for orchestration and **LangSmith** for tracing and evals—under Workday’s strict security and data-retention bar.

Early products include an **Agent System of Record** that gates which APIs agents may call, plus a “Workday LangChain” Python SDK that routes LangChain primitives through internal LLM gateways, RAG, and other services. Engineers highlight how much Agent Server and LangSmith provide out of the box; when leadership asked about A2A and MCP strategy, the team said related capabilities were already in production. The platform also surfaces previously siloed internal AI services through one interface. Figures and timelines follow the vendor case study’s cited quotes.
