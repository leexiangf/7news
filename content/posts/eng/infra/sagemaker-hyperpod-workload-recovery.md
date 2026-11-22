---
title: SageMaker HyperPod 增强工作负载恢复与基础设施检查
slug: sagemaker-hyperpod-workload-recovery
description: >-
  AWS：HyperPod 新增 MultiNodeTrainingValidation 深健康检查、K8s 资源监控 Agent，以及 Slurm
  挂起作业检测，以尽早抓住静默算错、挂死与集群层故障。
date: '2026-11-18'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - HyperPod
  - Training
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/introducing-workload-recovery-and-expanded-infrastructure-checks-on-amazon-sagemaker-hyperpod/
sourceLevel: A
publisher: aws
faqs:
  - question: 三项能力？
    answer: EKS 上 MultiNodeTrainingValidation；EKS 上 K8s Resource Monitoring Agent；Slurm 上 hung job detection（可取消并重新排队）。
  - question: 解决什么？
    answer: 硬件检查过关但仍出 NaN/挂死/设备插件崩溃等，拖低 goodput 的故障。
draft: false
candidateId: amazon-ml-2026-11-18-b6239492ef
---
AWS（**2026-11-18**）为 **SageMaker HyperPod** 增加三类能力，补「单节点硬件健康」看不到的洞：**MultiNodeTrainingValidation**（EKS）在供给或按需时跑小模型训练，loss 为 NaN/无穷或超时则实例失败；**Kubernetes Resource Monitoring Agent** 盯设备插件 crash-loop、缺失 DaemonSet、污点等并在作业失败时上报相关 pod/节点；**Hung job detection**（Slurm）盯输出与 GPU 活动（或自定义日志模式），可写 CloudWatch 事件并取消作业让 Slurm 重新排队。

文中举例：32×p5.48xlarge 挂八小时与 15 分钟检出的费用差。属**训练平台韧性**更新，配置细节见原文分节。
