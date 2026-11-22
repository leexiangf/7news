---
title: NVIDIA DAQIRI：科学仪器高带宽数据直送 GPU，边采边推理
slug: nvidia-daqiri-scientific-instruments
description: >-
  Holoscan 采集库 DAQIRI：伯克利分子铸造厂 HDR 电镜相机超 500 Gbps 直入 GPU；新增硬件包重排、ibverbs 约
  2× 吞吐、直轮询约 2–4 µs 延迟。
date: '2026-11-19'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - DAQIRI
  - Holoscan
  - 科学计算
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/enabling-real-time-ai-for-scientific-instruments-with-gpu-native-data-acquisition/
sourceLevel: A
publisher: nvidia
faqs:
  - question: DAQIRI 是什么？
    answer: Holoscan 上的软件定义数据采集库，把仪器高带宽数据导入 GPU 工作流，可在落盘前边采集边处理。
  - question: 本篇新增什么？
    answer: ConnectX-7+ 硬件包重排；ibverbs 引擎小包吞吐约翻倍；direct polling 环回延迟约 2–4 µs。
draft: false
candidateId: nvidia-developer-2026-11-19-641b5194ac
---

NVIDIA 技术博客（**2026-11-19**）继续写科学仪器上的实时 AI：核心是 **DAQIRI**——Holoscan 上的软件定义采集库，把传感器数据直接送进 GPU，不必先落盘再处理。

## 案例：分子铸造厂 HDR 电镜

劳伦斯伯克利国家实验室分子铸造厂的高动态范围电子显微镜相机，一次拍下强弱信号（传统 EELS 常要两次优化曝光再对齐）。代价是数据率超 **500 Gbps**——约比常规 EELS 流快 **500×**。流水线：FPGA 经以太网发包 → DAQIRI 直收进 GPU 内存 → 组装 / 校正帧 → 压成能量损失谱，并可在采集中调 ROI。计算还把约 **5 µm** 像素信息推到亚微米空间分辨率——厂商与实验室协作叙述。

## 本版三项能力

| 能力 | 要点 |
| --- | --- |
| 硬件包重排 | ConnectX-7+ NIC 按序列号落位，少一次软件重排拷贝 |
| ibverbs 引擎 | 原始以太网收发默认；小包（≤1024 B）单核吞吐相对旧 DPDK 约 **2×**（>200 Gbps 设定，DGX Spark / IGX Thor / RTX PRO 基准） |
| Direct polling | 应用线程直接收发控制队列；环回 send→recv 约 **2–4 µs** |

对科学计算读者：这是「采集栈 GPU 化」工程文，不是消费级模型发布。API、硬件前提与基准以 NVIDIA 文档与 `NVIDIA/daqiri` 仓库为准。
