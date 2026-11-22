---
title: Vercel Workflow SDK 5：端到端加密、多区域与 Agent 级性能
slug: vercel-workflow-sdk-5
description: >-
  Vercel：Workflow SDK 5 为事件日志载荷 AES-256-GCM
  加密、函数区域就地存放 run、减少队列跳转；相对 v4 多项延迟约 1.6×–25×。
date: '2026-11-12'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Workflow SDK
  - Agent
  - 耐久性
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/blog/workflow-sdk-5'
sourceLevel: A
publisher: vercel
faqs:
  - question: 源页日期？
    answer: 博客标注 2026-11-12。
  - question: 性能数字怎么理解？
    answer: 相对 v4.8.12 的托管 Vercel World 自测（如步间 p75 618→109 ms、1020 步中位 21→3 分钟）；非通用 SLA。
draft: false
candidateId: vercel-2026-11-13-2bfaf4838e
---
Vercel 发布 **Workflow SDK 5**（博客 **2026-11-12**），称在逾 **40 亿**步、**7 亿**次运行后强化安全、可靠与面向 Agent 的性能。安全：工作流/步骤入出参、hook 与流数据在离开应用前用 **AES-256-GCM** 按 run 独立密钥加密；Vercel 上默认可零配置，自托管 World 实现 `getEncryptionKeyForRun()`；可跨 run 写入时用目标公钥封装，并支持完成后丢弃载荷（`experimental_retention: 0`）。

基础设施：每个 run 落在启动所在**函数区域**（不再一律 `iad1`），可用 `start(..., { region })` 指定；故障隔离与步骤 failover 时状态仍钉在 home region。性能：减少队列跳转、增量回放、WebSocket 流等——托管对比称步间 p75 约 **618→109 ms**、1020 步中位约 **21→3 分钟**、流投递中位约 **226→53.5 s** 等（**1.6×–25×** 区间）。生态侧强调 World 原语亦支撑 fx / durable-harness / eve。属**大版本工程稿**；升级见 v5 docs，Python SDK 仍为 beta。
