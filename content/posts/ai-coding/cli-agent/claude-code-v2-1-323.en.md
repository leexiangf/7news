---
title: 'Claude Code v2.1.323: experimental Code Mode and plugin engine pins'
slug: claude-code-v2-1-323
description: >-
  Claude Code v2.1.323 adds opt-in Code Mode (JS tool calls),
  engines["claude-code"] version gates in plugin.json, stronger plugin validate,
  hook heartbeats, and assorted stability fixes.
date: '2026-11-12'
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
  - 'https://github.com/anthropics/claude-code/releases/tag/v2.1.323'
sourceLevel: A
publisher: anthropic
faqs:
  - question: What is Code Mode?
    answer: Experimental opt-in where Claude writes JavaScript to call tools; see code.claude.com/docs/en/code-mode—orgs can disable it.
  - question: Plugin hard gate?
    answer: plugin.json can set engines["claude-code"]; plugins outside the range are not installed, updated, or loaded.
draft: false
candidateId: claude-code-releases-2026-11-12-1e1f91e95e
---
Claude Code **v2.1.323** landed around **12 Nov 2026** on GitHub. Headliners: experimental opt-in **Code Mode**, where Claude writes JavaScript to invoke tools ([docs](https://code.claude.com/docs/en/code-mode); orgs can turn it off); `plugin.json` gains `engines["claude-code"]` so plugins outside the stated range are **not** installed, updated, or loaded; and `claude plugin validate` type-checks TypeScript hooks modules (fail under `--strict`) plus `$` nouns from `engine.create`.

Also: `CLAUDE_CODE_AUTO_MODE_MODEL` in managed settings for Desktop third-party providers, 30-second heartbeats during long hooks, `.docx` Artifact uploads, startup warnings for Bash allow rules with `*` inside variable values, plus fixes for `/compact`, post-edit memory spikes, settings hand-edits being overwritten, Edit/Bash on `/proc` paths, and more. A **feature-plus-fix** patch—see the full release notes for the long tail.
