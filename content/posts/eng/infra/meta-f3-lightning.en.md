---
title: 'Meta F3 Lightning: ship ads features independently without losing shared execution'
slug: meta-f3-lightning
description: >-
  F3 Lightning splits release from execution: each feature compiles and ships
  alone, then startup dedupes via stable computation IDs into one shared plan;
  comparable features ~3.6× faster to prod at flat infra cost.
date: '2026-11-03'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - Meta
  - feature engineering
  - ads
  - ML Infra
author: Editorial
locale: en
sourceUrls:
  - >-
    https://engineering.fb.com/2026/11/03/ml-applications/f3-lightning-how-meta-accelerates-ads-ml-features-to-production/
sourceLevel: A
publisher: meta
faqs:
  - question: What was F3’s bottleneck?
    answer: >-
      All features compiled into one merged graph that was also the release unit;
      one bad definition blocked the pipeline—worse past 20K+ features.
  - question: What is the 3.6× claim?
    answer: Comparable extraction features reach production ~3.6× faster than prior F3 with no infra compute cost rise—Meta’s measure.
draft: false
candidateId: meta-engineering-2026-11-03-072a276663
---

Meta Engineering (**3 Nov 2026**) introduces **F3 Lightning** on top of ads feature framework **F3**. F3 authors features as DAGs and merges shared work so one request can serve **20K+** features; that merged graph was also the release—so one bad definition (or expensive model-gated tests) blocked everyone.

## Release boundary ≠ execution boundary

Early per-feature-release prototypes fixed blocking but spiked CPU because execution was no longer shared. Lightning’s split:

| Boundary | Behavior |
| --- | --- |
| Release | Each feature compiles, validates, ships, and rolls back alone; dequeued by priority |
| Execution | At startup, active configs dedupe via **stable computation IDs** into one execution plan |

IDs derive from operation + params + input IDs—not local node numbers—so the same seven-day filter compiled weeks apart still matches.

## Four steps back to efficiency parity

1. **Stable IDs** — independently compiled graphs can recognize “same work”  
2. **One execution plan** — topological sort flattened to an ordered list; failures only poison downstream branches  
3. **Shared memory buffer** — one buffer per request; kill cross-config jumps and duplicate copies  
4. **Dense index mapping** — map IDs to consecutive slots at startup; request path is array indexing

Even with the same operation count as classic F3, **where results live and how many copies exist** still moved CPU—the least obvious, most transferable lesson.

## Outcome

Comparable extraction features reach production ~**3.6×** faster with no infra compute cost increase—more model iterations in the same calendar window. For ads/recs feature platforms: a worked example of shared execution versus independent release. Align your feature types and validation cost before quoting 3.6×.
