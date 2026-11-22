---
title: vLLM：Zero Mismatch 让异步 RL 用未裁剪 IS 也能稳住（REINFORCE Zero）
slug: vllm-zero-mismatch-async-rl
description: >-
  博客拆开 rollout/learner 的权重滞后与内核失配：对齐内核后，未裁剪重要性采样可纠正平滑滞后，无需拒样闸门。
  REINFORCE Zero 称可稳训约 2 万步、滞后 64，并覆盖 DeepSeek-V4.1-Flash 与 Kimi K3.1。
date: '2026-11-06'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - RL
  - DeepSeek
  - Kimi
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-06-zero-mismatch-async-rl'
  - 'https://github.com/Inferact/zero-mismatch-rl'
sourceLevel: A
publisher: vllm
faqs:
  - question: Zero mismatch 解决什么？
    answer: 同一权重下 rollout 与 trainer 对数概率不一致（内核失配）；对齐后剩余权重滞后可用未裁剪 IS 纠正。
  - question: 文中关键数字？
    answer: >-
      对齐内核的异步训练相对同步约 2.40× 训练步吞吐；可稳训约 2 万步；工具场景可学到策略滞后 64。数字来自论文/博文。
draft: false
candidateId: vllm-blog-2026-11-06-c60e39ad41
---

异步 RL 更快，但样本来自更旧权重。vLLM 博客（**2026-11-06**）接续「训练—推理一致性」工作，介绍 NVIDIA Research 与 Inferact 的 **REINFORCE Zero**：先消灭 **kernel mismatch**，再让未裁剪重要性采样（IS）去纠正平滑的 **weight lag**——而不靠拒样闸门硬撑。

## 两个缺口，行为完全不同

```text
log π_θk − log μ_v  =  (log π_θk − log π_θv)  +  (log π_θv − log μ_v)
                         权重滞后                    内核失配
```

| 缺口 | 行为 | IS 能否单独收拾 |
| --- | --- | --- |
| 权重滞后 | 随更新平滑变化 | 未裁剪 IS 的目标对象 |
| 内核失配 | 随 batch/数值路径抖动 | 否；标准内核下重要性权重偏差峰值可达中位数 **442×** |

对齐内核后，D3（重要性权重偏离度量）峰值约仅中位数的 **1.50×**。不对齐时，同款异步 IS 会出现 KL 飙升、梯度爆炸，或靠 sequence gate 拒掉约四分之一样本才稳住。

## REINFORCE Zero 三步

1. **对齐内核**：同权重、同样本上 rollout 与 learner 的 logprob 一致（diff 0）。  
2. **未裁剪 token-level IS**：用 rollout 记录的 μ 去除 learner 的 π。  
3. **朴素 REINFORCE**：组内均值中心化优势；无 value model、无拒样闸门。

| 设定 | 论文/博文口径 |
| --- | --- |
| 吞吐（16 GPU、12K updates） | 相对对齐内核的同步训练约 **2.40×** 训练步吞吐 |
| 长跑 | 约 **20,000** 次更新仍稳住（滞后 2/8） |
| 高滞后 | Qwen3-4B + 工具，滞后 **64** 仍能学约 5,000 步 |
| 1.5B 推理 6K 步 | REINFORCE Zero（lag 2/8）接近同步对齐；标准内核 IS 变体落后 |

对齐有代价：例如 OSWorld 上平均 step 可比带 gate 的标准内核 IS 大约 **6.8%**。

## 旗舰模型覆盖

| 模型 / 平台 | 要点 |
| --- | --- |
| DeepSeek-V4.1-Flash | 保持发版精度路径；SWE-bench Pro 等设定下 diff 0；DAPO rollout step 相对 fast baseline 约在 **10%** 内 |
| Kimi K3.1 | Day-0 对齐；KDA 预填/解码算术对齐；DAPO+LoRA 多步 diff 0 |
| AMD MI355X | DeepSeek-V4-Flash / Kimi K3.1 亦报 diff 0；需处理 hipBLASLt 等按 shape 选核的方差源 |

代码与 recipe 见 [Inferact/zero-mismatch-rl](https://github.com/Inferact/zero-mismatch-rl) 与论文仓库。数字均绑定特定 harness——复现前先对齐内核版本与 agent skill，再谈把 2.40× 写进容量表。
