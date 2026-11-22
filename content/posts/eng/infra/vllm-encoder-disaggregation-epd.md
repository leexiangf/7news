---
title: vLLM EPD：把多模态 Encoder 与 Prefill/Decode 拆开扩缩
slug: vllm-encoder-disaggregation-epd
description: >-
  vLLM 博客详解 Encoder/Prefill/Decode 解耦：metadata-only 请求、独立 Encoder 执行路径、NIXL/Mooncake
  远程嵌入与路由编排；核心能力已进 v0.32.0。
date: '2026-11-11'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - EPD
  - 多模态
  - 推理
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-11-encoder-disaggregation-epd'
sourceLevel: S
publisher: vllm
faqs:
  - question: EPD 解决什么？
    answer: 多模态编码负载可独立于 prefill/decode 扩缩，避免在语言模型 GPU 上重复挤占编码算力。
  - question: 版本落点？
    answer: 文中称含 MiMo/XPU 等核心能力已在 vLLM v0.32.0；DeepSeek V4.1 Flash 的 metadata-only 支持在 main（#62802）。
draft: false
candidateId: vllm-blog-2026-11-11-dc0cecf463
---
vLLM 博客梳理多模态服务的 **Encoder / Prefill / Decode（EPD）** 解耦：图像、视频帧与音频需先编码为嵌入，再进入语言模型；编码需求可与 prefill/decode 不同步变化。部署可做 **E+PD**（独立 Encoder + 合并 P/D）或完整 **E/P/D**。

五项工程重点：**metadata-only** 请求让下游用编码器已算好的布局元数据（如 `image_grid_thw`）重建占位，避免再拉原媒体做预处理；**独立 Encoder 执行**（Model Runner V2、encoder-only CUDA Graph、减 checkpoint I/O）；经 **NIXL / Mooncake** 做远程嵌入传输；Mooncake Store **跨 Encoder 复用**输出；以及 Python EPD 代理与 **vLLM Router / SMG / llm-d** 降低编排开销。音频路径评测（MMAU、Qwen3-Omni 等配置）称吞吐约 **62.21→73.13 req/s**、平均延迟 **980→853 ms**（同属 EPD 内两条输入路径对比）。跟踪见 issue #52409；数字为官方自测。
