---
title: Claude Code v2.1.325：修复 zstd 解码安全问题并强化权限边界
slug: claude-code-v2-1-325
description: >-
  Claude Code v2.1.325 修复 zstd 压缩响应解码安全问题，并大量修补 Bash/沙箱权限、MCP、Code Mode
  与第三方网关上下文压缩等稳定性问题。
date: '2026-11-13'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Claude Code
  - Anthropic
  - Security
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.325'
sourceLevel: A
publisher: anthropic
faqs:
  - question: 最该升级的理由？
    answer: 公开发布说明首条为 zstd 压缩响应解码的安全修复；另含多项 Bash 权限与沙箱加固。
  - question: 还有哪些用户可见改动？
    answer: 组织策略拦截提示、notebook 重跑 tip、worktree/bare 仓 git 修复、第三方网关上下文压缩、MCP/Code Mode 多处修复等。
draft: false
candidateId: claude-code-releases-2026-11-13-3578b3def0
---
Claude Code 发布 **v2.1.325**（约 **2026-11-13**）。公开发布说明首条：**修复 zstd 压缩响应解码中的安全问题**。其余多为稳定性与权限边界：复合 Bash 命令漏问权、allow 规则可能跑到非指名程序、沙箱对 worktree settings/hooks/共享 git 目录保护不足、Artifact 外发确认、以及托管 `strictPluginOnlyCustomization` 对已运行会话未生效等，均有对应修复。

体验侧补充：组织策略拦截时提示 `/rewind` 或 `/clear`；读过 Jupyter 后提示重跑 cell；修复 bare/`--separate-git-dir`/Android repo worktree 下 `/security-review` 与 inline git；第三方网关与 Foundry 上上下文长度错误改为可 compact；MCP 断连/鉴权/elicitation、Code Mode 与 worktree、Bedrock `allowedProviders` 计数等一长串修补。属**安全+修复向小版本**，建议尽快升级；完整列表见 Release notes。
