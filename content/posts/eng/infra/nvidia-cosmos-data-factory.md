---
title: NVIDIA Cosmos Data Factory：两段提示编排物理 AI 训练数据
slug: nvidia-cosmos-data-factory
description: >-
  CDF：5 套蓝图 + 6 项技能，由编码 Agent 编排策展/增强/合成；自称数据集组装最高约 60×、AV 场景约 45× 更便宜（仅
  GPU 算力）。
date: '2026-11-18'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Cosmos
  - Physical AI
  - Synthetic Data
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/
sourceLevel: S
publisher: nvidia
faqs:
  - question: 蓝图覆盖？
    answer: AV 场景生成、人物属性增强、视频天气/光照增强、稀有事件视频、缺陷图像等。
  - question: 成本数字边界？
    answer: 八卡 RTX PRO 6000 自测日吞吐与 $/资产；仅 GPU 算力，不含采数、审核、存储与 Agent 费用。
draft: false
candidateId: nvidia-developer-2026-11-18-b1ff58d64c
---

NVIDIA 技术博客（**2026-11-18**）介绍 **Cosmos Data Factory（CDF）**：五套云原生蓝图 + 六项可组合技能，由编码 Agent 用两段提示完成预检/编排与跑蓝图——把策展、增强、合成、标注串成「prompt-to-data」，面向物理 AI 世界模型训练。

## 两段提示工作流

1. **Prompt 1** — 克隆 Orchestration 仓库，跑 preflight / setup（只检查、再改环境）  
2. **Prompt 2** — 按用例跑对应蓝图（检索 → 变换 → Evaluator 查物理合理性 → 自动标注）

| 蓝图 | 用途 |
| --- | --- |
| AV Dataset Generation | 检索驾驶片段，天气/雾雪变换，Cosmos Evaluator 查合理性 |
| Image Attribute Augmentation | 人物裁剪服装属性变体 + 检索标签 |
| Video Data Augmentation | 保留结构，改光照/天气/环境 |
| Event Video Generation | 从单图生成跌倒、烟火等稀有事件 |
| Defect Image Generation | PCB / 玻璃 / 金属缺陷图（可接 Isaac Sim USD） |

六技能可拆用：Auto Labeling、AnomalyGen、Augmentation、Curation/Retrieval、Simulation、Orchestration。Cosmos Dataset Search 称 Apache 2.0 开源。

## 自测吞吐与「倍速」边界

八卡 **RTX PRO 6000 Blackwell**、约 **$40**/服务器·时（约 **$960**/日）测日吞吐后除以产量估单价——**仅算力**：

| 用例 | 口径 |
| --- | --- |
| Defect 组装 | 约两月 → 一日，约 **60×** |
| AV 场景 | 约 **$2.66**/clip vs 上路采约 **$125**，约 **45×** 更便宜 |
| 人物属性增强 | 约 **$0.023**/对 vs 采买约 **$0.25**，约 **10×** |
| 视频增强 | 约 **$3.15**/约 5 分钟 clip vs 约 **$22**，约 **7×** |

客户案例数字（召回 +24%、AOI 人工约 -85% 等）为「组织报告 / 预期」口径。属平台技能说明，非单模型发版；引用倍速须写清「仅 GPU 算力、八卡设定」。
