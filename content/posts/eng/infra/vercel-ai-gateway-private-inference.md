---
title: Vercel AI Gateway 支持 Private Inference，自有端点统一接入
slug: vercel-ai-gateway-private-inference
description: >-
  Vercel Changelog：微调/自托管/预发布模型可经 AI Gateway 共用鉴权、SDK 与观测；模型 ID 为
  private/…，可选回退目录模型；CLI ≥65.16.0。
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Vercel
  - AI Gateway
  - Private Inference
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/ai-gateway-now-supports-private-inference'
sourceLevel: A
publisher: vercel
faqs:
  - question: 怎么注册？
    answer: Private Inference 页添加端点（base URL、API 格式、凭证）再挂模型；或用 vercel ai-gateway private-inference providers/models create（CLI ≥65.16.0）。
  - question: 可见性与回退？
    answer: 仅本团队可见、不进公开目录；凭证加密存储，可开 Zero Data Retention；可选回退到目录模型。
draft: false
candidateId: vercel-2026-11-16-358edf6171
---
Vercel Changelog（**2026-11-16**）宣布 **AI Gateway** 支持 **Private Inference**：把自有模型端点（微调、自托管、预发布）接到与目录模型同一套鉴权、SDK/API 与观测里，避免为私有模型另开一套密钥与日志。

可走 Chat Completions / Responses / Messages；Gateway 按端点格式转译，切换只需改模型 ID（形如 `private/support-fine-tune`）。私有模型仅本团队可查可调，不进公开目录；凭证加密，可按 provider 开 **Zero Data Retention**。编码 Agent（Claude Code、Codex、Cursor 等）经 Gateway 也可选私有模型。日志、trace drain 与报表把私有与目录流量放在一起看；可选回退到目录模型。

入门：Private Inference 页添加 provider 与模型，或 CLI **≥65.16.0** 的 `vercel ai-gateway private-inference providers|models create`。能力边界、计费以 [Private Inference 文档](https://vercel.com/docs/ai-gateway) 为准。
