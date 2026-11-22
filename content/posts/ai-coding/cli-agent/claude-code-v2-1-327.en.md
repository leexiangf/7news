---
title: Claude Code v2.1.327 adds /status diagnostics and MCP/session fixes
slug: claude-code-v2-1-327
description: >-
  Claude Code v2.1.327: confirm before /install-github-app, mcp add-json from
  stdin, richer /status for broken configs; fixes project .mcp.json key wipes,
  Remote Control worktree cleanup, /export overwrite, and resume/hook issues.
date: '2026-11-17'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Claude Code
  - Anthropic
  - MCP
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.327'
sourceLevel: A
publisher: anthropic
faqs:
  - question: What’s new?
    answer: Confirm before /install-github-app changes a repo; claude mcp add-json - reads stdin; /status lists broken agents/skills/commands/sandbox issues; attributionProject billing group.
  - question: Fix themes?
    answer: Project-scoped mcp add/remove no longer deletes other .mcp.json keys; Remote Control worktree stop no longer deletes gitignored files; /export asks before overwrite; resume and hook/MCP reconnect fixes.
draft: false
candidateId: claude-code-releases-2026-11-17-1560056f3e
---
Claude Code **v2.1.327** shipped on **17 Nov 2026**. Features: confirmation before `/install-github-app` changes a repository; `claude mcp add-json -` reads server JSON from stdin (not inside a session) so tokens stay off the argv; `/status` lists broken agent/skill/command/output-style files, keybinding errors, unavailable sandbox, ignored permission settings, and never-matching hooks; `/config` notes when another setting overrides a row; plus `attributionProject` for billing groups and `/tui classic` naming.

Fixes span project-scoped `mcp add`/`remove` wiping other top-level `.mcp.json` keys, Remote Control worktree stop deleting gitignored files such as `.env`, `/export` overwriting without asking, resume losing messages, Stop failing to cancel a late-approved command, agents/plugins dropped on reload, bare `host:port` `https_proxy`, long-outage remote MCP reconnect, and subagent model/context-limit mix-ups. Diagnostics-plus-stability release—see the full notes.
