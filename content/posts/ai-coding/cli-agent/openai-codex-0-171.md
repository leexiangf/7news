---
title: Codex 0.171：默认 TUI 工作区，目录加入 GPT-6.2 Sol / Astra
slug: openai-codex-0-171
description: >-
  Codex rust-v0.171.0：默认 TUI workspace；模型目录加入 GPT-6.2 Sol（默认）与 Astra；exec
  --remote、/rc、可配置 undo/redo；工具链 Rust 1.99.1。
date: '2026-11-20'
updated: '2026-11-21'
category: ai-coding
subcategory: cli-agent
tags:
  - OpenAI
  - Codex
  - Release
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/openai/codex/releases/tag/rust-v0.171.0'
sourceLevel: A
publisher: openai
faqs:
  - question: 相对 0.170？
    answer: 稳定点版本；本篇不覆盖同日 alpha（如 0.173.0-alpha.1）。
  - question: Sol 是什么？
    answer: 发布说明称 GPT-6.2 Sol 进入模型目录并作为默认选型，Astra 一并加入。
draft: false
candidateId: openai-codex-releases-2026-11-20-3186386788
---

OpenAI 在 GitHub 发布 **Codex rust-v0.171.0**（**2026-11-20**）。这是面向 CLI / TUI 编码代理的稳定点版本——模型目录与工作区交互一起动。

## 功能向

| 项 | 要点 |
| --- | --- |
| 模型目录 | 加入 **GPT-6.2 Sol** 与 **Astra**；Sol 为默认选型 |
| TUI workspace | **默认开启**：可并列文档预览、图片预览与子 agent 记录 |
| 编辑 | 非 Vim 提示编辑器支持可配置 undo/redo（含附件与大段粘贴） |
| 远程 | `codex exec --remote` 在已有 app server 上启停非交互会话；TUI `/rc`、`/remote` 管本机远程控制与配对码 |
| 状态行 | `tui_extensions_statusline` 开启时可经 `/statusline` 自选 / 编写 MCP 状态行 |

## 修复与工具链

会话切换保留草稿与排队输入；换工作目录保留权限配置；迟到完成事件不再误取消新轮批准；滚动 / 光标与企业 MCP 无 refresh token 登录等一并修。构建工具链升至 **Rust 1.99.1**。

同日另有 **0.173.0-alpha.1**，本篇仅覆盖稳定版。升级后先确认默认模型是否变为 Sol、workspace 默认开是否符合团队习惯；企业 MCP 刷新路径建议回归测一轮。
