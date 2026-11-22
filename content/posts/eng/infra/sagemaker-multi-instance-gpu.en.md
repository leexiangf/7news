---
title: 'SageMaker Inference adds MIG: partition GPUs for multi-model endpoints'
slug: sagemaker-multi-instance-gpu
description: >-
  AWS enables NVIDIA MIG on SageMaker Inference so inference components can
  request GPU partitions—raising multi-model utilization with hardware
  isolation.
date: '2026-11-06'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - MIG
  - inference
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/sagemaker-inference-now-supports-multi-instance-gpu-to-maximize-gpu-utilization-for-model-endpoints/
sourceLevel: A
publisher: amazon
faqs:
  - question: Which endpoints support it?
    answer: >-
      Endpoints that use inference components. Single-model, serverless, and
      heterogeneous pools cannot be partitioned.
  - question: What are the limits?
    answer: >-
      At most seven partitions per GPU (accelerator-dependent); layout is chosen
      at endpoint create; multi-GPU models still need whole devices.
draft: false
candidateId: amazon-ml-2026-11-06-b620342f92
---
AWS announced **SageMaker Inference** support for **NVIDIA Multi-Instance GPU (MIG)**: split a physical GPU into hardware-isolated partitions with fixed compute and memory. It builds on **inference components**—a partition is requested alongside CPU and memory—so you can place more models per instance or take a slice of a newer accelerator instead of a whole older one.

Versus soft sharing on multi-model endpoints or self-managed Kubernetes MIG, SageMaker handles configuration, placement, and scaling while stressing predictable latency, fault isolation, no cold starts, and tenant isolation. Limits: ≤7 partitions per GPU, layout fixed at endpoint creation, multi-GPU models still need whole devices. Salesforce appears in the co-design narrative; treat utilization and cost figures as vendor measurements.
