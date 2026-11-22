---
title: Liquid AI d1.2 / d1.2-ultra land on Vercel AI Gateway
slug: vercel-liquid-d1-2
description: >-
  Vercel: Liquid AI d1.2 / d1.2-ultra decision models on AI Gateway; Boolean /
  Choice / Score / Box; audio and image inputs; model IDs liquid/d1.2(-ultra).
date: '2026-11-19'
updated: '2026-11-21'
category: llm
subcategory: release
tags:
  - Vercel
  - Liquid AI
  - AI Gateway
  - d1.2
author: Editorial
locale: en
sourceUrls:
  - >-
    https://vercel.com/changelog/liquid-ais-d1-2-and-d1-2-ultra-are-now-available-on-ai-gateway
sourceLevel: A
publisher: vercel
faqs:
  - question: How do they differ from generative models?
    answer: Decision models return structured answers, not long prose; multiple Boolean / Choice / Score / Box questions can share one input.
  - question: Which tier?
    answer: d1.2 is faster and cheaper; d1.2-ultra is Liquid’s most accurate decision model.
draft: false
candidateId: vercel-2026-11-19-d50f4c5c00
---

Vercel’s Changelog (**19 Nov 2026**) adds Liquid AI’s **d1.2** and **d1.2-ultra** to **AI Gateway**, with audio input and bounding-box support. These are **decision models**: structured answers, not generated prose.

## Question types and tiers

| Type | Job |
| --- | --- |
| Boolean | Yes/no probability |
| Choice | Category pick |
| Score | Rubric rating |
| Box | Image localization (top/bottom/left/right as height/width fractions) |

Multiple questions can share one input. **d1.2** is faster and cheaper; **d1.2-ultra** is the accuracy tier. Model IDs: `liquid/d1.2` / `liquid/d1.2-ultra`; set `AI_GATEWAY_API_KEY`. Examples: AI SDK 7 (`≥7.0.136`) `experimental_decide` on a voicemail.flac refund probability; Decisions API (`/v1/decisions`) for form-image boxes. Decision requests appear in Gateway logs and count toward budgets. Prices and limits live in Gateway docs.
