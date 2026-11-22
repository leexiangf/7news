---
title: Gemini Omni 1.2 Flash 上线：原生 15 秒视频，720p 降价约 30%
slug: gemini-omni-12-flash
description: >-
  Google DeepMind 发布 Gemini Omni 1.2 Flash：单次生成最长 15 秒，支持多轮对话式改片，并称相对 1.1 降价约
  30%；模型在 Gemini API 与 Google Cloud 侧宣布正式可用。
date: '2026-11-05'
updated: '2026-11-07'
category: llm
subcategory: release
tags:
  - Google
  - DeepMind
  - Gemini Omni
  - 视频生成
author: 编辑部
sourceUrls:
  - >-
    https://deepmind.google/blog/gemini-omni-12-flash-fast-and-cost-effective-with-longer-clips/
\npublisher: google
faqs:
  - question: 1.2 比 1.1 长多少？
    answer: 官方称原生视频从约 10 秒提升到最长 15 秒，并可在 3～15 秒间按秒指定时长。
  - question: 价格怎么算？
    answer: 公告写明相对 Omni 1.1 降价约 30%，720p 为每秒 0.07 美元；具体以定价页为准。
draft: false
candidateId: deepmind-2026-11-05-825a50d1c0
locale: zh
publisher: google
---
Google DeepMind 于 2026 年 11 月 5 日推出 Gemini Omni 1.2 Flash，并称该版本在 Gemini API 与面向企业的 Gemini / Google Cloud 通路上正式可用（generally available）。相对上一版 Omni 1.1，官方强调三条产品变化：更长的原生成片、多轮对话改片，以及更低的单价。

时长是最容易对外说的卖点。1.2 Flash 支持原生生成与编辑最长 15 秒的视频（1.1 约为 10 秒），并可在 3～15 秒之间按秒指定。公告还写到参考遵循更稳：可把角色/产品/风格图、最长约 3 秒的动作片段与音频提示组合进生成，并声称跨机位时脸、服装、包装字体与品牌色更不容易漂。

工作流上，官方把「先低清草稿、再用多轮改一处细节、最后升到 1080p 或 4K」写成降本路径，而不是每次整段重跑。多轮对话式编辑可覆盖完整 15 秒成片，例如换背景、光影、画幅，而不必重新 brief。价格方面，DeepMind 称相对 1.1 降约 30%，720p 报出每秒 0.07 美元。

对企业与广告制作团队，意义主要在「可进生产」：Provisioned Throughput、企业级基础设施口径，以及输出带有不易察觉的 SynthID 水印，都写进了同一篇 GA 声明。官方也坦陈体育快动作、急速改剧本、复杂物理等仍在改进。若你只关心「能不能出 15 秒广告变体」，这篇公告的答案偏是；若关心极限运动镜头，仍需自行压测。
