---
title: 'Claude Code v2.1.325: zstd decode security fix and permission hardening'
slug: claude-code-v2-1-325
description: >-
  Claude Code v2.1.325 fixes a security issue in zstd-compressed response
  decoding, plus many Bash/sandbox permission, MCP, Code Mode, and gateway
  compaction stability patches.
date: '2026-11-13'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - Claude Code
  - Anthropic
  - Security
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.325'
sourceLevel: A
publisher: anthropic
faqs:
  - question: Why upgrade first?
    answer: The lead changelog item is a security fix in how zstd-compressed responses are decoded, plus Bash/sandbox permission hardening.
  - question: Other user-visible changes?
    answer: Org-block continue hints, notebook re-run tip, worktree/bare-repo git fixes, third-party gateway compaction, and a long MCP/Code Mode fix list.
draft: false
candidateId: claude-code-releases-2026-11-13-3578b3def0
---
Claude Code **v2.1.325** shipped around **13 Nov 2026**. The lead note: a **security fix for decoding zstd-compressed responses**. Much of the rest hardens permission edges—compound Bash commands that skipped prompts, allow rules that could run a different program than named, incomplete sandbox protection for worktree settings/hooks and shared git dirs, Artifact publish confirms, and managed `strictPluginOnlyCustomization` not applying to already-running sessions.

UX and reliability add-ons include continue hints after org policy blocks (`/rewind` or `/clear`), a one-time notebook re-run tip in VS Code-like terminals, fixes for `/security-review` and inline git in bare/`--separate-git-dir`/Android `repo` worktrees, context-length errors on many third-party gateways and Foundry now compacting instead of failing every turn, plus a long MCP/Code Mode/Bedrock/`allowedProviders` patch list. Treat as a **security-and-fix** minor; upgrade promptly and skim the full notes.
