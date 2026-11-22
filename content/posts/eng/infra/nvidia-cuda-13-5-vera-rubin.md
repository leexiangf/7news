---
title: CUDA 13.5 GA：Vera Rubin 生产可用，MPS v3 与 Tile 一并加厚
slug: nvidia-cuda-13-5-vera-rubin
description: >-
  CUDA Toolkit 13.5：Vera Rubin 支持进入 GA，Windows on Arm 扩到 DGX Station for Windows；
  本地性域分区、MPS v3 加权时间片、CUDA Tile 多 GPU 与 cuda.core 1.2 / CCCL 3.5。
date: '2026-11-04'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - CUDA
  - Vera Rubin
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/nvidia-cuda-13-5-brings-nvidia-vera-rubin-ga-support/
sourceLevel: A
publisher: nvidia
faqs:
  - question: Rubin 上还能用 TCC 吗？
    answer: 自 Rubin 起不支持 TCC；应使用 WDDM 或 MCDM（计算专用）。假定 TCC 的工具链需改配置。
  - question: Windows on Arm 相对 13.4？
    answer: 13.4 已 GA Windows on Arm；13.5 扩展到 NVIDIA DGX Station for Windows。
draft: false
candidateId: nvidia-developer-2026-11-04-8e7c0f560f
---

NVIDIA Developer Blog（**2026-11-04**）宣布 **CUDA Toolkit 13.5** 正式可用。头条是 **Vera Rubin** 架构支持从早期开发者访问进入 **GA**；自 13.4 起 GA 的 **Windows on Arm** 现扩到 **DGX Station for Windows**。

## 调度与共享：本地性域 + MPS v3

| 能力 | 要点 |
| --- | --- |
| 本地性域 | 可选均匀 SM 分区，或把补充 SM 纳入域；`cudaDevSmResourceSplit()` 发现分区 SM 数 |
| MPS 加权时间片 | 按服务器拉长计算时间片，独立调节切换激进程度 |
| SM 分区借贷 | `--max-chunks` 借用、`--shareable=true` 出借；应用仍见稳定基数 |
| cgroup 路由 | cgroup v2 子树映射到 MPS 命名空间 |
| 内存记账兜底 | `memacct set force_polling=true` 在通知不可靠时轮询用量 |

## 库与语言栈

CUDA Tile：NVLink/NVSwitch 上的单播/组播指针，以及 Tile 调用 NVSHMEM / CCCL Coop 等设备函数的公开预览。**cuda.core 1.2**：`copy_batch()`、依赖启动、更灵活的 Graph 更新。**CCCL 3.5**：公开调参 API、可复现浮点 scan、批 Top-K 等。

Windows 驱动注意：自 **Rubin** 起支持 WDDM / MCDM，**不支持 TCC**——仍假定 TCC 的部署脚本会踩空。

下载见 CUDA Downloads。对平台组，13.5 是「Rubin 生产通道打开」的版本，同时把多租户共享（MPS v3）从实验旋钮推成可文档化策略。
