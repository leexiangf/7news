---
title: 月之暗面开源 Kimi Vendor Verifier：把「模型不行」和「推理跑歪」拆开
slug: kimi-vendor-verifier
description: >-
  随 K2.6 开源的 Kimi Vendor Verifier（KVV）用参数预检与 OCRBench、MMMU Pro、AIME2025、
  ToolCall 等探针，帮助核对第三方推理是否偏离官方实现；附参考分与约 15 小时全流程成本。
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Moonshot
  - Kimi
  - Evaluation
  - Open Source
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.kimi.com/en/blog/kimi-vendor-verifier'
  - 'https://www.kimi.com/en/blog/kimi-k2-6'
sourceLevel: A
publisher: moonshot
faqs:
  - question: KVV 首先防什么？
    answer: >-
      先做参数预检（temperature、top_p 等是否被正确强制），全部通过才进入基准；避免把解码参数误用当成模型能力差。
  - question: 官方参考分是多少？
    answer: >-
      博文表格：OCRBench 91.0；AIME2025 avg@32 98.4；MMMU Pro Vision 78.8（均为 Kimi API、Temperature=1.0、TopP=0.95）。
  - question: 和 K2.6 什么关系？
    answer: 官方称与 K2.6 同期开源；本站按同伴发布日记为 2026-11-12。
draft: false
candidateId: moonshot-2026-11-20-96a2b1ac5a
---

月之暗面在开源权重之外补了一块更少被讨论的基础设施：**Kimi Vendor Verifier（KVV）**。官方博文写明它与 **Kimi K2.6** 同期放出，目标不是再刷一张榜，而是让用户分清两件事——**模型能力不够**，还是 **第三方推理实现/解码参数把分数跑歪了**。

## 为什么需要「信任链」

K2 Thinking 之后，社区频繁反馈基准异常。一部分很快归因到解码参数：官方在 Thinking 模式强制 **Temperature=1.0、TopP=0.95**，并校验 thinking 内容回传。但更棘手的是：同一评测上，**第三方 API 与官方 API** 仍可出现系统性落差。权重越开、部署渠道越碎，质量越难控；若用户无法拆开「模型缺陷」与「工程偏差」，对开源生态的信任会一起塌。

## KVV 跑什么

流程先做 **Pre-Verification**（参数约束是否生效），再进入一组刻意暴露基础设施故障的探针：

| 步骤 | 作用 |
| --- | --- |
| 参数预检 | temperature / top_p 等强制是否生效；不过则不进榜 |
| OCRBench | 多模态管线烟测（约 5 分钟量级） |
| MMMU Pro | 多样视觉输入，查预处理 |
| AIME2025 | 长输出压力；容易打出 KV / 量化静默劣化 |
| K2VV ToolCall | 触发一致性（F1）与 JSON Schema 准确度 |
| SWE-Bench | Agent 编码全链路；因沙箱依赖**未开源** |

官方给出的 **Kimi API** 参考分（Temperature=1.0、TopP=0.95）：

| Benchmark | Metric | MaxTokens | Kimi API |
| --- | --- | --- | --- |
| OCRBench | acc | 16384 | **91.0** |
| AIME2025 | avg@32 | 98304 | **98.4** |
| MMMU Pro Vision | acc | 65536 | **78.8** |

博文还称与 **vLLM / SGLang / KTransformers** 等社区协作修根因，并计划维护公开 vendor 榜；同时向基础设施方提供发版前验证入口，而不是等用户上线后再投诉。

## 成本与边界

完整工作流在两台 **NVIDIA H20 八卡**服务器上顺序跑通约 **15** 小时；脚本侧提到流式推理、自动重试与断点续跑。SWE-Bench 不在开源包内——需要 Agent 级结论时，仍得自备沙箱或另寻厂商结果。

对平台组，KVV 的价值在于把「对齐官方」变成可重复的门禁：接新推理后端、改量化或解码默认值时，先跑预检与长输出探针，再谈业务 SLA。本站成稿日期按 **K2.6** 同伴发布日记为 **2026-11-12**。
