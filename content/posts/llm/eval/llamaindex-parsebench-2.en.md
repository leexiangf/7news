---
title: 'LlamaIndex ParseBench-2: a severity-aware document parsing benchmark'
slug: llamaindex-parsebench-2
description: >-
  ParseBench-2 calibrates deterministic metrics to 330+ severity-labeled error
  types; corpus ~2.1k→4.3k; six dimensions including forms; LlamaParse Agentic
  Plus ~89.8 overall (vendor board).
date: '2026-11-20'
updated: '2026-11-21'
category: llm
subcategory: eval
tags:
  - LlamaIndex
  - ParseBench
  - document parsing
  - eval
author: Editorial
locale: en
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-parsebench-v2'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: What’s new vs ParseBench-1?
    answer: Severity-aware scoring, doubled corpus, fixed references, full chart value checks, forms as a sixth dimension; 330+ error types.
  - question: How to read the leaderboard?
    answer: Vendor ranking cites LlamaParse Agentic Plus ~89.8 overall—quote the six-dimension mean and config name.
draft: false
candidateId: llamaindex-2026-11-20-6cc2f869a5
---

LlamaIndex ships **ParseBench-2** (blog dated **12 Nov 2026**; site entry **20 Nov**): a **severity-aware** document-parsing benchmark—deterministic metrics should match how badly an error hurts downstream work. ParseBench-1 became widely cited (50k+ monthly downloads claimed), but scores sometimes fought intuition: a swapped digit barely moved the needle while a harmless format change zeroed the page.

## Mechanism: severity first, then calibrate

The team defined **330+** error types, labeled critical / major / minor / harmless, then hill-climbed per-dimension metrics toward those targets. Example: in a 459-cell table, a wrong number cost ~**0.13**/100 under ParseBench-1 while Markdown-instead-of-HTML scored zero; under ParseBench-2 the wrong number costs ~**10** points and equivalent Markdown deducts **0**.

| Dimension | Notes |
| --- | --- |
| Text / Formatting / Tables / Layout | Reading order, format equivalence, header–cell binding |
| Charts | Full series across **1,025** charts / ~**36,958** values |
| Forms (new) | Field binding, checkbox state, blanks as signal; ~500 government-form pages in the core set |
| Visual grounding | Blocks land on the right page locations (~538 pages) |

Corpus grows from ~**2.1k** to ~**4.3k** cases. Severity policy is customizable—benchmark and framework.

## Board and cost (vendor)

Forty-one default configs across document parsers, direct vision models, and open weights. Overall = mean of six dimensions. **LlamaParse Agentic Plus ~89.8**, ~**5.9** points ahead of the next-best document parser cited; charts show the widest gap (~1.2–92.6). Cost tables argue higher price ≠ higher accuracy. **OCRia-1.5** powers LlamaParse modes in the same window.

Datasets, eval code, and paper are open (`run-llama/ParseBench`). Cite **ParseBench-2**, config name, and the six-dimension protocol when quoting scores.
