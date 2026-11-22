---
title: OpenAI details chip-design gains with models, AMD, and Synopsys
slug: openai-chip-design
description: >-
  OpenAI: Jalapeño vector/matrix standard-cell area ~−13%/−10%; up to ~14% PPA
  on AMD flagship GPU IP vs strong baselines; GPT-6.2 Astra leads RISC-V evals;
  GPT-Synopsys for EDA tools in progress.
date: '2026-11-18'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - OpenAI
  - Chip Design
  - AMD
  - Synopsys
author: Editorial
locale: en
sourceUrls:
  - 'https://openai.com/index/advancing-chip-design-with-our-models'
sourceLevel: A
publisher: openai
faqs:
  - question: Production-side numbers?
    answer: Jalapeño vector/matrix standard-cell area ~−13%/−10% (silicon-proven); AMD flagship GPU IP up to ~14% PPA vs heavily optimized baselines, some changes already taped out.
  - question: What’s next?
    answer: Partnering with Synopsys to train GPT-Synopsys to drive EDA tools the way expert designers do.
draft: false
candidateId: openai-2026-11-18-c7d3ecb006
---
OpenAI (**18 Nov 2026**) digs into chip-design work with frontier models. On its **Jalapeño** inference chip, model-proposed changes cut standard-cell area by about **13%** in the vector unit and **10%** in the matrix unit (silicon-proven). With **AMD**, it cites up to about **14%** PPA versus heavily optimized baselines on flagship GPU IP—some rewrites already in a recent tape-out / production files—plus single-digit gains on blocks of the next flagship CPU (AMD-verified).

On open **PicoRV32** and **Ibex** RISC-V throughput evals, **GPT-6.2 Astra** leads at a comparable ~**112k**-token budget; designing from a written spec often scores higher than editing existing RTL. Next: train **GPT-Synopsys** with Synopsys so models use the EDA tools engineers already run. Capability-and-partnership narrative—treat PPA figures as vendor/partner claims.
