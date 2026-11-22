---
title: Microsoft Foundry 上线持续改进闭环，配合 Ignite 发布
slug: foundry-continuous-improvement
description: >-
  Azure 博客：Foundry 以 Establish→Identify→Optimize→Validate 闭环改进 Agent；含 Insights
  GA、标注 traces、Agent Optimizer、技能/成本优化预览与 Managed/Programmed Training。
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft
  - Foundry
  - Ignite
  - Evaluations
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://azure.microsoft.com/en-us/blog/continuous-improvement-comes-to-microsoft-foundry/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 闭环四步？
    answer: Establish（评测/金标）→ Identify（Insights）→ Optimize（Agent Optimizer 等）→ Validate（统计对比与持续评测）再循环。
  - question: 同期相关能力？
    answer: Voice agents GA；Decision-1.1 在 Foundry GA 且可作评测裁判；Cost 视图预览；托管 Agent 并发提升等。
draft: false
candidateId: microsoft-azure-blog-2026-11-17-6e8f62d201
---
Microsoft Azure 博客（Tina Schuchman，**2026-11-17**，Ignite）宣布 **Microsoft Foundry** 引入**持续改进**：用 traces 与用户反馈喂回系统，跨运行找可改点，并在质量/速度/成本权衡上给出候选，由人决定上线。闭环为 **Establish → Identify → Optimize → Validate** 再重复。

Establish：评测与 rubric（含安全预览）、traces 标注预览、由真实用量生成评测集与**金标数据集**预览。Identify：**Insights** GA，把复发问题聚类并指向可能原因；对 LangGraph/LangChain/CrewAI 等外部 Agent 的可见性亦称 GA。Optimize：**Agent Optimizer** 改指令/技能/模型选择并先对照评测；预览含把 Insights 一键送 Optimizer、**技能优化**、**成本优化**；**Managed Training** 与 **Programmed Training**（预览，自写 Python recipe、无服务器 GPU）做权重侧定制。文中举例 Alaska Airlines 微调 MAI-Code-2-Flash 分类 ATA 维修报告、自测 **81.2%→91.1%**。属 **Ignite 产品叙事**，预览项以控制台状态为准。
