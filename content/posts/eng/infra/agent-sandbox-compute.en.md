---
title: 'Millions of creates a day: why agent sandboxes look like a new compute shape'
slug: agent-sandbox-compute
description: >-
  Short-lived sandboxes push create rate next to GPUs as a visible cost line.
  What to watch on scheduling, cold start, secret boundaries, and replayable
  logs—no single vendor release to cite.
date: '2026-11-02'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Sandbox
  - infra
  - Agent
author: Editorial
locale: en
faqs:
  - question: Why call sandboxes a new compute shape?
    answer: >-
      Agents run commands, install deps, and touch temp files. Short-lived
      environments create and destroy at high frequency—scheduling and cold
      start become their own cost surface, not just model unit price.
  - question: Is there an official source?
    answer: No single vendor URL; this is an engineering-observation piece—do not cite figures as a product launch.
draft: false
---

Once agents move from chat to **act**, a quiet line shows up on the bill: **create rate for short-lived execution environments**. A tool call may spin a container or microVM, inject secrets, mount a read-only FS, then tear down. At tens of millions of creates per day, sandbox scheduling starts to feel like GPU queuing.

This piece has no single vendor release to cite. Treat it as engineering observation and a checklist—not a product announcement.

## Why it suddenly gets expensive and hard

| Old assumption | Agent reality |
| --- | --- |
| Long-lived services, rare scale events | Second-scale create/destroy; peaks follow session concurrency |
| Rarely changing images | Per-task deps; layer-cache hit rate owns cold start |
| Secrets resident in the service | Per-run inject and revoke; leak windows shorter but more frequent |
| Logs keyed by service name | Need per-run replay or tool-call debugging fails |

The cost funnel is often **cold start × create rate × failed retries**, not “the model got a bit pricier.” Chase token unit price alone and the sandbox door leaks.

## Four lines engineering should watch

**Cold start and images.** Keep base images thin; pre-bake common deps; put layer cache / snapshots (if any) into capacity plans. Check: P50/P95 create-to-ready latency and cache hit rate.

**Network and secret boundaries.** Default-deny or whitelist egress; inject secrets per run and revoke on exit; mount host paths read-only. Check: can secrets still be read with no task running? Can one sandbox see a sibling’s volume?

**Timeouts and spend caps.** Wall-clock kill, CPU/memory ceilings, daily budget breakers; retries need idempotency keys so “fail → new sandbox” does not snowball. Check: a hung process dies on policy; bills split cleanly by tenant.

**Replayable observability.** Bind each run to a run-id: command, exit code, stdout/stderr summary, network-deny counts. Check: from one failed tool call, can you reconstruct the full sandbox lifecycle?

## How this sits beside “inference compute”

GPU pools answer “can the model run?” Sandbox pools answer “can the code run safely?” If you already run an inference control plane (gateway, policy, tenant meters), the sandbox side still needs a counterpart: rate limits, metering, queue depth, failure budgets. Without it, **create-API QPS and the image registry** usually burn before the model does.

Before launch, synthetic-load the empty path—create, inject, destroy immediately. If that path’s P95 is already unacceptable, richer agent workflows will only make it worse.
