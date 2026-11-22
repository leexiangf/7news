---
title: LangChain：用 Eval-Driven Development 改进 Agent
slug: langchain-eval-driven-development
description: >-
  LangChain 介绍 Eval-Driven Development：先定义「好」再写评测、再改 Agent，并持续在发布与生产中跑评测。
date: '2026-11-09'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - 评测
  - Agent
  - LangSmith
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/what-is-eval-driven-development'
sourceLevel: A
publisher: langchain
faqs:
  - question: EDD 的基本步骤？
    answer: 定义成功标准 → 改代码前先写评测 → 改完对比结果 → 发布后继续自动化与生产评测。
  - question: 这是产品发布吗？
    answer: 否。是方法论文章，可配合 LangSmith 等观测/评测工具落地。
draft: false
candidateId: langchain-2026-11-09-dc65a26b51
---
LangChain 博客用 **Eval-Driven Development（EDD）** 概括改进 Agent 的节奏：不要先改提示词/工具再凭感觉验收，而是先定义「好长什么样」，把评测写在改动前面，再对比变更前后，并在持续交付与生产中保持评测运转。

文中步骤包括：定义成功标准、先写 eval、改完对比、发布后自动化，以及生产侧评测。定位是**方法论文**，不是单一 API 上线说明；落地可对接 LangSmith 一类观测与评测产品，但核心主张独立于具体按钮。
