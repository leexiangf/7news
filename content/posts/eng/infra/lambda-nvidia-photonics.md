---
title: Lambda 用 NVIDIA 光子 CPO 交换机连接万卡级 GB300 集群
slug: lambda-nvidia-photonics
description: >-
  Lambda 以 NVIDIA Photonics CPO 连接超万卡 GB300 NVL72；自测机架延迟约降 4%、Pod 最高约 10%；功耗效率最高约
  5×、可靠性最高约 15×（相对可插拔光，厂商口径）。
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
author: 编辑部
locale: zh
sourceUrls:
  - 'https://blogs.nvidia.com/blog/lambda-photonics/'
sourceLevel: A
publisher: nvidia
faqs:
  - question: 部署规模？
    answer: CPO 交换机连接 GB300 NVL72 机架，规模超过 10,000 GPU；单交换机 144×800Gb/s。
  - question: 相对可插拔光的收益口径？
    answer: >-
      功耗效率最高约 5×、可靠性最高约 15×、激光器数量约 1/4；机架延迟约降 4%、Pod 最高约降 10%；吞吐同级。
draft: false
candidateId: nvidia-blogs-2026-11-19-f149dc1a48
---

NVIDIA 博客（文首日期 **2026-11-16**，站内条目作 11-19）介绍云厂商 **Lambda** 在 AI 工厂网络侧引入 **NVIDIA Photonics 共封装光（CPO）交换机**，连接 **GB300 NVL72** 机架，规模超过 **10,000** GPU。目标写得很直：更低功耗、更高韧性、更长平均无中断时间（MTBI）。

## 为什么网络成了「工厂」瓶颈

大规模训练里一条链路中断可拖住上千 GPU；Agent 推理里网络抖动会沿多 Agent 级联。网络上每瓦都是算力上少掉的一瓦。CPO 把光电转换挪到交换机封装上，相对传统可插拔光，文称功耗效率最高约 **5×**、可靠性最高约 **15×**，激光器数量约 **1/4**——少零件即少故障点。

## Lambda 测试与硬件形态

| 项 | 口径 |
| --- | --- |
| 机架级延迟 | 约降 **4%** |
| Pod 级延迟 | 最高约降 **10%** |
| 吞吐 | 机架 / 可扩展单元 / Pod 与可插拔光同级 |
| 光学温度中位 | 约 **36°C** vs 可插拔约 **51°C** |
| 交换机 | **144** 端口 × **800Gb/s**；液冷 |

电光路径从英寸级缩到毫米级，去掉 retimer。每台交换机 **18** 个可现场更换的外部光源模块——激光坏了换模块，不必整颗光模块拆掉。

对集群网络读者：这是客户部署故事 + CPO 产品叙事；复现需对齐拓扑与测量口径。引用「5× / 15×」时标明相对可插拔光的厂商对比，而非 Lambda 现场实测延迟表。
