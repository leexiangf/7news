---
title: GPT-Live 1.1 full-duplex speech lands on Vercel AI Gateway
slug: vercel-gpt-live-1-1
description: >-
  Vercel: openai/gpt-live-1.1 via AI Gateway; full-duplex and interruptible;
  stronger transcription and cross-language timbre; same Live endpoint—usually
  just swap the model ID.
date: '2026-11-19'
updated: '2026-11-21'
category: llm
subcategory: release
tags:
  - Vercel
  - AI Gateway
  - GPT-Live
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/changelog/gpt-live-1-1-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: What changes for existing integrations?
    answer: Same Live endpoint and client delegation—existing GPT-Live apps usually only swap the model ID (openai/gpt-live-1.1).
  - question: What’s claimed vs prior?
    answer: Full-duplex listen-while-speak; mid-reply pause/interrupt/add detail; more accurate transcription and more consistent cross-language accent/timbre—vendor framing.
draft: false
candidateId: vercel-2026-11-19-3280196289
---

Vercel’s Changelog (**19 Nov 2026**) adds **GPT-Live 1.1** to **AI Gateway**. It is a full-duplex speech model: listen while speaking; callers can pause, interrupt, or add detail mid-reply.

## Integration and bounds

| Item | Claim |
| --- | --- |
| Model ID | `openai/gpt-live-1.1` |
| Endpoint | Same Live endpoint and client delegation—usually just swap the ID |
| Vs prior (vendor) | More accurate transcription; more consistent cross-language accent and timbre |

Keys, billing, and samples live in the Changelog and AI Gateway docs. For realtime voice apps: this is a **gateway listing**—capability and latency still belong in OpenAI / Vercel originals; regression-test target accents and barge-in before ship.
