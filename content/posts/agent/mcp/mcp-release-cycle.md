---
title: MCP 规范改为一年两发：三月与九月末周二锁定节奏
slug: mcp-release-cycle
description: MCP 核心维护者公布半年发布周期与 Release Manager 角色；下一目标版本 2027-03-30，未就绪提案顺延而非拖住整次发布。
date: '2026-11-11'
updated: '2026-11-12'
category: agent
subcategory: mcp
tags:
  - MCP
  - 规范
  - 发布节奏
author: 编辑部
locale: zh
sourceUrls:
  - 'https://blog.modelcontextprotocol.io/posts/mcp-release-cycle/'
\npublisher: mcp
faqs:
  - question: 现有客户端/服务端要改代码吗？
    answer: 官方明确：这是发布准备方式的变化，不是消息格式或版本协商变更；已有实现不必因本公告改动。规范版本号仍用日期。
  - question: 下一版什么时候？
    answer: 目标为 2027 年 3 月 30 日，规范版本记为 2027-03-30；并会同步公布提案截止与 SDK beta 日期。
draft: false
candidateId: mcp-2026-11-11-7c39b08289
publisher: mcp
---
Model Context Protocol（MCP）核心维护者于 2026 年 11 月 11 日发文，宣布规范发布改为**固定半年一轮**，并正式设立 Release Manager。背景是社区提案很多，但评审、实现、测试与发版日期此前散落在会议纪要与 GitHub 讨论里，提案作者与 SDK 维护者都难以倒排工期。

新节奏写得很硬：规范一般在**三月与九月的最后一个星期二**发布；每次会附带提案截止日期与 SDK beta 日期。下一目标是 **2027-03-30**（版本号同为日期）。未就绪的提案**顺延到后续版本**，而不是推迟整次规范——避免「一人未完、全员空等」。公告强调：变的是准备方式，不是 MCP 消息或版本协商，现有客户端与服务端**不必因本公告改代码**。

人事上，Luca Chang 将与 Den Delimarsky、David Soria Parra 一道担任下一周期的 Release Manager，负责把提案推进评审队列、协调 SDK 实现与卡点跟进；提案是否进入下一版仍由 Core Maintainers 决定。流程参考写在 SEP-3398（Release Cycle Updates），被称作事实上的发布指南。常规周期规划约在发布前八个月启动；软冻结要求进入该版的提案已标 Final 并合并，其后只接受范围内修补；硬冻结后原则上仅安全或阻断性互通缺陷可再改，且需完整 Core Maintainer 投票。Tier 1 SDK 需在发布前提供稳定支持，若迟到则文档记录缺口，**不挪规范日**。

对写 MCP server/client 的团队：把集成窗口对齐三月/九月末，并把「进不了本版」当成常态而非事故。观察点是即将公布的提案截止与 SDK beta 日，以及软冻结后公共 beta 里能否尽早打出互通问题。
