---
title: Kimi 发布 WorldVQA：用 3500 题测多模态「认不认得这个实体」
slug: kimi-worldvqa
description: >-
  WorldVQA：约 3500 条图问对、9 类、头/尾分布；测 MLLM 事实正确性；官方称前沿模型长尾常低于 50%；并报告校准 ECE / Slope。
date: '2026-11-20'
updated: '2026-11-21'
category: llm
subcategory: eval
tags:
  - Kimi
  - WorldVQA
  - MLLM
  - 评测
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.kimi.com/en/blog/worldvqa'
sourceLevel: S
publisher: moonshot
faqs:
  - question: 测什么？
    answer: 模型是否认出具体实体，还是仅凭视觉模式幻觉；每题单一可核验答案，排除主观题。
  - question: 规模与结果口径？
    answer: 约 3500 条；中英约 36%/64%；官方称长尾上前沿模型常低于 50%——厂商评测，复现看题集与协议。
draft: false
candidateId: moonshot-2026-11-20-a5ebe96a1d
---

月之暗面（Kimi）发布 **WorldVQA**：面向多模态大模型（MLLM）的**原子视觉世界知识 / 事实正确性**基准。核心问题不是「会不会描述画面」，而是「是否真的认出这个具体实体」。

## 题集结构

约 **3,500** 条高质量图问对，经多阶段人工核验。设计三原则：**事实唯一答案**、**9 类百科覆盖**、**Head vs Tail** 显式拆分以观察长尾衰减。

| 统计 | 口径 |
| --- | --- |
| 中文 / 英文 | 约 **1260 (36%)** / **2240 (64%)** |
| 难度 Easy / Medium / Hard | 约 31% / 41% / 28% |
| 类别例 | 自然、地理、文化、物品、交通、娱乐、品牌、体育、人物等 |

官方称即使前沿模型在长尾视觉知识上也常掉到 **50% 准确率以下**——厂商挑战性结果，横向对比须对齐题集版本。

## 校准：自信 vs 准确

除准确率外，报告 **ECE**（期望校准误差，理想 0）与 **Slope**（准确率相对自信敏感度，理想 1）。文中称各模型普遍**过度自信**；Kimi-K2.5 在两项上相对最好（ECE 约 **37.9%**、Slope 约 **0.550**），距「诚实」仍远。

开源：论文 arXiv:2602.02537、GitHub `MoonshotAI/WorldVQA`、Hugging Face 数据集。对评测读者：当「视觉世界知识」专项压力测试，勿替代通用 VQA 总榜；引用分数标注来源与采样条件。
