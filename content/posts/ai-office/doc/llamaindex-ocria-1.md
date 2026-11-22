---
title: LlamaIndex 发布 OCRia-1：4B 文档解析模型驱动 LlamaParse
slug: llamaindex-ocria-1
description: >-
  LlamaIndex 介绍 4B 参数 VLM OCRia-1，称在 ParseBench 等评测领先，并已用于
  LlamaParse；强调准确率、成本与延迟三者兼顾。
date: '2026-11-06'
updated: '2026-11-20'
category: ai-office
subcategory: doc
tags:
  - LlamaIndex
  - OCR
  - LlamaParse
  - 文档解析
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.llamaindex.ai/blog/parse-ocria-1'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: ParseBench 分数？
    answer: 官方称 overall 87.4，相对次高约 +12.1；另列 olmOCR-bench、PulseBench-Tab 等表格向分数。
  - question: 现在怎么用？
    answer: 文中写明正为 LlamaParse 提供动力；权重/自托管细节以原文与产品文档为准。
draft: false
candidateId: llamaindex-2026-11-06-daecb53d00
---
LlamaIndex 宣布 **OCRia-1**：约 **4B** 参数的视觉语言模型，定位文档解析，并称已驱动 **LlamaParse**。卖点是在准确率、成本与延迟上同时做到可用规模——面向财报、保险与税务等表格/图表密集文档。

官方评测叙事：在 **ParseBench** 上 overall **87.4**，相对次高解析模型约 **+12.1**（对比表含 LightOnOCR、Chandra、Mistral OCR 等）；表格向另报 olmOCR-bench、PulseBench-Tab、fr-bench-pdf2md 等领先说法。分数为厂商评测口径，跨基准渲染与计分规则以原文脚注为准。对文档 Agent 读者，这是「小参数专用解析模型」路线的一记产品落地。
