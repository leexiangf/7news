---
title: DeepMind 发布 AlphaGenome 2：按细胞类型预测 DNA 变异效应
slug: deepmind-alphagenome-2
description: >-
  Google DeepMind：新一代 DNA 序列模型改为按生物学条件预测，称在单细胞数据上因果变异召回近翻倍；非商业 API
  已开放，商业用途私有预览。
date: '2026-11-11'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - DeepMind
  - AlphaGenome
  - Genomics
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/
  - 'https://www.biorxiv.org/content/10.64898/2026.11.11.765857'
sourceLevel: S
publisher: deepmind
faqs:
  - question: 与初代有何不同？
    answer: 改为条件模型，一次针对一种组织/细胞类型或状态，并可从研究者的单细胞实验编码新状态。
  - question: 如何获取？
    answer: 非商业研究经 AlphaGenome API；商业研究为 Google Cloud 私有预览。仅供研究，未经临床批准。
draft: false
candidateId: deepmind-2026-11-11-5b916f1bea
---
Google DeepMind 发布 **AlphaGenome 2**，面向「同一 DNA 在不同人类细胞类型中如何被读取」的预测。相对初代对大量 bulk 组织并行输出，2 代改为 **条件模型**：在约百万碱基输入外，全程注入目标生物学条件（组织、细胞类型或状态），也可经 **cell encoder** 从研究者自有单细胞实验即时编码未见状态。

训练数据含人类与小鼠 bulk 及单细胞，称超过 **1.07 亿**细胞谱；输出覆盖表达、组蛋白修饰、染色质可及性，并新增 **DNA 甲基化**。文中称在 TenK10K 等评估上，识别改变表达的因果变异约从 **16%** 升至 **30%**、方向性基因效应约 **23%→43%**（相对初代微调及其他专用工具）。可经 API 做非商业研究，商业用途走 Cloud 私有预览；官方强调 **仅供研究，非临床诊断**。配套 bioRxiv 论文。
