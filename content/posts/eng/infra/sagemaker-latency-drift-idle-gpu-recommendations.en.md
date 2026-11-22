---
title: 'SageMaker default endpoint checks: latency drift, idle GPUs, missed optimizations'
slug: sagemaker-latency-drift-idle-gpu-recommendations
description: >-
  SageMaker AI monitors vLLM+GPU endpoints by default for week-over-week
  latency/TTFT, idle GPUs, and gaps like speculative decoding off; AWS Health
  notifies, side-path benches, humans decide production changes.
date: '2026-11-19'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - Latency
  - Observability
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/amazon-sagemaker-ai-now-detects-latency-drift-idle-gpus-and-missed-optimizations-on-your-inference-endpoints/'
sourceLevel: A
publisher: aws
faqs:
  - question: On by default?
    answer: Yes for inference endpoints on vLLM containers and GPU instances; set OPT_OUT_TRACKING on the container to exit.
  - question: Does it change production automatically?
    answer: No. Notify first, optionally run inference recommendations; applying a change needs a human.
draft: false
candidateId: amazon-ml-2026-11-19-b3fe3802af
---

AWS’s ML Blog (**19 Nov 2026**) turns on **default monitoring** for eligible generative inference endpoints on **Amazon SageMaker AI**: latency, GPU utilization, and serving config only—**no** request/response content. Motive: day-one-tuned endpoints quietly drift as traffic, prompt length, vLLM releases, and unused optimizations change—nothing “fails,” so no alarm until users or the bill notice.

## Three findings → four-step loop

| Finding | Trigger |
| --- | --- |
| Latency drift | Week-over-week rise in p50 end-to-end or TTFT |
| Unused capacity | GPUs stay low-util even at peak windows |
| Configuration gaps | Stale container, speculative decoding off, untuned kernels, etc. |

Loop: **observe → AWS Health (and email) notify (one summary per endpoint) → Studio agentic side-path bench → human decide**. Benches use observed traffic on **separate compute** via inference recommendations—compare latency / throughput / cost per million tokens; production stays put until you apply a variant. Monitoring has no extra GPU cost; benches bill normally. `OPT_OUT_TRACKING` stops telemetry and notices. Continuous optimization signal—not auto-mutating production.
