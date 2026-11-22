---
title: 'Claude Code 2.1.329: stronger /tasks, hook trust prompts, and stability fixes'
slug: claude-code-2-1-329
description: >-
  Claude Code v2.1.329: hook trust prompts, /tasks with timers and /loop, /mcp
  remote reject reasons; fixes Keychain logout loops, Code Mode memory, and
  /code-review—same-day 2.1.328 also ships.
date: '2026-11-19'
updated: '2026-11-21'
category: ai-coding
subcategory: cli-agent
tags:
  - Anthropic
  - Claude Code
  - Release
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.329'
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.328'
sourceLevel: A
publisher: anthropic
faqs:
  - question: User-visible features?
    answer: Hook-declaration trust prompts, /tasks with session timers and /loop, /mcp JSON-RPC reject lines, and peers.
  - question: Same-day 328?
    answer: v2.1.328 also shipped; this piece centers the fuller 329.
draft: false
candidateId: claude-code-releases-2026-11-19-9166064c2f
---

Anthropic shipped **Claude Code v2.1.329** on GitHub (**19 Nov 2026**). Point release: small features plus a wide stability pass. Same-day **v2.1.328** exists; this piece centers **329**.

## User-visible changes

| Item | Notes |
| --- | --- |
| Hook trust | Dialog names where folder hooks are declared; non-interactive hosts warn in-chat if managed-setting hooks fail to load |
| `/tasks` | Session timers, `/loop` wakeups, goals and forks; stop with `x` |
| `/mcp` | JSON-RPC error line when a remote HTTP MCP rejects the connection |
| `/status` | Flags managed marketplaces that cannot auto-update |
| Code Mode | Can run alongside OpenTelemetry |

## Fixes (summary)

`~/.claude.json` resets, macOS Keychain read-only logout loops, `/terminal-setup` breaking VS Code config, IDE diffs dropping trailing newlines/BOM, `/teleport` overwriting the current session, usage-quota copy, Code Mode memory blowups and timeouts, `/code-review` reviewing the wrong local branch, self-hosted runners and Remote Control—plus VS Code extension trust, IME, permission, and diff fixes.

After upgrade: regression-test trust prompts on repos with custom hooks; exercise Keychain / enterprise MCP login; heavy Code Mode users should watch memory and timeout behavior.
