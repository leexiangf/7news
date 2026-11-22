---
title: DeepSeek API：deepseek-flash 命名与峰时计价规则
slug: deepseek-pricing-snapshot
description: >-
  调用名用 deepseek-flash（V4.1-Flash-1017）；旧名仍可接受但按 Flash 价；非峰时为峰时一半；Flash 输入 cache
  miss 峰时约 $0.3/MTok。
date: '2026-11-20'
updated: '2026-11-21'
category: llm
subcategory: pricing
tags:
  - DeepSeek
  - API
  - 定价
author: 编辑部
locale: zh
sourceUrls:
  - 'https://api-docs.deepseek.com/quick_start/pricing'
sourceLevel: S
publisher: deepseek
faqs:
  - question: 命名怎么计费？
    answer: >-
      使用 deepseek-flash；旧名 deepseek-v4-flash 等仍接受，但已退役模型由
      DeepSeek-V4.1-Flash-1017 服务并按 Flash 价计费。
  - question: 峰时如何定义？
    answer: >-
      非峰时价为峰时一半；峰时为周一至周五 UTC 01:00–04:00 与 06:00–10:00（中国公共假日除外），其余为非峰时。
draft: false
candidateId: deepseek-pricing-2026-11-20-bb9241e978
---

DeepSeek API 文档 Models & Pricing 页约定：调用时模型名使用 **`deepseek-flash`**（版本 **DeepSeek-V4.1-Flash-1017**）。旧名 `deepseek-v4-flash`、`deepseek-v4-flash-vision-exp` 仍可接受，但对应模型已退役，请求由 Flash-1017 承接并按 Flash 价计费。另列 **`deepseek-v4-pro`**（V4-Pro-0813）。上下文长度 **1M**，最大输出 **384K**；Flash 支持 Vision，Pro 不支持。

## Token 单价（每 1M tokens，文档表）

| 项 | Flash 非峰 / 峰 | Pro 非峰 / 峰 |
| --- | --- | --- |
| 输入（cache hit） | $0.003 / $0.006 | $0.022 / $0.044 |
| 输入（cache miss） | $0.15 / $0.30 | $0.66 / $1.32 |
| 输出 | $0.60 / $1.20 | $1.98 / $3.96 |
| 并发上限 | 2500 | 500 |

非峰时价为峰时一半。峰时：周一至周五 **UTC 01:00–04:00** 与 **06:00–10:00**（不含中国公共假日）；周末与中国公共假日全天为非峰时。

## 其他计费

Search / Fetch API：各 **$0.75** / 千次成功请求。自 **2026-11-18 12:00**（北京时间）起，模型调用触发的服务端 search / web fetch **不再单独计费**，结果并入上下文按 token 计。文件解析 / OCR：**$0.225** / 千页。TTS / ASR 另有列表价与限时五折。

价表可变；对账前打开文档实时页核对。
