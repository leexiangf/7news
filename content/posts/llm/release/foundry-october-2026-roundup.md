---
title: Microsoft Foundry 2026 年 10 月更新：Copilot harness 与多项 GA
slug: foundry-october-2026-roundup
description: >-
  Foundry 月度综述：Copilot harness 公测、长时 hosted agent 韧性与 Browser Automation
  GA，以及 Decisions API、MAI 图像/音频与 Foundry Local 等更新。
date: '2026-11-05'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Microsoft Foundry
  - Agent
  - Copilot
  - Decisions API
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-october-2026/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 本月哪些是 GA？
    answer: 综述写明长时 hosted-agent 韧性、Browser Automation、GPT-6.1 Terra 与 Decisions API 等为 GA；Copilot harness 为公测。
  - question: 升级要注意什么？
    answer: SDK/CLI 含预览 API 重命名、评测命令变更及与托管运行时耦合的依赖；GPU 应用需核对 CUDA 依赖。
draft: false
candidateId: microsoft-foundry-2026-11-05-9d00ca1791
---
Microsoft Foundry 发布 **2026 年 10 月更新综述**，把 Agent 边界相关能力收成一张清单（细节仍以各条原文为准）。

**Agent 与工具。** **Microsoft Copilot harness** 进入公测：托管循环 + 技能/工具，少自己维护 loop。**长时 hosted agent 韧性**正式可用（恢复仍依赖应用检查点）。**Browser Automation** GA，经 Playwright Workspaces 接浏览器工作流。**Decisions API** 与 **GPT-6.1 Terra** 等模型能力写入 GA 叙事；MAI Image 2.6 预览、音频流式转写与多语种语音等亦有条目。

**本地与工具链。** Foundry Local 提到 SDK/runtime **2.2.1** 与独立 CLI 预览；升级 GPU 应用前需核对变更的 CUDA 依赖。综述提醒：十月 SDK/CLI 含预览 API 重命名与评测命令调整，升级应有意为之。另附 Ignite（11 月 17–20）Foundry 相关场次索引。
