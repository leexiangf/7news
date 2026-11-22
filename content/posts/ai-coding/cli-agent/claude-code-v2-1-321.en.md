---
title: 'Claude Code v2.1.321: reliability fixes for git, remotes, and subagents'
slug: claude-code-v2-1-321
description: >-
  Anthropic’s Claude Code v2.1.321 improves git/PR reliability, remote reconnect,
  auto-update retries, and subagent behavior, plus IDE extension install policy
  changes.
date: '2026-11-09'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Claude Code
  - Anthropic
  - CLI
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.321'
sourceLevel: A
publisher: anthropic
faqs:
  - question: IDE extension installs?
    answer: >-
      Starting in this build, launching inside an IDE terminal no longer
      installs/updates the extension; use /ide from outside or the editor’s
      extensions UI.
  - question: Major feature release?
    answer: No. It is a maintenance train of reliability and policy tweaks.
draft: false
candidateId: claude-code-releases-2026-11-09-1393243560
---
Claude Code tagged **v2.1.321**. The notes are maintenance-heavy: more reliable git commits and PR creation when Bash uses macOS’s built-in `/bin/bash`; faster remote reconnect after pause/sleep; auto-update retries verification failures immediately; unattended runs stop rewriting `~/.claude.json` when nothing changed.

Behavior changes: no longer auto-install/update the IDE extension when started inside an IDE terminal; subagents stop instead of switching models when “Ask each time” is set; background subagent timeout and cold-cache wait tweaks. Gateway and self-hosted runner logs gain federation token warnings and spawn-reason fields. Upgrade for stability, not a headline feature.
