---
title: LlamaIndex details OCRia’s ~10× B200 inference stack
slug: llamaindex-ocria-inference-stack
description: >-
  LlamaIndex: mixed-precision quantization, DFlash2 speculative decoding, and
  ReplaySSM on GDN layers lift OCRia-1 from ~285 to ~2800 tok/s on one B200
  (vendor measurement).
date: '2026-11-04'
updated: '2026-11-23'
category: eng
subcategory: infra
tags:
  - LlamaIndex
  - OCRia
  - Inference
  - vLLM
author: Editorial
locale: en
sourceUrls:
  - 'https://www.llamaindex.ai/blog/the-inference-stack-behind-ocria'
  - 'https://www.llamaindex.ai/blog/introducing-ocria-1-5'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: What are the main levers?
    answer: Workload-aware mixed quantization, DFlash2 speculative decoding, ReplaySSM on GDN layers, kernel fusion, and CPU metadata sharing.
  - question: Will pieces go upstream?
    answer: The post says generally applicable pieces are planned as vLLM contributions.
draft: false
candidateId: llamaindex-2026-11-23-46a6c2049b
---
LlamaIndex’s engineering post (**4 Nov 2026**) recounts the **OCRia-1** serving bottleneck: dense pages mean long structured outputs, and decode is memory-bandwidth bound. On a single **B200**, they report generation rising from about **285** to about **2800** tok/s—nearly **10×** (vendor measurement).

Levers include activation-aware mixed precision (BF16/FP8/NVFP4, vision encoder left unquantized); **DFlash2** speculative decoding (acceptance claimed above 12 tokens); **ReplaySSM** on Gated Delta Network layers to cut speculative rollback traffic, with a CUDA kernel ~**3.3×** vs Triton; SiLU/quantization fusion; and collapsing per-layer GDN metadata builds into shared CPU-side prep. Smaller kernel tweaks compound on top. Generally useful pieces are slated for **vLLM**; OCRia already powers LlamaParse tiers. This is an inference deep dive—numbers are workload- and hardware-specific.
