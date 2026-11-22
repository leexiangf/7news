---
title: vLLM v0.34.0：默认可扩展 KV、只剩 Model Runner V2，升级先改配置
slug: vllm-v0-34-0
description: >-
  vLLM v0.34.0 把 Extensible KV 设为默认、移除 Model Runner V1，并改默认 block-size 为 64。
  解读 warmup 后按空闲显存定容的机制、吞吐与 TPOT 取舍，以及升级前必改项。
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - Inference
  - KV Cache
  - Blackwell
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/vllm-project/vllm/releases/tag/v0.34.0'
sourceLevel: A
publisher: vllm
faqs:
  - question: 为什么多数场景要删掉 gpu_memory_utilization？
    answer: >-
      Extensible KV 默认按 warmup 与 CUDA graph 捕获后的实际空闲显存定容；再设利用率上限往往会白白缩小
      KV。只有需要与其他进程分卡，或显式关掉可扩展 KV 时，才继续用该参数。
  - question: 升级后旧启动命令会立刻挂吗？
    answer: >-
      若仍设置 VLLM_USE_V2_MODEL_RUNNER=0，进程会在启动失败。默认 --block-size 已从 16 变为
      64，需要旧行为时显式传回 16（ROCm paged attention 仍用 16）。
  - question: 性能数字能直接当承诺吗？
    answer: >-
      发布说明给出的加速均绑定具体模型与硬件（如 GB200 上 Step5、GLM-5.3 长 prompt 等），属官方自测，需按自家负载复测。
draft: false
candidateId: vllm-releases-2026-11-18-6d3739127e
---

vLLM **v0.34.0**（GitHub Published 约 **2026-11-16**）不是「多挂几个模型」的点版本。对线上集群来说，真正会改行为的是三条线：**可扩展 KV 默认开启**、**Model Runner 只保留 V2**，以及一张会让旧启动脚本踩坑的**破坏性默认值表**。发布说明称本版约有 **1,061** 次提交、**412** 位贡献者（含 **120** 位新贡献者）；下面按运维会碰到的顺序拆开。

## 默认可扩展 KV：定容时机变了

在 CUDA 与 ROCm 上，KV cache 不再主要依赖「启动前估一估能占多少显存」，而是在 **CUDA graph 捕获与 warmup 之后**，按**当时真正空闲**的显存来定容（[#56492](https://github.com/vllm-project/vllm/pull/56492)）。直观结果是：同样一块卡，KV 往往更大、高并发下吞吐更好、TTFT 更低。发布说明举例：MiniMax-M3 在 H200 上约从 **433k → 672k** tokens。

代价也写在同一处：部分模型在高并发下**单 token 解码延迟（TPOT）可能变差**——H200、并发 128 的若干模型上，发布说明给出约 **+6–18%** 的区间。若你更在意尾延迟而不是极限 KV，可以 `--gpu-memory-utilization 0.9`，或 `--no-enable-extensible-kv-cache` 退出新默认。

这也是官方把「多数场景应**去掉** `gpu_memory_utilization`」写进升级表的原因：参数默认已到 **1.0**，再叠一层人为上限，等于主动把刚腾出来的 KV 又砍回去。它仍有用——例如同卡还跑着别的进程，或你关掉了可扩展 KV——但不再是「每个配置文件都抄一份 0.9」的习惯项。

## Model Runner 只剩 V2

**Model Runner V1 已移除**。环境变量 `VLLM_USE_V2_MODEL_RUNNER=0` 会在启动时直接失败；自定义 logits processor 需迁到 `vllm.v1.worker.gpu.sample.logits_processor`（[#63373](https://github.com/vllm-project/vllm/pull/63373)）。双 batch overlap、推测解码等能力按发布说明已落在 MRV2 上；后缀解码也改为在 MRV2 上跑 GPU speculator，不再依赖 Arctic Inference。

对平台组而言，这不是「换个默认开关」，而是**旧 runner 分叉被砍掉**：镜像、Helm values、以及任何仍以 V1 为假设的补丁都要先清一遍。

## 升级前先改这几项

| 变化 | 建议动作 |
| --- | --- |
| 默认 `--block-size` **64**（原 16） | 要旧行为就显式 `--block-size 16`；ROCm paged attention 仍为 16 |
| ROCm **7.2** 产物停发 | 改用 ROCm **10.0** wheel / 镜像；`-rocm72` 不再发布 |
| `huggingface_hub >= 2.0` | 并满足 `tokenizers >= 0.23.3`、`timm >= 1.0.30` |
| QuTLASS / `fp_quant`、Marlin W4A8、Keye-VL 移除 | 旧 checkpoint 与旗标需换路径（如 humming 量化相关配置） |

完整破坏性列表以 [v0.34.0 Release](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) 的 Before you upgrade 为准；上表是上线前最容易漏掉的几项。

## 新模型与性能数字怎么读

「约 **10** 个新模型」里，对调度有意义的是能力边界，而不是名单本身：例如 **Mistral Large 4**（约 1T 总参 / 52B 激活，FP8 与 NVFP4，标称可跑 Blackwell/Hopper 与 MI350）、**Nemotron-3.5-Transcribe**（语音与 `/v1/audio/transcriptions`）、以及 MiniMax-M3.1-Flash、LFM3 系列、Canary / Parakeet 等 ASR 路径。名单会随插件与后续小版本继续变，落地前仍要以该 tag 的模型表为准。

发布说明里的加速数字全部是**绑定硬件与模型**的官方自测，适合用来判断「这版内核在哪些卡上挖到了速度」，**不能**直接当成你业务模型的 SLA：

| 场景（官方自测） | 硬件 | 大致增益 |
| --- | --- | --- |
| Step5 NVFP4 MoE 解码 | 4×GB200 | 最高约 **1.95×** |
| GLM-5.3-Flash 输出吞吐 vs DEP4 | NVIDIA | 约 **1.6×** |
| GLM-5.3 长 prompt TTFT（32K–128K） | GB200 设定 | 约 **1.24–1.40×** |

更稳妥的读法是：若你的队列也在 Blackwell / MI355X 且负载形态接近，值得进 staging 复测；否则先把默认值与 runner 迁移做完，再谈百分比。

运维侧还可留意：基于 CRIU + `cuda-checkpoint` 的 checkpoint/restore HTTP 接口、故障时 DP+EP 缩容去掉死 rank 并重分专家（无需整集群重启）、以及 NUMA binding 默认尽力而为等——都属于「大版本顺便落地的运营能力」，与 KV 默认值无直接因果关系，但同属 0.34 的升级面。

## 上线后怎么自证

1. 确认镜像 / wheel 为 **v0.34.0**，且启动日志不再出现 V1 runner 回退。  
2. 去掉（或有意保留并注释原因）`gpu_memory_utilization`，对比升级前后 **KV token 上限** 与高并发 TTFT / TPOT。  
3. 若延迟敏感，用同一负载分别试可扩展 KV 开/关，确认尾延迟是否落在可接受区间。  
4. 依赖 ROCm 的节点核对是否已切到 **10.0** 产物；仍拉 `-rocm72` 应失败。  
5. 自定义 logits processor、旧量化旗标、Keye-VL 等路径做一次失败注入，避免「主模型能起、长尾配置夜间才爆」。

v0.34.0 的主线可以概括成：**让 KV 按真实空闲显存吃满，并收束到唯一 GPU runner**。百分比加速是锦上添花；真正决定成败的，是默认值与废弃项有没有在配置仓库里被改干净。
