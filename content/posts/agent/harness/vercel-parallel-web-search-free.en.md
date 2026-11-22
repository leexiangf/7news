---
title: Parallel web search fast mode free on Vercel AI Gateway through Jan 31
slug: vercel-parallel-web-search-free
description: >-
  Vercel Changelog: Parallel fast web search free on AI Gateway through 31 Jan
  2027 with ZDR default; eve’s web_search uses Parallel fast when models run via
  Gateway.
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Parallel
  - Web Search
  - AI Gateway
author: Editorial
locale: en
sourceUrls:
  - >-
    https://vercel.com/changelog/parallel-web-search-is-free-on-ai-gateway-and-eve-through-january-31
sourceLevel: A
publisher: vercel
faqs:
  - question: What’s free?
    answer: Fast mode only through 31 Jan 2027; Zero Data Retention on by default; other modes at standard pricing.
  - question: How to call?
    answer: >-
      AI SDK gateway.tools.parallelSearch({ mode: 'fast' }); no separate Parallel
      API key.
draft: false
candidateId: vercel-2026-11-18-309062f186
---
Vercel’s Changelog (**18 Nov 2026**) makes **Parallel** web search **fast** mode free on **AI Gateway** through **31 Jan 2027**, and sets Parallel as the default web search for **eve** agents. It works with any Gateway model—no separate Parallel API key—returning links with short excerpts, filterable by site or publish date.

In eve, the built-in `web_search` tool uses Parallel fast automatically when the model is served through AI Gateway. In the AI SDK, add `gateway.tools.parallelSearch({ mode: 'fast' })`. The offer covers fast mode only, with **Zero Data Retention** on by default; other modes bill normally. Promo + default-switch note.
