---
title: NVIDIA’s AI Factory ops agents and Factory Operations Blueprint
slug: nvidia-ai-factory-ops-agents
description: >-
  Two NVIDIA technical posts describe the AI Factory Operations Agent and
  Factory Operations Blueprint: on-prem Nemotron agents that correlate failures
  across layers for DGX SuperPOD operations.
date: '2026-11-04'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - NVIDIA
  - agents
  - AI Factory
  - operations
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/how-nvidia-uses-ai-agents-to-streamline-ai-factory-operations/
  - >-
    https://developer.nvidia.com/blog/how-nvidia-factory-operations-blueprint-coordinates-ai-agents-to-investigate-production-issues/
sourceLevel: A
publisher: nvidia
faqs:
  - question: Where does it run?
    answer: >-
      On-prem via NemoClaw / OpenShell with locally served Nemotron models across
      DGX H100, B200, and GB300 clusters.
  - question: Does it mutate the cluster automatically?
    answer: >-
      Production learnings stress read-only investigation so SREs can review
      evidence before acting; multi-tenant isolation uses sandboxes and scoped
      permissions.
draft: false
candidateId: nvidia-developer-2026-11-04-ad3c135f69
---
NVIDIA published two related technical posts on agentic **AI factory** operations. The **AI Factory Operations Agent** coordinates specialized sub-agents—job recovery, hardware, observability, research, Kubernetes, cluster management—to detect failures, correlate root causes across compute, network, hardware, and scheduling, and surface recommendations in chat. The companion **Factory Operations Blueprint** details how those agents investigate production issues together.

The stack sits on the **NemoClaw** blueprint with **OpenShell**, serving **Nemotron** open models on-prem across DGX H100, B200, and GB300 clusters. Cross-cutting MCP tools cover search, code execution, and Grafana. Production lessons emphasize clear agent boundaries, **read-only investigation** to build trust, cross-layer correlation, precise tool schemas, and transparent reasoning for SRE review. Multi-tenant factories scope agents, tools, sandboxes, and Kubernetes permissions.

Read it as a reference architecture for embedding triage assistants into SuperPOD operations—not a claim of unattended auto-remediation.
