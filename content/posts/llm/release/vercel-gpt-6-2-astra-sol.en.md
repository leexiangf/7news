---
title: OpenAI GPT-6.2 Astra and Sol land on Vercel AI Gateway
slug: vercel-gpt-6-2-astra-sol
description: >-
  Vercel Changelog: openai/gpt-6.2-astra and openai/gpt-6.2-sol on AI Gateway
  with Responses, fast mode, and Ultrafast (service_tier ultrafast); Astra
  Ultrafast output cited ~60% below GPT-6 Astra.
date: '2026-11-17'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Vercel
  - OpenAI
  - GPT-6.2
  - AI Gateway
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/changelog/gpt-6-2-astra-and-sol-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: Model ids?
    answer: openai/gpt-6.2-astra and openai/gpt-6.2-sol via AI SDK, Codex/fx setup, Chat Completions, and Responses.
  - question: Ultrafast?
    answer: Set providerOptions.openai.serviceTier or service_tier to ultrafast; Changelog cites Astra Ultrafast output ~60% below GPT-6 Astra.
draft: false
candidateId: vercel-2026-11-17-bd90ff8837
---
Vercel’s Changelog (**17 Nov 2026**) adds OpenAI’s **GPT-6.2 Astra** and **GPT-6.2 Sol** to **AI Gateway** as `openai/gpt-6.2-astra` and `openai/gpt-6.2-sol`. Astra is framed for complex multi-step projects—implementing and testing changes in existing codebases, document templates, and computer use. Sol covers everyday coding, writing, and agents, including interactive web apps from a brief.

Both support the Responses API, plus **fast mode** and OpenAI’s **Ultrafast** tier (`providerOptions.openai.serviceTier: 'ultrafast'` in the AI SDK, or `service_tier` on Chat Completions/Responses). The Changelog says Astra’s Ultrafast **output** price is about **60%** lower than GPT-6 Astra’s. Point coding agents at them with `npx vercel ai-gateway setup`. This is a **Gateway availability** note; benches and full pricing live in OpenAI’s launch post.
