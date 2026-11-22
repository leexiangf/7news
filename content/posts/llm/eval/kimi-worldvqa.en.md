---
title: 'Kimi WorldVQA: 3,500 questions on whether MLLMs recognize the entity'
slug: kimi-worldvqa
description: >-
  WorldVQA: ~3,500 image-QA pairs across 9 categories with head/tail splits;
  measures MLLM factual correctness; frontier models often under 50% on the
  tail; reports ECE/Slope calibration.
date: '2026-11-20'
updated: '2026-11-21'
category: llm
subcategory: eval
tags:
  - Kimi
  - WorldVQA
  - MLLM
  - eval
author: Editorial
locale: en
sourceUrls:
  - 'https://www.kimi.com/en/blog/worldvqa'
sourceLevel: S
publisher: moonshot
faqs:
  - question: What does it measure?
    answer: Whether the model recognizes the specific entity—or hallucinates from visual patterns; each item has one verifiable answer.
  - question: Scale and result caveats?
    answer: ~3,500 pairs; ~36%/64% CN/EN; long-tail frontier accuracy often under 50% per the authors—vendor eval; reproduce against the suite.
draft: false
candidateId: moonshot-2026-11-20-a5ebe96a1d
---

Moonshot (Kimi) releases **WorldVQA**, a benchmark for **atomic visual world knowledge / factual correctness** in multimodal LLMs. The question is not “can it describe the scene?” but “does it actually recognize this specific entity?”

## Dataset shape

~**3,500** high-quality image–question pairs with multi-stage human verification. Three design principles: **one verifiable answer**, **nine-category encyclopedic coverage**, and an explicit **Head vs Tail** split to watch long-tail decay.

| Stat | Claim |
| --- | --- |
| Chinese / English | ~**1,260 (36%)** / **2,240 (64%)** |
| Easy / Medium / Hard | ~31% / 41% / 28% |
| Category examples | Nature, geography, culture, objects, transport, entertainment, brands, sports, people |

Authors say even frontier models often fall **below 50%** on long-tail visual knowledge—a vendor challenge result; cross-model compares need matching suite versions.

## Calibration: confidence vs accuracy

Beyond accuracy, the post reports **ECE** (ideal 0) and **Slope** (ideal 1.0). Evaluated models show universal **overconfidence**; Kimi-K2.5 leads the cited pair (ECE ~**37.9%**, Slope ~**0.550**) while still far from “honesty.”

Open source: paper arXiv:2602.02537, GitHub `MoonshotAI/WorldVQA`, Hugging Face dataset. Treat WorldVQA as a visual-world-knowledge stress test—not a replacement for general VQA leaderboards; cite source and sampling when quoting scores.
