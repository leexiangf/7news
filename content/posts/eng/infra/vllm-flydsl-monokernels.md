---
title: vLLM FlyDSL MonoKernels：压低交互式 decode 延迟
slug: vllm-flydsl-monokernels
description: >-
  vLLM 博客介绍用 FlyDSL 编写的 MonoKernels，在 AMD Instinct 上缩短交互式 LLM serving 的 decode
  延迟：把多级算子收进单次 kernel launch。
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - FlyDSL
  - AMD
  - decode
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-18-flydsl-monokernels'
sourceLevel: A
publisher: vllm
faqs:
  - question: MonoKernel 是什么？
    answer: >-
      在单次 GPU kernel launch 内组合多个依赖算子阶段，用显式调度减少 launch/边界等待；mono 指单次执行边界，不等于整模一个
      kernel。
draft: false
candidateId: vllm-blog-2026-11-18-ce01adc1aa
---
vLLM 博客 *Keeping Agents Fast* 聚焦交互式 serving 的 **decode** 路径：小 batch 时许多 kernel 实际算量很少，却仍付启动与完成成本，依赖边界还会限制重叠。文章介绍用 **FlyDSL** 编写的 **MonoKernels**，在 **AMD Instinct** GPU 上接入 vLLM，以缩短 decode 延迟。

MonoKernel 把多个依赖算子阶段收进**一次** GPU launch，用显式调度而非每个算子边界各 launch 一次；一条 mono-decode 路径可含多个 MonoKernel。实现受 TileRT 启发，采用 persistent launch：固定网格的线程块跨阶段推进。性能与精度结果见原文图表。

对推理引擎读者：这是 kernel 融合/调度文，不是新模型发布；平台与精度数字以 vLLM 原文为准。
