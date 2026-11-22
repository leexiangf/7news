---
title: HyperPod Slurm 上线托管集群扩展：可观测与用户管理
slug: sagemaker-hyperpod-cluster-extensions
description: >-
  AWS：SageMaker HyperPod Slurm 推出 cluster extensions，用 API/控制台声明式安装可观测与用户管理扩展，
  校验配置并在扩缩节点上保持一致。
date: '2026-11-20'
updated: '2026-11-22'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - HyperPod
  - Slurm
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/introducing-managed-cluster-extensions-for-observability-and-user-management-in-amazon-sagemaker-hyperpod-slurm/'
sourceLevel: A
publisher: aws
faqs:
  - question: 首批两个扩展？
    answer: sagemaker-observability（指标进 CloudWatch/AMP）与 sagemaker-user-management（用户/组/SSH/sudo 与 AD 集成）。
  - question: 还能用生命周期脚本吗？
    answer: 能；扩展覆盖托管能力，组织自有软件仍可用自定义 AMI 与生命周期脚本。
draft: false
candidateId: amazon-ml-2026-11-20-a7a1e6c554
---
AWS 机器学习博客（**2026-11-20**）为 **SageMaker HyperPod Slurm** 推出 **cluster extensions**：把节点上持续变化的软件层（指标采集、账号）从「改脚本再重装/重跑」收成 API/控制台声明——提交时按 schema 校验，扩缩与替换节点自动对齐，并回报状态。

首批两个：**sagemaker-observability**（节点/GPU/EFA/Slurm 作业与集群指标 → CloudWatch 或 Amazon Managed Service for Prometheus）；**sagemaker-user-management**（跨节点一致 UID/GID、按节点类型控 SSH/sudo、注册 Slurm accounting，可接 Active Directory）。仍可 SSH 进控制器与计算节点；组织自有软件继续走自定义 AMI/生命周期脚本。属**集群运维声明化**补齐。
