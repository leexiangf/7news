---
title: Ollama v0.40.16 adds Ripple Preview, Claude routing fixes, CUDA 13.5 on Windows ARM
slug: ollama-v0-40-16
description: >-
  Ollama v0.40.16 ships Ripple Preview (65B agentic coding), makes ollama launch
  claude always hit the selected model, and tightens Responses truncation,
  empty /v1/models, Qwen3.8 memory, and Windows ARM CUDA 13.5.
date: '2026-11-09'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Ollama
  - Ripple
  - MLX
author: Editorial
locale: en
sourceUrls:
  - 'https://github.com/ollama/ollama/releases/tag/v0.40.16'
sourceLevel: A
publisher: ollama
faqs:
  - question: How to run Ripple Preview?
    answer: '`ollama run ripple-preview`; described as a 65B dense agentic-coding model from Ricursive Intelligence.'
  - question: Versus v0.40.15?
    answer: >-
      Public notes emphasize Ripple, Claude launch routing, retired cloud-model
      messaging, truncation/empty-models semantics, llama.cpp, and CUDA 13.5 on
      Windows ARM—see the compare link for the full diff.
draft: false
candidateId: ollama-releases-2026-11-09-e01056c942
---

Ollama tagged **v0.40.16** (Published **9 Nov 2026**). Treat the [GitHub release body](https://github.com/ollama/ollama/releases/tag/v0.40.16) as source of truth—earlier secondary summaries do not always match what landed.

## Changes users will hit first

| Change | Meaning |
| --- | --- |
| **Ripple Preview** | Ricursive Intelligence **65B** dense for agentic coding; `ollama run ripple-preview` |
| `ollama launch claude` | **Always** routes Claude Code to the currently selected model |
| Retired cloud models | `ollama launch` explains retirement instead of failing silently |
| `/v1/responses` | Honors `truncation`; no longer silently truncates by default |
| `/v1/models` | Returns an **empty list**, not `null`, when nothing is installed |
| Apple silicon memory | Qwen3.8 Flash Next uses ~**27 GiB** less (vendor) |
| Windows on ARM | **CUDA 13.5** support; llama.cpp updated |

For local toolchains, the protocol tweaks often matter more than the new model name: Responses truncation defaults, and clients that treated `null` from `/v1/models` as “uninitialized,” will change behavior on empty machines.

## Upgrade checks

1. Read the [Full Changelog](https://github.com/ollama/ollama/compare/v0.40.15...v0.40.16).  
2. If scripts parse `/v1/models`, accept `[]`.  
3. Claude Code + `ollama launch` setups should verify traffic hits the **selected** model.  
4. Windows ARM + CUDA users confirm the 13.5 channel.

Point releases mix previews with protocol patches—treat Ripple as optional, and truncation / models / Claude routing as required regression.
