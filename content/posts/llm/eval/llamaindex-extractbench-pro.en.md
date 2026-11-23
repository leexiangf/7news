---
title: LlamaIndex ExtractBench Pro targets the long tail of extraction
slug: llamaindex-extractbench-pro
description: >-
  LlamaIndex: ExtractBench Pro’s 100 synthetic long-tail docs span six challenges;
  LlamaExtract Value F1 drops 18.5–47 points vs ExtractBench, with a new % Perfect
  metric.
date: '2026-10-15'
updated: '2026-11-23'
category: llm
subcategory: eval
tags:
  - LlamaIndex
  - ExtractBench
  - Evaluation
  - Document Extraction
author: Editorial
locale: en
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-extractbench-pro'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: What are the six challenges?
    answer: Interpretation rules, custom terminology, conditional aggregation, relational diagrams, charts/maps, long single pages.
  - question: How do I run it?
    answer: Clone ExtractBench and run uv run extract-bench download --dataset pro.
draft: false
candidateId: llamaindex-2026-11-23-2e28959a49
---
LlamaIndex (**15 Oct 2026**) releases **ExtractBench Pro**: **100** deterministically synthesized long-tail documents inspired by real customer breakages. It extends the original ~370-doc ExtractBench across interpretation rules, custom terminology, conditional aggregation, relational diagrams, charts/maps, and long single pages—where rigid pipelines struggle and tool-using agents adapt better.

Relative to ExtractBench, LlamaExtract tiers drop **18.5–47.0** Value F1 points. Below about **25¢**/page they still form the cost-performance frontier; the most expensive coding agents overtake only at much higher spend. A new **% Perfect** metric counts documents with 100% Value F1. Each doc has a ~**30**-minute limit; timeouts score 0. Dataset and code ship on the same ExtractBench channels. This is an eval-set extension—figures are vendor comparisons.
