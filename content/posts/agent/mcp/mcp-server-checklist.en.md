---
title: 'Wiring MCP into an agent: three failure modes to catch early'
slug: mcp-server-checklist
description: >-
  The usual MCP integration failures: registry drift, over-broad permissions,
  and mistaking tool-contract bugs for model stupidity.
date: '2026-11-04'
category: agent
subcategory: mcp
tags:
  - MCP
  - Agent
  - debugging
author: Editors
locale: en
\npublisher: mcp
sourceUrls:
  - 'https://modelcontextprotocol.io/'
faqs:
  - question: How is MCP different from plain function calling?
    answer: >-
      MCP centers discoverable tool contracts and host-side connections. That
      helps multi-client reuse, but the ops surface is larger.
  - question: How do you keep permissions minimal?
    answer: >-
      Split by resource and verb. Default to read-only; require separate
      approval and audit logs for writes.
draft: false
publisher: mcp
---

## Three traps first

### 1. Tool registry drift

Names and parameter schemas registered in the host no longer match what the server actually exposes. The model then calls parameters that do not exist—confidently.

**Fix:** Generate a tool inventory snapshot at build time and validate it on startup. Fail closed on mismatch.

### 2. Permissions that are too wide

Teams grant broad filesystem or database access “just to ship.” Once an agent loops, damage scales with the call count.

**Fix:** Declare allowed path prefixes and verbs per tool. Dangerous tools need a second confirmation policy.

### 3. Wrong debug attribution

Timeouts, empty results, and schema errors get blamed on a “dumb model.” Run the tool alone with fixed inputs first, then feed the same inputs through the agent.

## Minimum checklist

```text
[ ] Schema and implementation generated from one source
[ ] Read vs write tools in separate buckets
[ ] Timeouts and retries capped
[ ] Structured logs on every call
[ ] A fixed regression fixture set
```

Hang the checklist in CI and MCP stops feeling like a ritual—it becomes maintainable interface work.
