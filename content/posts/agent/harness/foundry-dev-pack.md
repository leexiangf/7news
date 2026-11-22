---
title: Microsoft Foundry Dev Pack GA，一键装齐 Agent 开发工具
slug: foundry-dev-pack
description: >-
  Foundry 博客：Dev Pack GA，一次安装 Foundry CLI（azd ai）、Foundry Skill、VS Code Toolkit
  与 Copilot 应用插件；支持 Windows winget / macOS brew / Linux 脚本。
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft
  - Foundry
  - Developer Tools
  - Ignite
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/the-foundry-dev-pack-is-here-build-foundry-agents-your-way/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 装什么？
    answer: azd ai CLI、Microsoft Foundry Skill；若本机有 VS Code / Copilot 应用则顺带装 Toolkit 与插件。
  - question: 安装命令？
    answer: Windows winget install Microsoft.FoundryDevPack；macOS brew cask；Linux curl aka.ms 安装脚本。
draft: false
candidateId: microsoft-foundry-2026-11-18-64f4d5a8fe
---
Microsoft Foundry 博客（**2026-11-18**，Ignite）宣布 **Foundry Dev Pack** **GA**：一次安装把 Agent 开发工具送到本机——**Foundry CLI（`azd ai`）**、**Microsoft Foundry Skill**，并在检测到 VS Code / GitHub Copilot 应用时安装 Toolkit 与插件。工具共享项目文件，可编辑器、终端、编码 Agent 混用。

安装：Windows `winget install Microsoft.FoundryDevPack`；macOS `brew install --cask microsoft/foundry/devpack`；Linux 走 `aka.ms/foundry-devpack-install.sh`。CLI 侧示例含 `azd ai agent init/provision/run/deploy`（需 azd **≥1.37.0**、Python **≥3.13** 等）。属**开发者工具包发版**，非新模型。
