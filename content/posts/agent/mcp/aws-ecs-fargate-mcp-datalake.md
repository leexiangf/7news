---
title: AWS 实践：ECS Fargate 上的无服务器 MCP 数据湖网关
slug: aws-ecs-fargate-mcp-datalake
description: >-
  AWS 团队介绍在 ECS Fargate 上构建元数据驱动的 MCP
  服务器，让 Agent 经统一网关访问企业数据湖，新数据集只需 JSON 元数据即可上线。
date: '2026-11-06'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - AWS
  - MCP
  - ECS
  - 数据湖
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/serverless-mcp-server-for-ai-agent-data-lake-access-on-amazon-ecs-fargate/
sourceLevel: A
publisher: amazon
faqs:
  - question: 核心设计目标？
    answer: 配置驱动接入、Agent 无关的 MCP 工具面、集中权限、弹性无服务器基础设施。
  - question: 查询跑在哪？
    answer: 文中工具后端含 Athena、Redshift 与 Bedrock Knowledge Bases；Agent 编排用 Bedrock。
draft: false
candidateId: amazon-ml-2026-11-06-7ffe65e37e
---
AWS 北美分拣中心（NASC）团队发文介绍：在 **Amazon ECS Fargate** 上搭建**无服务器 MCP 服务器**，作为 Agent 与企业数据湖之间的统一网关。动机是避免每个 Agent 各自写 SQL/权限逻辑；新数据集只需一份 JSON 元数据，流水线同步后自动发现。

架构分层：客户端（Cognito JWT、会话）、MCP 服务（FastMCP + Bedrock Agent）、工具与知识库刷新、以及 Athena/Redshift/Bedrock Knowledge Bases 等数据后端。设计目标写明配置驱动接入、Agent 无关工具面、集中鉴权与弹性扩缩。这是**内部实践参考架构**，不是宣布新的托管 MCP 产品名；落地需自行评估安全与多租户模型。
