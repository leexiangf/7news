---
title: LlamaExtract 推出 Max Effort：Agentic Plus 可加码难文档抽取
slug: llamaindex-extract-max-effort
description: >-
  LlamaIndex：Extract agentic_plus 新增 effort=max，按计算量浮动计费；ExtractBench Pro 上 Value
  F1 自述从 77.7 升至 94.3，适合图表密集等高代价差错场景。
date: '2026-10-29'
updated: '2026-11-23'
category: ai-office
subcategory: doc
tags:
  - LlamaIndex
  - LlamaExtract
  - Document Extraction
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-max-effort-for-extract-agentic-plus'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: 如何启用？
    answer: 在 configuration 中将 tier 设为 agentic_plus、effort 设为 max。
  - question: 适合什么场景？
    answer: 标准 Agentic Plus 不够用、文档极密或含大量图表/关系图、抽错成本高时。
draft: false
candidateId: llamaindex-2026-11-23-8be33d0225
---
LlamaIndex（**2026-10-29**）为 Extract 的 **`agentic_plus`** 档增加 **max effort**：在最难、最关键文档上用更多计算换更高抽取质量。计费随所需计算浮动，不再按固定每页价。通稿称在 **ExtractBench Pro** 上，Value F1 从标准 Agentic Plus 的 **77.7** 升到 max 的 **94.3**（厂商基准）。

机制上，可对图表等区域提高渲染分辨率后再读。六类挑战里，「长密页」自述 Value F1 从 **12.7** 升到 **95.0**，均价约从 **$0.075** 升到 **$4.19**/文档；关系图、文档惯例等亦升，术语与计数类涨幅较小。配置示例：`tier: agentic_plus`、`effort: max`。这是按质量加码的抽取档位；实际成本需用自有样本文档实测。
