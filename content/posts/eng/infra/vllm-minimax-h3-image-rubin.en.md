---
title: 'vLLM-Omni day-0 for MiniMax H3-Image: 4K in 0.87s on Vera Rubin'
slug: vllm-minimax-h3-image-rubin
description: >-
  vLLM: H3-Image hits 0.87s median native 4K on four Vera Rubin GPUs in a short
  prompt bench; another config ~6,115 images/hour across multi-vendor hardware.
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - MiniMax
  - H3-Image
  - Rubin
author: Editorial
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-12-minimax-h3-image-rubin'
sourceLevel: S
publisher: vllm
faqs:
  - question: What can the model do?
    answer: Open-weight text-to-image and edit in one checkpoint (~six steps), native high-res, up to 16 references.
  - question: How to read the revenue math?
    answer: Extrapolates MiniMax’s Standard 4K API list price at full billable utilization—before opex.
draft: false
candidateId: vllm-blog-2026-11-12-a2822971e9
---
vLLM’s blog announces day-0 **MiniMax H3-Image** serving via **vLLM-Omni** on **NVIDIA Vera Rubin**. In a short-prompt serving benchmark, four GPUs hit **0.87s median** for native **4096×4096** generation; a separate throughput setup reaches about **6,115 images/hour** (~**146,755/day** extrapolated). Using MiniMax’s Standard 4K API example price of **$0.06879/image** as an assumed sale price, peak gross revenue projects to about **$105/GPU/hour** at full utilization (**~$79** at 75%)—**before operating costs**.

H3-Image is an open-weight checkpoint for text-to-image and editing in roughly six sampling steps, native high resolution without an upscaler, and up to **16** reference images. The post also compares consumer and data-center stacks across NVIDIA, AMD, Intel, Moore Threads, and Ascend, including ~**1.48s** average 4K text-to-image on four GB300s. Figures are vendor measurements.
