---
title: 'vLLM EPD: scale multimodal encoders apart from prefill and decode'
slug: vllm-encoder-disaggregation-epd
description: >-
  vLLM’s EPD post covers metadata-only handoff, a dedicated encoder path,
  NIXL/Mooncake remote embeddings, and router orchestration; core pieces land in
  v0.32.0.
date: '2026-11-11'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - EPD
  - Multimodal
  - Inference
author: Editorial
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-11-encoder-disaggregation-epd'
sourceLevel: S
publisher: vllm
faqs:
  - question: What problem does EPD solve?
    answer: Encoder load can scale independently of prefill/decode so LM GPUs are not stuck doing media preprocessing.
  - question: Where does it ship?
    answer: Core capabilities including MiMo/XPU are in vLLM v0.32.0; DeepSeek V4.1 Flash metadata-only support is on main (#62802).
draft: false
candidateId: vllm-blog-2026-11-11-dc0cecf463
---
vLLM’s blog walks through **Encoder / Prefill / Decode (EPD)** disaggregation for multimodal serving: images, video frames, and audio must become embeddings before the language model runs, and encoder demand can swing independently of prefill and decode. Operators can run **E+PD** (separate encoder, combined P/D) or full **E/P/D**.

Five engineering threads: **metadata-only** requests so consumers rebuild placeholders from encoder-published layout fields (e.g. `image_grid_thw`) instead of re-fetching and re-preprocessing media; a **dedicated encoder** path (Model Runner V2, encoder-only CUDA Graphs, less checkpoint I/O); **NIXL / Mooncake** remote embedding transfer; Mooncake Store **reuse across encoders**; and lower orchestration cost via the Python EPD proxy plus **vLLM Router / SMG / llm-d**. An audio MMAU evaluation (Qwen3-Omni setup) reports throughput about **62.21→73.13 req/s** and mean latency **980→853 ms**—comparing two audio input paths inside EPD. Tracker: issue #52409. Figures are vendor measurements.
