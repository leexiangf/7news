---
title: Moonshot open-sources Kimi Vendor Verifier to separate model gaps from infra drift
slug: kimi-vendor-verifier
description: >-
  Kimi Vendor Verifier (KVV), released with K2.6, uses param pre-checks plus
  OCRBench, MMMU Pro, AIME2025, and ToolCall probes so users can tell model
  limits from third-party serving drift—with reference scores and ~15h full runs.
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Moonshot
  - Kimi
  - Evaluation
  - Open Source
author: Editorial
locale: en
sourceUrls:
  - 'https://www.kimi.com/en/blog/kimi-vendor-verifier'
  - 'https://www.kimi.com/en/blog/kimi-k2-6'
sourceLevel: A
publisher: moonshot
faqs:
  - question: What does KVV catch first?
    answer: >-
      A parameter pre-check (temperature, top_p, and peers enforced correctly).
      Benchmarks only run after that gate passes.
  - question: Official reference scores?
    answer: >-
      Blog table on Kimi API at Temperature=1.0 / TopP=0.95: OCRBench 91.0;
      AIME2025 avg@32 98.4; MMMU Pro Vision 78.8.
  - question: Relation to K2.6?
    answer: Shipped alongside K2.6; we date this companion post to 12 Nov 2026.
draft: false
candidateId: moonshot-2026-11-20-96a2b1ac5a
---

Alongside open weights, Moonshot published a less glamorous piece of plumbing: **Kimi Vendor Verifier (KVV)**. The blog says it shipped with **Kimi K2.6**. The job is not another vanity leaderboard—it is to help users tell **model capability gaps** from **third-party inference or decoding drift**.

## Why a “chain of trust”

After K2 Thinking, benchmark anomalies poured in. Some were decoding misuse: Thinking mode enforces **Temperature=1.0** and **TopP=0.95**, with checks that thinking content is passed back. Harder cases remained: the same eval could still diverge between **third-party APIs and the official API**. The more open the weights and the more fragmented the serving channels, the less controllable quality becomes. If users cannot separate model defects from engineering drift, trust in the open-weight ecosystem erodes together.

## What KVV runs

A **Pre-Verification** gate checks that parameter constraints actually stick, then a suite chosen to expose infra failures:

| Step | Role |
| --- | --- |
| Param pre-check | Enforced temperature / top_p / peers; fail closed before benches |
| OCRBench | Multimodal pipeline smoke (~5 minutes) |
| MMMU Pro | Diverse vision inputs → preprocessing bugs |
| AIME2025 | Long-output stress; surfaces KV / quant silent decay |
| K2VV ToolCall | Trigger consistency (F1) and JSON Schema accuracy |
| SWE-Bench | Full agentic coding; **not open-sourced** (sandbox deps) |

Official **Kimi API** reference scores (Temperature=1.0, TopP=0.95):

| Benchmark | Metric | MaxTokens | Kimi API |
| --- | --- | --- | --- |
| OCRBench | acc | 16384 | **91.0** |
| AIME2025 | avg@32 | 98304 | **98.4** |
| MMMU Pro Vision | acc | 65536 | **78.8** |

The post also cites upstream work with **vLLM / SGLang / KTransformers**, a planned public vendor leaderboard, and early access so infra providers can validate before users complain in production.

## Cost and limits

A full sequential run on two **NVIDIA H20 8-GPU** servers takes about **15 hours**; scripts mention streaming, retries, and checkpoint resume. SWE-Bench stays closed—agent-level conclusions still need your own sandbox or vendor reports.

For platform teams, KVV is a repeatable gate: before blessing a new backend, quant path, or decoding default, run the pre-check and long-output probes, then argue about SLAs. We date the post with the **K2.6 companion (12 Nov 2026)**.
