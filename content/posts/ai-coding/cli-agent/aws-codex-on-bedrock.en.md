---
title: AWS guides enterprise pilots of OpenAI Codex on Amazon Bedrock
slug: aws-codex-on-bedrock
description: >-
  AWS blog: Codex can call Bedrock-hosted OpenAI models; choose Native AWS
  Access, AgentCore Gateway, or an LLM Gateway, with an open Guidance repo.
date: '2026-11-11'
updated: '2026-11-20'
category: ai-coding
subcategory: cli-agent
tags:
  - AWS
  - Bedrock
  - Codex
  - OpenAI
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/openai-codex-on-amazon-bedrock/'
sourceLevel: A
publisher: aws
faqs:
  - question: Where does Codex run?
    answer: Still on the developer workstation; the design choice is how model calls reach Bedrock and where identity, policy, and telemetry sit.
  - question: Recommended starting path?
    answer: Least-privilege Native AWS Access for small pilots; AgentCore Gateway for managed routing/Guardrails; LLM Gateway when you enforce controls in the request path.
draft: false
candidateId: amazon-ml-2026-11-11-8983976445
---
AWS’s machine-learning blog speaks to platform teams: developers already use **OpenAI Codex** to explore code and clear repetitive work, but enterprises do not want a second stack for model access, identity, and ops. Codex **stays on the workstation**; inference can target supported OpenAI models on **Amazon Bedrock**. Examples center on **GPT-5.6 Sol**, with a reminder to confirm Sol / Terra / Luna availability per Region and inference path.

Three rollout paths: **Native AWS Access** (IAM Identity Center + least privilege—usual pilot default); **AgentCore Gateway** (managed routing and Bedrock Guardrails); and an **LLM Gateway** (enforce controls in the request path; a custom gateway is the advanced form). The open **Guidance for Codex on AWS** repo ships quick starts for Native, AgentCore, LiteLLM on ECS, Portkey, ADOT, and CloudWatch. Decide who may use which models/Regions, where config lives, what telemetry to collect, and which skills/MCP servers are allowed before widening access. This is an enterprise integration guide—not a new Codex client release.
