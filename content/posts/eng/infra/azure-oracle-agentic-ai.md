---
title: Azure × Oracle：把 Agent 接到核心业务数据与 Work IQ 上下文
slug: azure-oracle-agentic-ai
description: >-
  Ignite：Agent 跨越 Oracle 关键数据与 Microsoft Work IQ；Excel 插件与 Copilot 入口；Database@Azure
  覆盖 33 区；Workload Center 有限预览 + 托管 MCP。
date: '2026-11-17'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - Azure
  - Oracle
  - Copilot
  - Ignite
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://azure.microsoft.com/en-us/blog/microsoft-and-oracle-bring-agentic-ai-into-flow-of-enterprise-work/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 用户从哪入口用？
    answer: Excel（Oracle AI Database 插件今日可用）、Teams、Microsoft Copilot；底层是 Database@Azure + Work IQ。
  - question: 运维侧新东西？
    answer: Azure Workload Center for Oracle 有限预览（Workload Virtual Instance）；Agent 经托管 MCP，支持 Entra 认证。
draft: false
candidateId: microsoft-azure-blog-2026-11-17-adc72adcda
---

Microsoft Ignite（**2026-11-17**）上，Azure 与 Oracle 联名写「把 agentic AI 放进企业工作流」：Agent 一边推理 Oracle 侧财务、供应链、HR、客户运营等**系统的记录**，一边吃 Microsoft **Work IQ** 对会议、邮件、文档、Teams 的**工作上下文**，再经 **Excel / Teams / Copilot** 触达。

## 数据面：Database@Azure 与接近放置

| 项 | 口径 |
| --- | --- |
| 区域 | Oracle AI Database@Azure 覆盖 **33** 个 Azure 区域（文称多于其他超大规模云） |
| 延迟 | 接近放置组（PPG）称 VM-to-Exadata RTT 约降 **50%**（相对未对齐 PPG） |
| 合规 | FedRAMP Class D「即将」面向美政府——进度以控制台为准 |

叙事核心不是「再做一个聊天机器人」，而是 **AI 到数据**、少把敏感表复制出库。

## 三角读者：运维 / 业务 / 开发

**运维。** **Azure Workload Center for Oracle** 有限预览：用 **Workload Virtual Instance（WVI）** 收拢架构、资源与依赖；接 Azure Monitor Health Models 与 Copilot「Run Oracle」类 Agent。示例：订单应用变慢 → Entra 登录 → 统一健康视图 → 自然语言拉起多 Agent 排查，数据库调用走托管 **MCP**，动作可审计。

**业务。** Excel 的 **Oracle AI Database 插件**现已可用：直接连库拉可信数据，用 Copilot 推理，不必导出或开 IT 工单。Copilot 可把交易异常与 Work IQ 上下文拼成可审查的行动草案。

**开发。** Foundry + 托管 MCP + A2A：按应用角色限制工具面，Agent 只做 IT 批准的 SQL / PL/SQL / 报表；销售情报、客服记忆等场景把 Oracle 当知识源与记忆，而不是把整库灌进模型。

对企业架构师：这是多云数据面 + Copilot 入口的集成故事；区域、预览资格、认证以双方控制台为准。引用 PPG「50%」时须写清测量口径。
