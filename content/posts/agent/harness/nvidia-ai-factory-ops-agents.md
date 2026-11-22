---
title: NVIDIA 用 Agent 编排 AI 工厂运维：Factory Operations 与 Blueprint
slug: nvidia-ai-factory-ops-agents
description: >-
  NVIDIA 两篇技术博文介绍 AI Factory Operations Agent 与 Factory Operations
  Blueprint：在本地 Nemotron 上协调子 Agent 做故障关联与排查，面向 DGX SuperPOD 运维。
date: '2026-11-04'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - NVIDIA
  - Agent
  - AI Factory
  - 运维
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/how-nvidia-uses-ai-agents-to-streamline-ai-factory-operations/
  - >-
    https://developer.nvidia.com/blog/how-nvidia-factory-operations-blueprint-coordinates-ai-agents-to-investigate-production-issues/
sourceLevel: A
publisher: nvidia
faqs:
  - question: 跑在哪里？
    answer: >-
      文中称基于 NemoClaw / OpenShell，本地服务 Nemotron
      开源模型，覆盖 DGX H100 / B200 / GB300 等生产集群。
  - question: 会自动改集群吗？
    answer: 生产经验强调只读排查以建立信任，SRE 审证据后再行动；多租户靠沙箱与权限隔离。
draft: false
candidateId: nvidia-developer-2026-11-04-ad3c135f69
---
NVIDIA 同日两篇技术博文说明如何在 **AI 工厂**运维里用 Agent：**AI Factory Operations Agent** 协调作业恢复、硬件、可观测、研究、Kubernetes、集群管理等子 Agent，跨计算/网络/硬件/调度层关联根因，并通过聊天界面给出建议；配套 **Factory Operations Blueprint** 讲清多 Agent 如何分工排查生产问题。

栈写在 **NemoClaw** 蓝图与 **OpenShell** 上，本地服务 **Nemotron** 开源模型，覆盖 DGX H100 / B200 / GB300 等。横切能力通过 MCP 工具接入检索、代码执行与 Grafana 等。生产经验强调：清晰 Agent 边界、**只读调查**建立信任、跨层关联、精确工具定义，以及透明推理供 SRE 复核。多租户场景用作用域 Agent、沙箱与 K8s 权限隔离租户数据。

对集群运维读者，这是「把排障助手嵌进 SuperPOD 运营」的参考架构，不是宣称无人值守自动修复。
