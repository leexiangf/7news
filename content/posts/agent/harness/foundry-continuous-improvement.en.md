---
title: Continuous improvement lands in Microsoft Foundry at Ignite
slug: foundry-continuous-improvement
description: >-
  Azure Blog: Foundry’s Establish→Identify→Optimize→Validate loop for agents—
  Insights GA, annotated traces, Agent Optimizer, skill/cost optimization
  preview, and Managed/Programmed Training.
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft
  - Foundry
  - Ignite
  - Evaluations
author: Editorial
locale: en
sourceUrls:
  - >-
    https://azure.microsoft.com/en-us/blog/continuous-improvement-comes-to-microsoft-foundry/
sourceLevel: A
publisher: microsoft
faqs:
  - question: Loop steps?
    answer: Establish (evals/golden sets) → Identify (Insights) → Optimize (Agent Optimizer and peers) → Validate (stats + continuous eval) and repeat.
  - question: Same-day callouts?
    answer: Voice agents GA; Decision-1.1 GA in Foundry as an eval judge; Cost view preview; higher hosted-agent concurrency.
draft: false
candidateId: microsoft-azure-blog-2026-11-17-6e8f62d201
---
Microsoft’s Azure Blog (Tina Schuchman, **17 Nov 2026**, Ignite) brings **continuous improvement** to **Microsoft Foundry**: feed traces and user input back into the system, search every run for upgrades, surface quality/speed/cost tradeoffs, and let humans decide what ships. The loop is **Establish → Identify → Optimize → Validate**, then again.

Establish covers evaluations and rubrics (safety in preview), annotated traces (preview), eval datasets from real usage, and **golden datasets** (preview). Identify ships **Insights** GA—cluster recurring failures with evidence—and GA visibility for agents built on LangGraph, LangChain, and CrewAI. Optimize centers **Agent Optimizer** for instructions, skills, and model choice, tested against your evals first; preview paths include sending Insights into Optimizer, **skill optimization**, and **cost optimization**, plus **Managed Training** and **Programmed Training** (preview: custom Python recipes on serverless GPUs). An Alaska Airlines example cites ATA maintenance-report classification rising from **81.2%** to **91.1%** after tuning MAI-Code-2-Flash. Treat preview flags as console-gated; this is an Ignite product narrative, not a single changelog line.
