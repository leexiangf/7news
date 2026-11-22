---
title: SageMaker HyperPod adds workload recovery and deeper infra checks
slug: sagemaker-hyperpod-workload-recovery
description: >-
  AWS: HyperPod gains MultiNodeTrainingValidation, a Kubernetes resource
  monitoring agent, and Slurm hung-job detection to catch silent compute faults,
  stalls, and cluster-layer failures sooner.
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - HyperPod
  - Training
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/introducing-workload-recovery-and-expanded-infrastructure-checks-on-amazon-sagemaker-hyperpod/
sourceLevel: A
publisher: aws
faqs:
  - question: Three capabilities?
    answer: MultiNodeTrainingValidation on EKS; Kubernetes Resource Monitoring Agent on EKS; hung-job detection on Slurm (optional cancel/requeue).
  - question: What gap?
    answer: Hardware-passing GPUs that still emit NaN, jobs that hang without exiting, and K8s-layer failures that HMA alone misses.
draft: false
candidateId: amazon-ml-2026-11-18-b6239492ef
---
AWS (**18 Nov 2026**) extends **SageMaker HyperPod** beyond single-node hardware health with three capabilities: **MultiNodeTrainingValidation** (EKS) trains a small model on/across instances and fails them on NaN/infinite loss or timeouts; a **Kubernetes Resource Monitoring Agent** watches crash-looping device plugins, missing DaemonSets, and taints, naming pods/nodes when jobs fail; **hung job detection** (Slurm) watches output and GPU activity (or custom log patterns), emits CloudWatch events, and can cancel so Slurm requeues.

An illustrative 32×p5.48xlarge hang overnight versus a 15-minute detect rule shows the goodput math. Training-platform resiliency update—setup details live in the post’s sections.
