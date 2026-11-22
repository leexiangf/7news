---
title: OpenAI 拆解 Codex 沙箱：在本机跑命令仍可控文件系统与网络
slug: openai-inside-codex-sandbox
description: >-
  OpenAI：详解 Codex sandbox 如何用各平台 OS 沙箱能力约束本机命令——默认 :workspace 可写工作区、宽读、默认断网，
  并通过 permission profiles 配置。
date: '2026-11-18'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - OpenAI
  - Codex
  - Sandbox
  - Security
author: 编辑部
locale: zh
sourceUrls:
  - 'https://openai.com/index/inside-the-codex-sandbox'
sourceLevel: A
publisher: openai
faqs:
  - question: 为什么不用 Docker？
    answer: 为保留本机原生工具链（如 iOS 构建与模拟器），选择 OS 级沙箱约束现有环境。
  - question: 默认网络？
    answer: 默认禁用网络；需要下载依赖等时再经权限配置放开。
draft: false
candidateId: openai-2026-11-19-53f2a14376
---
OpenAI 工程文（**2026-11-18**）介绍 **Codex sandbox**：Agent 在本机跑命令时，用各平台 OS 沙箱设施限制文件系统与网络，而不是把工作丢进独立 VM/容器。哲学是**保守默认仍可干活**——内置 `:workspace` 配置允许工作区内写入（`.git` / `.codex` 等只读）、宽读（受 OS 权限约束）、**默认断网**，以挡住一类外泄，同时承认仍可能污染本机被忽略的路径（如 `node_modules`），故强调纵深防御。

Harness 用统一 API 对接 macOS / Linux / Windows；有限网络需配合网络代理。企业可借 permission profiles 与 security cookbook 收紧。属**安全机制深挖**，发布日按源页记 **11-18**。
