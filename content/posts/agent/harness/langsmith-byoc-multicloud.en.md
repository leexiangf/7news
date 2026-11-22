---
title: LangSmith BYOC hits AWS GA plus Azure and Google Cloud beta
slug: langsmith-byoc-multicloud
description: >-
  LangChain: LangSmith Bring Your Own Cloud is GA on AWS and in beta on Azure
  and Google Cloud—control plane managed by LangChain, traces and datasets in
  your cloud account.
date: '2026-11-03'
updated: '2026-11-22'
category: agent
subcategory: harness
tags:
  - LangChain
  - LangSmith
  - BYOC
  - Multicloud
author: Editorial
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/langsmith-byoc-aws-gc-azure'
sourceLevel: A
publisher: langchain
faqs:
  - question: Control vs data plane?
    answer: LangChain runs auth, org config, and billing metadata; traces, evals, datasets, agent deploys, and secrets stay in your data plane.
  - question: Leaving self-hosted?
    answer: An open-source migrator moves users/datasets/experiments/prompts; trace migration is available on AWS today per the post.
draft: false
candidateId: langchain-2026-11-03-74589fc0d1
---
LangChain’s blog (**3 Nov 2026**) expands **LangSmith BYOC** (Bring Your Own Cloud): **GA on AWS**, **beta on Azure and Google Cloud**. Traces, evals, datasets, prompts, and agent deployments stay in the customer’s chosen cloud account while LangChain operates the data plane—orchestration, scaling, and platform updates.

The split: LangChain’s control plane holds auth, org/workspace config, billing metadata, hashed API keys, and static UI; the customer data plane holds sensitive telemetry and runtimes. One org can attach several data planes by account, region, or business unit. Versus full self-host, BYOC skips Helm maintenance windows, tracks Cloud features sooner, and autoscales; self-host remains for maximum control. Migration: provision BYOC, then move workspace assets with the open-source tool; trace migration is called out for AWS today. Multicloud managed deployment—contact sales to provision.
