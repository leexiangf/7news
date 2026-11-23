---
title: OpenAI’s chief scientist pushes perplexity as a shared pretraining yardstick
slug: openai-perplexity-and-intelligence
description: >-
  OpenAI Chief Scientist Jakub Pachocki (22 Nov 2026) argues for perplexity
  (cross-entropy) as a cross-lab progress metric, shares internal curves, and
  proposes joint caps until monitoring milestones land.
date: '2026-11-22'
updated: '2026-11-23'
category: llm
subcategory: eval
tags:
  - OpenAI
  - Perplexity
  - Safety
  - Pretraining
author: Editorial
locale: en
sourceUrls:
  - 'https://openai.com/index/perplexity-and-intelligence'
sourceLevel: S
publisher: openai
faqs:
  - question: What is the proposal?
    answer: Track pretraining compressor quality with perplexity (or cross-entropy) as a comparable industry metric, and set shared development caps until monitoring capability hits concrete milestones.
  - question: Which figures does the post cite?
    answer: >-
      On OpenAI’s internal main hold-out, GPT-3.5 is ~0.99 log-perplexity and
      GPT-4 ~0.91; sub-~0.8 coincides with claimed cyber/math leaps; ~0.68–0.7 is
      the next extrapolated window. All figures are vendor-reported.
draft: false
candidateId: openai-2026-11-20-de5cd1a6d5
---
OpenAI Chief Scientist Jakub Pachocki (**22 Nov 2026**) published *Perplexity and Intelligence*, framing pretraining as building a better compressor/predictor and arguing that **perplexity** (equivalently cross-entropy loss) should become a shared yardstick across labs. The post also opens more of OpenAI’s internal curve and calls for joint safety pacing.

He separates the hard-to-forecast “intelligence substrate” of large-scale compression from later elicitation via prompting, finetuning, or RL. Downstream benchmarks churn; a loss curve on a fixed hold-out, he argues, stays informative. Vendor-reported landmarks on the main hold-out (an OpenAI codebase snapshot used since GPT-3.5): GPT-3.5 near **0.99** log-perplexity, GPT-4 near **0.91**. Losses below ~**0.8** accompany claimed cyber and math leaps; ~**0.76** is tied to breakthrough math answers in their evaluation threads. He extrapolates a ~**0.68–0.7** window for further latent abilities today’s suites may not yet probe.

On governance, he wants frontier developers to agree on evaluation and red-team norms before first use of such models, and proposes **shared caps** keyed to perplexity (and related measures) that labs would not cross until monitoring hits concrete milestones—such as a successor to chain-of-thought monitors. Limits he lists: cross-lab dataset mismatch, weak direct task mapping, post-training gains (notably CoT) that need not lower perplexity, and an unknown entropy floor. This is a metric-and-governance essay—not a product launch; the numbers depend on OpenAI’s chosen evaluation set.
