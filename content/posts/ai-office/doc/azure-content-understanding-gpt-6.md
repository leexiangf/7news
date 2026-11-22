---
title: Azure Content Understanding 接入 GPT-5.6 / GPT-6 / GPT-6.1 并更新选型建议
slug: azure-content-understanding-gpt-6
description: >-
  Foundry 博客：Content Understanding 新增 GPT-5.6、GPT-6、GPT-6.1 系列；文档抽取默认建议 GPT-6.1
  Sol，并按任务给出评测与相对 token 成本。
date: '2026-11-11'
updated: '2026-11-20'
category: ai-office
subcategory: doc
tags:
  - Azure
  - Content Understanding
  - GPT
  - 文档
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/content-understanding-adds-gpt-5-6-gpt-6-and-gpt-6-1-choose-the-right-model-for-your-workload/
sourceLevel: A
publisher: microsoft
faqs:
  - question: 文档抽取从哪款起试？
    answer: 官方建议标准文档抽取先试 GPT-6.1 Sol；更在意 token 成本试 GPT-6 Luna；错误代价高再测 GPT-6 Astra。
  - question: 换更大模型前还能做什么？
    answer: 在 Studio Knowledge 里加少量标注样例；文中称 Luna 加 5 条样例可将抽取质量从约 91.8% 提到约 94.2%。
draft: false
candidateId: microsoft-foundry-2026-11-11-af1b7d0fc7
---
Microsoft Foundry 称 **Azure Content Understanding** 已支持 **GPT-5.6、GPT-6、GPT-6.1** 模型族（叠加既有 GPT-5 系列），并更新「混音台」式选型：按任务调质量与成本，而不是全局拉满。

**文档字段抽取**起点建议：**GPT-6.1 Sol**（平衡质量与 token）；更省成本试 **GPT-6 Luna**；错误代价高时再测 **GPT-6 Astra**。GA 抽取评测中 Astra Schema-only 约 **95.95%**、Sol 约 **95.74%**，但 Astra completion-token 费用约为 Sol 的 **5 倍**；Preview 评测里 Sol 反而领先 Astra。加 **5 条标注样例**可抬升 Luna（约 **91.82%→94.16%**），适合大批量场景先试「小模型 + Knowledge」再升档。

任务要拆开调：文档切分 Astra 领先；视频总评测中 **GPT-6 Sol** 头条 Generation F1 与长视频切分均值最高，短视频广告则 **GPT-6.1 Sol** 更好；语音字段分类/生成仍以 GPT-5.2 / 5.5 等为当前 GA 参考，官方称还将继续核查。图表与相对 token 轴均相对 Sol Schema-only = 1.00×，且不含与模型无关的服务费。以自家语料复测为准。
