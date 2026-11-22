---
title: Vercel AI Gateway adds Private Inference for your own endpoints
slug: vercel-ai-gateway-private-inference
description: >-
  Vercel Changelog: fine-tuned, self-hosted, or prerelease models share Gateway
  auth, SDKs, and observability via private/… IDs; optional catalog fallback; CLI
  65.16.0+.
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Vercel
  - AI Gateway
  - Private Inference
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/changelog/ai-gateway-now-supports-private-inference'
sourceLevel: A
publisher: vercel
faqs:
  - question: How to register?
    answer: Add the endpoint on the Private Inference page (base URL, API format, credentials) then models; or vercel ai-gateway private-inference providers/models create (CLI ≥65.16.0).
  - question: Visibility and fallback?
    answer: Team-only, not in the public catalog; encrypted credentials and optional Zero Data Retention; optional fallback to a catalog model.
draft: false
candidateId: vercel-2026-11-16-358edf6171
---
Vercel’s Changelog (**16 Nov 2026**) adds **Private Inference** to **AI Gateway**: wire fine-tuned, self-hosted, or prerelease endpoints into the same auth, SDKs/APIs, and observability as catalog models instead of a parallel key and logging stack.

Call private models through Chat Completions, Responses, or Messages; the Gateway translates to your endpoint’s format, so switching is a model-id change (`private/…`). Only your team can see or invoke them; they stay out of the public catalog. Credentials are encrypted, with optional **Zero Data Retention** per provider. Coding agents on the Gateway (Claude Code, Codex, Cursor, and peers) can pick private models too. Logs, trace drains, and reporting sit beside catalog traffic; optional fallbacks cover endpoint failures.

Start from the Private Inference page or CLI **≥65.16.0** (`vercel ai-gateway private-inference providers|models create`). Supported types, requirements, and billing live in the Private Inference docs.
