---
title: 'Azure × Oracle: agents on core business data and Work IQ context'
slug: azure-oracle-agentic-ai
description: >-
  Ignite: agents span Oracle systems of record and Microsoft Work IQ; Excel
  plug-in and Copilot entry points; Database@Azure in 33 regions; Workload
  Center limited preview + managed MCP.
date: '2026-11-17'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - Azure
  - Oracle
  - Copilot
  - Ignite
author: Editorial
locale: en
sourceUrls:
  - >-
    https://azure.microsoft.com/en-us/blog/microsoft-and-oracle-bring-agentic-ai-into-flow-of-enterprise-work/
sourceLevel: A
publisher: microsoft
faqs:
  - question: Where do users enter?
    answer: Excel (Oracle AI Database plug-in available today), Teams, and Microsoft Copilot—on Database@Azure + Work IQ.
  - question: What’s new for ops?
    answer: Azure Workload Center for Oracle limited preview (Workload Virtual Instance); agents via managed MCP with Entra auth.
draft: false
candidateId: microsoft-azure-blog-2026-11-17-adc72adcda
---

At Microsoft Ignite (**17 Nov 2026**), Azure and Oracle co-author “agentic AI in the flow of enterprise work”: agents reason over Oracle systems of record—finance, supply chain, HR, customer ops—plus Microsoft **Work IQ** context from meetings, email, documents, and Teams, surfaced through **Excel / Teams / Copilot**.

## Data plane: Database@Azure and proximity

| Item | Claim |
| --- | --- |
| Regions | Oracle AI Database@Azure in **33** Azure regions (more than on any other hyperscaler, per the post) |
| Latency | Proximity Placement Groups (PPGs) ~**50%** lower VM-to-Exadata RTT versus unaligned deployments |
| Compliance | FedRAMP Class D “coming soon” for US government—track console status |

The point is **AI to the data**, not another chatbot that copies sensitive tables out of the estate.

## Three audiences: ops, business, developers

**Ops.** **Azure Workload Center for Oracle** limited preview: a **Workload Virtual Instance (WVI)** collapses architecture, resources, and dependencies; wires Azure Monitor Health Models and Copilot “Run Oracle” agents. Example path: slow order app → Entra sign-in → unified health view → natural-language multi-agent investigation; DB calls through managed **MCP**, actions auditable.

**Business.** The **Oracle AI Database plug-in for Excel** is available today: pull trusted data into the sheet and reason with Copilot—no export, no IT ticket. Copilot can enrich transaction exceptions with Work IQ into a governed action draft.

**Developers.** Foundry + managed MCP + A2A: application roles gate tools so agents only run IT-sanctioned SQL / PL/SQL / reports. Sales-intel and customer-service scenarios treat Oracle as knowledge and memory—not a bulk dump into the model.

For enterprise architects: multi-cloud data plane plus Copilot entry. Regions, preview seats, and certifications live in both consoles. Cite the PPG “50%” with measurement context.
