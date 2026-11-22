---
title: Claude Code 2.1.330：企业控制台登录与内置图表 mod easel
slug: claude-code-2-1-330
description: >-
  Anthropic：Claude Code v2.1.330 支持 Enterprise Admin Console 组织登录，新增内置图表 mod
  easel，并修复长会话 compact 卡顿、WebFetch 冻结等大量问题。
date: '2026-11-20'
updated: '2026-11-22'
category: ai-coding
subcategory: cli-agent
tags:
  - Anthropic
  - Claude Code
  - Release
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.330'
sourceLevel: A
publisher: anthropic
faqs:
  - question: easel？
    answer: 内置 mod，可按需画图并挂在 MCP 指标结果下；Pro/Max 及部分 Team/Enterprise，macOS/Linux；可用 /config 关自动图。
  - question: 企业登录？
    answer: claude auth login 后可套用 Enterprise Admin Console 组织设置与其云厂商/网关。
draft: false
candidateId: claude-code-releases-2026-11-20-7ce40af713
---
Anthropic 发布 **Claude Code v2.1.330**（**2026-11-20**）。用户可见：登录 **Enterprise Admin Console** 管理的组织后套用组织设置与云厂商/网关；内置 mod **easel** 可按请求画图并附在 MCP 指标结果下（Pro/Max 及可用的 Team/Enterprise，macOS/Linux，`/config` 可关自动图）；`CLAUDE_CODE_FULL_SIGN_IN_LINK=1` 打印完整登录链；自托管 runner 增 `--start-dir` 与若干 metrics。

修复面广：超长会话 compact 后卡数分钟、WebFetch 冻结/空结果、退出 worktree 误删他会话、并发写丢用户设置、`--resume` 时间戳坏会话、Bedrock 无模型会话等；定时任务/`/loop` 上限改为运行中最长约 **30** 天（旧任务仍 7 天）。VS Code 侧加 `/fork`、`/workflows` 与多项交互修复。属**点版本**。
