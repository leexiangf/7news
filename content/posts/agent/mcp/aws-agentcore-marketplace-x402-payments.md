---
title: AgentCore Payments 接入 Marketplace x402，代理可用美元记入 AWS 账单
slug: aws-agentcore-marketplace-x402-payments
description: >-
  AgentCore Payments 增加 AWS Billing：代理发现并购买 Marketplace x402 商品，按次以美元记入开发者
  AWS 账单；会话预算 + Gateway 连接器；无需稳定币钱包。
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: mcp
tags:
  - AWS
  - AgentCore
  - x402
  - Marketplace
author: 编辑部
locale: zh
sourceUrls:
  - 'https://aws.amazon.com/blogs/machine-learning/enable-ai-agents-to-pay-for-aws-marketplace-x402-products-with-amazon-bedrock-agentcore-payments/'
sourceLevel: A
publisher: aws
faqs:
  - question: 还要稳定币钱包吗？
    answer: 用 AWS Billing 路径时按美元记入 AWS 账单，文中称可去掉稳定币钱包与卖家 API key。
  - question: 如何控费？
    answer: Payment session 设预算；AgentCore policy 可限制卖家；CloudTrail / Cost Explorer 可审计。
draft: false
candidateId: amazon-ml-2026-11-19-4257f147f1
---

AWS 机器学习博客（**2026-11-19**）扩展 **Amazon Bedrock AgentCore Payments**：在已有 x402 / MPP 付费 API 能力之上，增加 **AWS Billing**，让代理发现并购买 **AWS Marketplace** 上 x402 启用的软件、API、数据与内容，**按次以美元记入开发者 AWS 账单**。

## 流程与控费

| 步骤 | 行为 |
| --- | --- |
| 1 | 卖家回 **402** 与签名报价 |
| 2 | 代理把报价交给 `ProcessPayment`（`AWS_BILLING_X402`） |
| 3 | 校验会话预算后发支付 token |
| 4 | 代理带 token 重试 |

另有 **AgentCore Gateway** Marketplace 连接器做只读发现；Private Marketplace 仍约束可购商品。首次购买创建与卖家的协议，后续计量进账单；上线支持 x402 exact scheme。文中称可去掉稳定币钱包与卖家 API key。示例点到 Tavily 等卖家与 GitHub sample。属**企业向代理商务基建**；限额与区域以文档为准。
