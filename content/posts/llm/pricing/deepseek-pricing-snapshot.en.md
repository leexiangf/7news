---
title: 'DeepSeek API: deepseek-flash naming and peak/off-peak pricing'
slug: deepseek-pricing-snapshot
description: >-
  Call deepseek-flash (V4.1-Flash-1017); legacy names still accepted but billed
  at Flash rates; off-peak is half of peak; Flash cache-miss input ~$0.3/MTok at
  peak.
date: '2026-11-20'
updated: '2026-11-21'
category: llm
subcategory: pricing
tags:
  - DeepSeek
  - API
  - pricing
author: Editorial
locale: en
sourceUrls:
  - 'https://api-docs.deepseek.com/quick_start/pricing'
sourceLevel: S
publisher: deepseek
faqs:
  - question: How does naming map to billing?
    answer: >-
      Use deepseek-flash; legacy deepseek-v4-flash names still work but retired
      models are served by DeepSeek-V4.1-Flash-1017 at Flash prices.
  - question: How are peak hours defined?
    answer: >-
      Off-peak is half of peak. Peak is Mon–Fri UTC 01:00–04:00 and 06:00–10:00
      excluding Chinese public holidays; all other hours are off-peak.
draft: false
candidateId: deepseek-pricing-2026-11-20-bb9241e978
---

DeepSeek’s Models & Pricing docs say callers should use **`deepseek-flash`** (version **DeepSeek-V4.1-Flash-1017**). Legacy names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` are still accepted, but those models are retired—requests are served by Flash-1017 and billed at Flash rates. The page also lists **`deepseek-v4-pro`** (V4-Pro-0813). Context length **1M**, max output **384K**; Flash supports Vision, Pro does not.

## Token prices (per 1M tokens, docs table)

| Item | Flash off-peak / peak | Pro off-peak / peak |
| --- | --- | --- |
| Input (cache hit) | $0.003 / $0.006 | $0.022 / $0.044 |
| Input (cache miss) | $0.15 / $0.30 | $0.66 / $1.32 |
| Output | $0.60 / $1.20 | $1.98 / $3.96 |
| Concurrency limit | 2500 | 500 |

Off-peak rates are half of peak. Peak hours: Mon–Fri **UTC 01:00–04:00** and **06:00–10:00** (excluding Chinese public holidays); weekends and Chinese public holidays all day are off-peak.

## Other meters

Search / Fetch APIs: **$0.75** per 1,000 successful requests each. From **12:00 on 18 Nov 2026** (Beijing time), server-side search / web fetch triggered by model calls are **no longer billed separately**—results join context and count as tokens. File parsing / OCR: **$0.225** per 1,000 pages. TTS / ASR have list prices with a limited-time 50% off.

Prices can change—re-open the live docs before reconciliation.
