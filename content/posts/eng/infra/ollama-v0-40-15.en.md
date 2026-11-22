---
title: 'Ollama v0.40.15: Claude/Codex launch fixes and OpenAI sampler defaults'
slug: ollama-v0-40-15
description: >-
  Ollama v0.40.15 improves Claude Code and Codex launch paths, cloud web-search
  decoding, and OpenAI-compatible endpoints so unset sampler params keep model
  defaults.
date: '2026-11-06'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Ollama
  - llama.cpp
  - local inference
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/ollama/ollama/releases/tag/v0.40.15'
sourceLevel: A
publisher: ollama
faqs:
  - question: What changed for OpenAI-compatible endpoints?
    answer: >-
      If clients omit temperature/top_p, Ollama now uses the model’s packaged
      defaults instead of forcing 1.0—matching /api/chat.
  - question: Other highlights?
    answer: >-
      Claude launch respects output token limits; cloud search decoding; ChatGPT
      disconnect retries; Codex routing checks; MLX and llama.cpp bumps.
draft: false
candidateId: ollama-releases-2026-11-06-699ab745e0
---
Ollama tagged **v0.40.15** (after earlier RCs). Public notes include: `ollama launch claude` applies the model’s output token limit so cloud models avoid the 128k default cap; `/api/chat` correctly decodes cloud web-search responses (including compression); **OpenAI-compatible endpoints** no longer override packaged sampler defaults when clients omit `temperature` / `top_p` (aligned with `/api/chat`); the app can retry ChatGPT disconnects; `ollama launch codex` verifies ChatGPT routing before configure. MLX and llama.cpp are updated. Prefer the GitHub release body for the full list.
