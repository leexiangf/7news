---
title: PolyAI Dialog-RSN-1 on SageMaker JumpStart for private realtime dialog
slug: polyai-dialog-rsn-1-sagemaker-jumpstart
description: >-
  Dialog-RSN-1 on Marketplace and JumpStart: deploy a realtime voice endpoint in
  your VPC; OpenAI Realtime compatible; 16-bit PCM mono 16/24 kHz; ~30-minute
  connections; English only for now.
date: '2026-11-19'
updated: '2026-11-21'
category: ai-creation
subcategory: gen-av
tags:
  - PolyAI
  - SageMaker
  - Voice
  - Realtime
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/polyai-dialog-rsn-1-is-now-on-amazon-sagemaker-jumpstart/'
sourceLevel: A
publisher: aws
faqs:
  - question: Protocol and audio?
    answer: OpenAI Realtime; 16-bit PCM mono at 16/24 kHz; connections up to ~30 minutes.
  - question: Languages?
    answer: English only for now, per the post.
draft: false
candidateId: amazon-ml-2026-11-19-0a5e507963
---

AWS’s ML Blog (**19 Nov 2026**) lists **PolyAI Dialog-RSN-1** on **AWS Marketplace** and **Amazon SageMaker JumpStart**: a realtime complex-dialog inference model you deploy as a SageMaker endpoint in your own account / VPC, billed through AWS under existing IAM and monitoring.

## Capability bounds

| Item | Claim |
| --- | --- |
| Inference shape | Single-pass listen → reason → respond—no separate ASR handoff |
| Protocol | **OpenAI Realtime** (swap the base URL) |
| Audio | **16-bit PCM mono**, **16/24 kHz** |
| Connection | Up to ~**30** minutes |
| Language | **English only** for now |

JumpStart offers one-click deploy plus latency / throughput / cost optimized configs. Model listing + managed deploy—not a substitute for PolyAI’s hosted SaaS story; eval detail lives in the vendor launch. Load-test target accents and max session length before production.
