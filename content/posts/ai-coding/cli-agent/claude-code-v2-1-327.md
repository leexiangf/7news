---
title: Claude Code v2.1.327，强化 /status 诊断并大修 MCP 与会话恢复
slug: claude-code-v2-1-327
description: >-
  Claude Code v2.1.327：安装 GitHub App 前确认、mcp add-json 可读 stdin、/status 列出损坏配置；
  修复 project MCP JSON 误删键、Remote Control worktree、导出覆盖与大量恢复/钩子问题。
date: '2026-11-17'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Claude Code
  - Anthropic
  - MCP
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.327'
sourceLevel: A
publisher: anthropic
faqs:
  - question: 新增什么？
    answer: /install-github-app 改仓前确认；claude mcp add-json - 从 stdin 读 JSON；/status 列损坏 agent/skill/命令与沙箱等；attributionProject 计费组等。
  - question: 修复重点？
    answer: project 级 mcp add/remove 误删 .mcp.json 其他键；Remote Control worktree 停服删 gitignore 文件；/export 覆盖确认；会话恢复与钩子/MCP 重连等。
draft: false
candidateId: claude-code-releases-2026-11-17-1560056f3e
---
Claude Code 发布 **v2.1.327**（**2026-11-17**）。功能侧：`/install-github-app` 改仓库前先确认；`claude mcp add-json -` 可从 stdin 读服务器 JSON（会话内不可用），避免 token 出现在命令行；`/status` 列出损坏的 agent/skill/命令/输出样式、键位错误、不可用沙箱、被忽略的权限与永不匹配的 hook；`/config` 注明被其他设置覆盖的行；另有 `attributionProject` 计费组、`/tui classic` 命名等。

修复面很宽：project 范围 `mcp add/remove` 不再抹掉 `.mcp.json` 其他顶层键；Remote Control 在 worktree 模式停服时不再删运行中会话的 gitignore 文件（如 `.env`）；`/export` 覆盖现有文件需确认；以及会话恢复丢消息、Stop 后仍跑已批准命令、代理/插件丢失、https_proxy 裸 host:port、远程 MCP 长断线重试、子代理模型/上下文上限串扰等。属**诊断增强 + 稳定性**小版本，完整列表见 Release notes。
