---
title: OpenAI Codex 0.170.0 adds TUI realtime voice and MCP/sandbox fixes
slug: openai-codex-v0-170-0
description: >-
  Codex rust-v0.170.0: WebRTC negotiation for TUI realtime voice, refreshable
  OTLP HTTP auth headers, experimental same-named MCP across environments; plus
  Windows sandbox, Cloud reconnect, and MCP OAuth race fixes.
date: '2026-11-18'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - OpenAI
  - Codex
  - MCP
  - TUI
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/openai/codex/releases/tag/rust-v0.170.0'
sourceLevel: A
publisher: openai
faqs:
  - question: What’s new?
    answer: TUI WebRTC realtime voice negotiation; auto-refreshed OTLP HTTP exporter headers; experimental same-named MCP servers across environments.
  - question: Same-day alphas?
    answer: Same-day alpha tags exist; this post covers stable 0.170.0 only.
draft: false
candidateId: openai-codex-releases-2026-11-18-2d11cd195d
---
OpenAI Codex **rust-v0.170.0** shipped on **18 Nov 2026**. Features: **WebRTC** negotiation for realtime voice calls in the TUI; automatically refreshed auth headers for OpenTelemetry HTTP exporters; experimental support for identically named MCP servers across environments.

Fixes cover oversized WebSocket requests falling back to HTTP, MCP OAuth credential races on cancel/login/logout, Cloud conversation reconnect with preserved recovery turns, Windows file replacement and sandbox permission/runtime registration, child threads losing sandbox restrictions on permission updates, and file/thread search dedupe and whitespace snippets. Small feature bump plus stability—same-day alpha tags are not covered separately.
