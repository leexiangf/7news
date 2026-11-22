---
title: LlamaIndex ships OCRia-1.5 for tables, charts, and forms
slug: llamaindex-ocria-1-5
description: >-
  LlamaIndex: OCRia-1.5 is live in LlamaParse—4B for Agentic, new 2B for Cost
  Effective—with higher ParseBench-2 scores on tables, charts, forms, and visual
  grounding.
date: '2026-11-18'
updated: '2026-11-22'
category: ai-office
subcategory: doc
tags:
  - LlamaIndex
  - LlamaParse
  - OCR
  - Document
author: Editorial
locale: en
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-ocria-1-5'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: Two sizes?
    answer: OCRia-1.5-4B powers Agentic (10 credits/page); 1.5-2B powers Cost Effective (3 credits/page).
  - question: Vs 1.0?
    answer: Post cites table scores 86.5→90.1 (Agentic) and visual grounding 77.0→88.5 (Cost Effective)—vendor benches.
draft: false
candidateId: llamaindex-2026-11-22-e14daa3092
---
LlamaIndex (**18 Nov 2026** on the source page) ships **OCRia-1.5**, following OCRia-1 a few weeks earlier. Focus: more accurate complex tables (including spanning headers), charts, and forms, plus tighter bounding boxes for answer grounding. Two sizes: **OCRia-1.5-4B** under LlamaParse **Agentic** (~**10** credits/page) and new **OCRia-1.5-2B** under **Cost Effective** (~**3** credits/page).

ParseBench-2 claims: Agentic tables **86.5→90.1**, Cost Effective tables **83.2→87.5**; charts and forms up on both tiers; Cost Effective visual grounding **77.0→88.5**. Both models are live in LlamaParse. Parsing model point release—scores are vendor benchmarks.
