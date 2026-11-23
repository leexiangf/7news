---
title: LlamaExtract Max Effort raises Agentic Plus quality on hard docs
slug: llamaindex-extract-max-effort
description: >-
  LlamaIndex: Extract’s agentic_plus tier gains effort=max with compute-based
  billing; ExtractBench Pro Value F1 rises from 77.7 to 94.3 in vendor numbers.
date: '2026-10-29'
updated: '2026-11-23'
category: ai-office
subcategory: doc
tags:
  - LlamaIndex
  - LlamaExtract
  - Document Extraction
author: Editorial
locale: en
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-max-effort-for-extract-agentic-plus'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: How to enable?
    answer: Set configuration tier to agentic_plus and effort to max.
  - question: When to use?
    answer: When standard Agentic Plus falls short, docs are dense with charts/diagrams, or extraction errors are costly.
draft: false
candidateId: llamaindex-2026-11-23-8be33d0225
---
LlamaIndex (**29 Oct 2026**) adds **max effort** to Extract’s **`agentic_plus`** tier: more compute for higher extraction quality on the hardest documents. Billing tracks the compute used, not a fixed per-page price. On **ExtractBench Pro**, Value F1 rises from **77.7** (standard Agentic Plus) to **94.3** with max effort (vendor benchmark).

The mode can re-inspect chart regions at higher resolution when a fixed per-page budget would blur detail. Across six challenge categories, long dense pages jump from Value F1 **12.7** to **95.0**, with mean billed cost about **$0.075** to **$4.19** per document. Relational diagrams and document conventions also climb; custom terminology and counting move less. Configure with `tier: agentic_plus` and `effort: max`. Treat it as a quality-tier add-on—validate cost on your own sample set.
