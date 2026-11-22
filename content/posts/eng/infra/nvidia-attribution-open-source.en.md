---
title: 'NVIDIA open-sources Attribution: root-cause distributed training failures'
slug: nvidia-attribution-open-source
description: >-
  Attribution scopes one workload attempt and collapses logs/metrics/scheduler
  state into a structured diagnosis via deterministic rules; Service + Blueprint
  architecture; claims millions of jobs analyzed weekly.
date: '2026-11-02'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - observability
  - cluster
  - open source
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/diagnose-distributed-ai-workload-failures-with-nvidia-attribution/
sourceLevel: A
publisher: nvidia
faqs:
  - question: How is this different from log aggregation?
    answer: >-
      One workload attempt is the boundary; output is terminal state, root-cause
      domain, affected nodes, symptoms, and evidence—reproducible deterministic
      rules, not a dump of errors.
  - question: How to land it?
    answer: Attribution Service (REST) + Blueprint (Slurm/Kueue/static + Loki/Pod/PromQL connectors); GitHub linked in the post.
draft: false
candidateId: nvidia-developer-2026-11-02-53eb05fac6
---

NVIDIA’s Developer Blog (**2 Nov 2026**) open-sources **NVIDIA Attribution**: correlate workload-scoped logs, metrics, telemetry, and scheduler state into **one reproducible diagnosis**. The pain is concrete—a single GPU or fabric fault often surfaces as NCCL storms and scheduler noise on other ranks; the exception shows where work stopped, not where it broke.

## Four-stage path

1. **Scope** — lock one attempt via scheduler IDs or an explicit window + node set  
2. **Collect** — applogs, syslogs, driver / Fabric Manager, scheduler history, node and network metrics → Observations  
3. **Extract and correlate** — deterministic rules separate root cause from downstream symptoms  
4. **Structured result** — `terminal_state`, `sub_domain`, symptoms, affected nodes, collector coverage and errors

Synthetic example: **XID 149** (NVLink signal integrity) on `node-02` is the root cause; NCCL errors on other ranks stay as “interesting” symptoms, not parallel root causes. Incomplete evidence yields uncertainty—not a forced verdict.

## Service and Blueprint

| Component | Role |
| --- | --- |
| Attribution Service | HTTP wrapper around the engine; one verdict per workload |
| Attribution Blueprint | Discover jobs, run collectors, call the Service, write results + read-only dashboard |

Connectors cover Slurm / Kueue / static inputs, plus Loki, local files, K8s pod logs, and PromQL. The post says it has run for years on NVIDIA’s own AI infra, analyzing **millions** of workloads weekly across hundreds of thousands of GPUs—vendor scale. Repo: `dsx-ai-factory/attribution`; quickstart uses Docker + checked-in sample evidence. For SRE: wire `terminal_state` / `sub_domain` into recovery pipelines instead of parsing vendor-specific log soup.
