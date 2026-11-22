---
title: 华为云发布并开源 CloudRobo-WM1.2 昇腾原生具身世界模型
slug: huawei-cloudrobo-wm1-2
description: >-
  「行业 AI 梦工厂」开源昇腾原生具身世界模型 CloudRobo-WM1.2：共享骨干 + DualAct；自称 RoboTwin 2.0、LiberoPro
  2.0 第一；五项核心技术与四种推理模式。
date: '2026-11-17'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - 华为云
  - CloudRobo
  - 具身智能
  - 昇腾
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.huaweicloud.com/news/2026/20261116171910882.html'
sourceLevel: S
publisher: huawei
faqs:
  - question: 发布了什么？
    answer: CloudRobo-WM1.2——昇腾原生具身世界模型，随「行业 AI 梦工厂」发布并开源；含共享骨干与 DualAct 等。
  - question: 评测怎么说？
    answer: 华为云称在 RoboTwin 2.0、LiberoPro 2.0 均位列第一——厂商自述，复现须对齐题集与提交协议。
draft: false
candidateId: huawei-cloud-news-2026-11-17-a5dd50e249
---

华为云于杭州（**2026-11-16**）宣布「行业 AI 梦工厂」发布，并**开源**昇腾原生具身世界模型 **CloudRobo-WM1.2**。官方称采用共享世界模型骨干做预测增强表征，并以世界模型原生 **DualAct** 做动作生成；在 **RoboTwin 2.0**、**LiberoPro 2.0** 评测中均称位列第一。

## 为什么需要「世界模型原生动作」

具身从实验室进真实物理世界，常见卡点：多模态物理理解、认知与动作耦合、异构数据难规模化、跨本体泛化、实时推理成本。CloudRobo-WM1.2 用五项技术对症：

| 技术 | 要点 |
| --- | --- |
| PPA 多模态世界表征 | 从「看懂静态」到预判 4D 交互 |
| DualAct / MOT | 世界模型直接出高精度动作；可调动作专家尺寸 |
| 多粒度监督自适应预训练 | 局部缺失数据不整条丢弃，吃异构标注 |
| 本体语义保真跨具身建模 | 单臂 / 双臂 / 轮式统一「动作翻译」 |
| 四种弹性推理模式 | World/Expert Action × Joint/Action-only，按算力与延迟组合 |

## 开放与工程叙事

三位一体口号：坚定投入、全面开放（模型 / 工具链 / 昇腾云）、共建共享。工程侧称覆盖仿真冷启动、云原生训练、跨本体适配、持续学习、安全运行等六大能力——多为平台宣传口径。

开源仓库、许可与复现步骤以华为云原文及代码托管页为准；榜单名次为厂商自述。对具身读者：可当昇腾栈世界模型开源信号，先核 license 与基准协议再引用「第一」。
