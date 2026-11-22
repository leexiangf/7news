---
title: SageMaker 默认定时巡检推理端点：延迟漂移、闲置 GPU 与漏开优化
slug: sagemaker-latency-drift-idle-gpu-recommendations
description: >-
  SageMaker AI 对 vLLM+GPU 端点默认监测周环比延迟/TTFT、闲置 GPU 与未开 speculative decoding
  等；经 AWS Health 通知，旁路压测后人工决定是否改生产。
date: '2026-11-19'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - AWS
  - SageMaker
  - Latency
  - Observability
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/amazon-sagemaker-ai-now-detects-latency-drift-idle-gpus-and-missed-optimizations-on-your-inference-endpoints/'
sourceLevel: A
publisher: aws
faqs:
  - question: 默认开吗？
    answer: 对使用 vLLM 容器与 GPU 实例的推理端点默认监测；容器环境变量 OPT_OUT_TRACKING 可退出。
  - question: 会自动改生产吗？
    answer: 不会；先通知，再可选跑 inference recommendations，应用变更需人工确认。
draft: false
candidateId: amazon-ml-2026-11-19-b3fe3802af
---

AWS 机器学习博客（**2026-11-19**）宣布 **Amazon SageMaker AI** 对符合条件的生成式推理端点**默认开启**监测：只看延迟、GPU 利用率与 serving 配置，**不读**请求/响应内容。动机：上线当天调好的端点会随流量、提示长度、vLLM 版本与未开优化悄悄漂移——没有失败告警，直到用户或账单先感觉到。

## 三类发现 → 四步闭环

| 发现 | 触发 |
| --- | --- |
| 延迟漂移 | 相对上周 p50 端到端或 TTFT 抬升 |
| 闲置容量 | 高峰窗口 GPU 仍长期低利用 |
| 配置缺口 | 容器未升、未开 speculative decoding、内核未调优等 |

闭环：**观察 → AWS Health（及邮件）通知（每端点一次汇总）→ Studio agentic 旁路压测 → 人工决定**。压测用观测流量在**旁路算力**跑 inference recommendations，对比延迟 / 吞吐 / 每百万 token 成本；生产不变直到你应用某一 variant。监测本身无额外 GPU 费；压测按标准计费。`OPT_OUT_TRACKING` 退出后不再采遥测与通知。属**持续优化信号**，不是自动改生产。
