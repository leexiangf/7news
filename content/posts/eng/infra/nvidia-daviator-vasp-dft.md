---
title: NVIDIA Daviator 批处理 k 点加速 VASP 平面波 DFT
slug: nvidia-daviator-vasp-dft
description: >-
  Daviator 把 VASP 顺序 k 点改为批处理（含批 Davidson）；混合精度约再 2×；自称相对 CPU 最高约 22×
  更快、成本约降 75%；ALCHEMI 微服务 INCAR 开关启用。
date: '2026-11-18'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - VASP
  - DFT
  - HPC
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/tackling-gpu-bottlenecks-in-plane-wave-dft-with-k-point-batching-and-mixed-precision/
sourceLevel: S
publisher: nvidia
faqs:
  - question: 怎么开？
    answer: ALCHEMI VASP 微服务 INCAR 设 LDAVIATOR=True；混合精度再加 LDAVIATOR_MIXED_PRECISION=1；既有输入无需改。
  - question: 数字口径？
    answer: 面向 OMat24 类投影工作负载的自测；随硬件与配置变化。
draft: false
candidateId: nvidia-developer-2026-11-18-b5865e440f
---

NVIDIA 技术博客（**2026-11-18**）介绍 **Daviator**：面向 **VASP** 平面波 DFT 的 GPU 内核库。小体系 + 密 k 网格时，传统「一次一个 k 点」吃不满 GPU；Daviator 用 **k 点 / 自旋批处理**（含批 Davidson 本征求解）把多 k 点捆进同一次核调用，抬占用率。

## 机制：批处理 + 混合精度

| 层 | 作用 |
| --- | --- |
| k 点 / 自旋批 | 多 k 点共享核启动，缓解小问题规模 |
| 批 Davidson | 本征求解同样按批推进 |
| 混合精度 | 敏感步骤留 FP64，其余可用 FP32；高 FP32:FP64 比 GPU（如 RTX PRO 6000）上称端到端再约 **2×** |

## 自测与启用

相对 CPU，投影 **OMat24** 类工作负载自称最高约 **22×** 更快、成本约降 **75%**——厂商口径，随硬件与 INCAR 变。落地经 **NVIDIA ALCHEMI VASP** 微服务：

- `LDAVIATOR=True` 打开批处理路径  
- `LDAVIATOR_MIXED_PRECISION=1` 打开混合精度  
- 既有 POSCAR / 输入可不动  

属 **HPC / 材料模拟**工程文；引用倍速须写清相对 CPU、OMat24 类投影与具体 GPU。
