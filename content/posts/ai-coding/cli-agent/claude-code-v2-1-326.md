---
title: Claude Code v2.1.326，Code Mode 可与 Agent Teams 同开并大修权限与 MCP
slug: claude-code-v2-1-326
description: >-
  Claude Code v2.1.326 允许在 Agent Teams 开启时启用 Code Mode；补充启动告警与 /status
  关闭特性说明，并修复 Bash 权限摘要、后台会话网关、MCP、登录与 rewind 等大量问题。
date: '2026-11-16'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Claude Code
  - Anthropic
  - Code Mode
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.326'
sourceLevel: A
publisher: anthropic
faqs:
  - question: 有哪些新能力？
    answer: Agent Teams 开启时可开 Code Mode；启动时校验不完整的 --tools 规则；/status 标明被 provider/环境变量关掉的特性；Ctrl+O 可看隐藏启动通知等。
  - question: 修复重点？
    answer: Bash 删除/覆盖被误标为搜索、后台会话丢失网关、MCP 并行结果串扰、登录/隐私设置、/rewind 与沙箱 symlink 等（见 Release notes）。
draft: false
candidateId: claude-code-releases-2026-11-16-328f5dc06a
---
Claude Code 发布 **v2.1.326**（**2026-11-16**）。功能侧：允许在 **Agent Teams** 已开启时打开 **Code Mode**（若此前已开，带 teams 的会话也会以 Code Mode 启动）；对不完整的 `--allowedTools` / `--disallowedTools` / `--tools` 条目给出启动警告；管理员中途下发 `managed-mcp.json` 时说明 MCP 为何停载；`/status` 增加一行标明 provider 或如 `DISABLE_TELEMETRY` 等环境变量关掉了哪些特性；另有 Ctrl+O 显示隐藏启动通知、失败后空提示引导、子代理视图 `esc to stop` 等体验补丁。

修复面很宽：Bash 侧修正仅 Edit deny 时 `cp` 被拒、删除/覆盖命令在 transcript 被当成搜索/读取、「Dangerous rm」误报；后台会话在崩溃/换目录后丢失 LLM 网关时先停再请求，以及进程号复用误杀他人进程；权限与 settings 写入失败时改为明确告警；MCP 并行长结果串扰、工具搜索跨服、stdio 启动失败原因展示等；登录、隐私开关、`/rewind`、Vertex 大图请求、Bedrock/Foundry compaction 等亦有修补。属**功能小步 + 大规模稳定性**版本，完整列表见 Release notes。
