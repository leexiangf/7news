---
title: Airbnb runs coding agents on Bedrock with cost-per-task evals
slug: airbnb-bedrock-cost-per-task
description: >-
  AWS case study: Airbnb’s AirChat hits Bedrock via an LLM gateway; pre-rollout
  evals set defaults and reasoning ceilings by score and cost per task, then
  CloudWatch checks production drift.
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - AWS
  - Bedrock
  - Airbnb
  - Coding Agents
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/how-airbnb-uses-cost-per-task-to-operate-coding-agents-on-amazon-bedrock/
sourceLevel: A
publisher: aws
faqs:
  - question: Cost per task?
    answer: List-price cost of all tokens an agent spends to finish one eval task at a chosen reasoning effort.
  - question: Production signals?
    answer: CloudWatch Bedrock latency, throttles, and token counts (including cache read/write), compared against eval results to retune defaults.
draft: false
candidateId: amazon-ml-2026-11-18-32f6f88176
---
AWS’s Airbnb case study (**18 Nov 2026**) covers **AirChat** (and AirChat Remote) coding agents calling **Amazon Bedrock** through an LLM gateway. After eight new models in about five weeks, roughly two-thirds of mid-October requests hit those newcomers—vendor charts don’t mirror Airbnb’s work—so two systems run in parallel.

Before rollout: evals on in-house tasks measure **score** and **cost per task** (list-price tokens to finish one task) across models and reasoning efforts, then set defaults and effort ceilings. After rollout: CloudWatch latency, TTFT, throttles, and input/cache/output tokens show production drift versus those evals. Operations practice piece—not a new AWS product launch.
