---
title: Claude Code 2.1.330 — Enterprise Console sign-in and easel charts
slug: claude-code-2-1-330
description: >-
  Anthropic: Claude Code v2.1.330 adds Enterprise Admin Console org sign-in and
  the built-in easel charting mod, plus fixes for post-compact freezes, WebFetch
  stalls, and more.
date: '2026-11-20'
updated: '2026-11-22'
category: ai-coding
subcategory: cli-agent
tags:
  - Anthropic
  - Claude Code
  - Release
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.330'
sourceLevel: A
publisher: anthropic
faqs:
  - question: What is easel?
    answer: A built-in mod that draws charts on request and under MCP metrics—Pro/Max and some Team/Enterprise on macOS/Linux; disable auto charts in /config.
  - question: Enterprise sign-in?
    answer: After claude auth login, Claude Code applies Admin Console org settings and that org’s cloud provider or gateway.
draft: false
candidateId: claude-code-releases-2026-11-20-7ce40af713
---
Anthropic shipped **Claude Code v2.1.330** (**20 Nov 2026**). Highlights: sign into orgs managed in the **Enterprise Admin Console** so settings and the org’s cloud provider/gateway apply; built-in mod **easel** draws charts on request and under MCP metrics (Pro/Max and available Team/Enterprise on macOS/Linux; turn auto charts off in `/config`); `CLAUDE_CODE_FULL_SIGN_IN_LINK=1` prints the full login URL; self-hosted runners gain `--start-dir` and new order-to-ready metrics.

Fixes span multi-minute freezes after compacting huge chats, WebFetch stalls/empty pages, deleting another session’s worktree on exit, lost settings under concurrent saves, bad `--resume` timestamps, Bedrock sessions with no selected model, and more. Recurring scheduled tasks and `/loop` can run up to about **30** days while the session stays up (pre-existing tasks still cap at 7). VS Code adds `/fork`, `/workflows`, and assorted UX fixes. Point release.
