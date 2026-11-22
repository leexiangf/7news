---
title: Claude Code v2.1.326 pairs Code Mode with Agent Teams, plus wide fixes
slug: claude-code-v2-1-326
description: >-
  Claude Code v2.1.326 lets you enable Code Mode with Agent Teams on; adds
  startup/--tools warnings and /status feature-off notes; fixes Bash summaries,
  background gateway loss, MCP races, login, rewind, and more.
date: '2026-11-16'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Claude Code
  - Anthropic
  - Code Mode
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.326'
sourceLevel: A
publisher: anthropic
faqs:
  - question: What’s new?
    answer: Code Mode while Agent Teams is on; incomplete --tools rule warnings; /status row when provider/env vars disable features; Ctrl+O for hidden startup notices.
  - question: Fix themes?
    answer: Bash delete/overwrite mislabeled as search, background sessions losing the LLM gateway, MCP parallel result mix-ups, login/privacy, /rewind, sandbox symlinks—see the notes.
draft: false
candidateId: claude-code-releases-2026-11-16-328f5dc06a
---
Claude Code **v2.1.326** shipped on **16 Nov 2026**. On the feature side: you can turn on **Code Mode** while **Agent Teams** is enabled (sessions that already had Code Mode start in it with teams on); startup warns when `--allowedTools` / `--disallowedTools` / `--tools` entries look incomplete; admins pushing `managed-mcp.json` mid-session get an explanation for MCP unload; `/status` names features turned off by the provider or env vars such as `DISABLE_TELEMETRY`; Ctrl+O surfaces hidden startup notices, with smaller UX hints after failed prompts and in subagent views.

Fixes span Bash permission summaries (`cp` under Edit deny, delete/overwrite mislabeled as search/read, bogus “Dangerous rm”), background sessions that lost an exported LLM gateway after crash or reopen, PID reuse killing the wrong process, settings writes that only looked saved, MCP parallel long-result races and cross-server tool search, login/privacy toggles, `/rewind`, Vertex oversized image batches, and Bedrock/Foundry/Foundry compaction edge cases. Treat it as a **small feature bump plus a large stability pass**; full lists live in the release notes.
