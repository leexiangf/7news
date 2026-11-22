---
title: GitHub Copilot 上架 Gemini 4 Neon：Pro+ 起可选，企业可策略开关
slug: gemini-4-neon-github-copilot
description: >-
  GitHub 于 2026-11-18 宣布 Gemini 4 Neon 在 Copilot 一般可用：面向 agentic 编程与多步工具调用，
  Pro+/Max/Business/Enterprise 可在模型选择器中启用，计费按提供商标价、滚动放量。
date: '2026-11-18'
updated: '2026-11-20'
category: ai-coding
subcategory: ide
tags:
  - GitHub Copilot
  - Gemini 4 Neon
  - AI 编程
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot'
  - 'https://deepmind.google/blog/introducing-gemini-4-neon/'
sourceLevel: A
publisher: github
faqs:
  - question: 哪些套餐能用？
    answer: >-
      Changelog 写明面向 Copilot Pro+、Max、Business 与
      Enterprise；在模型选择器中选用。放量为渐进，未见时需稍后重试。
  - question: 怎么计费、企业如何管控？
    answer: >-
      按提供商标价走用量计费，细则见 Copilot 模型与定价页。Business/Enterprise 管理员可在 Copilot
      设置的模型策略里开关；默认新模型自动启用，除非关闭全局默认或显式禁用该模型。
draft: false
candidateId: github-changelog-2026-11-18-f6cf8ded0e
---
GitHub Changelog 在 2026 年 11 月 18 日宣布：**Gemini 4 Neon** 已在 GitHub Copilot **一般可用**。定位写给 agentic 编程、多步工具调用与知识工作；这是 IDE/Copilot 分发面的上架通知，模型能力细节仍以 Google DeepMind 同日 Neon 公告为准。

Changelog 转述 Google 的对比说法：Neon 在任务质量上接近 Gemini 4 Carbon，但单任务 token 成本更低；相对 Carbon，响应起步更快、编码任务上更少做未请求的改动，也更少对代码、工具或测试结果做无依据断言。上述比较来自 Google 表述经 GitHub 转引，不是 GitHub 独立评测。

可用性与管控条款更具体。面向 **Copilot Pro+、Max、Business、Enterprise**；用户在模型选择器中挑选 Neon。放量是**渐进式**的，暂时看不到属预期现象。计费走**提供商标价**的用量模式，细节指向 Copilot 的 Models and pricing 页面。Business / Enterprise 管理员可在 Copilot 设置的**模型策略**中管理访问；在默认「新模型自动启用」下，除非关掉全局默认或显式禁用 Neon，新模型会对组织生效。

对日常在 Copilot 里写代码的团队：若已在评估 Carbon 级深度与账单，Neon 提供一条「同生态、偏效率」的可选模型；先在小范围任务对比未请求改动率与工具调用诚实性，再决定是否设为默认。企业侧应先确认模型策略是否仍开着自动启用，避免未评审模型直接进入生产会话。更完整的规格、价目与 Fairwind 等通道，回看 DeepMind Neon 原文与 Google 价表。
