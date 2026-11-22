---
title: NVIDIA 稀疏注意力共设计：长上下文成本落在 Indexer，八条 GPU 友好指南
slug: nvidia-sparse-attention-codesign
description: >-
  技术博客说明训进模型的稀疏注意力把全量打分交给 indexer；DeepSeek V3.2 在 128K prefill 时
  indexer+Top-k 可约占一层 47%。给出 KH=1、Hsz 128/256、融合 Top-k、块级选取等八条指南。
date: '2026-11-17'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Sparse Attention
  - Long Context
  - Inference
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/co-designing-sparse-attention-for-efficient-long-context-inference/
sourceLevel: S
publisher: nvidia
faqs:
  - question: 和训后稀疏有何不同？
    answer: 本文只谈训进模型的稀疏注意力，不覆盖 BLASST / MInference / Quest 等训后插入方案。
  - question: 核心结论？
    answer: 核心注意力不再随 N 线性涨，但 indexer 仍扫全上下文；要把算术强度、Top-k 与块级选取一起设计。
draft: false
candidateId: nvidia-developer-2026-11-17-c062b882c9
---

NVIDIA 技术博客（**2026-11-17**）给模型开发者一份**稀疏注意力**共设计指南：每条 query 只 attend 少量 key，核心注意力不再随上下文长度线性膨胀——但选出这些 key 的 **indexer** 仍要扫全量。成本没有消失，只是从 dense softmax **挪到了 indexer**。文中以 DeepSeek V3.2 为例：128K prefill 时，indexer + Top-k 可占一层约 **47%**。

范围明确：只谈**训进模型**的稀疏，不谈 BLASST / MInference / Quest 等训后方案。

## 三段流水线

| 阶段 | 做什么 | 大致随谁缩放 |
| --- | --- | --- |
| Indexer | 给每个 key 打分 | 全上下文长度 |
| Top-k | 留下最高分的 k 个 | 与打分 key 数强相关 |
| Core attention | 只在选出的 k 上做 softmax | 与 k 相关，不再随 N |

## 八条指南（压缩版）

| # | 指南 |
| --- | --- |
| 1 | 保持 **G×(D+1)** 落在约 **200** 行 Tensor Core tile 内（FP16 epilogue 时可到 256） |
| 2 | Indexer epilogue 用 **FP16**；累加也可 FP16（需 QK scale 不炸范围） |
| 3 | **KH=1**，并对 G 个 query head 做跨头归约，只写一条 logit / key |
| 4 | **Hsz = 128 或 256**（多数设计落在 128；64 易让 Tensor Core 等 epilogue） |
| 5 | 用压缩 / 分层索引 / 跨层共享 **减少被打分的 key 数** |
| 6 | 把 Top-k 算进 indexer 预算：融合进 kernel；解码复用上一步结果（文中引 Guess-Verify-Refine 约 **2.1–2.4×**） |
| 7 | 优先**大块**块级选取，便于批量取 KV、跨 query 共享 |
| 8 | 核心注意力用较大 group size，让多 query head 共享 KV head |

开源指针：TensorRT-LLM 的 fused Top-k / Guess-Verify-Refine，以及 FlashInfer 的 selective Top-k。属**工程白皮书**，不是产品发版——落地时仍要用自家模型与内核复测算术强度与墙钟占比。
