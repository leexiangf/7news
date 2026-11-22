---
title: Web Answer on Amazon Bedrock AgentCore is generally available
slug: aws-bedrock-web-answer
description: >-
  AWS announces GA for Web Answer on AgentCore: one tool call returns a
  source-cited synthesized answer, complementing Web Search that returns raw
  results.
date: '2026-11-05'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - AWS
  - Bedrock
  - AgentCore
  - MCP
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/getting-started-with-web-answer-on-amazon-bedrock-agentcore/
sourceLevel: A
publisher: amazon
faqs:
  - question: Web Answer vs Web Search?
    answer: >-
      Web Search returns ranked URLs/snippets for your model to synthesize; Web
      Answer owns retrieval, verification, synthesis, and attribution.
  - question: How do agents call it?
    answer: >-
      Add a Web Answer target on an AgentCore Gateway; it appears over MCP
      tools/list and tools/call with the right IAM permissions.
draft: false
candidateId: amazon-ml-2026-11-05-6dde141103
---
AWS’s Machine Learning Blog announces general availability of **Web Answer** on **Amazon Bedrock AgentCore**. Agent builders send a natural-language question in one tool call and get a **synthesized, source-cited answer**—without owning a search–retrieve–synthesize–cite pipeline.

Flow: agent → **AgentCore Gateway** (IAM or JWT) → an AWS-managed Web Answer connector. The connector plans parallel searches, reads key pages to verify facts, searches again when evidence is thin, and binds claims to URLs before returning an **MCP** tool result. Versus **Web Search** (ranked results, your model still synthesizes), Web Answer fits factual sub-tasks inside a larger agent. Setup adds the connector as a Gateway target with `bedrock-agentcore:InvokeWebAnswer` and related permissions; pricing follows AWS meters.
