---
title: 月之暗面发布 PerceptionBench：拆开测 MLLM 原子视觉感知
slug: moonshot-perception-bench
description: >-
  Kimi 团队开源 PerceptionBench：从 42 个基准失败中归纳 10 类原子感知、3000
  道题；16 个前沿模型无一达到 60%，幻觉类平均最弱。
date: '2026-11-12'
updated: '2026-11-20'
category: llm
subcategory: eval
tags:
  - Moonshot
  - Kimi
  - PerceptionBench
  - 评测
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.kimi.com/en/blog/perception-bench'
sourceLevel: S
publisher: moonshot
faqs:
  - question: 和普通多模态榜有何不同？
    answer: 每题只测一种原子感知能力，不要求推理或外部知识；分类由真实失败归因倒推，而非先验定义。
  - question: 题量？
    answer: 发布集 3000 道（约 60% 由失败分解、40% 新编）；内部池逾 17000 道。
draft: false
candidateId: moonshot-2026-11-12-c509a0c7df
---
月之暗面 Kimi 团队发布 **PerceptionBench**，专门隔离多模态大模型的**视觉感知**。方法是从 42 个既有基准上的前沿模型失败中归因最早出错步骤，归纳 **10** 类原子能力（关系、计数、属性、深度/3D、定位、比较、细粒度识别、上下文整合、OCR、幻觉等），再构造「只看图即可答、不需推理/外部知识」的题目。

发布集 **3,000** 道（约 **60%** 由失败分解、**40%** 新编，含难度分层）；内部验证池逾 **17,000** 道。文中称评测 **16** 个前沿 MLLM，**无一达到 60%**，感知相关幻觉平均最弱；总分接近的模型在分项上可差很远。目标是暴露「看错了什么」，推动更忠实的多模态感知。属**评测发布**，具体分项表与排行以原文/配套材料为准。
