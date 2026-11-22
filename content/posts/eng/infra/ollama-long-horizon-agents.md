---
title: Ollama × Together：让开源模型扛住长程 Agent 的前缀缓存
slug: ollama-long-horizon-agents
description: Ollama 与 Together AI 联名讨论长程 Agent 的大输入/小输出流量形态，以及如何保护前缀缓存以免每步重算整段对话。
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Ollama
  - Together AI
  - Agent
  - 前缀缓存
author: 编辑部
locale: zh
sourceUrls:
  - 'https://ollama.com/blog/open-models-long-horizon-agents'
sourceLevel: A
publisher: ollama
faqs:
  - question: 问题形态是什么？
    answer: >-
      编码 Agent 每步常把整段对话（系统提示、工具定义、已读文件、已跑命令）再送一遍，却只返回很短的工具调用；ISL 大、OSL
      小，依赖前缀缓存，也极易被破坏。
draft: false
candidateId: ollama-blog-2026-11-20-0accc1483e
---
Ollama 博客与 Together AI 作者联名写长程 agentic 负载：编码 Agent 每一步往往把**整段对话史**再送给模型，返回却常常只是几十 token 的工具调用——大 ISL、小 OSL。若 GPU 每轮从头算完整 transcript，会话会越来越慢、越来越贵；**前缀缓存**省下大部分工作，但也很容易被 harness 或推理侧的细节弄断。

双方从相反两端动手：Ollama 管 harness（请求里放什么），Together 管推理引擎（请求到达后怎么算），并试图把「如何保护缓存」写成两边都能用的实践。文中还区分 prefill 与 decode 阶段。具体技巧与配置以原文为准。

对 Agent 运行时作者：先审计每步是否无谓改写了可缓存前缀，再谈换更大 GPU。
