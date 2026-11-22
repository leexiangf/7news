---
title: Lambda wires 10K+ GB300 GPUs with NVIDIA Photonics CPO switches
slug: lambda-nvidia-photonics
description: >-
  Lambda connects GB300 NVL72 racks with NVIDIA Photonics CPO; tests cite ~4%
  rack and up to ~10% pod latency cuts; up to ~5× power efficiency and ~15×
  reliability vs pluggables (vendor).
date: '2026-11-19'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Lambda
  - Photonics
  - CPO
  - GB300
author: Editorial
locale: en
sourceUrls:
  - 'https://blogs.nvidia.com/blog/lambda-photonics/'
sourceLevel: A
publisher: nvidia
faqs:
  - question: Deployment scale?
    answer: CPO switches link GB300 NVL72 racks with more than 10,000 GPUs; 144×800Gb/s per switch.
  - question: Gains vs pluggable optics?
    answer: >-
      Up to ~5× power efficiency, ~15× reliability, ~4× fewer lasers; ~4% rack /
      up to ~10% pod latency cuts; throughput parity.
draft: false
candidateId: nvidia-blogs-2026-11-19-f149dc1a48
---

NVIDIA’s blog (byline **16 Nov 2026**; site entry dated 19 Nov) covers cloud provider **Lambda** bringing **NVIDIA Photonics co-packaged optics (CPO) switches** into an AI-factory fabric connecting **GB300 NVL72** racks with more than **10,000** GPUs. Goals: lower power, higher resiliency, longer mean time between interruptions (MTBI).

## Why the network is a factory bottleneck

One interrupted link can stall thousands of GPUs in training; in agentic inference, a network blip cascades across many agents. Every watt on networking is a watt not on compute. CPO moves electro-optical conversion onto the switch package. Versus conventional pluggables, the post cites up to ~**5×** better power efficiency, up to ~**15×** higher reliability, and ~**4×** fewer lasers—fewer parts, fewer failure points.

## Lambda tests and hardware shape

| Item | Claim |
| --- | --- |
| Rack latency | ~**4%** lower |
| Pod latency | Up to ~**10%** lower |
| Throughput | Parity with pluggables across rack / scalable unit / pod |
| Median optics temp | ~**36°C** vs ~**51°C** for pluggables |
| Switch | **144** ports × **800Gb/s**; liquid cooled |

The electrical path shrinks from inches to millimeters and drops retimers. Each switch has **18** field-replaceable external light-source modules—swap a laser without yanking the whole optic.

For cluster-network readers: customer deployment story plus CPO product narrative. Reproducing numbers needs matching topology and measurement. Quote “5× / 15×” as vendor vs-pluggable claims, not as Lambda’s latency table.
