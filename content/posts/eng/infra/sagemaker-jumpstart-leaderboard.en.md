---
title: SageMaker JumpStart Model Leaderboard compares quality, speed, and cost
slug: sagemaker-jumpstart-leaderboard
description: >-
  AWS: Studio JumpStart Model Leaderboard with AWS-run BBH, GPQA Diamond, and
  MMLU-Pro plus TTFT, throughput, and instance $/hr on JumpStart configs; 70+
  open-weight models at launch.
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - JumpStart
  - Benchmarks
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/introducing-the-amazon-sagemaker-jumpstart-model-leaderboard/
sourceLevel: A
publisher: aws
faqs:
  - question: What’s compared?
    answer: Quality (BBH, GPQA Diamond, MMLU-Pro) plus TTFT, per-request throughput, and instance $/hr under a standardized load.
  - question: Cost caveat?
    answer: On-demand instance estimate only—no data transfer, storage, or discounts; use the Pricing Calculator for bills.
draft: false
candidateId: amazon-ml-2026-11-18-fa8035bde7
---
AWS (**18 Nov 2026**) adds a **Model Leaderboard** to the JumpStart models page in SageMaker Studio—side-by-side quality, speed, and cost under one method. Quality scores come from AWS-run **BIG-Bench Hard, GPQA Diamond, and MMLU-Pro**; performance and cost come from a standardized workload against each JumpStart deployment configuration (TTFT, tokens/s, instance $/hr).

Launch coverage is **70+** models from Meta, Google, Qwen, IBM, Arcee, and peers. Pick a use-case profile (default Max Context) and optimization goal (Balanced / Cost / Latency / Throughput), then Deploy or Customize. Selection tooling—not a new model; treat close scores as ties and re-bench on your own prompts before production.
