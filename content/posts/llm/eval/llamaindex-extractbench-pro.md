---
title: LlamaIndex 发布 ExtractBench Pro，专打文档抽取长尾难题
slug: llamaindex-extractbench-pro
description: >-
  LlamaIndex：ExtractBench Pro 以 100 份合成长尾文档覆盖六类挑战；相对原 ExtractBench，各档 Value F1
  自述掉 18.5–47 个百分点，并新增「满分文档占比」指标。
date: '2026-10-15'
updated: '2026-11-23'
category: llm
subcategory: eval
tags:
  - LlamaIndex
  - ExtractBench
  - Evaluation
  - Document Extraction
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-extractbench-pro'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: 六类挑战是什么？
    answer: 解释规则、自定义术语、条件聚合、关系图、图表与地图、超长单页。
  - question: 如何运行？
    answer: 克隆 ExtractBench 仓库，执行 uv run extract-bench download --dataset pro。
draft: false
candidateId: llamaindex-2026-11-23-2e28959a49
---
LlamaIndex（**2026-10-15**）发布 **ExtractBench Pro**：在原 ExtractBench（约 370 篇）之上，用客户真实长尾场景启发的 **100** 份确定性合成文档，覆盖解释规则、内部术语、条件聚合、关系图、图表/地图、超长单页六类挑战。通稿强调：刚性流水线在此易崩，带工具的 Agent 更能适配。

相对原基准，LlamaExtract 各档 Value F1 自述掉 **18.5–47.0** 个百分点。约 **25** 美分/页以下，其档位仍处成本-性能前沿；更高成本区间才被最贵的编码 Agent 追上。新增 **% Perfect**（Value F1=100% 的文档占比）。每文档时限约 **30** 分钟，超时记 0。数据集与代码仍走 ExtractBench 渠道。这是评测集扩展；分数为厂商对照实验。
