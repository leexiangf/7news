---
title: vLLM × TPU v7：0.6B 稠密模型 RL 整步从约 100 分钟压到约 56 秒
slug: vllm-rl-0-6b-tpu-v7
description: >-
  Meta/ASA 与 vLLM 等开源栈协同：64 芯 TPU v7 上 Qwen3-0.6B GRPO 完整 rollout-to-update
  约 56 秒（~183K tok/s），相对未调优约快 107×；改动已上游。
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - TPU
  - RL
  - GRPO
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-12-rl-small-dense-tpu-v7'
sourceLevel: S
publisher: vllm
faqs:
  - question: 测的是什么负载？
    answer: Qwen3-0.6B 上 GRPO，每步 256×8=2048 条补全、响应上限 8192 token；公开数学题作代理，非 Meta 生产广告数据。
  - question: 如何复现？
    answer: 文中指向已合并的 tpu-recipes 与附录 B 开关；改动分散在 vLLM、Tunix、MaxText、Pallas 等开源路径。
draft: false
candidateId: vllm-blog-2026-11-12-7c1afea3ce
---
vLLM 博客（Meta ASA / Ranking AI 等作者）描述在 **Google Cloud TPU v7**（64 芯）上做 **0.6B 稠密**策略模型的强化学习：当矩阵算力变小，decode 调度、同步、注意力几何与 KV-cache 生命周期变成一阶瓶颈。公开代理负载为 **Qwen3-0.6B + GRPO**（256 prompts × 8 generations、响应上限 **8,192** token），用公开数学题近似生产侧长推理生成几何。

完整 rollout-to-update：未调优约 **~100 分钟 / ~4K tok/s**，最终配置最快稳态约 **56 秒**、解码吞吐约 **~183K tok/s**（文中称约 **107×**），rollout 仍占大头。路径含 Continue Decode、RPA block split、连续批解码、分片采样、奖励池与 packing 等，并与 Tunix / MaxText / Pallas 共设计后**上游**；复现见 `tpu-recipes` PR 与附录 B。数字为作者自测稳态（含 p10/中位说明）。
