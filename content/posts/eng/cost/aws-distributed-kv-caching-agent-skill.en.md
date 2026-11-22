---
title: AWS ships a distributed KV caching skill for self-hosted LLMs
slug: aws-distributed-kv-caching-agent-skill
description: >-
  AWS: an Agent Toolkit skill guides coding agents to evaluate and set up
  ElastiCache-backed distributed KV caching—claiming up to ~40% cost and ~80%
  TTFT cuts in vendor benchmarks.
date: '2026-11-20'
updated: '2026-11-22'
category: eng
subcategory: cost
tags:
  - AWS
  - ElastiCache
  - KV Cache
  - Agent Skills
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/cut-self-hosted-llm-cost-and-latency-with-the-distributed-kv-caching-agent-skill/'
sourceLevel: A
publisher: aws
faqs:
  - question: What does the skill do?
    answer: Fit checks, KVTrace savings estimates, Valkey/LMCache setup, and troubleshooting—for Kiro, Claude Code, Codex, and similar.
  - question: Prerequisites?
    answer: EFA RDMA GPUs (e.g. p5), LMCache/vLLM or SGLang version floors, ElastiCache Valkey 9.1+.
draft: false
candidateId: amazon-ml-2026-11-20-5c33aa5118
---
AWS’s ML blog (**20 Nov 2026**) details a **distributed KV caching** skill in the **Agent Toolkit for AWS**. For self-hosted LLMs it extends GPU-local caches with an **ElastiCache** shared tier so any server can reuse KV state across sessions, routing shifts, and failures. The post cites the distributed KV caching announcement’s vendor benchmarks—up to about **40%** inference cost and **80%** TTFT reductions (not a guarantee).

The skill steers coding agents (Kiro, Claude Code, Codex, and peers) through a fit check (including read-only instance/EFA inventory), **KVTrace** estimates from real traffic, Valkey cluster plus LMCache connector setup, and aligning KV ID/hash and data types across the fleet. High-impact creates need explicit approval. Prerequisites include EFA RDMA GPUs, LMCache/vLLM or SGLang floors, and Valkey **9.1+**. Ops skill plus cache plumbing—validate numbers on your own traces.
