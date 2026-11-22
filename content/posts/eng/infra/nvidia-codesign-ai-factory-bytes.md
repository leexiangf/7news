---
title: NVIDIA 谈 AI 工厂「每一字节」：五条软硬协同杠杆
slug: nvidia-codesign-ai-factory-bytes
description: >-
  NVFP4、宽 EP、Dynamo KV、Vera CPU、CMX 五条路径；Vera Rubin NVL72 相对 GB300 同 288
  GB/GPU 设定下自称每兆瓦吞吐最高约 30×（AgentX）。
date: '2026-11-05'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - NVFP4
  - Dynamo
  - Vera Rubin
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/five-ways-nvidia-co-design-maximizes-the-value-of-every-byte-in-the-ai-factory/
sourceLevel: A
publisher: nvidia
faqs:
  - question: 五条杠杆是什么？
    answer: NVFP4 低精度、TensorRT-LLM 宽专家并行、Dynamo 舰队级 KV、Vera CPU 承接空闲 KV、CMX pod 级共享 KV。
  - question: 30× 怎么读？
    answer: >-
      SemiAnalysis AgentX 等口径下，Vera Rubin NVL72 相对 GB300 NVL72 每兆瓦吞吐最高约
      30×，同为每 GPU 288 GB——厂商对比，须写清工作负载。
draft: false
candidateId: nvidia-developer-2026-11-05-6823fc9a00
---

NVIDIA Developer Blog（**2026-11-05**）问：HBM 容量代际不变（GB300 → Rubin 仍约 **288 GB/GPU**），Agent 吞吐为何能拉开？答案是**软硬协同**，让每个字节多干有用活，而不是多堆容量。

## 五条杠杆

| # | 杠杆 | 去掉的浪费 |
| --- | --- | --- |
| 1 | **NVFP4** | 权重大小：相对 FP16 / FP8 约 **3.5× / 1.8×**；KV 相对 FP8 最高约减半 |
| 2 | **宽专家并行**（TensorRT-LLM） | 冗余权重副本：专家铺到 8+ GPU，腾 HBM 给 KV / batch |
| 3 | **Dynamo** | 重复 prefill：KV 感知路由、分离 serving、KVCR 跨 GPU/CPU/存储（NIXL） |
| 4 | **Vera CPU** | 工具调用间隙的闲置常驻：88 Olympus 核、最高约 **1.5 TB** LPDDR5X，NVLink-C2C **1.8 TB/s** |
| 5 | **CMX** | 跨节点重复上下文：BlueField-4 STX 上的 pod 级 G3.5 KV 存储层 |

文中称合用后，**Vera Rubin NVL72** 相对 **GB300 NVL72** 在 SemiAnalysis AgentX（含真实工具调用间隙与增长上下文）上可达每兆瓦最高约 **30×** 吞吐（例：约 160 tok/s/user 设定）——同 288 GB/GPU。CMX 另称相对传统存储长上下文推理最高约 **5×** token/s 与能效。

## 怎么引用

这是架构叙事 + 厂商基准拼盘，不是单一 changelog。平台组可按「精度 → 专家放置 → KV 舰队 → CPU 暖层 → pod 存储」对照自家栈；引用 30× 必须写清 AgentX / 同容量设定，勿当成任意工作负载承诺。
