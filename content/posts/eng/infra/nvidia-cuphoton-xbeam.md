---
title: NVIDIA cuPhoton.xBeam：GPU 加速黑洞干涉测量相关运算
slug: nvidia-cuphoton-xbeam
description: >-
  cuPhoton.xBeam 在 GPU 上做 VLBI/EHT 相关；Vera Rubin NVL72 64 卡处理 10 TB 约 70
  秒，相对 x86 基线约 460×；读带宽最高约 170 GB/s。
date: '2026-11-13'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - cuPhoton
  - EHT
  - 科学计算
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/run-gpu-powered-black-hole-interferometry-with-nvidia-cuphoton/
sourceLevel: S
publisher: nvidia
faqs:
  - question: 输出什么？
    answer: 站间 visibility（SWIN 或 xbeam-v1）；定标与成像在工具链外（HOPS / eht-imaging 等）。
  - question: 如何扩缩？
    answer: 单节点 --devices；跨节点 --shard-count/--shard-index 后 merge-shards；可读 GPUDirect Storage。
draft: false
candidateId: nvidia-developer-2026-11-13-4194ee659d
---

NVIDIA 技术博客（**2026-11-13**）介绍 **cuPhoton.xBeam**（cuPhoton 工具包中的 FX correlator）：面向事件视界望远镜（EHT）等甚长基线干涉测量，把各站 VDIF 电压记录做成 visibility。与哈佛-史密松天体物理中心、MIT Haystack 协作。成像重建（如 Gaussian splatting）**不在**本组件内。

## 流水线五步

1. **Ingest** — 建 `.vdix` 索引，按时间戳定位帧，不重写原始记录  
2. **Delay / fringe** — 按 job 模型做延迟与相位校正（几何 + 时钟等）  
3. **Channelize** — FFT 分信道  
4. **Cross-multiply & accumulate** — 站对互乘累积，无效样本掩码与权重  
5. **Write** — DiFX **SWIN** 或 **xbeam-v1**

参考相关器是 CPU 侧 DiFX。I/O 可选 POSIX 钉扎主机内存或 **cuFile / GPUDirect Storage**。

## 基准与扩缩（官方自测）

| 设定 | 口径 |
| --- | --- |
| Vera Rubin NVL72 · **64** GPU + GDS 兼容模式 | **10 TB** 约 **70 秒** |
| x86 CPU 基线 | 约 **31,992 秒**（约 **460×**） |
| 读带宽 | 4 卡约 **20 GB/s** → 64 卡约 **170 GB/s** |

单节点 `--devices`；跨节点时间切分 `--shard-count` / `--shard-index`，再 `merge-shards`（校验同源 job 与时间覆盖）。文中亦提 AI Agent 可解析 VDIF、生成 JSON job、提交集群——属潜力叙述。数字为官方自测；引用须写清 GDS 模式与 GPU 数。
