---
title: Ollama v0.40.16：Ripple Preview、Claude 路由修正与 CUDA 13.5 ARM
slug: ollama-v0-40-16
description: >-
  Ollama v0.40.16 引入 Ripple Preview（65B agentic coding），修正 ollama launch claude
  始终打到所选模型，并带来 Qwen3.8 Flash Next 显存节省、Responses truncation 行为与 Windows ARM
  CUDA 13.5 等。
date: '2026-11-09'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Ollama
  - Ripple
  - MLX
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.com/ollama/ollama/releases/tag/v0.40.16'
sourceLevel: A
publisher: ollama
faqs:
  - question: 怎么跑 Ripple Preview？
    answer: '`ollama run ripple-preview`；官方称其为 Ricursive Intelligence 的 65B dense、面向 agentic coding。'
  - question: 相对 v0.40.15？
    answer: >-
      本版公开变更侧重 Ripple、Claude 启动路由、云模型退役提示、API truncation/models 空列表语义，以及
      llama.cpp / CUDA 13.5 Windows ARM；完整 diff 见 compare 链接。
draft: false
candidateId: ollama-releases-2026-11-09-e01056c942
---

Ollama 正式标签 **v0.40.16**（Published **2026-11-09**）。对照 [Release 正文](https://github.com/ollama/ollama/releases/tag/v0.40.16)，本版公开要点与早期通稿传闻并不完全一致——应以 GitHub 变更列表为准。

## 用户能立刻碰到的变化

| 变化 | 含义 |
| --- | --- |
| **Ripple Preview** | Ricursive Intelligence 的 **65B** dense，面向 agentic coding；`ollama run ripple-preview` |
| `ollama launch claude` | **始终**把 Claude Code 路由到当前选中的模型 |
| 云模型退役 | `ollama launch` 会解释某云模型已下线，而不是静默失败 |
| `/v1/responses` | 尊重 `truncation`，默认不再静默截断 |
| `/v1/models` | 无模型时返回**空列表**，不再返回 `null` |
| Apple silicon 显存 | Qwen3.8 Flash Next 约少占 **27 GiB**（官方口径） |
| Windows on ARM | 增加 **CUDA 13.5** 支持；并更新 llama.cpp |

对本地工具链来说，比「又一个模型名」更值钱的是两处 API/启动语义：Responses 截断默认值，以及 models 空列表——任何把 `null` 当「未初始化」的客户端都可能在无模型机器上变行为。

## 升级时怎么核

1. 读完 `v0.40.15...v0.40.16` 的 [Full Changelog](https://github.com/ollama/ollama/compare/v0.40.15...v0.40.16)。  
2. 若脚本解析 `/v1/models`，确认能处理 `[]`。  
3. 依赖 Claude Code + `ollama launch` 的环境，验证请求确实打到**当前选中模型**。  
4. Windows ARM + CUDA 用户核对自己的驱动/包是否走 13.5 渠道。

点版本仍可能混进模型预览与协议修补；把 Ripple 当可选体验，把 truncation / models / Claude 路由当必测回归即可。
