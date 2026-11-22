---
title: OpenAI 发布 BioBasicsBench：测 Agent 读懂湿实验原始数据
slug: openai-biobasicsbench
description: >-
  OpenAI 与 Ligo 合作推出 BioBasicsBench：100
  项日常湿实验分析任务，强调失败实验与模糊证据；并给出 GPT‑6 Astra 等模型自测分数。
date: '2026-11-06'
updated: '2026-11-20'
category: llm
subcategory: eval
tags:
  - OpenAI
  - 评测
  - 生物
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - 'https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science'
sourceLevel: S
publisher: openai
faqs:
  - question: 和论文配图评测有何不同？
    answer: 任务使用原始凝胶、平板、显微与仪器导出等，刻意保留失败与歧义，要求识别证据不足。
  - question: 头部分数是多少？
    answer: >-
      在 xhigh 推理设定下，GPT‑6 Astra 平均拿到可用分的 66.7%，GPT‑5.6 Sol 为
      43.8%；属官方评测口径。
draft: false
candidateId: openai-2026-11-04-cfd4354afa
---
OpenAI 介绍与生物技术公司 **Ligo** 合作的 **BioBasicsBench**：用 **100** 项日常湿实验任务，衡量 AI Agent 解读**原始实验证据**的能力——凝胶/印迹、菌落板、显微、测序与仪器读数等，并要求发现错误、在证据不足时不硬下结论。动机是：现有基准常基于论文精选图，可能错过真实台面的失败与歧义。

任务覆盖蛋白方法、成像与流式、定量与测定、核酸方法、分子克隆五类；每题配专家评分量表，并经内部与外部湿实验背景审稿。官方在多种模型与推理力度下评测：于 **xhigh** 设定，**GPT‑6 Astra** 平均拿到可用分的 **66.7%**，**GPT‑5.6 Sol** 为 **43.8%**，并指出图像解读、对照检查与实验上下文仍有提升空间。引用分数时需写明 effort 设定与 mean reward 定义。
