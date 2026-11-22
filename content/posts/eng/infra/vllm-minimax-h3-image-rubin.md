---
title: vLLM-Omni 日零支持 MiniMax H3-Image：Rubin 上 4K 中位 0.87 秒
slug: vllm-minimax-h3-image-rubin
description: >-
  vLLM：H3-Image 在 Vera Rubin 四卡短提示基准中位 0.87s 出原生 4K；另测吞吐约 6115
  图/小时；并覆盖多厂商 GPU/NPU。
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - MiniMax
  - H3-Image
  - Rubin
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-12-minimax-h3-image-rubin'
sourceLevel: S
publisher: vllm
faqs:
  - question: 模型能做什么？
    answer: 开源权重文生图与图编辑，单检查点约六步采样，原生高分辨率，最多 16 张参考图。
  - question: 营收估算怎么理解？
    answer: 文中按 MiniMax 官方 Standard 4K API 单价外推满载毛收入，未扣运营成本；属假设演算。
draft: false
candidateId: vllm-blog-2026-11-12-a2822971e9
---
vLLM 博客宣布经 **vLLM-Omni** 在 **NVIDIA Vera Rubin** 上日零支持开源 **MiniMax H3-Image**。短提示服务基准称四卡原生 **4096×4096** 生成中位 **0.87 秒**；另一吞吐配置约 **6,115 图/小时**（外推约 **14.7 万图/日**）。按 MiniMax 官方 Standard 4K API 示例价 **$0.06879/图** 作假设售价，满载毛收入约 **$105/GPU/小时**（75% 利用率约 **$79**），**未计运营成本**。

H3-Image 单检查点覆盖文生图与编辑、约六步采样、无需升采样器即可原生高分辨率，最多 **16** 张参考。文中还给出多卡/单卡（含 RTX）与 NVIDIA/AMD/Intel/摩尔线程/昇腾等平台延迟对照；GB300 四卡 4K 文生图平均约 **1.48 秒**。数字均为官方自测。
