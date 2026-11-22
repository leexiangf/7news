---
title: OpenAI 谈用前沿模型推进芯片设计，并与 AMD、Synopsys 合作
slug: openai-chip-design
description: >-
  OpenAI：Jalapeño 向量/矩阵单元称标准单元面积约降 13%/10%；AMD 旗舰 GPU IP 相对强基线最高约 14%
  PPA；RISC-V 评测上 GPT-6.2 Astra 领先；并训练 GPT-Synopsys 用 EDA 工具。
date: '2026-11-18'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - OpenAI
  - Chip Design
  - AMD
  - Synopsys
author: 编辑部
locale: zh
sourceUrls:
  - 'https://openai.com/index/advancing-chip-design-with-our-models'
sourceLevel: A
publisher: openai
faqs:
  - question: 生产侧数字？
    answer: Jalapeño 向量/矩阵单元标准单元面积约 -13%/-10%（硅验证）；AMD 旗舰 GPU IP 相对强优化基线最高约 14% PPA，部分已进流片。
  - question: 下一步？
    answer: 与 Synopsys 合作训练 GPT-Synopsys，使其按专家方式使用 EDA 工具。
draft: false
candidateId: openai-2026-11-18-c7d3ecb006
---
OpenAI（**2026-11-18**）详述用前沿模型做芯片设计：在自研推理芯片 **Jalapeño** 上，称模型建议使向量单元标准单元面积约降 **13%**、矩阵单元约 **10%**（硅验证）；与 **AMD** 合作在旗舰 GPU IP 上相对强优化基线最高约 **14%** PPA，部分改动已进近期流片/生产设计文件，下一代旗舰 CPU 关键块亦有个位数百分比增益（AMD 验证）。

开源 **PicoRV32 / Ibex** RISC-V 吞吐评测上，在约 **112k** token 预算下 **GPT-6.2 Astra** 平均分最高；从规格重新设计往往高于改现有 RTL。下一步与 **Synopsys** 合训 **GPT-Synopsys**，对接工程师已用的 EDA 流程。属**能力叙事+合作**稿，PPA 数字为厂商/伙伴自述。
