---
title: Gemini 4 Carbon 开放：面向高难度代理与网络安全场景
slug: gemini-4-carbon
description: >-
  Google DeepMind 宣布 Gemini 4 Carbon 对开发者、企业与 Ultra 用户开放；定位比 Argon
  更重推理与长程代理，并给出试用价与 11 月 30 日后正式价。
date: '2026-11-10'
updated: '2026-11-12'
category: llm
subcategory: release
tags:
  - Google
  - DeepMind
  - Gemini
  - Carbon
author: 编辑部
locale: zh
sourceUrls:
  - 'https://deepmind.google/blog/gemini-4-carbon-is-now-available/'
\npublisher: google
faqs:
  - question: Carbon 和 Argon 怎么选？
    answer: 官方称 Argon 仍适合多数软件工程与知识工作；Carbon 面向更难的多步编码、调试与开放式科研，并会用更多 token 做深推理与校验循环。
  - question: 价格是多少？
    answer: >-
      公告写明试用期与 Argon 相同：输入 2 美元/百万 token、输出 10 美元/百万 token；试用期于 2026-11-30
      结束后，公开访问版为输入 4 美元、输出 20 美元/百万 token。
draft: false
candidateId: deepmind-2026-11-10-0b2e1c02de
publisher: google
---
Google DeepMind 于 2026 年 11 月 10 日宣布，Gemini 4 Carbon 向开发者、企业、科研人员与消费者开放。官方把它放在「更强、也更吃 token」的位置：相对两周前面向网络安全防守方（Fairwind）的预览，以及更早的 Gemini 4 Argon，Carbon 强调长程代理流程、复杂知识工作、软件工程与科学推理。

选型上，公告写得很直白——Argon 仍是多数软件工程与知识工作的默认；Carbon 留给会触到模型能力边界的任务，例如多步编码与调试、开放式科研，并会用更多 token 做探索、深推理与延长校验循环。DeepMind 还列出若干外部工作流基准上的名次与相对成本说法（如 CursorBench 4.0、Perplexity WANDR、Zapier AutomationBench 等）；这些数字以厂商公告为准，横向对比时需核对各自题集与计费口径。

获取路径按角色拆开：付费开发者可在 Google AI Studio 与 Gemini API 使用；企业走 Gemini for business；Google AI Ultra 订阅用户则在 Google Antigravity、Gemini 应用与 Search 的 AI Mode 滚动开通。Antigravity 预览了 `/swarm`：一条提示拆成可实时跟踪的多智能体协作，深度角色可交给 Carbon，并行工作区再用更快的轻量模型。网络安全防守方可继续申请 Fairwind；科研侧则在原有 Argon 六个月免费名额基础上，把 Carbon 纳入同一申请通道（滚动审核、有名额与资格限制）。

价格方面，公告称试用期与 Argon 相同：每百万输入 token 2 美元、输出 10 美元；**试用期至 2026 年 11 月 30 日**，之后公开访问版 Carbon 调整为输入 4 美元、输出 20 美元/百万 token。安全章节称相对 Argon 加强了滥用防护与提示注入鲁棒性，并指向单独的 Safety and Security 报告——具体指标仍以该报告与第三方复测为准。

对工程团队：若现有链路已在 Argon 上稳定，不必为「更新」强切；只有在长程代理、跨文档综合或安全研究确需更深推理时，再按配额与试用截止日做小流量对比。观察点包括正式价生效后的账单、Antigravity `/swarm` 是否进入你的主工作流，以及 Fairwind / 科研通道的实际开通节奏。
