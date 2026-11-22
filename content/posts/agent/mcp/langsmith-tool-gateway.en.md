---
title: 'LangSmith Tool Gateway public preview: unified tool identity and policy'
slug: langsmith-tool-gateway
description: >-
  LangSmith Tool Gateway preview: one kit URL for MCP/built-in tool credentials,
  identity, deny/approval, and tracing—alongside LLM Gateway; works with Claude
  Code / Cursor MCP clients.
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: mcp
tags:
  - LangChain
  - LangSmith
  - MCP
  - Governance
author: Editorial
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/langsmith-tool-gateway'
sourceLevel: A
publisher: langchain
faqs:
  - question: Relation to LLM Gateway?
    answer: Side by side—LLM Gateway governs model calls; Tool Gateway governs tool identity, policy, and traces.
  - question: How does identity work?
    answer: Act-as-user (OAuth) or act-as-agent (agent auth / shared profile).
draft: false
candidateId: langchain-2026-11-19-48de2ffa10
---

LangChain’s blog (**19 Nov 2026**) puts **LangSmith Tool Gateway** into **public preview** on the LangSmith Agent Platform: a managed tool layer so agents, coding agents, and backends call tools through a **single kit URL**, with the Gateway resolving identity, access, and traces.

## Capability split

| Capability | Notes |
| --- | --- |
| Register | One-time MCP or built-in servers (Google, Salesforce, GitHub, Linear, …) |
| Tool kit | Compose on demand; search mode can load tools per task at scale |
| Identity | Act-as-user (OAuth) or act-as-agent (agent auth / shared profile) |
| Policy | Admin deny lists and human approval |
| Observability | Tool calls enter LangSmith traces (tool, server, user, result, latency); Enterprise adds audit logs |

Sits beside **LLM Gateway** for model-side and tool-side governance. Works with any MCP client (LangChain, Claude Code, Cursor, …). Platform preview—advanced deny/audit features follow product entitlements. Pilot with one or two kits before widening policy surface.
