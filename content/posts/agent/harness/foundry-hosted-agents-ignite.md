---
title: Foundry Hosted Agents：子网 IP 共享把并发从约 250 提到规划级万级
slug: foundry-hosted-agents-ignite
description: >-
  Microsoft Ignite 2026 上，Foundry Agent Service 的托管 Agent 宣布子网 IP 共享等生产向能力；/24
  规划并发约升至 6 万会话量级，实际仍受区域配额约束。
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft Foundry
  - Hosted Agents
  - Ignite
  - Azure
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/hosted-agents-foundry-agent-service-ignite-2026/
sourceLevel: S
publisher: microsoft
faqs:
  - question: IP 共享改了什么？
    answer: >-
      过去自有 VNet 里每会话占一个委托子网 IP，/24 大约顶到 250 并发；现在会话共享子网 IP，仍保持 VM 隔离沙箱。规划估计 /24
      约 6 万并发，/27 约 7500；官方强调是规划值非承诺，生产仍建议 /24 或更大。
  - question: 真正的上限在哪？
    answer: >-
      对多数团队，区域会话配额更现实：默认每订阅约 2000 或 1000 并发（视区域），可提工单申请上调。出站与私有 CA 更新适用于托管
      Agent；BYO-AKS 另文说明。
draft: false
candidateId: microsoft-foundry-2026-11-18-b07d3afb72
---
Microsoft Ignite 2026 上，Foundry 博客把 Hosted Agents 从「能跑 demo」推到企业边界内的生产问题：子网是否撑得住、私有证书、连通范围、能否跑在已有 AKS，以及长任务中断怎么办。

本篇最硬的数字在网络：托管 Agent 若跑在客户委托子网，过去每会话独占 IP，**/24 大约 250 并发**就顶满。现在会话**共享子网 IP**，沙箱仍按会话 VM 隔离；规划估计 **/24 约 60,000** 并发，最小 **/27 约 7,500**。官方写明这是规划估计、非保证，生产仍建议 /24 或更大。对多数团队，区域会话配额才是实务天花板——默认每订阅约 **2,000 或 1,000** 并发（视区域），可走支持请求上调。出站与私有 CA 更新适用于 Foundry 托管的 Agent；BYO-AKS 将另文文档化。

对企业平台组：先核对区域配额与子网规划，再谈「万级并发」叙事；数字以 Ignite 原文与后续文档为准。
