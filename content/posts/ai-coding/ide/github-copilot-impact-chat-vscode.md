---
title: Copilot Impact 仪表盘纳入 Chat 与 VS Code Agents
slug: github-copilot-impact-chat-vscode
description: >-
  GitHub Changelog：Impact 仪表盘 Agent 采用图增加 Copilot Chat 与 VS Code Agents
  窗口；「Passive users」更名为 Chat-first users。
date: '2026-11-06'
updated: '2026-11-20'
category: ai-coding
subcategory: ide
tags:
  - GitHub Copilot
  - 指标
  - VS Code
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://github.blog/changelog/2026-11-06-copilot-impact-dashboard-adds-chat-and-vs-code-agent-usage
sourceLevel: S
publisher: github
faqs:
  - question: Chat 计入 adoption phase 吗？
    answer: 不计。Chat 与 VS Code Agents 只进功能参与统计，不改变 adoption phase；API 中仍为 No Cohort。
  - question: 谁能看？
    answer: 企业所有者、账单管理员、组织所有者，以及拥有 View Copilot Metrics 权限的自定义角色；需开启用量指标策略。
draft: false
candidateId: github-changelog-2026-11-06-df141a94ae
---
GitHub Changelog 更新 **Copilot impact dashboard**：Agent adoption 图纳入 **Copilot Chat** 与 **VS Code Agents** 窗口，功能维度增至九项。原「Passive users」队列改名为 **Chat-first users**——28 天内活跃但未在至少两天使用达标功能、因而不进入 adoption phase 的用户。企业/组织 28 天用量报告的 `totals_by_feature` 同步增加 `chat` 与 `vscode_agent`。

注意：Chat 与 VS Code Agents **不计入** adoption phase；参与规则仍是 28 天内至少两天使用。变更前的历史报告不含这两项。权限与策略要求见官方文档。
