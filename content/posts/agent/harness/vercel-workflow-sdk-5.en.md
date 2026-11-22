---
title: 'Workflow SDK 5: encryption, every-region runs, agent-grade speed'
slug: vercel-workflow-sdk-5
description: >-
  Vercel’s Workflow SDK 5 encrypts event-log payloads with AES-256-GCM, keeps
  runs in the starting Function region, and cuts queue hops—latency gains about
  1.6×–25× vs v4 in their benches.
date: '2026-11-12'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Workflow SDK
  - Agent
  - Durability
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/blog/workflow-sdk-5'
sourceLevel: A
publisher: vercel
faqs:
  - question: Source date?
    answer: Blog dated 2026-11-12.
  - question: How to read the speedups?
    answer: Managed Vercel World self-tests vs v4.8.12 (e.g. step-to-step p75 618→109 ms; 1,020 steps median 21→3 min)—not a universal SLA.
draft: false
candidateId: vercel-2026-11-13-2bfaf4838e
---
Vercel shipped **Workflow SDK 5** (blog **12 Nov 2026**) after more than **4 billion** steps and **700 million** runs, focusing on security, reliability, and agent-scale performance. Security: workflow/step I/O, hooks, and streams are encrypted **AES-256-GCM** with a per-run key before leaving your code; zero-config on Vercel, `getEncryptionKeyForRun()` for self-hosted Worlds; cross-run writes seal to the target public key; optional `experimental_retention: 0` drops payloads when a run finishes.

Infrastructure: each run’s state/queue/streams live in the **Function region that started it** (not always `iad1`), overridable via `start(..., { region })`. Reliability improves with regional isolation; failover can execute steps elsewhere while state stays pinned. Performance: fewer queue hops, incremental replay, WebSocket streaming—hosted benches cite step-to-step p75 ~**618→109 ms**, 1,020-step median ~**21→3 minutes**, stream delivery median ~**226→53.5 s** (about **1.6×–25×**). Worlds also back fx, durable-harness, and eve. Treat as a **major engineering release**; see v5 upgrade docs (Python SDK still beta).
