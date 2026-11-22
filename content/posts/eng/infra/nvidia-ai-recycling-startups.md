---
title: NVIDIA 介绍四家用视觉 AI 分拣回收物的 Inception 创业公司
slug: nvidia-ai-recycling-startups
description: >-
  COP31 语境下介绍 AIRECO、EverestLabs、Greyparrot、reverse.fashion：Jetson/RTX
  边缘推理与数据中心训练；数字均为当事方自述。
date: '2026-11-10'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - 视觉 AI
  - 可持续发展
  - Jetson
author: 编辑部
locale: zh
sourceUrls:
  - 'https://blogs.nvidia.com/blog/ai-recycling-startups/'
sourceLevel: A
publisher: nvidia
faqs:
  - question: 这是产品发版吗？
    answer: 否。Inception 成员案例综述；准确率、吨数、减排均为各公司自述或估算。
  - question: 全球背景数字？
    answer: 文称循环经济材料占比不足 7%；市政固废年产逾 20 亿吨，2050 或近翻倍——背景引用，非 NVIDIA 测得。
draft: false
candidateId: nvidia-blogs-2026-11-11-34dcc0e759
---

NVIDIA 公司博客（**2026-11-10**）在 COP31「零废弃」语境下介绍四家 **Inception** 成员如何用视觉 AI 与机器人从混合废物流回收材料。可持续负责人 Josh Parker 称 AI 有助于识别成分并自动化分拣。属**案例综述**，非单一产品发版。

## 四家速览（当事方自述）

| 公司 | 硬件 / 栈 | 关键口径 |
| --- | --- | --- |
| **AIRECO**（台湾） | Jetson Orin NX + 机械臂 | 台南试点识别超 **95%**；规划 **1.8 万→4.8 万吨/年**、运营成本约 **-85%** |
| **EverestLabs**（美） | 边缘 RTX + 数据中心 GPU 训练 | 约 **150** 台机器人；约 **400 亿** 物体、回收约 **2.5 万吨**、约 **3 万吨** CO₂e |
| **Greyparrot**（英） | GPU 训练 + Jetson 边缘 | **300+** 系统、**20+** 国；15 吨抽检 **375 小时→6 小时**；效率升约 **10%–30%**；Amcor 食品级塑料产率约 **+12%** |
| **reverse.fashion**（柏林） | TensorRT + Jetson，十余模型 | 传送带约 **3 m/s**；一小时约等于原先一周人工分拣 |

Greyparrot 另称皮带最高约 **4 m/s**，累计逾万亿 bounding box。背景段：全球进入经济体的材料中循环占比不足 **7%**；市政固废年逾 **20 亿**吨——引用时区分「行业背景」与「公司自测」。

对读者：采用与减排数字需回原文核验口径；不要把四家故事合成「NVIDIA 产品指标」。
