---
title: Claude Code 2.1.329：强化 /tasks、钩子信任提示与大量稳定性修复
slug: claude-code-2-1-329
description: >-
  Claude Code v2.1.329：钩子信任提示、/tasks 纳入定时与 /loop、/mcp 远端拒绝原因；修 Keychain 反复登出、Code
  Mode 内存与 /code-review 等；同日另有 2.1.328。
date: '2026-11-19'
updated: '2026-11-21'
category: ai-coding
subcategory: cli-agent
tags:
  - Anthropic
  - Claude Code
  - Release
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.329'
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.328'
sourceLevel: A
publisher: anthropic
faqs:
  - question: 用户可见新功能？
    answer: 钩子声明位置信任提示、/tasks 纳入会话定时任务与 /loop、/mcp 显示远端拒绝原因等。
  - question: 同日 328？
    answer: 同日另有 v2.1.328；本篇以功能更全的 329 为主。
draft: false
candidateId: claude-code-releases-2026-11-19-9166064c2f
---

Anthropic 在 GitHub 发布 **Claude Code v2.1.329**（**2026-11-19**）。点版本：小功能 + 大面积稳定性修复。同日另有 **v2.1.328**；本稿以 **329** 为主。

## 用户可见改动

| 项 | 要点 |
| --- | --- |
| 钩子信任 | 对话框标明文件夹钩子声明位置；托管设置钩子加载失败时非交互宿主在对话内警告 |
| `/tasks` | 纳入本会话定时任务、`/loop` 唤醒、goal 与 fork；可用 `x` 停止 |
| `/mcp` | 远端 HTTP MCP 拒绝连接时显示 JSON-RPC 错误行 |
| `/status` | 标明无法自动更新的托管 marketplace |
| Code Mode | 可与 OpenTelemetry 同开 |

## 修复面（摘要）

`~/.claude.json` 被重置、macOS Keychain 只读导致反复登出、`/terminal-setup` 破坏 VS Code 配置、IDE diff 丢末尾换行/BOM、`/teleport` 覆盖当前会话、用量额度文案、Code Mode 内存失控与超时、`/code-review` 误审本地分支、自托管 runner 与 Remote Control 等；VS Code 扩展亦有信任提示、IME、权限与 diff 相关修复。

升级后建议：有自定义钩子的仓库回归信任提示；Keychain / 企业 MCP 登录路径各测一轮；重度 Code Mode 用户关注内存与超时行为。
