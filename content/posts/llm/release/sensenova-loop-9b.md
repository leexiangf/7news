---
title: 商汤正式发布 SenseNova Loop-9B，循环层换计算深度
slug: sensenova-loop-9b
description: >-
  商汤发布 SenseNova Loop-9B 正式版：约 9B 参数、循环复用中间层至 56 次层计算，512K
  上下文；称 NL2Repo/AIDABench 接近 Qwen3.8-27B；权重与 AWQ 4bit 已开放。
date: '2026-11-17'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - SenseTime
  - SenseNova
  - Loop
  - Open Weights
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.sensetime.com/cn/news/sensenova-loop-9b-20261118-1059'
sourceLevel: A
publisher: sensetime
faqs:
  - question: 架构要点？
    answer: 约 9B 独立参数；第 4–27 层共享权重循环执行 2 次，32 物理层对应 56 次层计算；双流 mHC；文本+图像入、文本出；最长 512K。
  - question: 部署与下载？
    answer: 称 4bit 权重约 4.9GB；64K+8bit KV 约 10 GiB；HF collection sensenova/sensenova-loop；需兼容 Loop/mHC 的推理实现。
draft: false
candidateId: sensetime-cn-2026-11-16-b4298b8faa
---
商汤科技通稿（**2026-11-17**）宣布 **SenseNova Loop-9B** 正式版：在 Preview 的 Loop + 双流 **mHC** 路线上继续压参数效率——约 **9B** 独立参数，通过把第 **4–27** 层共享权重执行**两次**，把 **32** 个物理解码层扩成一次前向 **56** 次层计算；支持文本与图像输入、文本输出，上下文最长 **512K**。

评测为厂商自述：相对 Preview 多项榜单提升；相对 **Qwen3.8-27B**，**NL2Repo** 约 **41.36** vs **44.60**，**AIDABench** 约 **65.31** vs **65.01**。部署侧称官方 **AWQ 4bit** Day 0 权重约 **4.9GB**；4bit 权 + 8bit KV 时，64K 约 **10 GiB**、256K 约 **15 GiB**。权重与代码开放，集合页 [Hugging Face](https://huggingface.co/collections/sensenova/sensenova-loop)；环境示例含 Transformers **5.18.0**。文末承认复杂工具约束、长程稳定性与高质量动态页仍需多轮；默认循环次数为 **2**，更高循环有实验增益但未作默认。属**开源权重正式版**通稿，基准数字需回原文表格核对。
