---
title: "模型定价台账：把输入输出和缓存分开记"
slug: "pricing-notes"
description: "成本表不要只写「每百万 Token」。把输入、输出、缓存命中分列，决策才站得住。"
date: "2026-10-15"
category: "eng"
subcategory: "cost"
tags: ["成本", "专栏"]
draft: false
---

## 记什么

- 输入单价 / 输出单价
- 缓存读写单价
- 典型请求的输入输出比
- 失败重试是否计费

没有分列，优化讨论会停在感觉上。
