---
title: NVIDIA Vera Rubin NVL72 在 MLPerf Endpoints v1.0 上领先（临时结果）
slug: nvidia-vera-rubin-mlperf-endpoints
description: >-
  NVIDIA 技术博客：临时 MLPerf Endpoints v1.0 显示 Vera Rubin NVL72 在共享最低端到端交互性下，
  相对 GB300 NVL72 每千瓦吞吐可达约 5×–10×；Rubin 结果待 MLCommons 核验。
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Vera Rubin
  - MLPerf
  - Inference
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/nvidia-vera-rubin-nvl72-leads-agentic-inference-performance-on-mlperf-endpoints-v1-0/
sourceLevel: S
publisher: nvidia
faqs:
  - question: 对比结论如何理解？
    answer: 在共享最低 E2E 交互性门槛下比吞吐/kW；Kimi K3 约 10×、DeepSeek-V4.1-Flash 约 9×、Qwen3.6-35B-A3B 约 5×（文中四舍五入）。
  - question: 结果状态？
    answer: GB300 已核验；Vera Rubin 为 provisional，待 MLCommons 协会核验与同行评议，可能变更。
draft: false
candidateId: nvidia-developer-2026-11-16-c4c2b3a7c4
---
NVIDIA 技术博客（**2026-11-16**）解读 **MLPerf Endpoints v1.0** 上 **Vera Rubin NVL72** 的 **provisional** 成绩：面向多轮 Agent 式编码与企业工作流，基准会校验工具调用与意图，并另有 SWE-bench Verified 看端到端解题。

在共享最低端到端交互性（文中 Kimi K3 例为约 **50 tok/s/user**）下，称相对已核验的 **GB300 NVL72**，Vera Rubin 的**每千瓦吞吐**约：**Kimi K3 10×**、**DeepSeek-V4.1-Flash 9×**、**Qwen3.6-35B-A3B 5×**；匹配并发时 E2E 交互性约 **3×–5×**。硬件侧强调 **HBM4**、Tensor Core、第六代 **NVLink**；软件侧含前缀缓存、状态复用、**Dynamo** 路由、prefill/decode 解耦，以及 MegaMoE、多 token 预测等模型专用优化。

脚注给出具体 result ID、并发、TTFT、系统 TPS 与功耗；**Vera Rubin 结果未最终核验，可能随 peer review 调整**。引用须回 MLCommons 结果页与原文脚注。
