---
title: Azure Catalyst and Ignite infra—Foundry + AKS as the agent run axis
slug: azure-catalyst-infra
description: >-
  Ignite: isolated sandboxes, Agent Grid, context reuse, AKS AI Manager;
  Catalyst agents for app/data modernization (1.4M apps claimed); Foundry↔AKS
  path for open models.
date: '2026-11-17'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - Azure
  - Catalyst
  - Foundry
  - AKS
  - Ignite
author: Editorial
locale: en
sourceUrls:
  - >-
    https://azure.microsoft.com/en-us/blog/introducing-azure-catalyst-agentic-modernization-and-new-ai-infrastructure-innovations/
sourceLevel: A
publisher: microsoft
faqs:
  - question: What matters most this week?
    answer: >-
      Isolated execution (AKS Agent Sandbox), agent networking (Agent Grid),
      context reuse, and inference efficiency / AKS AI Manager—with Foundry +
      AKS as the build/run axis.
  - question: What is Catalyst?
    answer: An agent-led modernization suite for apps, data, and infra; the post cites 1.4M apps modernized—vendor figure.
draft: false
candidateId: microsoft-azure-blog-2026-11-17-a64734f260
---

Azure’s blog (**17 Nov 2026**, Ignite) splits the story three ways: **how next-gen AI apps run**, **how agents modernize what already exists**, and **how AI extends cloud–edge–device**. Headline capabilities: isolated execution, agent networking, context management, inference efficiency. Organizationally, **Microsoft Foundry** and **AKS** sit at the center of managed experience versus deep customization.

## Run plane: sandbox, grid, context, placement

Agents write code, fan out to tools, and drag long context—infra has to meet each demand:

| Capability | Notes |
| --- | --- |
| Agent Sandbox (AKS extension) | VM-level isolation per session; pre-warmed pools; serverless option |
| Agent Grid | Authenticated, encrypted links to agents/models/tools/Azure services; identity policy + default-deny |
| Context and state | Reuse processed prompt context so long tasks recompute less on GPU; cache stays tenant-controlled |
| AKS AI Manager | Places deployments from model needs and real-time fleet capacity |

Confidential computing covers data in use. Open-source callouts include Kubernetes, vLLM, Ray, and preview AKS flex nodes (including GPU environments beyond Azure).

## Catalyst: technical debt as the fast path to AI

**Azure Catalyst** uses agents for discovery, planning, and execution—mapping legacy code and dependencies, generating migration waves. The post claims **1.4 million** apps modernized; internal cases cite ~**80%** faster modernization for Microsoft Quantum / Xbox, ~**75%** faster for a key Intune library, and GitHub porting the Copilot agentic harness (~800K lines) from TypeScript to Rust—vendor figures. Governance rulebooks, BYO models, and Microsoft Security / GitHub Copilot remediations are the differentiation pitch.

## How to read the announcement

This is a **direction bundle**, not a single SKU price list. Platform teams can map isolation / networking / context / placement against today’s agent topology, then choose Foundry-managed versus AKS self-managed—and evaluate Catalyst separately from the run plane. Preview eligibility and regions live in per-product docs.
