---
title: NVIDIA：两台 DGX Station + vLLM 张量并行服务 GLM-5.3 NVFP4
slug: nvidia-glm-53-dual-dgx-vllm
description: >-
  753B MoE（约 464 GB）放不下单卡 GB300（252 GB HBM3e）；ConnectX-8 RDMA + vLLM TP=2；AIPerf
  并发 16 约 607.8 tok/s，并发 32 约 385 tok/s。
date: '2026-11-13'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - DGX
  - vLLM
  - GLM
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/when-one-gpu-isnt-enough-serving-glm-5-3-across-two-nvidia-dgx-stations-with-vllm/
sourceLevel: S
publisher: nvidia
faqs:
  - question: 为何要两台？
    answer: GLM-5.3 NVFP4 约 753B 总参 / 40B 激活，权重约 464 GB，超过单卡 GB300 的 252 GB HBM3e；稀疏激活仍需全权重常驻。
  - question: 吞吐参考？
    answer: SPEED-Bench Coding 上 AIPerf 称并发 16 总输出约 607.8 tok/s；并发 32 约 385 tok/s、平均延迟约 453.5 s。
draft: false
candidateId: nvidia-developer-2026-11-13-dbb6a7059a
---

NVIDIA 技术博客（**2026-11-13**）演示用 **两台 GB300 DGX Station**（**ConnectX-8** RDMA）+ **vLLM** 本地服务 **GLM-5.3 NVFP4**。MoE 总参约 **753B**、每 token 约 **40B** 激活；稀疏激活省算力，但路由仍要求**全部权重常驻**——检查点约 **464 GB**，超过单卡 **252 GB** HBM3e。教程关闭 CPU weight offload。

## 拓扑：TP=2，单端点

| 角色 | 行为 |
| --- | --- |
| Station A（rank 0） | 暴露 OpenAI 兼容 API |
| Station B（rank 1） | 仅 worker，无 API |
| 互联 | ConnectX-8 直连轨；先跑官方「Connect Two DGX Stations」含 GPU 内存 RDMA 测试 |

两卡各持约一半权重与计算；每请求两站都算，A 回答案。前置：每站至少约 464 GB 磁盘放检查点副本；接受 NVIDIA Open Model 与 GLM 许可。

## 压测口径（官方教程环境）

启用多 token 预测、FP8 KV-cache、前缀缓存等。**AIPerf** + SPEED-Bench Coding：

| 并发 | 总输出吞吐 | 平均请求延迟 |
| --- | --- | --- |
| 16 | 约 **607.8 tok/s** | — |
| 32 | 约 **385.0 tok/s** | 约 **453.5 s** |

属 DIY 本机服务教程，不是托管产品发版；数字仅对教程栈与数据集成立。另可与 Snapshot 文对照——大 MoE 冷启仍以分钟计，检查点恢复是另一条加速路径。
