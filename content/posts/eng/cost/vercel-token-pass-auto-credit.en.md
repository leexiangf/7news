---
title: Vercel Token Pass credit auto-applies on AI Gateway without a dedicated key
slug: vercel-token-pass-auto-credit
description: >-
  Changelog: Token Pass credit automatically covers included AI Gateway model
  usage for API key, OIDC, or fx login. When exhausted, standard keys fall back
  to team Gateway credits; dedicated Token Pass keys stop until the next period.
date: '2026-11-05'
updated: '2026-11-20'
category: eng
subcategory: cost
tags:
  - Vercel
  - AI Gateway
  - Token Pass
  - Billing
author: Editorial
locale: en
sourceUrls:
  - >-
    https://vercel.com/changelog/token-pass-credit-now-applies-automatically-across-ai-gateway
sourceLevel: A
publisher: vercel
faqs:
  - question: Still need a Token Pass-only key?
    answer: No. Standard API key / OIDC / fx login auto-apply credit; dedicated keys remain optional but do not fall back when empty.
  - question: ZDR behavior?
    answer: Token Pass provider traffic stays ZDR; fallback follows the team ZDR setting (team-wide ZDR → ZDR providers only).
draft: false
candidateId: vercel-2026-11-05-1564a9d4f1
---

Vercel’s changelog (page date **6 Nov 2026**; we keep post date **5 Nov 2026**) tightens how **Token Pass** meets **AI Gateway**: Token Pass credit now applies **automatically** to included Gateway model usage—whether the request authenticates with an API key, OIDC token, or fx login. A dedicated Token Pass API key is **no longer required** (you can still create one scoped to featured models/providers).

## What happens when credit runs out

| Auth | After Token Pass credit is exhausted |
| --- | --- |
| Standard API key / OIDC | **Falls back** to team AI Gateway credits |
| Dedicated Token Pass key | **Stops** until the next billing period |

If you created a Token Pass key during setup and want fallback, switch to a standard key or OIDC.

## ZDR bounds

| Traffic | Retention |
| --- | --- |
| Still served via Token Pass providers | Remains **Zero Data Retention** |
| Fallback requests | Follow the **team** ZDR setting; team-wide ZDR routes only to ZDR providers |

Available now for Token Pass subscribers on Pro teams. For platform owners this is a billing-identity simplification—fewer dedicated keys—but docs must spell out **fallback semantics** and the ZDR switch so finance and compliance read the same table.
