---
title: Azure Catalyst 与 Ignite 基建：Foundry + AKS 作 Agent 运行轴心
slug: azure-catalyst-infra
description: >-
  Ignite：隔离沙箱、Agent Grid、上下文复用与 AKS AI Manager；Catalyst 用 Agent 做应用/数据现代化（称
  140 万应用）；Foundry↔AKS 连通开源模型路径。
date: '2026-11-17'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - Azure
  - Catalyst
  - Foundry
  - AKS
  - Ignite
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://azure.microsoft.com/en-us/blog/introducing-azure-catalyst-agentic-modernization-and-new-ai-infrastructure-innovations/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 本周最该先看哪几块？
    answer: >-
      隔离执行（AKS Agent Sandbox）、Agent 网络（Agent Grid）、上下文复用、推理效率 / AKS AI
      Manager；构建轴心是 Foundry + AKS。
  - question: Catalyst 是什么？
    answer: 用 Agent 做应用、数据与基础设施现代化的一揽子方案；文中称已现代化 140 万应用——厂商口径。
draft: false
candidateId: microsoft-azure-blog-2026-11-17-a64734f260
---

Azure 博客（**2026-11-17**，Ignite）把叙事拆成三轴：**下一代 AI 应用怎么跑**、**存量怎么用 Agent 现代化**、**云—边缘—设备怎么延展**。头条能力落在隔离执行、Agent 网络、上下文管理与推理效率；组织方式上 **Microsoft Foundry** 与 **AKS** 被放在「托管体验 ↔ 深度定制」的中心。

## 运行面：沙箱、网格、上下文、放置

Agent 会写代码、连多工具、拖长上下文——基础设施要按层补：

| 能力 | 要点 |
| --- | --- |
| Agent Sandbox（AKS 扩展） | 每会话 VM 级隔离；预热池；可选 serverless |
| Agent Grid | 经认证加密连接其他 Agent / 模型 / 工具 / Azure 服务；身份策略 + 默认拒绝 |
| 上下文与状态 | 长任务复用已处理 prompt 上下文，少在 GPU 上重算；缓存在租户内可控 |
| AKS AI Manager | 按模型需求与舰队实时容量做放置 |

Confidential computing 覆盖「使用中」数据。开源侧点名 Kubernetes、vLLM、Ray，以及预览中的 AKS flex nodes（含 Azure 外 GPU 环境）。

## Catalyst：把技术债当成上 AI 的捷径

**Azure Catalyst** 用 Agent 做发现、规划与执行：评估遗产代码、画依赖、生成迁移波次。文中称已现代化 **140 万** 应用；内部案例写 Microsoft Quantum / Xbox 现代化约快 **80%**，Intune 关键库约快 **75%**，GitHub 把 Copilot agentic harness（约 80 万行）从 TypeScript 迁到 Rust——均为厂商自述。治理规则书、自带模型、与 Microsoft Security / GitHub Copilot 联动修漏洞，是差异化卖点。

## 怎么读这篇公告

这是**方向集合**，不是单一 SKU 价目。平台组可先按「隔离 / 网络 / 上下文 / 放置」四条对照现有 Agent 拓扑，再决定跟 Foundry 托管还是 AKS 自管；Catalyst 与运行面能力拆开评估。具体预览资格与区域以各产品文档为准。
