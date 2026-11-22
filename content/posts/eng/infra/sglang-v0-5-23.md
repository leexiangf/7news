---
title: SGLang v0.5.23：千余 PR 后的模型扩容、低延迟内核与升级面
slug: sglang-v0-5-23
description: >-
  SGLang v0.5.23（约 1007 个 PR）扩新模型与 DeepSeek-V4.1 吞吐路径，可选 megakernel/monokernel
  低延迟模式与 Paged Experts；附 Docker 渠道与升级安装命令。
date: '2026-11-02'
updated: '2026-11-20'
category: eng
subcategory: infra
tags: [SGLang, Release]
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/sgl-project/sglang/releases/tag/v0.5.23'
sourceLevel: A
publisher: sglang
faqs:
  - question: 低延迟模式默认开吗？
    answer: 否。NVIDIA megakernel 与 AMD monokernel 为 opt-in 插件，发布说明给出 GB300 / MI350X 上 DeepSeek-V4.1-Flash 单用户解码加速区间。
  - question: 怎么装？
    answer: >-
      `uv pip install --prerelease=allow sglang==0.5.23`；NVIDIA 镜像
      `lmsysorg/sglang:v0.5.23`，另有 ROCm / XPU / Xeon / TPU 标签。
draft: false
candidateId: sglang-releases-2026-11-20-0247869cbf
---

SGLang 打出 **`v0.5.23`**（Published **2026-11-02**）。发布说明自报约 **1007** 个 PR、**257** 位贡献者——对集群来说，这意味着一次「模型清单 + 吞吐路径 + 可选内核」同时变厚的小版本，而不是只改版本号。

## 新模型与吞吐亮点怎么读

新模型表覆盖 Muse Spark Open、Beam-1.0、MiniMax-M3.1-Flash、MiniCPM-V 4.7，以及 Cosmos3 / FastH3 / FLUX.3 等扩散配方。名单会继续变；上线前仍以该 tag 的 cookbook 链接为准。

更值得调度侧记的是官方自测的路径声明（均绑定模型与硬件，**不是**你的 SLA）：

| 声明 | 条件摘要 | 大致数字 |
| --- | --- | --- |
| DeepSeek-V4.1 prefill | GB300、负载下 | 吞吐最高约 **1.5×**；32K–64K 首 token 延迟约低 **28%** |
| 低延迟模式解码 | opt-in megakernel（NVIDIA）/ monokernel（AMD），DeepSeek-V4.1-Flash | 单用户解码：GB300 最高约 **44%**，MI350X 约 **75%** |
| MoE 首 token | DeepSeek-V4.1-Flash / GLM-5.3-Flash / gpt-oss，H200、8K prompt | 约早 **30–58%** |
| Paged Experts（opt-in） | 单卡装不下的 MoE | 相对 CPU offload 最高约 **30×**（官方口径） |

另有：经 SGLang-TorchTPU 跑 Google **TPU7x**；量化 MoE（FP8 / NVFP4）上可选 LoRA 引擎；DeepSeek 风格 MLA 在 decode context parallelism 下可将前缀缓存落到 HiCache 文件 L3。

## 升级渠道

```bash
uv pip install --prerelease=allow sglang==0.5.23
```

| 平台 | Docker |
| --- | --- |
| NVIDIA（CUDA 13） | `lmsysorg/sglang:v0.5.23` |
| AMD MI35x | `lmsysorg/sglang:v0.5.23-rocm10-mi35x` |
| AMD MI30x | `lmsysorg/sglang:v0.5.23-rocm10-mi30x` |
| Intel GPU / CPU | `…:v0.5.23-xpu` / `…:v0.5.23-xeon` |
| Google TPU7x | `lmsysorg/sglang:v0.1.0-tpu` |

完整破坏性与推测解码 / CUDA graph / MoE 分项以 [Release 正文](https://github.com/sgl-project/sglang/releases/tag/v0.5.23) 为准。建议在 staging 先确认：默认路径是否意外打开了 opt-in 内核、目标模型 cookbook 是否仍匹配，再谈把百分比写进容量规划。
