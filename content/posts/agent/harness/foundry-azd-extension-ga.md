---
title: Microsoft Foundry 的 azd 扩展包正式可用
slug: foundry-azd-extension-ga
description: >-
  Foundry 扩展包 microsoft.foundry 随 Azure Developer CLI 达到 1.0
  GA，把 Agent 配置写进 azure.yaml，并支持本地 Agent Inspector 与 CI/CD 同配置部署。
date: '2026-11-05'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft Foundry
  - azd
  - Azure
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - 'https://devblogs.microsoft.com/foundry/microsoft-foundry-azure-developer-cli-ga/'
sourceLevel: A
publisher: microsoft
faqs:
  - question: 需要什么版本？
    answer: 博客要求 Azure Developer CLI 1.37.0+，并安装当前 uv；示例用 Python 3.13+。
  - question: hosted agent 是什么？
    answer: 在 Foundry 托管计算上跑你自己的 Agent 代码；框架与编排自选，运行时由 Foundry 管理。
draft: false
candidateId: microsoft-foundry-2026-11-05-9a4fc5949e
---
Microsoft Foundry 博客宣布面向 **Azure Developer CLI（azd）** 的扩展包 **`microsoft.foundry` 达到 1.0 并正式可用**。`azd` 负责置备 Azure 资源与部署应用代码；Foundry 扩展补上 Agent 搭建与本地测试，配置与代码一起落在 `azure.yaml`。

能力点：Agent 与部署变更可一并审阅；**Agent Inspector** 在改提示词/工具/代码时检查本地请求响应；本地与 CI/CD 共用同一部署配置。文中演示创建 **hosted agent**（自有代码跑在托管计算上），安装步骤含 `azd auth login` 与 `azd ext install microsoft.foundry`，并初始化 Python Agent Framework 样例。需 Azure 订阅、Foundry 权限与所选区域模型配额；资源与模型用量按 Azure 计费。
