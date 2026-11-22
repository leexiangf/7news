---
title: LangChain 谈 Goal Engineering：按「好给反馈」来划定 Agent 目标
slug: langchain-goal-engineering
description: >-
  Harrison Chase 等：长程目标 Agent 的关键是让人容易给高质量反馈；Actively AI
  案例从「每账户一 Agent」改为跨账户的 motion（Deep Agents）。
date: '2026-11-14'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - Goal Engineering
  - Deep Agents
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/goal-engineering'
sourceLevel: A
publisher: langchain
faqs:
  - question: 核心主张？
    answer: 划定 Agent 范围时，优先让人类在该范围内容易给出高质量反馈；反馈 UX 往往是性能瓶颈。
  - question: Actively 怎么改的？
    answer: 从每客户账户一个推进 Agent，改为按 outbound 等「motion」跨账户工作，账户上下文由后台采集 Agent 组装。
draft: false
candidateId: langchain-2026-11-14-b576b148cf
---
LangChain 博客（Harrison Chase 与 Actively AI 合作者，**2026-11-14**）提出 **Goal Engineering**：当 Agent 从工具调用走向开放目标时，范围设计要让人**尽可能容易**在运行中给出反馈。硬伤常来自「写不进文档」的隐性上下文（品牌口味、激进程度等），只能靠专家反馈注入；因此审查 UX 值得重投入。

**Actively AI** 案例：初版按「一账户一 Agent」推进销售，结果审查切换多、跨账户经验难共享；第二版改为基于 **Deep Agents** 的 **motion**（如 outbound、早期成交推进）——同类任务集中审查，反馈自然可迁移；账户客观上下文改由后台采集 Agent 组装，motion 按需拉取。文末称 prompt/context engineering 可能淡出，**goal engineering** 仍会留下。属**观点+案例稿**，非产品发版。
