---
title: Kimi K3.1 Pro 发布：3T 级开源权重路线，称百万 token 上下文
slug: kimi-k3-1-pro
description: >-
  月之暗面推出 Kimi K3.1 Pro 与 Highspeed：官方称为迄今最强的 3T 级开源权重型号，带约 100 万 token
  上下文；产品侧即日可在 Kimi 系入口使用，完整权重称不晚于 11 月 4 日放出。
date: '2026-11-07'
updated: '2026-11-07'
category: llm
subcategory: release
tags:
  - Moonshot
  - Kimi
  - 开源权重
  - Agent
author: 编辑部
sourceUrls:
  - 'https://www.kimi.com/en/blog/kimi-k3-1-pro'
\npublisher: moonshot
faqs:
  - question: Highspeed 快多少？
    answer: 官方称 Kimi K3.1 Pro Highspeed 相对 K3.1 Pro 大约快 2～3 倍，面向更跟手的交互。
  - question: 权重什么时候开源？
    answer: 技术博文写明完整模型权重将不晚于 2026 年 11 月 4 日发布；产品侧称今日已可在 Kimi.com、Work、Code 与 API 使用。
draft: false
candidateId: moonshot-2026-11-07-4f9e40843c
locale: zh
publisher: moonshot
---
月之暗面推出 Kimi K3.1 系列首发型号 Kimi K3.1 Pro，并同步提供 Highspeed 变体。官方定位是：迄今最强的 3T 级开源权重模型，上下文约 100 万 token；相对基线 K3，强调在更大后训练算力与跨领域联合强化学习上的系统性改造。产品入口上，博文称 Kimi.com、Kimi Work、Kimi Code 与 Kimi API 今日可用；完整权重「不晚于 11 月 4 日」放出。

能力叙事集中在编码、三维创作与金融研究等 agent 工作流。官方给出的外部对照里，Terminal-Bench 4.0 报 65.7%（称高于 GPT-6 Astra 的 58.2%，略低于 Claude Opus 5.5 的 66.4%）；内部 Kimi Code Bench 3.0 Long-horizon 报 61.2%，高于 K3 的 55.95%。BenchCAD（多视图重建到 CAD 代码）在带工具条件下报 92.7%。这些数字均来自 Moonshot 自家技术博文与脚注说明的评测设定，外站复现前应先核对 harness 与采样配置。

安全一侧，博文用较长篇幅解释开源权重发布前的网络能力控制：在 mid-training 与 RL 环境中识别并移除与漏洞研究相关的数据，同时保留通用编码任务。内部 xdev-bench-hard 上，未做数据清理的检查点 pass@3 为 90.5%，最终 K3.1 Pro 为 81.0%。公司原则写得很直白：不希望开源权重把「网络攻击绝对前沿」再往前推，但又打算逐步提高开源侧可用的双用途能力，方便更多团队做防御审计。

对企业管理员，K3.1 Pro 在组织内默认关闭，需手动开启。API 型号名为 `kimi-k3.1-pro` / `kimi-k3.1-pro-highspeed`，并提到 Zero Data Retention 选项。若你关心的是「能不能今天就在产品里换成 Pro」——可以；若关心「权重仓库是否已可拉」——以 11 月 4 日节点与官方仓库更新为准，本文不以第三方镜像为准。
