---
title: Ollama 0.40.17 adds Inkling 2 Mini and Apple Silicon concurrency
slug: ollama-0-40-17
description: >-
  Ollama v0.40.17 ships Thinking Machines’ Inkling 2 Mini (~26B/5.4B active) and
  concurrent multi-request serving on Apple silicon; Inkling is Apple-only in
  this release.
date: '2026-11-21'
updated: '2026-11-22'
category: eng
subcategory: infra
tags:
  - Ollama
  - Inkling
  - Local Inference
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/ollama/ollama/releases/tag/v0.40.17'
sourceLevel: A
publisher: ollama
faqs:
  - question: Inkling 2 Mini?
    answer: ~26B params / 5.4B active; multimodal, tools, thinking; ~20GB on a Mac; ~79.2% SWE-Bench Verified—vendor figures.
  - question: PC support?
    answer: Apple silicon only in this release; PC support is promised later.
draft: false
candidateId: ollama-releases-2026-11-21-6dc7986520
---
Ollama released **v0.40.17** (stable tag dated **21 Nov 2026** in the crawl pool). Headline model: **Inkling 2 Mini** from Thinking Machines—about **26B** parameters with **5.4B** active via looped layers; the notes cite ~**20GB** on a Mac, text/image, tools, and thinking, plus ~**79.2%** on SWE-Bench Verified (vendor claim). Run with `ollama run inkling-2-mini`. **Apple silicon only** in this build; PC support is deferred.

Also: Apple silicon now serves **multiple requests at once**; `ollama launch claude` supports Claude Code deferred MCP tool loading; Vulkan/Windows iGPU KV and tool JSON-schema retention fixes land too. Same-day RCs are skipped. Local-runtime point release plus a new model.
