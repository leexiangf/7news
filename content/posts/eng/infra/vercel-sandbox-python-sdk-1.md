---
title: Vercel Sandbox Python SDK 1.0，与 TypeScript 能力对齐
slug: vercel-sandbox-python-sdk-1
description: >-
  Vercel Changelog：Sandbox Python SDK 达 1.0，稳定公开 API 并对齐 TS SDK；上下文管理器自动清理、
  AnyIO 异步；0.x 升级含命令 I/O 改为 bytes 等破坏性变更。
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Vercel
  - Sandbox
  - Python
  - SDK
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/vercel-sandbox-python-sdk-1-0-is-now-available'
sourceLevel: A
publisher: vercel
faqs:
  - question: 怎么安装？
    answer: uv add 'vercel-sandbox>=1.0'；同步代码用 vercel.sandbox.sync。
  - question: 0.x 要注意什么？
    answer: Changelog 称命令输入输出改为 bytes 等破坏性变更，需读 1.0 release notes。
draft: false
candidateId: vercel-2026-11-16-48cf304f4f
---
Vercel Changelog（**2026-11-16**）宣布 **Sandbox Python SDK** 到达 **1.0**：公开 API 稳定，并与 TypeScript SDK 能力对齐，便于在 Python 应用里跑 AI 生成代码、测改动、分析数据集。

提供上下文管理器自动清理沙箱，以及基于 **AnyIO** 的异步（`asyncio` / Trio）；同步路径用 `vercel.sandbox.sync`。安装示例：`uv add 'vercel-sandbox>=1.0'`。可从 Git 分支起沙箱跑测试后自动回收。从 **0.x** 升级需查阅 1.0 release notes（含命令输入输出改为 **bytes** 等破坏性变更）。细节见 Python SDK 文档。
