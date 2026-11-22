---
title: Microsoft ships Agent Framework builder skills for .NET and Python
slug: ms-agent-framework-builder-skills
description: >-
  The Agent Framework blog adds installable builder skills that inject
  Microsoft-maintained guidance into coding agents that speak the Agent Skills
  format—dev-time only, not runtime app skills.
date: '2026-11-04'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft
  - Agent Framework
  - Skills
  - .NET
author: Editorial
locale: en
sourceUrls:
  - >-
    https://devblogs.microsoft.com/agent-framework/give-your-coding-agent-a-head-start-with-microsoft-agent-framework-skills-for-net-and-python/
sourceLevel: A
publisher: microsoft
faqs:
  - question: Runtime or development-time?
    answer: >-
      Microsoft says these are development-time skills for coding assistants,
      not runtime skills loaded by the shipped application.
  - question: How do you install them?
    answer: >-
      Use `gh skill install microsoft/agent-framework
      agent-framework-builder-dotnet@main` (or the Python skill), or `npx skills
      add …`. Pair with Microsoft Learn MCP for full docs lookup.
draft: false
candidateId: microsoft-semantic-kernel-2026-11-04-160d24ed91
---
Microsoft’s Agent Framework blog announced installable **builder skills** for .NET and Python. They give coding agents that support the [Agent Skills](https://agentskills.io/specification) format Microsoft-maintained guidance—choosing patterns, wiring tools, sessions, workflows, and hosting.

The post is explicit: these are **development-time** skills, not runtime skills loaded by the app you ship. Install via GitHub CLI (`gh skill install`) or the cross-agent `npx skills add` path; pin a tag or commit for reproducibility. The natural companion is the **Microsoft Learn MCP Server**, so the skill stays focused while Learn MCP fetches full articles and samples. Your app still needs its own SDK packages and model credentials.
