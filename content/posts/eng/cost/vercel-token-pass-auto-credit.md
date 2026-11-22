---
title: Vercel Token Pass 额度自动抵扣 AI Gateway，不必再绑专用 key
slug: vercel-token-pass-auto-credit
description: >-
  Changelog：Token Pass 额度自动作用于 AI Gateway 含模型用量（API key / OIDC / fx 登录均可）；用尽后标准密钥回落团队
  Gateway 额度，专用 Token Pass key 则停到下账期。附 ZDR 边界。
date: '2026-11-05'
updated: '2026-11-20'
category: eng
subcategory: cost
tags:
  - Vercel
  - AI Gateway
  - Token Pass
  - 计费
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://vercel.com/changelog/token-pass-credit-now-applies-automatically-across-ai-gateway
sourceLevel: A
publisher: vercel
faqs:
  - question: 还要不要 Token Pass 专用 key？
    answer: 不再必需。标准 API key / OIDC / fx 登录即可自动抵扣；专用 key 仍可建，但额度用尽后不会回落。
  - question: ZDR 怎么走？
    answer: 经 Token Pass 提供商的请求保持 ZDR；回落请求遵循团队 ZDR 设置（全队 ZDR 开启时只走 ZDR 提供商）。
draft: false
candidateId: vercel-2026-11-05-1564a9d4f1
---

Vercel Changelog（文内日期 **2026-11-06**；本站成稿记 **2026-11-05**）收紧 **Token Pass** 与 **AI Gateway** 的计费衔接：Token Pass 额度现在会**自动**打在 Gateway「含模型」用量上——无论请求用 API key、OIDC token 还是 fx 登录。**不必再依赖专用 Token Pass API key**（仍可从控制台或 CLI 创建，仅限 featured 模型/提供商）。

## 用尽之后走哪条路

| 认证方式 | Token Pass 额度用尽后 |
| --- | --- |
| 标准 API key / OIDC | **回落**到团队 AI Gateway 额度 |
| Token Pass 专用 key | **停止**，等到下一账期 |

changelog 明确提醒：若 setup 时建过 Token Pass key，想享受回落，应改回标准 key 或 OIDC。

## ZDR 边界

| 流量 | 数据留存 |
| --- | --- |
| 仍由 Token Pass 提供商服务 | 保持 **Zero Data Retention** |
| 回落后的请求 | 遵循**团队** ZDR 设置；全队开启 ZDR 时只路由到 ZDR 提供商 |

适用范围：Pro 团队的 Token Pass 订阅者现已可用。对平台组，这是一次「计费身份」简化——少一层专用 key 运维，但要在文档里写清**回落语义**与 ZDR 切换点，避免财务与合规各看各的表。
