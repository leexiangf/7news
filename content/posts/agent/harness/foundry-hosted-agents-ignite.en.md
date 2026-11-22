---
title: 'Foundry Hosted Agents: subnet IP sharing lifts planned concurrency'
slug: foundry-hosted-agents-ignite
description: >-
  At Ignite 2026, Foundry Agent Service adds production fixes for hosted agents,
  including subnet IP sharing—planning estimates jump a /24 from ~250 to ~60,000
  sessions, with regional quotas still the practical ceiling.
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft Foundry
  - hosted agents
  - Ignite
  - Azure
author: Editors
locale: en
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/hosted-agents-foundry-agent-service-ignite-2026/
sourceLevel: S
publisher: microsoft
faqs:
  - question: What changed with IPs?
    answer: >-
      Sessions used to consume one delegated-subnet IP each (~250 on a /24).
      They now share subnet IPs while keeping VM-isolated sandboxes. Planning
      estimates: ~60,000 on a /24 and ~7,500 on a /27—estimates, not guarantees;
      /24+ still recommended for production.
  - question: What’s the real ceiling?
    answer: >-
      Regional session quotas—about 2,000 or 1,000 concurrent sessions per
      subscription by default, raisable via support. Egress/private-CA updates
      cover managed hosted agents; BYO-AKS is documented separately.
draft: false
candidateId: microsoft-foundry-2026-11-18-b07d3afb72
---
At Microsoft Ignite 2026, the Foundry blog moves hosted agents past demos into production questions: subnet headroom, private CAs, connectivity scope, AKS reuse, and interrupted long jobs.

The sharpest numbers are networking. In a customer VNet, each session used to take its own delegated-subnet IP—about **250** concurrent on a **/24**. Sessions now **share subnet IPs** while staying in VM-isolated sandboxes. Planning estimates rise to about **60,000** on a /24 and **7,500** on a /27. Microsoft labels these planning estimates, not guarantees, and still recommends /24 or larger for production. For most teams the practical ceiling is the **regional session quota**—about **2,000 or 1,000** concurrent per subscription by default, raisable via support. Egress and private-CA updates apply to managed hosted agents; BYO-AKS will be documented separately.

Platform teams should reconcile regional quotas and subnet plans before treating “tens of thousands” as a promise—use the Ignite post and follow-on docs as source of record.
