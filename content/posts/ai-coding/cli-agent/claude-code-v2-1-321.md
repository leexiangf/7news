---
title: Claude Code v2.1.321：提交可靠性与远程会话等一揽子改进
slug: claude-code-v2-1-321
description: >-
  Anthropic Claude Code 发布 v2.1.321：加强 git/PR、远程重连、自动更新与子
  Agent 行为，并调整 IDE 扩展安装策略与若干 Gateway/Runner 日志。
date: '2026-11-09'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Claude Code
  - Anthropic
  - CLI
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.321'
sourceLevel: A
publisher: anthropic
faqs:
  - question: IDE 扩展怎么装？
    answer: 自本版起，在 IDE 终端内启动不再自动安装/更新扩展；需在外部终端用 /ide 或编辑器扩展视图。
  - question: 适合当重大版本看吗？
    answer: 否。属维护向小版本，聚合可靠性与策略微调。
draft: false
candidateId: claude-code-releases-2026-11-09-1393243560
---
Claude Code 打出 **v2.1.321**。公开变更偏维护向：加强 macOS 内置 bash 下的 git 提交与 PR 创建可靠性；远程会话暂停/休眠后更快重连；自动更新在校验失败时立即重试；无值守运行减少无意义的 `~/.claude.json` 重写。

行为调整包括：在 IDE 终端启动时**不再**自动安装/更新 IDE 扩展；子 Agent 在「每次询问是否换模型」时停止而非切换；后台子 Agent 超时策略与冷缓存等待等。Gateway / self-hosted runner 侧补充联邦 token 过期警告与编排日志字段。无单一「杀手级」功能，升级价值在稳定性与策略一致性。
