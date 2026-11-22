---
title: vLLM FlyDSL MonoKernels for high-interactivity decode
slug: vllm-flydsl-monokernels
description: >-
  vLLM’s blog explains FlyDSL MonoKernels that cut interactive decode latency on
  AMD Instinct by fusing dependent operator stages into single GPU launches.
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - FlyDSL
  - AMD
  - decode
author: Editors
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-18-flydsl-monokernels'
sourceLevel: A
publisher: vllm
faqs:
  - question: What is a MonoKernel?
    answer: >-
      Multiple dependent operator stages inside one GPU kernel launch with an
      explicit schedule—mono means one execution boundary, not the whole model
      in one kernel.
draft: false
candidateId: vllm-blog-2026-11-18-ce01adc1aa
---
vLLM’s *Keeping Agents Fast* post targets interactive **decode**: at small batches many kernels do little work but still pay launch costs, and kernel boundaries limit overlap. It introduces **FlyDSL MonoKernels** integrated with vLLM on **AMD Instinct** GPUs to cut decode latency.

A MonoKernel packs dependent operator stages into **one** launch with an explicit schedule rather than launching at every boundary; a mono-decode path can contain several MonoKernels. Implementations use TileRT-inspired persistent launches. Perf and accuracy live in the original figures.

For engine readers, this is kernel fusion/scheduling—not a model release.
