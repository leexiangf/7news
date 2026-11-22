---
title: 'After MCP, Anthropic hands Agent Skills to AAIF'
slug: anthropic-agent-skills-to-aaif
description: >-
  Agent Skills moves under the Linux Foundation’s AAIF. Anthropic says 70+
  platforms already integrate it; the gift includes the name, GitHub org, and
  domain. Ecosystem counts are vendor-reported.
date: '2026-10-22'
updated: '2026-11-06'
category: agent
subcategory: mcp
tags:
  - Anthropic
  - Agent Skills
  - AAIF
  - MCP
  - open governance
author: Editors
locale: en
sourceUrls:
  - >-
    https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation
\npublisher: anthropic
faqs:
  - question: How is Agent Skills different from MCP?
    answer: >-
      In Anthropic’s framing, MCP is about connecting agents to tools and
      context; Agent Skills package procedural know-how for a task via SKILL.md
      and optional scripts.
  - question: Can I use Skills without joining AAIF?
    answer: >-
      Yes. Anthropic says you can keep using or contributing to the standard
      without joining the foundation.
draft: false
candidateId: anthropic-2026-10-22-86405d6d1e
publisher: anthropic
---
Anthropic is donating the Agent Skills open standard to the Agentic AI Foundation (AAIF), which sits under the Linux Foundation. The company says it co-founded AAIF last year with Block and OpenAI, and previously donated the Model Context Protocol (MCP) there.

Treat the two gifts as a pair. MCP answers how agents connect to tools and context. Skills answer how to load the steps and domain knowledge for finishing a class of work. Officially, a skill is a folder with a `SKILL.md` file plus optional scripts and references.

The pattern grew out of Claude Code. General knowledge work was fine; real business procedures still needed step-by-step scaffolding. After a late-2025 launch, developers published large numbers of skills on GitHub and wrote loaders for Codex, Cursor, OpenCode, and others. In December 2025 Anthropic published Agent Skills as an open standard with its own GitHub organization and domain.

Scale numbers are Anthropic’s own: more than 70 agent platforms integrate Skills—ChatGPT, Cursor, GitHub Copilot, and VS Code among them—with about one million skills published and nearly 280 million installs. The donation covers the Agent Skills name and marks, the GitHub organization, and agentskills.io. The company says the standard stays open, community-driven, and vendor-neutral, and that you need not join AAIF to use or contribute.

For teams shipping internal skill packs, the near-term move is concrete: keep directory layout and `SKILL.md` close to the public spec so runtimes are easier to swap. Medium term, watch AAIF’s versioning and proposal process. Parking the standard under neutral governance does not freeze features, and it does not prove identical behavior across products. Treat platform and install counts as vendor disclosure until independent dashboards appear.
