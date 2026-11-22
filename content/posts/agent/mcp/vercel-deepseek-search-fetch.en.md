---
title: Vercel AI Gateway adds DeepSeek Search and Fetch tools
slug: vercel-deepseek-search-fetch
description: >-
  Vercel Changelog: DeepSeek Search and Fetch are available via AI Gateway with
  one API key for any tool-calling model—no separate DeepSeek account required.
date: '2026-11-06'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - Vercel
  - DeepSeek
  - AI Gateway
  - tool calling
author: Editorial
locale: en
sourceUrls:
  - >-
    https://vercel.com/changelog/ai-gateway-adds-deepseek-search-and-fetch-tools
sourceLevel: A
publisher: vercel
faqs:
  - question: Do you need a DeepSeek account?
    answer: No. One AI Gateway API key is enough, and the tools stay when you switch model providers.
  - question: Which AI SDK versions?
    answer: AI SDK v6 ≥ 6.0.321 or v7 ≥ 7.0.160.
draft: false
candidateId: vercel-2026-11-06-8d6a841a49
---
Vercel’s Changelog adds **DeepSeek Search** and **DeepSeek Fetch** on **AI Gateway**. Search returns relevant pages with titles, URLs, and summaries; Fetch pulls page content as Markdown for the model. Any tool-calling model can use both with **one Gateway API key**—no separate DeepSeek account—and you can keep the same helpers when switching providers.

Requires **AI SDK** v6 ≥ 6.0.321 or v7 ≥ 7.0.160. Set `AI_GATEWAY_API_KEY` and pass `gateway.tools.deepseekSearch` / `deepseekFetch` in `tools` to chain search → fetch → summarize.
