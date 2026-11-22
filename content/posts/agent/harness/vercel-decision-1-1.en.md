---
title: Microsoft Decision-1.1 lands on Vercel AI Gateway
slug: vercel-decision-1-1
description: >-
  Vercel Changelog: microsoft/decision-1.1—more accurate, better calibrated, and
  faster than Decision-1; Boolean/Choice/Score structured answers; same request
  shape; AI SDK ≥7.0.128.
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Microsoft
  - Decision
  - AI Gateway
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/changelog/decision-1-1-now-available-on-ai-gateway'
sourceLevel: A
publisher: vercel
faqs:
  - question: Model id and migration?
    answer: microsoft/decision-1.1; same request format as Decision-1—change the id.
  - question: SDK floor?
    answer: TypeScript ai ≥7.0.128 experimental_decide, or OpenAI Python SDK ≥3.26.0 Decisions API.
draft: false
candidateId: vercel-2026-11-17-ea2cc6d3ea
---
Vercel’s Changelog (**17 Nov 2026**) adds Microsoft AI’s **Decision-1.1** to **AI Gateway** as `microsoft/decision-1.1`. Versus **Decision-1**, it is framed as more accurate, better calibrated, and faster for routing support tickets, picking a model, choosing the next workflow step, or grading answers—returning structured **Boolean**, **Choice**, and **Score** answers instead of free text, with multiple questions on one input.

Request shape matches Decision-1. Call it via the AI SDK (`experimental_decide`, **ai ≥7.0.128**), the OpenAI-compatible Decisions API (Python SDK **≥3.26.0**), or the AI CLI; requests hit logs and budgets and support decision fallbacks. This is a **Gateway availability** note; Foundry GA details sit with Microsoft.
