---
title: 'GitHub: build agent skills once, run them on any client'
slug: github-agent-skills-guide
description: >-
  GitHub Blog’s practical guide to Agent Skills: versioned SKILL.md folders,
  Proof Agent verification, and Data Forge pipelines—tools and credentials stay
  with the host.
date: '2026-11-12'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - GitHub
  - Agent Skills
  - Copilot
author: Editorial
locale: en
sourceUrls:
  - >-
    https://github.blog/ai-and-ml/github-copilot/build-once-run-on-any-agent-a-practical-guide-to-agent-skills/
sourceLevel: A
publisher: github
faqs:
  - question: Do skills grant database access?
    answer: No. A skill can describe how to query; tools, credentials, and permissions stay with the environment.
  - question: How to keep clients in sync?
    answer: Keep skills/*/SKILL.md as source; a packaging script emits Claude/Cursor/Copilot files and supports --check in CI.
draft: false
candidateId: github-blog-2026-11-12-657af3312a
---
GitHub’s blog walks through **Agent Skills**: a versioned folder centered on `SKILL.md` that says when and how to run a repeatable task so agents can reuse the same judgment. Skills do **not** grant tools, credentials, or permissions—the host still must.

Two demos: **Proof Agent** spins an independent verifier so self-review is not verification, with evidence cited from the diff; **Data Forge** splits pipeline judgment across `forge-init`, `forge-builder`, `forge-dbx`, and `forge-lint`, keeping project facts in a **manifest** separate from team standards. Human checkpoints sit between phases; a packaging script projects one skill source into Claude, Cursor, and Copilot client files. Three practices: one place for business context, one shared platform access path, and instructions plus CI/human checks. This is an **engineering guide**, not a product launch note.
