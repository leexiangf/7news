---
title: SageMaker cross-region inference routing keeps serving through capacity shortfalls
slug: sagemaker-cross-region-inference-routing
description: >-
  SageMaker AI inference router registers existing multi-region/account
  endpoints as destinations; prefer local when healthy, shift new requests
  elsewhere on shortfalls—no capacity creation.
date: '2026-11-19'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - Inference
  - HA
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/keep-inference-running-through-regional-capacity-shortfalls-with-cross-region-inference-routing-in-amazon-sagemaker-ai/'
sourceLevel: A
publisher: aws
faqs:
  - question: Does it auto-scale?
    answer: No. The router does not create capacity or deploy models—it only schedules among registered destinations.
  - question: How do apps call it?
    answer: Call the router, not a specific endpoint; realtime responses return destination and routing reason.
draft: false
candidateId: amazon-ml-2026-11-19-0b5c4561b2
---

AWS’s ML Blog (**19 Nov 2026**) ships **cross-region inference routing** for **Amazon SageMaker AI**: a new **inference router** resource gives apps one invoke path across realtime endpoints, inference components, or async endpoints you already deployed in one or more Regions / accounts.

## Mechanism

| Concept | Meaning |
| --- | --- |
| Router | Regional resource—the app entrypoint |
| Routing target | Logical model name |
| Destination | Full endpoint ARN |

Prefer local destinations when healthy; when not, shift **new requests** to other registered destinations, then drain back as health recovers. Direct `InvokeEndpoint` still works; `InferenceId` / `CustomAttributes` pass through; realtime responses return destination and routing reason.

## Bounds

The router does **not** create capacity, scale, deploy, or copy artifacts—it only schedules what you already registered. Managed failover routing, replacing home-grown cross-region retry and debounce. Quotas and billing live in the docs; before production, register real dual-region destinations and rehearse a cutover.
