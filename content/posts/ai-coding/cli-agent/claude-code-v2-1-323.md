---
title: Claude Code v2.1.323：实验性 Code Mode 与插件引擎约束
slug: claude-code-v2-1-323
description: >-
  Claude Code v2.1.323 新增可选 Code Mode（用 JS 调工具）、plugin.json 的
  engines["claude-code"] 版本约束，以及插件校验、心跳与多项稳定性修复。
date: '2026-11-12'
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
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.323'
sourceLevel: A
publisher: anthropic
faqs:
  - question: Code Mode 是什么？
    answer: 实验性可选功能：Claude 写 JavaScript 来调用工具；开关见 code.claude.com/docs/en/code-mode，组织可关闭。
  - question: 插件有何硬约束？
    answer: plugin.json 可声明 engines["claude-code"]；超出范围的插件不会安装、更新或加载。
draft: false
candidateId: claude-code-releases-2026-11-12-1e1f91e95e
---
Claude Code 发布 **v2.1.323**（GitHub 标注约 **2026-11-12**）。亮点包括实验性可选 **Code Mode**：由模型写 JavaScript 调用工具（文档 [code.claude.com/docs/en/code-mode](https://code.claude.com/docs/en/code-mode)，组织可关）；`plugin.json` 新增 `engines["claude-code"]`，超出声明版本范围的插件**不会**安装/更新/加载；`claude plugin validate` 加强 TypeScript hooks 类型检查（`--strict` 失败）与 `$` 名词清单。

其他：托管设置支持 `CLAUDE_CODE_AUTO_MODE_MODEL`（Desktop 第三方路由）、长 hooks 每 30 秒心跳、Artifact 上传支持 `.docx`、Bash allow 规则含变量通配时的启动警告等，并修复 `/compact`、大文件内存尖峰、settings 手改被覆盖、Edit/Bash 读 `/proc` 等多项问题。属**功能+修复小版本**，完整列表见 Release notes。
