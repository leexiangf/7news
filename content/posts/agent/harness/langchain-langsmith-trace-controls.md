---
title: LangSmith 新增多层敏感 Trace 访问控制（Enterprise）
slug: langchain-langsmith-trace-controls
description: >-
  LangChain：LangSmith Enterprise 可限制 trace 输入输出可见性、按用户组授权，并用根 run 元数据做
  ABAC；完整数据入库，按需最小权限展示。
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - LangSmith
  - Security
  - Governance
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://www.langchain.com/blog/protect-sensitive-data-in-your-traces-new-controls-in-langsmith
sourceLevel: A
publisher: langchain
faqs:
  - question: 三项控制？
    answer: 限制输入/输出可见性；用户组权限（叠加 RBAC/ABAC）；基于根 run 元数据的 trace 级策略。
  - question: 谁能用？
    answer: 现面向 LangSmith Enterprise；文档覆盖 input/output、user groups、metadata policies。
draft: false
candidateId: langchain-2026-11-17-207b91be11
---
LangChain 博客（Trammell Saltzgaber，**2026-11-17**）为 **LangSmith Enterprise** 增加三类敏感 trace 控制：工程师仍可看 run tree、延迟与成本等，但可**看不到**用户消息与模型回复等输入输出；按**用户组**在工作区层设权限；用根 run **元数据**写 trace 级 ABAC（如按客户 ID、用户 ID）。

设计是完整保真入库、不再靠双份脱敏 workspace，再按最小权限展示——例如支持组只看所负责客户的 I/O，Agent 工程师看全量性能树但隐藏 I/O。属**治理功能**上线说明，非开源 harness 变更。
