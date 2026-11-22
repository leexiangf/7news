---
title: Skyflow interceptor on AgentCore Gateway de-identifies tool calls
slug: aws-skyflow-agentcore-gateway-interceptor
description: >-
  Skyflow Detect as an AgentCore Gateway request/response interceptor: vault
  tokenization for tool args, model context, and document links; three Shield
  modes; fail-closed by default; no agent/tool code changes.
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: mcp
tags:
  - AWS
  - AgentCore
  - Skyflow
  - Privacy
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/protect-agent-tool-calls-with-skyflow-and-amazon-bedrock-agentcore-gateway/'
sourceLevel: A
publisher: aws
faqs:
  - question: Three modes?
    answer: Shield the tool, Shield the model, Shield the document (document de-ID is Detect v2 preview).
  - question: On failure?
    answer: Fail closed by default—plaintext does not proceed if de-identification is incomplete.
draft: false
candidateId: amazon-ml-2026-11-19-0752c95e43
---

AWS’s ML Blog (**19 Nov 2026**) shows wiring **Skyflow Detect** as a request/response interceptor on **Amazon Bedrock AgentCore Gateway**: when agents call tools through the Gateway, sensitive entities are de-identified / restored before hitting third-party tools or re-entering the model—**without changing agent or tool code**. Skyflow is Marketplace-subscribable; the interceptor is open source (MIT).

## Three Shields

| Mode | Behavior |
| --- | --- |
| Shield the tool | Tokenize args outbound; restore results inbound |
| Shield the model | De-identify prompts and tool results before the model |
| Shield the document | Swap signed URLs for de-identified copies (Detect v2 **preview**) |

Policies can live in Parameter Store, secrets in Secrets Manager, decisions in CloudWatch; failures default to **fail closed**. Complements AgentCore Policy and Bedrock Guardrails. Reference architecture + open component—document mode is still preview; pilot for region and latency.
