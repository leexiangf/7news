---
title: LlamaIndex 披露 OCRia 推理栈：单卡 B200 吞吐约提升近 10 倍
slug: llamaindex-ocria-inference-stack
description: >-
  LlamaIndex：OCRia-1 上通过混合量化、DFlash2 推测解码与 ReplaySSM 等，将单 B200 生成吞吐自约 285
  tok/s 提到约 2800 tok/s（厂商自测）。
date: '2026-11-04'
updated: '2026-11-23'
category: eng
subcategory: infra
tags:
  - LlamaIndex
  - OCRia
  - Inference
  - vLLM
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.llamaindex.ai/blog/the-inference-stack-behind-ocria'
  - 'https://www.llamaindex.ai/blog/introducing-ocria-1-5'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: 主要手段有哪些？
    answer: 工作负载感知混合量化、DFlash2 推测解码、GDN 层 ReplaySSM、内核融合与 CPU 侧元数据去重。
  - question: 会回馈社区吗？
    answer: 通稿称通用优化计划贡献回 vLLM。
draft: false
candidateId: llamaindex-2026-11-23-46a6c2049b
---
LlamaIndex 工程文（**2026-11-04**）回顾 **OCRia-1** 上线时的推理瓶颈：文档解析偏长输出，decode 受内存带宽限制。团队称在单块 **B200** 上将生成吞吐从约 **285** tok/s 提到约 **2800** tok/s（近 **10×**，厂商自测）。

路径包括：激活感知混合精度量化（BF16/FP8/NVFP4，视觉编码器不量化）；**DFlash2** 推测解码（接受率称超 12 token）；针对 Gated Delta Network 层的 **ReplaySSM**，降低推测回滚时的状态搬运，CUDA 内核相对 Triton 约 **3.3×**；SiLU/量化融合；GDN 元数据从「每层重建」改为共享构建。另堆叠十余项微优化。通用部分计划回馈 **vLLM**；OCRia 已在 LlamaParse 各档使用。这是推理工程深挖，数字依赖其负载与硬件。
