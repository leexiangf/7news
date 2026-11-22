---
title: 'Kinference: an open inference control plane for vLLM on Kubernetes'
slug: vllm-kinference
description: >-
  Buoyant’s open-source Kinference adds rate limits, tenant metering, KV-aware
  load balancing, and InferencePolicy on vLLM; vendor benches cite ~95% lower
  median TTFT and ~7.4× shared-prefix goodput vs plain K8s balancing.
date: '2026-11-04'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - Kinference
  - Kubernetes
  - inference
author: Editorial
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-04-introducing-kinference'
  - 'https://kinference.ai/'
sourceLevel: A
publisher: vllm
faqs:
  - question: How does Kinference relate to vLLM?
    answer: >-
      vLLM runs inference; Kinference is the control plane for routing, policy,
      metering, and load balancing. Point clients at its HTTP endpoint.
  - question: How should the 95% TTFT claim be read?
    answer: >-
      Buoyant’s public bench versus standard Kubernetes load balancing on one
      workload; cite shared-prefix/multiturn and load settings when quoting.
draft: false
candidateId: vllm-blog-2026-11-04-84a771cab1
---

The vLLM blog (**4 Nov 2026**) introduces **Kinference** (kay-inference) from [Buoyant](https://buoyant.io/): a **control plane** for building inference platforms on **vLLM**—token rate limiting, tenant usage and cost tracking, intelligent load balancing, and YAML **InferencePolicy**. Point OpenAI- or Anthropic-compatible clients at its HTTP endpoint; it can sit beside an existing stack. License: Apache v2.

## Why a plain Service falls short

Heterogeneous models, GPU pools, and clients evolve together. Round-robin Kubernetes Services cannot see GPU queues, historical performance, or **KV-cache** contents. Kinference’s bet: send each request to the worker that will do the **least** work for that request—especially via cache affinity.

| Axis | Stock K8s LB | Kinference (claimed) |
| --- | --- | --- |
| Signals | Little inference semantics | Queues, history, KV contents |
| Policy | Hard to express | YAML InferencePolicy, git-reviewable |
| Metering | DIY | Per-tenant tokens / latency / cache hits |

## Benchmark numbers (vendor)

Unloaded latency bench (isolating KV-aware LB): versus a “service” baseline, one workload saw ~**95%** lower median TTFT and ~**45%** lower median end-to-end latency.

Capacity bench (goodput inside a latency SLO): ~**7.4×** on shared-prefix and ~**3.5×** on multiturn; Kinference held the SLO at concurrency 32 (shared-prefix) and 8 (multiturn), while the kube-proxy path missed the SLO at every measured concurrency. See their public benchmark write-up for setup.

## What the policy layer is for

Platform questions become auditable rules, for example:

- Request a **class** of models (“anything good for coding”), not a pinned quantized checkpoint
- Route “easy” prompts to cheaper models—unless PredictedTTFT says the expensive, warm-cache worker is still better
- Burst to Bedrock / Databricks when local queues saturate; **fail closed** on PII so those requests never leave the cluster

Install path: Gateway API CRDs + Helm (gateway / kinference charts; docs use `--devel`). For platform teams, Kinference is a gateway-plus-policy pattern, **not** a vLLM replacement—quote TTFT/goodput with workload type attached.
