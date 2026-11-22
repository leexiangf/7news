---
title: 'vLLM on TPU v7: 0.6B dense RL cycle ~100 min → ~56 s'
slug: vllm-rl-0-6b-tpu-v7
description: >-
  Meta ASA + open TPU stack: Qwen3-0.6B GRPO on 64-chip TPU v7 hits ~56 s
  rollout-to-update (~183K tok/s), ~107× vs untuned; changes upstreamed.
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - TPU
  - RL
  - GRPO
author: Editorial
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-12-rl-small-dense-tpu-v7'
sourceLevel: S
publisher: vllm
faqs:
  - question: What workload?
    answer: Qwen3-0.6B GRPO with 256×8=2,048 completions/step and 8,192-token responses—public math prompts as a proxy, not Meta ads data.
  - question: How to reproduce?
    answer: Merged tpu-recipes plus Appendix B flags; changes span vLLM, Tunix, MaxText, Pallas, and related open paths.
draft: false
candidateId: vllm-blog-2026-11-12-7c1afea3ce
---
A vLLM blog (Meta ASA / Ranking AI co-authors) shows why **small dense RL** on **Google Cloud TPU v7** (64 chips) is coordination-bound: with less matrix work per layer, decode scheduling, sync, attention geometry, and KV-cache lifecycle dominate. The public proxy is **Qwen3-0.6B GRPO** (256 prompts × 8 generations, **8,192**-token response cap) on open math prompts that mirror long generative-ranking traces.

Full rollout-to-update falls from roughly **~100 minutes / ~4K tok/s** untuned to about **56 seconds** fastest steady-state with ~**183K tok/s** decode throughput (~**107×**), rollout still the bulk of the step. Milestones include Continue Decode, RPA block split, continuous-batching decode, sharded sampling, reward pools, and packing, co-designed across Tunix / MaxText / Pallas and **upstreamed**; reproduce via the merged `tpu-recipes` PR and Appendix B. Figures are author steady-state measurements (with p10/median notes).
