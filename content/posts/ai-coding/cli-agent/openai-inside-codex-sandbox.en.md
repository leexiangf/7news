---
title: Inside the Codex sandbox — OS limits on host commands
slug: openai-inside-codex-sandbox
description: >-
  OpenAI explains how the Codex sandbox uses OS facilities to constrain host
  commands: :workspace writes, broad reads, network off by default, tuned via
  permission profiles.
date: '2026-11-18'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - OpenAI
  - Codex
  - Sandbox
  - Security
author: Editorial
locale: en
sourceUrls:
  - 'https://openai.com/index/inside-the-codex-sandbox'
sourceLevel: A
publisher: openai
faqs:
  - question: Why not Docker?
    answer: Keep native host toolchains (e.g. iOS builds and simulators) by sandboxing the existing environment.
  - question: Network default?
    answer: Off by default; open via permission profiles when installs need the network.
draft: false
candidateId: openai-2026-11-19-53f2a14376
---
OpenAI’s engineering post (page date **18 Nov 2026**) details the **Codex sandbox**: when the agent runs commands on your machine, it uses each platform’s OS sandboxing instead of a separate VM or container. Defaults stay conservative but usable—the built-in `:workspace` profile allows writes inside the workspace (keeping `.git` / `.codex` read-only), broad reads under OS ACLs, and **network off** to block a class of exfiltration, while noting residual risks such as poisoning ignored paths like `node_modules`—hence defense in depth.

A common harness API covers macOS, Linux, and Windows; limited network access needs a proxy. Enterprises tune permission profiles and the security cookbook. Deep dive on mechanism—**publish date follows the source page (Nov 18)**.
