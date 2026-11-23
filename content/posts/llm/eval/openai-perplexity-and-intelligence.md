---
title: OpenAI 首席科学家撰文：主张用困惑度衡量预训练进展并设行业上限
slug: openai-perplexity-and-intelligence
description: >-
  OpenAI 首席科学家 Jakub Pachocki（2026-11-22）主张以困惑度（交叉熵）作为跨实验室可比指标，并公开内部预训练曲线，呼吁在监控能力到位前设定共同上限。
date: '2026-11-22'
updated: '2026-11-23'
category: llm
subcategory: eval
tags:
  - OpenAI
  - Perplexity
  - Safety
  - Pretraining
author: 编辑部
locale: zh
sourceUrls:
  - 'https://openai.com/index/perplexity-and-intelligence'
sourceLevel: S
publisher: openai
faqs:
  - question: 文章主张什么？
    answer: 用困惑度（或交叉熵损失）跟踪预训练压缩器质量，作为跨厂商可比的进展与安全节奏指标，并在监控能力达标前共同设限。
  - question: 文中给出哪些数量级？
    answer: >-
      作者称内部主评测集上，GPT-3.5 约 log-perplexity 0.99、GPT-4 约 0.91；跌破约 0.8
      后出现网络与数学等领域能力跃迁；并展望约 0.68–0.7 窗口。数字为 OpenAI 自述。
draft: false
candidateId: openai-2026-11-20-de5cd1a6d5
---
OpenAI 首席科学家 Jakub Pachocki（**2026-11-22**）发文《Perplexity and Intelligence》，把预训练进度框成「训练更好的压缩器/预测器」，并主张用**困惑度**（perplexity，等价于交叉熵损失）作为跨实验室可对照的进展尺子。文中同时公开 OpenAI 内部主评测曲线，呼吁为安全节奏建立共同标准。

作者区分「难预测的涌现能力基底」与其后的提示、微调、强化学习等诱发手段：下游基准会换代，但预训练损失曲线仍可长期对照。内部数量级（厂商自述）称，自 GPT-3.5 起沿用的主 hold-out（内部代码库快照）上，GPT-3.5 约 **log-perplexity 0.99**，GPT-4 约 **0.91**；跌破约 **0.8** 后，网络安全与数学等领域出现其所谓变革性能力；约 **0.76** 时模型开始产出团队视为突破性的数学结果。作者并外推约 **0.68–0.7** 窗口，可能再涌现尚未被今日基准覆盖的能力。

政策上，他希望前沿实验室在首次部署此类模型前，共同约定评估与安全案例红队规范，并提出基于困惑度等指标的**共同上限**：在监控与理解能力达到具体里程碑（例如链式思维监控的后继方案）之前，不越过该上限。文中也列明局限：跨实验室数据与评测集不同、困惑度不直接等于任务分数、推理等后训练增益未必压低困惑度、未知熵下限会扭曲表观斜率。这是指标与治理倡议，不是新产品发售；数字与阈值均依赖 OpenAI 自选数据集。
