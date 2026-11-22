---
title: Cloudflare open-weights Clairic and Clairic-flash for extraction on Workers AI
slug: cloudflare-clairic-open-weight
description: >-
  Clairic (~27B) and Clairic-flash (~9B) ship open weights on Hugging Face with
  Workers AI hosting—parallel slot generation, vendor latency tables, and promo
  pricing through 1 Dec 2026.
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Cloudflare
  - Clairic
  - Workers AI
  - Open Weights
author: Editorial
locale: en
sourceUrls:
  - 'https://blog.cloudflare.com/open-clairic/'
sourceLevel: A
publisher: cloudflare
faqs:
  - question: Which endpoint is which?
    answer: >-
      `@cf/cloudflare/clairic` is ~27B; `@cf/cloudflare/clairic-flash` is ~9B.
      Preview Clairic endpoints roll in place to the new higher-quality model.
  - question: Pricing?
    answer: >-
      Input-only billing. Promo through 1 Dec 2026: both $0.10/M input; then
      Clairic $0.24, flash stays $0.10.
draft: false
candidateId: cloudflare-2026-11-18-9304916241
---

Cloudflare’s blog (**18 Nov 2026**) ships updated **Clairic** and **Clairic-flash** as open-weight extraction models: inference on **Workers AI**, full weights on **Hugging Face**. The same post reintroduces the **Workers AI Superintelligence** team behind Clef, Clairic, and more.

## What changed since preview

Preview feedback clustered on pulling fields from unstructured inputs. The redesign uses **parallel slot autoregression** for ordinary text/number fields—each field picks the next token from what it already wrote and stops at its own end marker, while fields advance together in the serving batch. Separate heads cover estimates, durations, and arithmetic. The typed API still returns confidence, character spans, and probabilities.

| Endpoint | Size (vendor) | Role |
| --- | --- | --- |
| `@cf/cloudflare/clairic` | ~**27B** | Higher-quality extraction |
| `@cf/cloudflare/clairic-flash` | ~**9B** | Lighter / faster |

Media: up to about **four** images or PDF pages total; line items can return as rows. An internal image-reading error count is cited as falling from 207 to 0—**self-reported**, directional only.

## Latency and price (vendor)

Full HTTP response p50/p95 examples: fresh text Clairic ~**358 / 736 ms**, flash ~**155 / 328 ms**—still far below typical general LLM turn times for similar jobs.

| Model | List ($/M input) | Promo through 1 Dec 2026 |
| --- | --- | --- |
| Clairic (27B) | **0.24** | **0.10** |
| Clairic-flash (9B) | **0.10** | **0.10** |

Input-only billing (Cloudflare absorbs output tokens). Apps on the preview Clairic endpoint get the new model **in place**; cost-sensitive traffic can move to flash. Treat licenses, model cards, and schemas as authoritative from the blog, Workers AI docs, and HF repos.
