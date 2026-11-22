---
title: LangChain：Agent 从「执行任务」转向「逼近目标」
slug: langchain-tasks-to-goals
description: LangChain 博文讨论 Agent 交互从用户点名任务，转向用户给出目标、由 Agent 拆解/迭代任务列表，并涉及新的上下文与提示策略。
date: '2026-11-16'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - Agent
  - goals
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/from-tasks-to-goals'
sourceLevel: A
publisher: langchain
faqs:
  - question: 实际变化是什么？
    answer: 用户指定目标而非逐步任务；Agent 负责拆解、执行部分任务、更新任务列表并迭代逼近目标，需要更好的头脑风暴与任务选择能力。
draft: false
candidateId: langchain-2026-11-16-cfa79461fd
---
LangChain 发文 *From tasks to goals*，讨论 Agent 产品形态迁移：过去用户点名任务，现在用户给**目标**，由 Agent 拆成任务、执行一部分、更新清单，再继续迭代。

文中指出这会改变 Agent「做什么、需要什么、如何构建、如何交互」。Agent 必须更会头脑风暴与选择任务，并需要新的上下文工程与提示策略；若反复建议同一批任务，体验会塌。这是方法论/产品叙事，不是单一 API 发布。

对构建长程 Agent 的团队：可对照自家是否仍把「任务清单」当唯一 UI；具体实现仍回 LangChain/LangSmith 文档。
