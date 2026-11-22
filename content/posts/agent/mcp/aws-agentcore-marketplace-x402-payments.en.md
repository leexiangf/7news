---
title: AgentCore Payments adds Marketplace x402 billed in USD on the AWS invoice
slug: aws-agentcore-marketplace-x402-payments
description: >-
  AgentCore Payments adds AWS Billing so agents can discover and buy Marketplace
  x402 products, charged per use in USD on the developer’s AWS bill—session
  budgets and Gateway connector; no stablecoin wallet.
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: mcp
tags:
  - AWS
  - AgentCore
  - x402
  - Marketplace
author: Editorial
locale: en
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/enable-ai-agents-to-pay-for-aws-marketplace-x402-products-with-amazon-bedrock-agentcore-payments/'
sourceLevel: A
publisher: aws
faqs:
  - question: Still need a stablecoin wallet?
    answer: On the AWS Billing path, charges hit the AWS invoice in USD—the post says you can drop stablecoin wallets and seller API keys.
  - question: How to control spend?
    answer: Payment-session budgets; AgentCore policy can limit sellers; CloudTrail / Cost Explorer for audit.
draft: false
candidateId: amazon-ml-2026-11-19-4257f147f1
---

AWS’s ML Blog (**19 Nov 2026**) extends **Amazon Bedrock AgentCore Payments**: on top of existing x402 / MPP paid-API support, **AWS Billing** lets agents discover and buy x402-enabled software, APIs, data, and content on **AWS Marketplace**, charged **per use in USD on the developer’s AWS bill**.

## Flow and spend control

| Step | Behavior |
| --- | --- |
| 1 | Seller returns **402** with a signed quote |
| 2 | Agent hands the quote to `ProcessPayment` (`AWS_BILLING_X402`) |
| 3 | After session-budget checks, issue a payment token |
| 4 | Agent retries with the token |

An **AgentCore Gateway** Marketplace connector supports read-only discovery; Private Marketplace still constrains what can be bought. First purchase creates a seller agreement; metering follows on the bill. Launch supports the x402 exact scheme. The post says stablecoin wallets and seller API keys can be dropped. Examples cite sellers such as Tavily plus a GitHub sample. Enterprise agent-commerce plumbing—quotas and regions live in the docs.
