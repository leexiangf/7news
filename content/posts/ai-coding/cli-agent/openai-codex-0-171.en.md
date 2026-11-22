---
title: 'Codex 0.171: TUI workspace on by default; GPT-6.2 Sol / Astra in the catalog'
slug: openai-codex-0-171
description: >-
  Codex rust-v0.171.0 defaults TUI workspace; adds GPT-6.2 Sol (default) and
  Astra; exec --remote, /rc, configurable undo/redo; toolchain Rust 1.99.1.
date: '2026-11-20'
updated: '2026-11-21'
category: ai-coding
subcategory: cli-agent
tags:
  - OpenAI
  - Codex
  - Release
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/openai/codex/releases/tag/rust-v0.171.0'
sourceLevel: A
publisher: openai
faqs:
  - question: Versus 0.170?
    answer: Stable point release; this piece skips same-day alphas such as 0.173.0-alpha.1.
  - question: What is Sol?
    answer: Release notes add GPT-6.2 Sol to the model catalog as the default selection; Astra ships alongside.
draft: false
candidateId: openai-codex-releases-2026-11-20-3186386788
---

OpenAI shipped **Codex rust-v0.171.0** on GitHub (**20 Nov 2026**). Stable CLI/TUI coding-agent point release—model catalog and workspace UX move together.

## Features

| Item | Notes |
| --- | --- |
| Model catalog | Adds **GPT-6.2 Sol** and **Astra**; Sol is the default selection |
| TUI workspace | **On by default**—side-by-side doc preview, image preview, and sub-agent records |
| Editing | Non-Vim prompt editor gets configurable undo/redo (including attachments and large pastes) |
| Remote | `codex exec --remote` starts/stops non-interactive sessions on an existing app server; TUI `/rc` and `/remote` manage local remote control and pairing codes |
| Status line | With `tui_extensions_statusline`, `/statusline` picks or authors an MCP status line |

## Fixes and toolchain

Preserve drafts and queued input across session switches; keep permission config when changing working directories; late completion events no longer cancel a new turn’s approvals; scroll/cursor and enterprise MCP login without refresh tokens also land. Build toolchain bumps to **Rust 1.99.1**.

Same-day **0.173.0-alpha.1** exists—this piece covers stable only. After upgrade, confirm Sol as default and whether always-on workspace matches team habits; regression-test enterprise MCP refresh paths.
