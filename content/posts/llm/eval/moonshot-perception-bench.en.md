---
title: 'Moonshot’s PerceptionBench isolates atomic visual perception in MLLMs'
slug: moonshot-perception-bench
description: >-
  Kimi Team’s PerceptionBench: 10 atomic skills mined from failures across 42
  benches, 3,000 questions; none of 16 frontier MLLMs reach 60%, with
  hallucination weakest on average.
date: '2026-11-12'
updated: '2026-11-20'
category: llm
subcategory: eval
tags:
  - Moonshot
  - Kimi
  - PerceptionBench
  - Eval
author: Editorial
locale: en
sourceUrls:
  - 'https://www.kimi.com/en/blog/perception-bench'
sourceLevel: S
publisher: moonshot
faqs:
  - question: How is it different from typical multimodal benches?
    answer: Each item isolates one atomic perception skill with no reasoning or outside knowledge; categories are mined from real failures, not predefined.
  - question: How large?
    answer: 3,000 released items (~60% decomposed from failures, 40% newly authored); in-house pool 17,000+.
draft: false
candidateId: moonshot-2026-11-12-c509a0c7df
---
Moonshot’s Kimi Team releases **PerceptionBench** to isolate **visual perception** in multimodal LLMs. From frontier-model failures across **42** existing benchmarks, they attribute the earliest wrong step, induce **10** atomic skills (relation, counting, attribute, depth/3D, localization, comparison, fine-grained recognition, context integration, OCR, hallucination, and related), and build questions answerable by looking alone—no reasoning or external knowledge.

The public set has **3,000** verified items (~**60%** decomposed from failures, **40%** newly authored, with difficulty stratification); an in-house pool exceeds **17,000**. Across **16** frontier MLLMs, **none reach 60%**, and perception-related hallucination is weakest on average; near-identical overall scores can hide sharp per-skill gaps. The goal is to show *where* perception breaks. Treat as an **eval release**; per-skill tables live with the original materials.
