---
title: NVIDIA 开源 Attribution：把分布式训练故障归因到根因
slug: nvidia-attribution-open-source
description: >-
  Attribution 以一次 workload 尝试为边界，用确定性规则把日志/指标/调度状态压成结构化诊断；Service + Blueprint
  架构；文称每周分析数百万作业。
date: '2026-11-02'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - 可观测性
  - 集群
  - 开源
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/diagnose-distributed-ai-workload-failures-with-nvidia-attribution/
sourceLevel: A
publisher: nvidia
faqs:
  - question: 和普通日志聚合有何不同？
    answer: >-
      以「一次 workload 尝试」为边界，输出终端状态、根因域、受影响节点、症状与证据链；确定性规则可复现，而不是只罗列报错。
  - question: 怎么落地？
    answer: Attribution Service（REST）+ Blueprint（Slurm/Kueue/静态 + Loki/Pod/PromQL 等连接器）；仓库见博文 GitHub。
draft: false
candidateId: nvidia-developer-2026-11-02-53eb05fac6
---

NVIDIA Developer Blog（**2026-11-02**）开源 **NVIDIA Attribution**：面向分布式 AI 作业，把作业范围的日志、指标、遥测与调度状态关联成**一条可复现诊断**。痛点具体——单点 GPU / 互联故障常在其他 rank 上刷成 NCCL 与调度噪声；异常点只说明停在哪，不说明从哪坏起。

## 四阶段路径

1. **划界** — 用调度 ID 或显式时间窗 + 节点分配锁定一次尝试  
2. **采集** — 应用日志、syslog、驱动 / Fabric Manager、调度历史、节点与网络指标 → Observation  
3. **抽取与关联** — 确定性规则分清根因与下游症状  
4. **结构化结果** — `terminal_state`、`sub_domain`、症状、受影响节点、采集覆盖与错误

合成样例：`node-02` 上 **XID 149**（NVLink 信号完整性）定根因，其余 rank 的 NCCL 保留为「有趣症状」而非并列多个根因。证据不足时标不确定，不硬给结论。

## Service 与 Blueprint

| 组件 | 角色 |
| --- | --- |
| Attribution Service | HTTP 封装归因引擎，一作业一裁决 |
| Attribution Blueprint | 发现作业、跑采集器、调 Service、写结果与只读仪表盘 |

连接器含 Slurm / Kueue / 静态输入，以及 Loki、本地文件、K8s Pod 日志、PromQL。文称已在 NVIDIA 自有基建用多年，每周分析**数百万**作业、覆盖数十万 GPU——厂商口径。仓库 `dsx-ai-factory/attribution`，quickstart 用 Docker + 样例证据。对 SRE：把 `terminal_state` / `sub_domain` 接进恢复流水线，比解析厂商专有日志更稳。
