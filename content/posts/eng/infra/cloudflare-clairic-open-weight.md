---
title: Cloudflare 开源 Clairic / Clairic-flash：抽取模型上 Workers AI 与 Hugging Face
slug: cloudflare-clairic-open-weight
description: >-
  Clairic（约 27B）与 Clairic-flash（约 9B）开放权重：Workers AI 托管，HF 可下；并行 slot 生成改架构，自报评测与延迟，
  并给出促销价至 2026-12-01。
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Cloudflare
  - Clairic
  - Workers AI
  - 开源权重
author: 编辑部
locale: zh
sourceUrls:
  - 'https://blog.cloudflare.com/open-clairic/'
sourceLevel: A
publisher: cloudflare
faqs:
  - question: 两个端点怎么对应？
    answer: >-
      `@cf/cloudflare/clairic` 为约 27B；`@cf/cloudflare/clairic-flash` 为约 9B。预览期旧端点原地换成更高质量
      Clairic。
  - question: 怎么计费？
    answer: >-
      只收输入 token。促销至 2026-12-01 两者均为 $0.10/M input；之后 Clairic $0.24、flash 仍
      $0.10。
draft: false
candidateId: cloudflare-2026-11-18-9304916241
---

Cloudflare 博客（**2026-11-18**）宣布更新版 **Clairic** 与 **Clairic-flash** 成为开放权重抽取模型：推理走 **Workers AI**，完整权重上 **Hugging Face**。同文把团队定位为 **Workers AI Superintelligence**，并称其后还有 Clef、Clairic 等路线。

## 相对预览版改了什么

预览反馈集中在「从非结构化材料里抠字段」。新版架构改为：普通文本/数字字段用**并行 slot 自回归**——各字段用已写 token 选下一 token，并在各自结束符停下，仍在同一 serving batch 里推进。计算、估算、时长与算术等另有专用头。typed API 仍保留置信度、字符 span 与概率。

| 端点 | 规模（官方口径） | 定位 |
| --- | --- | --- |
| `@cf/cloudflare/clairic` | 约 **27B** | 更高质量抽取 |
| `@cf/cloudflare/clairic-flash` | 约 **9B** | 更轻更快 |

媒体输入：合计最多约 **4** 张图或 PDF 页；行项目可按行返回。官方称内部评测上图像读取错误从 207 降到 0——**自报数字**，宜当方向参考。

## 延迟与价格（厂商自测）

延迟表给出完整 HTTP 响应（含全部字段）的 p50/p95：例如 fresh text 上 Clairic 约 **358 / 736 ms**，flash 约 **155 / 328 ms**——仍远快于典型通用 LLM 同类工作。

| 模型 | 正式价（$/M input） | 促销至 2026-12-01 |
| --- | --- | --- |
| Clairic（27B） | **0.24** | **0.10** |
| Clairic-flash（9B） | **0.10** | **0.10** |

只收输入 token（输出成本由 Cloudflare 吸收）。挂在预览 Clairic 端点的应用会**原地**吃到新模型；成本敏感流量可主动切 flash。许可、模型卡与 schema 以博客、Workers AI 文档与 HF 仓库为准。
