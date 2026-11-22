---
title: 月之暗面开源 Kimi K2.6：长程编码与 Agent Swarm
slug: kimi-k2-6
description: >-
  Moonshot 开源 Kimi K2.6，强调长程编码、Agent Swarm（至约 300
  子智能体）与主动式 Agent；可通过 Kimi.com、App、API 与 Kimi Code 使用。
date: '2026-11-12'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Moonshot
  - Kimi
  - 开源
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.kimi.com/en/blog/kimi-k2-6'
sourceLevel: S
publisher: moonshot
faqs:
  - question: 和 K3 什么关系？
    answer: 同页表格亦列出 K3；正文称 K3 在企业级基准上整体高于 K2.6，K2.6 定位开源长程编码与 Swarm。
  - question: Swarm 规模？
    answer: 相对 K2.5 的约 100 子智能体/1500 步，K2.6 称可横向扩至约 300 子智能体、4000 协调步。
draft: false
candidateId: moonshot-2026-11-12-cf4d9bd0f7
---
月之暗面（Moonshot）开源 **Kimi K2.6**，入口含 **Kimi.com、App、API、Kimi Code**。叙事主轴是**长程编码**、**Agent Swarm** 与面向 OpenClaw/Hermes 一类常驻 Agent 的稳定性；公开表称相对 K2.5，SWE-Bench Pro 约 **58.6 vs 50.7**、Terminal-Bench 2.0 约 **66.7 vs 50.8**（官方评测设定见原文脚注）。

案例侧：在 Mac 上用 Zig 部署并优化 Qwen3.5-0.8B 推理，称 **4000+** 工具调用、约 **12 小时**、吞吐约 **15→193 tok/s**；改造开源撮合引擎 exchange-core，称约 **13 小时**、中位吞吐约 **+185%**。Swarm 相对 K2.5 称可扩至约 **300** 子智能体、**4000** 协调步，并把优质文档沉淀为 Skills；另预览 **Claw Groups** 异构协作。同页亦列 **Kimi K3** 且称其企业级基准整体更高——读者选型需分清开源 K2.6 与更高线 K3。数字均为厂商自测/伙伴评价。
