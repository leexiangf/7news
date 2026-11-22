---
title: SageMaker Serverless Model Customization adds Full Fine-Tuning
slug: sagemaker-fft-serverless
description: >-
  AWS adds FFT (TrainingType.FULL) to Serverless Model Customization; Qwen3-4B +
  110K coding data cites ~90% LLM-as-Judge; bad LR can crater MMLU to ~3.6%.
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - Fine-Tuning
  - FFT
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/full-fine-tuning-fft-on-sagemaker-ai-serverless-model-customization/
sourceLevel: A
publisher: aws
faqs:
  - question: How to switch FFT vs LoRA?
    answer: Set SFTTrainer training_type to TrainingType.FULL or LORA in the SageMaker Python SDK—same job shape.
  - question: Is FFT always better?
    answer: >-
      No. LoRA can win some LLM-as-Judge runs; aggressive LR (≥5e-5) can drop MATH
      to ~2–3% and MMLU to ~3.6%.
draft: false
candidateId: amazon-ml-2026-11-18-4919d4812c
---

AWS’s ML Blog (**18 Nov 2026**) adds **Full Fine-Tuning (FFT)** to **SageMaker AI Serverless Model Customization**—full-parameter SFT without provisioning GPUs or clusters. The pitch is blunt: LoRA’s low-rank updates plateau on complex tasks and very large datasets; raising rank may still miss full-rank adaptation.

## Mechanism: low-rank subspace vs full matrix

| Method | Update | Typical bound |
| --- | --- | --- |
| LoRA | Freeze base weights; inject low-rank adapters | Cheap; complex tasks plateau |
| FFT | Update all parameters together | Fuller expressivity; forgetting + hypers more sensitive |

Authors blame **rank deficiency itself**, not merely “fewer trainable params”: a low-rank update cannot span the weight-change directions deep adaptation needs.

## Experiment setup (author-run)

Base **Qwen3-4B**, data **Magicoder-Evol-Instruct-110K**, split **90/5/5** (~99K / 5.5K / 5.5K). Three evaluators:

| Metric | Job |
| --- | --- |
| LLM-as-Judge (Nova Pro) | Semantic correctness |
| PRIMECODE (BLEU / ROUGE / F1) | Surface code similarity |
| MMLU | Whether general knowledge survives |

At large scale, FFT reaches ~**90%** LLM-as-Judge semantic correctness and leads on BLEU / ROUGE-2 in the radar chart—author figures. The same sweep also covered DeepSeek-R1-1.5B, Nemotron-30B, Gemma-4-26B, and peers.

## Hypers: forgetting moves to the front row

| Knob | Author takeaway |
| --- | --- |
| `learning_rate` | Too high permanently overwrites pretrain knowledge; ~**2e-5** + 100K-scale data marked a safer zone |
| `max_epochs` | Correctness ~**90%** at 3 epochs; going further hurt every variant |
| `global_batch_size` | Small batches behave like higher LR and raise forgetting risk |

Hard counterexamples: LR **≥ 5e-5** can drop MATH exact match to ~**2–3%** and MMLU to ~**3.6%**; both methods can underperform the base on MATH. In one config LoRA’s LLM-as-Judge (~**81.5%**) edged FFT (~**79.5%**)—so “FFT always wins” is false.

SDK flip: `TrainingType.FULL` ↔ `LORA`. Capability launch plus experiment guide—cite numbers with author-run setup. Before ship, watch MMLU **and** task metrics; training loss alone will lie.
