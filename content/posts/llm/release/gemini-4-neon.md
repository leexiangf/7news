---
title: Gemini 4 Neon 推出：偏效率的前沿档，对标 Carbon 的高频工作流
slug: gemini-4-neon
description: >-
  Google DeepMind 于 2026-11-18 发布 Gemini 4 Neon：百万级上下文、标价低于 Carbon 的路径，
  面向复杂编程、分析与企业交付；同步在 AI Studio、企业与 Pro/Ultra 端滚动开通。
date: '2026-11-18'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - Google
  - DeepMind
  - Gemini
  - Neon
author: 编辑部
locale: zh
sourceUrls:
  - 'https://deepmind.google/blog/introducing-gemini-4-neon/'
sourceLevel: S
publisher: google
faqs:
  - question: Neon 和 Carbon、Hydrogen 怎么分工？
    answer: >-
      官方写明：Carbon 扛最难、最长程项目；Hydrogen 管快节奏日常；Neon
      在深度与效率之间取平衡，适合复杂但高频的编程、分析与企业工作流。
  - question: 标价是多少？
    answer: >-
      公告价为每百万输入 token 3 美元（缓存输入 0.15 美元，约 95% 折扣）、输出 15 美元；上下文窗口 100 万
      token。厂商另称默认 high 思考档下，单任务成本可比 Carbon 低约 32%，第三方横向对比仍需对齐题集与计费口径。
  - question: 哪里能用？
    answer: >-
      当日滚动开通：Gemini API（Google AI Studio / Android Studio 付费档）、Gemini for
      business、付费 Pro/Ultra 的 Antigravity 与 Gemini 应用；网络安全侧经 Fairwind
      向受信任防守方陆续放行。
draft: false
candidateId: deepmind-2026-11-18-0c3c8b23c6
---
Google DeepMind 在 2026 年 11 月 18 日推出 Gemini 4 Neon，把它放在「前沿能力、但更强调端到端完成速度」的位置：复杂软件工程、知识工作与科学流程是主叙事。家族分工也写进了同一篇公告——Carbon 负责最重、最长的项目，Hydrogen 吃日常快路径，Neon 则瞄准「既要深度、又要高频」的生产工作流。

定价与规格方面，官方给出明确数字：每百万输入 token **3 美元**（缓存输入 **0.15 美元**，文中称约 95% 折扣）、输出 **15 美元**，上下文 **100 万 token**。思考档位保留四级，便于按任务拨智力与花费；厂商称在默认 high 档上，Artificial Analysis Intelligence Index 表现靠前，且单任务成本相对 Carbon 约低 32%，在 Vals、Agent Arena 等图上也落在 Pareto 前沿附近。这些成本与名次均为厂商自述或转引第三方榜，横向对比时仍要对齐题集、思考档与计费定义。

能力叙事集中在三类场景。企业侧强调表格、PDF、图表、音视频同窗综合并输出结构化交付物；编码侧突出长程工具调用、仓库内定点改动，以及在 Antigravity 里作为编排者调度 Hydrogen 子代理的 `/swarm` 用法；安全侧则列出 AutoBaxBench、WebExploitBench、SEC-bench Pro 等内部/外部基准上的相对表现，并称 **Neon for cyber** 将在随后数日经 Fairwind 向受信任防守方开放。安全与对齐章节声称相对 Carbon 维持严重滥用与提示注入防护，并在若干内部诚实性、越权与作弊评测上给出更低告警率——细节以配套 model card 与安全报告为准。

获取路径按角色拆开：付费开发者走 Gemini API（AI Studio、Android Studio）；企业走 Gemini for business 的 API 或模型下拉；Google AI Pro / Ultra 订户可在 Antigravity 与 Gemini 应用中选用 Neon；防守方走 Fairwind 申请通道。对已在跑 Carbon 的团队，Neon 更像「同档能力、换一条更便宜更快的默认车道」：适合把高频 agentic 编程与分析先压到 Neon，把确实触顶的长程任务留在 Carbon，并盯住缓存折扣、思考档切换后的账单与 Fairwind 放号节奏。
