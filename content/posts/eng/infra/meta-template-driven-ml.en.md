---
title: 'Meta’s template-driven ML: design once against ads-ranking fragmentation'
slug: meta-template-driven-ml
description: >-
  Standard Model Templates (SMT) turn ads-ranking models into composable
  blocks; two-year claims include ~92% less per-model eng time, 5000+
  technique–model combos, ~+0.63% offline and ~+0.86% online lift.
date: '2026-11-18'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - Meta
  - ML Platform
  - Ads Ranking
  - Templates
author: Editorial
locale: en
sourceUrls:
  - >-
    https://engineering.fb.com/2026/11/18/ml-applications/design-once-deploy-at-scale-template-driven-ml-ecosystem/
sourceLevel: A
publisher: meta
faqs:
  - question: Cost of fragmentation?
    answer: >-
      Each idea adapted per model ≈ linear eng work; corner configs raise
      reliability cost; AutoML struggles in an unstructured space.
  - question: How to read the two-year figures?
    answer: >-
      ~92% less per-model eng time, 5000+ technique–model combos, ~+0.63% offline
      quality at neutral serving, ~+0.86% cumulative online lift covering ~70% of
      models by count—Meta’s numbers.
draft: false
candidateId: meta-engineering-2026-11-18-d8d01a736f
---

Meta Engineering (**18 Nov 2026**) frames a structural ads-ranking problem: as production models multiply, architectures, features, training, serving, and platform logic diverge. The bottleneck shifts from inventing techniques to **shipping them reliably**. The answer: **Standard Model Templates (SMT)**—a small set of reusable, composable building blocks for model design.

## An unfavorable scaling law

| Symptom | Mechanism |
| --- | --- |
| Propagation is expensive | One idea × N models ≈ linear engineering |
| Reliability is expensive | Long-tail configs explode; migrations keep breaking |
| Automation weakens | AutoML needs a structured search space |

Per-model customization bought flexibility early; at fleet scale it taxes innovation spread.

## How SMT changes the operating model

Templates package feature selection, interaction, parallelism, training configs, and hardware-aware serving. New ideas are multi-model-optimized on **representative templates/models** (average gain **and** regression rate), then folded into the next template version so every model on that template inherits. Two-year claims:

| Metric | Claim |
| --- | --- |
| Per-model eng time | ~**-92%** |
| Technique–model combos | **5000+** |
| Offline quality | ~**+0.63%** average at neutral serving capacity |
| Online cumulative | ~**+0.86%** covering ~**70%** of models by count |
| Techniques shipped via the workflow | **80** |

Paper: “Design Once, Deploy at Scale: Template-Driven ML Development for Large Model Ecosystems.”

## Relation to the agent-propagation post

The same week covers agents spreading techniques. SMT gives agents **structured priors and a quality floor** so they do not thrash an unbounded design space; agents can propose, experiment, and diagnose at template level, then every model on the template inherits. For platform teams: unify shape before automating spread—a template that accommodates every historical edge case rebuilds fragmentation.
