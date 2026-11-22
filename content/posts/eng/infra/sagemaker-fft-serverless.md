---
title: SageMaker Serverless Model Customization 支持 Full Fine-Tuning
slug: sagemaker-fft-serverless
description: >-
  AWS：Serverless Model Customization 新增 FFT（TrainingType.FULL）；Qwen3-4B+110K
  代码数据自测 LLM-as-Judge 约 90%；不当 LR 可致 MMLU 崩到约 3.6%。
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - Fine-Tuning
  - FFT
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/full-fine-tuning-fft-on-sagemaker-ai-serverless-model-customization/
sourceLevel: A
publisher: aws
faqs:
  - question: 怎么切换 FFT / LoRA？
    answer: SageMaker Python SDK 的 SFTTrainer 设 training_type=TrainingType.FULL 或 LORA，其余参数可共用。
  - question: FFT 一定更好吗？
    answer: >-
      否。作者自测中 LoRA 在部分 LLM-as-Judge 上略胜；激进 LR（≥5e-5）可把 MATH 压到约
      2–3%、MMLU 到约 3.6%。
draft: false
candidateId: amazon-ml-2026-11-18-4919d4812c
---

AWS 机器学习博客（**2026-11-18**）宣布 **SageMaker AI Serverless Model Customization** 支持 **Full Fine-Tuning（FFT）**：无需自管 GPU / 集群，即可做全参 SFT。动机写得很直白——LoRA 的低秩更新在复杂任务与超大规模数据上会碰到表达天花板，继续加 rank 也未必追上全参。

## 机制：低秩子空间 vs 全矩阵

| 方法 | 更新方式 | 典型边界 |
| --- | --- | --- |
| LoRA | 冻结原权重，注入低秩适配矩阵 | 省算力；复杂任务易平台期 |
| FFT | 同步更新全参数 | 表达更满；遗忘与超参更敏感 |

作者把质量差归因于**秩亏本身**，而不只是「可训参数更少」：低秩更新无法覆盖深层适配所需的权重变化方向。

## 实验设定（作者自测）

基座 **Qwen3-4B**，数据 **Magicoder-Evol-Instruct-110K**（算法 / 调试 / 数据结构等），切分 **90/5/5**（约 99K / 5.5K / 5.5K）。评测三件套：

| 指标 | 用途 |
| --- | --- |
| LLM-as-Judge（Nova Pro） | 语义正确性 |
| PRIMECODE（BLEU / ROUGE / F1） | 代码表面相似度 |
| MMLU | 通用知识是否被冲掉 |

大数据集上 FFT 的 LLM-as-Judge 语义正确性约 **90%**，雷达图上在 BLEU / ROUGE-2 等维度盖过 LoRA——均为作者实验。同批还扫过 DeepSeek-R1-1.5B、Nemotron-30B、Gemma-4-26B 等。

## 超参：FFT 把「遗忘」推到前台

| 旋钮 | 作者观察 |
| --- | --- |
| `learning_rate` | 全参下过高会永久覆盖预训练知识；约 **2e-5** + 10万级数据被标为相对安全区 |
| `max_epochs` | 正确性约在 **3 epoch** 到 90%；再加会全面变差 |
| `global_batch_size` | 小 batch 噪声像更高 LR，抬遗忘风险 |

反例写得很硬：LR **≥ 5e-5** 时 MATH 精确匹配可掉到约 **2–3%**，MMLU 到约 **3.6%**；两方法在 MATH 上都可能输给基座。另有配置下 LoRA 在 LLM-as-Judge 约 **81.5%** 略胜 FFT 约 **79.5%**——说明「FFT 一律更优」不成立。

SDK 一行切换：`TrainingType.FULL` ↔ `LORA`。属**能力上线 + 实验指南**；引用数字须标作者自测与任务设定。上线前用内置评测盯住 MMLU / 任务指标双线，别只看训练 loss。
