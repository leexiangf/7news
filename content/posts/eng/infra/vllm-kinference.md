---
title: vLLM 生态推出 Kinference：面向 K8s 的开源推理控制面
slug: vllm-kinference
description: >-
  Buoyant 开源 Kinference：在 vLLM 上做限流、租户计量、KV 感知负载均衡与 InferencePolicy；
  相对标准 K8s 负载均衡自测中位 TTFT 降约 95%、共享前缀 goodput 约 7.4×。
date: '2026-11-04'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - vLLM
  - Kinference
  - Kubernetes
  - 推理
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-04-introducing-kinference'
  - 'https://kinference.ai/'
sourceLevel: A
publisher: vllm
faqs:
  - question: Kinference 和 vLLM 什么关系？
    answer: vLLM 做底层推理；Kinference 是控制面（路由、策略、计量、负载均衡）。客户端指向其 HTTP 端点即可。
  - question: 95% TTFT 怎么理解？
    answer: >-
      Buoyant 公开基准相对标准 Kubernetes 负载均衡的某一工作负载自测；须对照是否共享前缀、是否空载等设定。
draft: false
candidateId: vllm-blog-2026-11-04-84a771cab1
---

vLLM 博客（**2026-11-04**）介绍 [Buoyant](https://buoyant.io/) 开源的 **Kinference**（读作 kay-inference）：定位为在 **vLLM** 之上搭推理平台的**控制面**——token 限流、租户用量与成本追踪、智能负载均衡、YAML **InferencePolicy**。客户端把 OpenAI / Anthropic 兼容流量指到其 HTTP 端点即可，可与现有栈并存。协议 Apache v2。

## 为什么「裸 Service」不够

异构模型、异构 GPU 池、异构客户端同时演进时，轮询式 Kubernetes Service 看不见 GPU 队列、历史表现与 **KV cache** 内容。Kinference 的卖点是把请求打到对该请求「干活最少」的 worker——尤其利用缓存亲和。

| 对比项 | 标准 K8s LB | Kinference（自述） |
| --- | --- | --- |
| 信号 | 基本无推理语义 | 队列、历史、KV 内容 |
| 策略 | 难表达 | YAML InferencePolicy，可进 Git |
| 计量 | 需另搭 | 租户级 token / 延迟 / 缓存命中 |

## 基准数字（厂商自测）

轻载延迟基准（隔离 KV 感知 LB 效果）：相对标注为 “service” 的标准负载均衡，某一工作负载上中位 **TTFT 降约 95%**、中位端到端延迟降约 **45%**。

容量基准（在延迟 SLO 内的 goodput）：共享前缀约 **7.4×**、多轮约 **3.5×**；Kinference 在共享前缀上可到并发 32 仍进 SLO，多轮到并发 8；kube-proxy 路径在所测并发下均未进 SLO。细节见其公开 benchmark 文。

## 策略层在解决什么

平台常见问题被收成可审查规则，例如：

- 用户要「任意适合写代码的模型」，而不是钉死某个量化 checkpoint
- 「简单请求」改走便宜模型——但若昂贵模型上已有热缓存，PredictedTTFT 更优则仍走贵模型
- GPU 饱和时 burst 到 Bedrock / Databricks 等 Provider；含 PII 的请求则 **fail closed**、禁止出集群

安装路径依赖 Gateway API CRD + Helm（gateway / kinference charts，文档标注 `--devel`）。对平台组，Kinference 是「推理网关 + 策略 + 租户指标」样板，**不替代** vLLM；引用 TTFT / goodput 时务必写清 workload 类型。
