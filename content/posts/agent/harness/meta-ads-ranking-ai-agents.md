---
title: Meta 用 AI Agent 把广告排序「技法」铺到多模型舰队
slug: meta-ads-ranking-ai-agents
description: >-
  Meta 工程博客说明如何用 AI Agent 加速 ads ranking 上已验证 technique
  的跨模型传播，以降低人力与算力在组合爆炸中的消耗。
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Meta
  - Ads Ranking
  - AI Agents
  - ML
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://engineering.fb.com/2026/11/18/ml-applications/ai-agents-to-scale-ml-innovations-across-ads-ranking-models/
sourceLevel: A
publisher: meta
faqs:
  - question: 为什么不能直接复制 technique？
    answer: 官方称每个排序模型有独立架构、数据与训练/在线约束，在一个模型上验证的技法几乎无法原样粘贴到下一个；同时技法有时效，越早铺到全舰队价值越高。
  - question: Agent 在这里解决什么？
    answer: 在 technique×模型组合空间膨胀时，用 Agent 加速传播与探索，目标是少占工程带宽与算力，同时尽快覆盖多样化模型舰队。
draft: false
candidateId: meta-engineering-2026-11-18-cd34e44929
---
Meta 工程博客写了一条很工程化的问题：广告排序舰队里，研究者不断产出称为 **technique** 的改进（架构、表征、训练与推理效率等），但「在一个模型上跑通」几乎从不等于「能粘到下一个模型」。

原因写得很直白：各模型架构、数据与训练/serving 约束不同；同时技法有保质期，多拖几个开发周期就可能被下一代取代。于是 technique×模型的组合空间组合爆炸，工程带宽与算力都成瓶颈。文章围绕如何用 **AI Agent** 把已验证技法尽快铺到多样化舰队，在少加人少加机器的前提下提高覆盖速度。

对做多模型平台的团队，这是「Agent 当传播与适配助手」的案例，而不是对外发布新开源框架。具体 Agent 拓扑、成功率与算力账本以 Meta 原文为准。
