---
title: AWS 发布分布式 KV 缓存 Agent Skill，自托管推理可估省成本与 TTFT
slug: aws-distributed-kv-caching-agent-skill
description: >-
  AWS：Agent Toolkit 新增 distributed KV caching skill，引导编码 Agent 用 ElastiCache
  共享 KV；文称可最高约降 40% 成本、80% TTFT（厂商基准）。
date: '2026-11-20'
updated: '2026-11-22'
category: eng
subcategory: cost
tags:
  - AWS
  - ElastiCache
  - KV Cache
  - Agent Skills
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/cut-self-hosted-llm-cost-and-latency-with-the-distributed-kv-caching-agent-skill/'
sourceLevel: A
publisher: aws
faqs:
  - question: 技能做什么？
    answer: 适配度检查、KVTrace 估收益、搭 Valkey/LMCache、排障；配合 Kiro/Claude Code/Codex 等。
  - question: 前提？
    answer: 文中列 EFA RDMA GPU（如 p5）、LMCache/vLLM 或 SGLang 版本下限、ElastiCache Valkey 9.1+。
draft: false
candidateId: amazon-ml-2026-11-20-5c33aa5118
---
AWS 机器学习博客（**2026-11-20**）介绍 **Agent Toolkit for AWS** 里的 **distributed KV caching** skill：面向自托管 LLM，把 GPU 本地 KV 扩成 **ElastiCache** 旁路共享层，跨会话/路由/故障复用 prefill 状态。通稿引用分布式 KV 缓存公告，称最高约 **40%** 推理成本、**80%** TTFT 降幅（厂商基准，非保证）。

技能引导编码 Agent（Kiro、Claude Code、Codex 等）先做适配检查（含只读查实例/EFA）、用 **KVTrace** 按真实流量估 hit 与切点、再搭 Valkey 集群与 LMCache 连接器，并对齐各 serving 节点的 KV ID/数据类型。高影响操作需显式批准。前提含 EFA RDMA GPU、LMCache/vLLM 或 SGLang 版本与 Valkey **9.1+**。属**运维技能+缓存基建**，数字需用自有流量复核。
