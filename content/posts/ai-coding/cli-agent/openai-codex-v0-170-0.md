---
title: OpenAI Codex 0.170.0，TUI 实时语音与 MCP/沙箱修复
slug: openai-codex-v0-170-0
description: >-
  Codex rust-v0.170.0：TUI 增加 WebRTC 实时语音协商、OTLP HTTP 头自动刷新、跨环境同名 MCP
  实验支持；并修 Windows 沙箱、Cloud 重连与 MCP OAuth 竞态等。
date: '2026-11-18'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - OpenAI
  - Codex
  - MCP
  - TUI
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/openai/codex/releases/tag/rust-v0.170.0'
sourceLevel: A
publisher: openai
faqs:
  - question: 新功能？
    answer: TUI WebRTC 实时语音协商；OpenTelemetry HTTP exporter 鉴权头自动刷新；跨环境同名 MCP 实验支持。
  - question: 同日 alpha？
    answer: 同日另有若干 alpha 标签；本篇仅覆盖稳定版 0.170.0。
draft: false
candidateId: openai-codex-releases-2026-11-18-2d11cd195d
---
OpenAI Codex 发布 **rust-v0.170.0**（**2026-11-18**）。功能：TUI 增加 **WebRTC** 实时语音通话协商；OpenTelemetry HTTP exporter 支持自动刷新鉴权头；实验性支持跨环境使用**同名** MCP 服务器。

修复：过大 WebSocket 请求直接回落 HTTP；MCP OAuth 在取消/登录/登出时的凭证竞态；Cloud 会话自动重连并保留恢复回合；Windows 文件替换、沙箱权限与运行时注册；权限更新时子线程丢失沙箱限制；文件/线程搜索去重与空白查询片段等。属**功能小步 + 稳定性**版本；同日多个 alpha 标签不单独成稿。
