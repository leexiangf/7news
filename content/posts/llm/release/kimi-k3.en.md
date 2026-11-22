---
title: Moonshot launches Kimi K3, an open 2.8T-class frontier model
slug: kimi-k3
description: >-
  Moonshot’s Kimi K3 is a 2.8T-parameter model with native vision and a
  1M-token context, built on KDA and Attention Residuals; products and API are
  live while weights follow the official schedule.
date: '2026-11-07'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Kimi
  - Moonshot
  - open source
  - long context
author: Editorial
locale: en
sourceUrls:
  - 'https://www.kimi.com/en/blog/kimi-k3'
sourceLevel: S
publisher: moonshot
faqs:
  - question: Scale and context?
    answer: >-
      The post cites 2.8T parameters, native vision, and a 1-million-token
      context, framed as the first open 3T-class model.
  - question: When are weights public?
    answer: >-
      Full weights and a tech report follow Moonshot’s stated schedule alongside
      inference-partner alignment; treat official channels as source of truth.
draft: false
candidateId: moonshot-2026-11-07-af0732b9de
---
Moonshot’s tech blog introduces **Kimi K3** as its most capable model: **2.8T** parameters on **Kimi Delta Attention (KDA)** and **Attention Residuals**, with native vision and a **1-million-token** context—framed as the first open **3T-class** model. It is live on Kimi.com, Kimi Work, Kimi Code, and the API, with max thinking on by default and lower/higher effort modes later.

Architecturally, the post highlights higher MoE sparsity (16 of 896 experts with Stable LatentMoE) and roughly **2.5×** better scaling efficiency versus K2. Capability narratives lean on long-horizon coding, kernel work, compiler building, and vision-mixed engineering. Moonshot says K3 reaches frontier-level results among tested open models while still trailing the strongest proprietary baselines. Full weights and the technical report ship on the official timeline with inference partners—cite Moonshot channels for open-weight availability, not third-party mirrors.
