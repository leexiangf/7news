---
title: LlamaIndex 推出 ParseBench-2：面向文档解析的严重度感知基准
slug: llamaindex-parsebench-2
description: >-
  ParseBench-2：330+ 错误类型按严重度校准确定性指标；语料约 2.1k→4.3k；六维含表单；LlamaParse Agentic Plus
  总分约 89.8（厂商榜）。
date: '2026-11-20'
updated: '2026-11-21'
category: llm
subcategory: eval
tags:
  - LlamaIndex
  - ParseBench
  - 文档解析
  - 评测
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-parsebench-v2'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: 相对 ParseBench-1 改了什么？
    answer: 严重度感知打分、语料翻倍、参考标注修正、图表全量数值核对、表单作为第六维；错误类型 330+。
  - question: 榜首数字怎么读？
    answer: 厂商排行中 LlamaParse Agentic Plus 总分约 89.8；引用须写清六维均值与配置名。
draft: false
candidateId: llamaindex-2026-11-20-6cc2f869a5
---

LlamaIndex 发布 **ParseBench-2**（博文日期写 **2026-11-12**，站内条目 **11-20**）：定位 **severity-aware** 文档解析基准——确定性指标要对齐「人类觉得这个错有多伤下游」。ParseBench-1 被社区广泛引用（文称月下载逾 5 万），但确定性分有时与直觉相反：数字写反可能只扣一点点，无害格式却扣光。

## 机制：先定严重度，再校准指标

团队定义 **330+** 错误类型，标为 critical / major / minor / harmless，再 hill-climb 各维指标去贴齐目标扣分。示例：459 格表里换错数字，ParseBench-1 只扣约 **0.13**/100，Markdown 代 HTML 却归零；ParseBench-2 错数扣约 **10** 分，等价 Markdown 扣 **0**。

| 维度 | 要点 |
| --- | --- |
| Text / Formatting / Tables / Layout | 读写序、格式等价、表头—单元格绑定等 |
| Charts | **1025** 张图、约 **36,958** 个数值全量核对 |
| Forms（新） | 字段绑定、勾选态、空白亦信息；核心集约 500 页政府表单模板等 |
| Visual grounding | 块是否落在正确页位置（约 538 页） |

语料由约 **2.1k** 扩到约 **4.3k** 案例。严重度策略可自定义——基准兼框架。

## 榜与成本（厂商自测）

41 套默认配置：文档解析器 / 直调视觉模型 / 开源权重。总分为六维均值。文中 **LlamaParse Agentic Plus ~89.8**，领先次优文档解析器约 **5.9** 分；图表维差距最大（约 1.2–92.6）。成本页对比显示高价不一定更高分。同期推出 **OCRia-1.5** 家族驱动 LlamaParse 各模式。

数据集、评测代码与论文开源（`run-llama/ParseBench`）。引用分数时写清 **ParseBench-2**、配置名与六维协议。
