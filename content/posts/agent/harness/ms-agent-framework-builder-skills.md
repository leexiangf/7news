---
title: Microsoft 发布 Agent Framework 构建用 Skills（.NET / Python）
slug: ms-agent-framework-builder-skills
description: >-
  Microsoft Agent Framework 博客提供可安装的 builder skills，给支持 Agent Skills
  格式的编程助手注入官方实现指引；强调是开发时技能，非运行时技能。
date: '2026-11-04'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft
  - Agent Framework
  - Skills
  - .NET
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://devblogs.microsoft.com/agent-framework/give-your-coding-agent-a-head-start-with-microsoft-agent-framework-skills-for-net-and-python/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 和运行时 Skills 有何不同？
    answer: 官方写明这是给编程助手用的开发时指引，不会作为已发布应用在运行时加载的技能包。
  - question: 怎么安装？
    answer: >-
      可用 `gh skill install microsoft/agent-framework
      agent-framework-builder-dotnet@main`（或 python 变体），或 `npx skills add
      microsoft/agent-framework --skill …`；可与 Microsoft Learn MCP 搭配。
draft: false
candidateId: microsoft-semantic-kernel-2026-11-04-160d24ed91
---
Microsoft Agent Framework 开发博客宣布可安装的 **builder skills**（.NET 与 Python 各一）。目标是给支持 [Agent Skills](https://agentskills.io/specification) 格式的编程助手，注入微软维护的实现指引：选模式、接工具、会话、工作流与托管等。

官方强调：这是**开发时**技能，不是应用运行时加载的技能。安装示例包括 GitHub CLI 的 `gh skill install`，以及跨客户端的 `npx skills add`；需要可复现快照时应钉住 tag/commit。文中建议与 **Microsoft Learn MCP** 搭配——skill 管聚焦实现指引，Learn MCP 负责检索完整文档与示例。应用本身仍需自行配置 SDK 与模型凭据。
