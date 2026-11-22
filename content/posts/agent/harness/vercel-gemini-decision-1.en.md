---
title: Gemini Decision 1 lands on Vercel AI Gateway
slug: vercel-gemini-decision-1
description: >-
  Vercel Changelog: multimodal google/gemini-decision-1 returns Boolean
  probabilities, choices, and scores for routing and policy checks—no generation
  tokens.
date: '2026-11-11'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Gemini
  - AI Gateway
  - Decision
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/changelog/gemini-decision-1-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: Model id?
    answer: google/gemini-decision-1 via AI SDK, TypeSafe-compatible API, or Decisions API.
  - question: Modality limits?
    answer: PDF, audio, and video need AI SDK 7; TypeSafe and Decisions APIs currently support text and image.
draft: false
candidateId: vercel-2026-11-11-ce36778b27
---
Vercel’s Changelog adds Google’s **Gemini Decision 1** to **AI Gateway**. The multimodal decision model takes text, images, audio, video, and PDFs and returns **Boolean probabilities, choices, and scores**—for request routing, policy checks, agent-tool filtering, or ranking—**without emitting ordinary generation tokens**.

Call `google/gemini-decision-1` through the **AI SDK** (`experimental_decide`), a TypeSafe-compatible API, or the Decisions API. **PDF / audio / video** need **AI SDK 7**; TypeSafe and Decisions paths currently cover text and image. Decision calls show up in Gateway logs and count toward budgets like other model traffic. Choice, Score, and Boolean question types are documented in Vercel’s decision guides and model catalog.
