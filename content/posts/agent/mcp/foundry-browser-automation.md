---
title: Foundry Browser Automation：给 Agent 的企业级云浏览器与 MCP 工具集
slug: foundry-browser-automation
description: >-
  Ignite 2026 上 Microsoft Foundry 增强 Browser Automation：面向无 API 的门户与遗留应用，提供步进式
  MCP 浏览器工具、Live View 与人工接管。
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - Microsoft Foundry
  - Browser Automation
  - MCP
  - Ignite
author: 编辑部
locale: zh
sourceUrls:
  - 'https://devblogs.microsoft.com/foundry/browser-automation-tool-ignite/'
sourceLevel: S
publisher: microsoft
faqs:
  - question: 解决什么场景？
    answer: 企业内部门户、供应商控制台与无 API 遗留应用仍依赖浏览器操作；该工具为 Agent 提供云端浏览器能力。
  - question: 有哪些关键能力？
    answer: >-
      更大一套面向浏览器的 MCP 工具（打开/读页、无障碍快照、点击输入、表单、对话框、标签页、上传、截图与网络/控制台捕获等）；Live View
      可实时观看；Take control 允许人接管（如登录与审批）。
draft: false
candidateId: microsoft-foundry-2026-11-18-5c6fce3821
---
Microsoft Foundry 在 Ignite 2026 增强 **Browser Automation** 工具：很多业务仍卡在「只有网页、没有 API」的门户与遗留系统上，Agent 需要企业可用的云浏览器，而不是本地随便起一个无头 Chrome。

公告强调更大一套面向浏览器工作的 **MCP 工具**，覆盖打开与读页、无障碍快照、点击输入、填表、选项、对话框、标签页、上传文件，以及截图、控制台与网络请求捕获。演示任务包括处理多张发票、规则校验、在 Excel 标异常并录入费用门户。当页面状态意外或需要人判断时，**Live View** 以有头模式实时展示；**Take control** 允许人工介入完成登录、审批或从异常对话框恢复。

对自动化团队：适合把「必须点网页」的步骤收进 Agent 工具箱，并保留人机共驾。权限、数据驻留与定价以 Foundry 文档为准。
