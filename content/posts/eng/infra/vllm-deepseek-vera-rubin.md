---
title: vLLM：DeepSeek-V4.1-Flash 在 Vera Rubin NVL72 上的吞吐对比
slug: vllm-deepseek-vera-rubin
description: >-
  vLLM 系列第三篇把同一 DeepSeek-V4.1-Flash 栈迁到 Vera Rubin NVL72，标题称相对 GB300 NVL72 有约
  58× 吞吐对比口径，并给出 AgentX 测量说明。
date: '2026-11-12'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - DeepSeek
  - Vera Rubin
  - 吞吐
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-12-deepseek-v41-flash-vera-rubin'
sourceLevel: A
publisher: vllm
faqs:
  - question: 58× 怎么理解？
    answer: >-
      标题与图注口径来自厂商博文，在 SemiAnalysis AgentX、P/D 分离与 Wide-EP 等设定下对比 Rubin 与
      GB300；引用须写清基准、是否含缓存 token 与功耗归一。
draft: false
candidateId: vllm-blog-2026-11-12-8e1c72ed6e
---
vLLM 团队发布 DeepSeek-V4.1-Flash 系列第三篇：前两篇分别讲 day-0 与 GB300 NVL72（P/D + Wide-EP），本篇把同一栈迁到 **Vera Rubin NVL72**。标题给出相对 GB300 的 **58× 吞吐** 对比说法，并提到约 **387 tokens/s** 等数字——均为博文测量叙事。

测量使用 **SemiAnalysis AgentX** 作为代表性 agentic serving 负载；吞吐统计含缓存输入、未缓存输入与输出 token，并给出功耗归一对比。优化分组与硬件前提见原文。

对集群读者：**严禁脱离基准设定引用 58×**；复现需对齐软件栈、EP/PD 配置与 AgentX 版本。
