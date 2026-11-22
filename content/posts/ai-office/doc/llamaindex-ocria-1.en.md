---
title: LlamaIndex ships OCRia-1, a 4B document-parsing VLM for LlamaParse
slug: llamaindex-ocria-1
description: >-
  LlamaIndex introduces OCRia-1, a 4B VLM it calls state-of-the-art on ParseBench
  and table benchmarks, now powering LlamaParse with a focus on accuracy, cost,
  and latency.
date: '2026-11-06'
updated: '2026-11-20'
category: ai-office
subcategory: doc
tags:
  - LlamaIndex
  - OCR
  - LlamaParse
  - document parsing
author: Editorial
locale: en
sourceUrls:
  - 'https://www.llamaindex.ai/blog/parse-ocria-1'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: ParseBench score?
    answer: LlamaIndex cites 87.4 overall, about +12.1 versus the next-highest parser under 35B.
  - question: How do you use it?
    answer: The post says it already powers LlamaParse; check product docs for self-hosting or weights.
draft: false
candidateId: llamaindex-2026-11-06-daecb53d00
---
LlamaIndex introduced **OCRia-1**, a roughly **4B**-parameter vision-language model for document parsing that it says already powers **LlamaParse**. The pitch is hitting accuracy, cost, and latency together for agentic workflows over financial reports, insurance filings, and other table/chart-heavy pages.

On **ParseBench**, LlamaIndex reports **87.4** overall—about **+12.1** versus the next-highest under-35B parser in its table (LightOnOCR, Chandra, Mistral OCR, and peers). It also claims leads on table-oriented third-party benches such as olmOCR-bench, PulseBench-Tab, and fr-bench-pdf2md. Treat scores as vendor evaluations; rendering and scoring footnotes live in the source. For document-agent teams, it is a concrete “small specialized parser” ship, not a general chat model.
