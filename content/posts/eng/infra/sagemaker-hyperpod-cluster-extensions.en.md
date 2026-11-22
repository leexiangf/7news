---
title: HyperPod Slurm adds managed extensions for observability and users
slug: sagemaker-hyperpod-cluster-extensions
description: >-
  AWS: SageMaker HyperPod Slurm cluster extensions let you declare observability
  and user-management packages via API/console—validated, kept consistent across
  scale and replacement.
date: '2026-11-20'
updated: '2026-11-22'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - HyperPod
  - Slurm
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/introducing-managed-cluster-extensions-for-observability-and-user-management-in-amazon-sagemaker-hyperpod-slurm/'
sourceLevel: A
publisher: aws
faqs:
  - question: First two extensions?
    answer: sagemaker-observability (metrics to CloudWatch/AMP) and sagemaker-user-management (users/groups/SSH/sudo plus AD).
  - question: Lifecycle scripts gone?
    answer: No—extensions cover managed capabilities; custom AMI and lifecycle scripts remain for org-specific software.
draft: false
candidateId: amazon-ml-2026-11-20-a7a1e6c554
---
AWS’s ML blog (**20 Nov 2026**) launches **cluster extensions** for **SageMaker HyperPod Slurm**: declare the mutable software layer (metrics, accounts) through API or console instead of editing lifecycle scripts and reimaging. Submissions validate against a schema; HyperPod keeps every node—including scale-ups and replacements—consistent and reports health.

First packages: **sagemaker-observability** (node, GPU, EFA, Slurm job/cluster metrics to CloudWatch or Amazon Managed Service for Prometheus) and **sagemaker-user-management** (consistent UIDs/GIDs, SSH/sudo by node type, Slurm accounting registration, optional Active Directory). Controllers and compute nodes stay SSH-reachable; custom AMIs and lifecycle scripts still cover org-specific software. Declarative cluster ops for the software layer.
