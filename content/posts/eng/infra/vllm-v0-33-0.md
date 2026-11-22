---
title: vLLM v0.33.0：CUDA 13 专供、推测解码加厚，以及升级必砍项
slug: vllm-v0-33-0
description: >-
  vLLM v0.33.0 将官方轮与镜像收束到 CUDA 13.0，升级 PyTorch 2.14，扩充模型与推测解码路径，并移除 Medusa/旧
  Ray executor 等；附镜像渠道与破坏性核对表。
date: '2026-11-01'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - CUDA
  - 推理
  - 开源
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/vllm-project/vllm/releases/tag/v0.33.0'
sourceLevel: A
publisher: vllm
faqs:
  - question: 还在用 CUDA 12.9 怎么办？
    answer: >-
      本版起不再发布 CUDA 12.9 轮与 `-cu129` 镜像，需改用默认 CUDA 13.0 产物，并先核驱动与容器基线。
  - question: 最容易踩的破坏性变更？
    answer: >-
      Medusa 与 MLP speculator、旧 Ray compiled-graph executor 已移除；暂停生成期间新请求返回 HTTP
      503；NIXL 连接器需 1.5+。
draft: false
candidateId: vllm-releases-2026-11-01-ce1e25ea92
---

vLLM 打出正式标签 **v0.33.0**（**2026-11-01**）。相对前序 RC，本版把运行时栈、镜像策略与一批服务端能力一起定稿。若你之后还要跟 **v0.34.0**（默认可扩展 KV、仅 Model Runner V2），可以把 0.33 当成「先把 CUDA 13 与破坏性清单清干净」的中间站。

> 说明：本稿撰写时 GitHub Release 页曾出现短暂不可达；事实以当时已核验的 release 叙述为准，上线前请再打开标签页复核。

## 运行时与镜像：CUDA 12.9 渠道关掉

| 变化 | 动作 |
| --- | --- |
| 官方轮 / 镜像 **仅 CUDA 13.0** | 停用 12.9 轮与 `-cu129` / `-cu129-ubuntu2404` |
| **PyTorch 2.14.0** | 配套 torchvision 0.29.0、Triton 3.8.0；CUDA 轮相对 libtorch ABI 稳定 |
| AWS EFA | `vllm/vllm-openai:v0.33.0-efa`；另有短别名 `vllm/vllm` |
| ROCm | 默认切 **ROCm 10.0**（当时仍提供 `-rocm72`） |

集群侧最常见的事故不是「模型名单」，而是节点仍拉旧 cu129 镜像，或驱动未到 CUDA 13 用户态预期。

## 模型、推测解码与 API

亮点清单纳入 Reflection Beam-1.0、Step-5 Preview、Nemotron Parse 3.5、MiniCPM-OCR 等。推测解码侧出现 XPress、可选 FLy 校验、draft `lm_head` 量化、lookahead block hash，以及 NVIDIA/AMD 上若干 opt-in 解码加速（含 MonoKernel、稀疏 MLA 等）——倍率以对应 PR 基准为准，勿直接写进 SLA。

服务面：支持模型上默认开启 `/v1/decisions`、embeddings late chunking，以及 Rust 前端稳健性修复。这些偏「能力加厚」，真正挡发布的是下一节的移除项。

## 破坏性核对

| 项 | 影响 |
| --- | --- |
| Medusa / MLP speculator | 移除，旧启动参数会失败 |
| 旧 Ray compiled-graph executor | 移除 |
| 生成暂停期间新请求 | 返回 **HTTP 503** |
| NIXL 连接器 | 需要 **NIXL 1.5+** |
| 其他弃用旗标 | 以完整 release notes 为准 |

## 建议自证顺序

1. 确认镜像 / wheel 为 **v0.33.0** 且 CUDA **13.0** 渠道。  
2. 失败注入：仍带 Medusa/MLP 或旧 Ray executor 的配置应启动失败。  
3. 模拟「暂停生成」时的客户端行为，确认能处理 **503**。  
4. 使用 NIXL 的链路核版本 ≥ 1.5。  
5. 若规划继续升 0.34，把本版当作 CUDA 13 基线，再单独排 KV 默认值与 Model Runner V2 迁移。

0.33 的主线是 **收束运行时渠道 + 清掉一批历史推测解码分叉**；模型与加速数字是附赠，配置仓库是否还指着 cu129，才决定升级成败。
