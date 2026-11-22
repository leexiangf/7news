---
title: Foundry Managed Compute goes GA for open-model serving
slug: foundry-managed-compute-ga
description: >-
  Microsoft: Foundry Managed Compute is generally available—150+ open models on
  dedicated GPUs (NVIDIA A100/H100/H200 or AMD MI300X), plus LoRA and BYO-weights
  previews.
date: '2026-11-20'
updated: '2026-11-22'
category: eng
subcategory: infra
tags:
  - Microsoft
  - Foundry
  - Open Models
  - GPU
author: Editorial
locale: en
sourceUrls:
  - 'https://devblogs.microsoft.com/foundry/managed-compute-ga/'
sourceLevel: A
publisher: microsoft
faqs:
  - question: Vs managed model APIs?
    answer: You pick open weights; Foundry runs containers and the serving runtime on dedicated GPUs, billed hourly per accelerator.
  - question: Previews?
    answer: LoRA adapter hosting and Bring Your Own Weights (limited public preview) were announced the same day.
draft: false
candidateId: microsoft-foundry-2026-11-20-e52310c474
---
Microsoft’s Foundry blog (**20 Nov 2026**) makes **Managed Compute** **generally available**: since the Build preview it has scaled capacity, improved prompt reuse, and added US/EU Data Zones. The pitch is open-weight serving that feels like a managed API—Foundry provisions GPUs, maintains images, and operates the runtime.

The catalog lists **150+** Hugging Face models under the Managed Compute filter; deployment templates set context length, runtime, and GPUs (NVIDIA A100/H100/H200 or AMD MI300X). Scale by raising `capacity`; prompt-aware and load-aware routing plus optional speculative decoding are called out. Supply-chain notes cover license review, SafeTensors checks, signed images, and weights staged in Azure so deploys need not hit the Hub. Same-day previews: multi-adapter **LoRA** on a shared base, and Bring Your Own Weights (limited public preview). Managed open-model serving GA—confirm quota and Regions in the portal.
