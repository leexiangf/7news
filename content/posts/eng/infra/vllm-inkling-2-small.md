---
title: vLLM 日零支持 Inkling 2 Small：594B MoE、混精与 DSpark
slug: vllm-inkling-2-small
description: >-
  vLLM：Thinking Machines Inkling 2 Small（约 594B 总参/17B 激活、1M
  上下文）日零上线；NVFP4+MXFP8 混精 MoE、原生 DSpark，GB200 TP4 称最高约 630 TPS/user。
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - Inkling
  - Thinking Machines
  - MoE
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-12-inkling2-small'
sourceLevel: S
publisher: vllm
faqs:
  - question: 规模与模态？
    answer: 约 594B 总参、17B 激活、最多 1M 上下文；文本+图像进、文本出（相对前代去掉音频入）。
  - question: 如何起服？
    answer: vllm serve thinkingmachines/Inkling-2-Small，需配置 reasoning/tool parser 与 DSpark speculative-config；亦支持 LoRA 与 SkyRL。
draft: false
candidateId: vllm-blog-2026-11-12-8d207d08ba
---
vLLM 博客宣布日零支持 Thinking Machines **Inkling 2 Small**：多模态 MoE，约 **594B** 总参、**17B** 激活、最多 **1M** 上下文（48 层、384 experts top-8）。相对 Inkling：块注意力残差、attention sink、门控注意力，图像编码器改为 23 层 ViT；MoE 前 40 层 **NVFP4**、后 8 层 **MXFP8**，便于单节点服务。

随检查点附带原生 **DSpark** 推测解码（RNN 头、每步草稿约 7 token）。优化含 kernel fusion、PDL、Gluon attention 与序列并行；在 GB200 **TP4**、接受长度 3.5 时称最高约 **630 TPS/user**。亦支持 LoRA 与经 SkyRL 的 RL。示例 `vllm serve thinkingmachines/Inkling-2-Small` 需挂 Inkling 的 reasoning/tool parser 与 speculative-config。数字为官方自测。
