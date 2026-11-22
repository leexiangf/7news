---
title: LangSmith BYOC 扩展到 Azure 与 Google Cloud，AWS 已 GA
slug: langsmith-byoc-multicloud
description: >-
  LangChain：LangSmith Bring Your Own Cloud 在 AWS 正式 GA，Azure 与 Google Cloud 进入
  Beta；控制面由 LangChain 管，痕迹与数据集留在客户云账号。
date: '2026-11-03'
updated: '2026-11-22'
category: agent
subcategory: harness
tags:
  - LangChain
  - LangSmith
  - BYOC
  - Multicloud
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/langsmith-byoc-aws-gc-azure'
sourceLevel: A
publisher: langchain
faqs:
  - question: 控制面/数据面？
    answer: LangChain 管认证、组织配置与计费元数据；痕迹、评测、数据集、Agent 部署与密钥在客户数据面。
  - question: 自托管迁移？
    answer: 开源迁移工具搬用户/数据集/实验/提示等；痕迹迁移目前通稿称 AWS 可用。
draft: false
candidateId: langchain-2026-11-03-74589fc0d1
---
LangChain 博客（**2026-11-03**）宣布 **LangSmith BYOC**（Bring Your Own Cloud）在 **AWS 正式 GA**，并扩展到 **Azure（Beta）** 与 **Google Cloud（Beta）**：痕迹、评测、数据集、提示与 Agent 部署留在客户自选云账号；LangChain 运维数据面的编排、扩缩与平台更新。

架构上拆控制面（认证、组织/工作区、计费元数据、哈希后的 API key、静态 UI）与数据面（敏感遥测与运行时）。一组织可挂多数据面（按账号/区域/业务线）。相对纯自托管，强调免 Helm 维护窗、功能更接近 Cloud、自动扩缩；自托管仍可选。迁移两步：开 BYOC 数据面，再用开源工具搬工作区资源；痕迹迁移通稿称目前 AWS 可用。属**多云托管部署选项**；开通需联系销售。
