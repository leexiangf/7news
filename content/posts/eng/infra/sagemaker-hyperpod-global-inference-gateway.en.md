---
title: HyperPod Global Inference Gateway — one endpoint across clusters
slug: sagemaker-hyperpod-global-inference-gateway
description: >-
  AWS: SageMaker HyperPod adds a Global Inference Gateway—one SigV4 endpoint
  across registered clusters and Regions, scoring KV headroom, queue, proximity,
  and errors with automatic failover.
date: '2026-11-20'
updated: '2026-11-22'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - HyperPod
  - Inference
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/introducing-amazon-sagemaker-hyperpod-global-inference-gateway-one-endpoint-across-regions-and-clusters/'
sourceLevel: A
publisher: aws
faqs:
  - question: Vs per-cluster Inference Gateway?
    answer: The cluster gateway still picks pods; Global is the second tier that picks among published clusters.
  - question: Regions?
    answer: The post lists availability in 13 AWS Regions.
draft: false
candidateId: amazon-ml-2026-11-20-62e6c491de
---
AWS’s ML blog (**20 Nov 2026**) introduces the **Amazon SageMaker HyperPod Global Inference Gateway**: a SageMaker-managed tier above each cluster’s Inference Gateway that fronts every HyperPod cluster you register—same Region or across Regions—as **one** invoke path. Clients sign with SigV4/IAM; traffic rides AWS PrivateLink. Inside a cluster, the existing gateway still places work on pods using live signals such as KV utilization.

Default routing weights: RegionProximity **0.40**, QueueDepth **0.25**, KVHeadroom **0.20**, ErrorRate **0.15** (all four required and must sum to 1.0 if overridden). Failed clusters lose traffic automatically; a failed request retries once on another cluster unless streaming has started. Publish clusters via `globalRouting` in `InferenceGatewayConfig`, then `CreateGlobalInferenceGateway`. Listed in **13** Regions. Cross-cluster inference routing—related to, but distinct from, same-week SageMaker endpoint cross-Region routing.
