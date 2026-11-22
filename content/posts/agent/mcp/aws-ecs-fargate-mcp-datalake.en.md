---
title: 'AWS practice: a serverless MCP gateway to the data lake on ECS Fargate'
slug: aws-ecs-fargate-mcp-datalake
description: >-
  An AWS team describes a metadata-driven MCP server on ECS Fargate so agents
  reach an enterprise data lake through one gateway—new datasets need only a
  JSON metadata file.
date: '2026-11-06'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - AWS
  - MCP
  - ECS
  - data lake
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/serverless-mcp-server-for-ai-agent-data-lake-access-on-amazon-ecs-fargate/
sourceLevel: A
publisher: amazon
faqs:
  - question: Design goals?
    answer: >-
      Config-driven access, agent-agnostic MCP tools, centralized permissions,
      and elastic serverless infrastructure.
  - question: Where do queries run?
    answer: Tool backends include Athena, Redshift, and Bedrock Knowledge Bases; Bedrock orchestrates the agent.
draft: false
candidateId: amazon-ml-2026-11-06-7ffe65e37e
---
An AWS North America Sort Center team describes a **serverless MCP server on Amazon ECS Fargate** that sits as a shared gateway between AI agents and an enterprise data lake. The point is to stop every agent from reinventing SQL, schema knowledge, and access control; onboarding a dataset is a JSON metadata file the server discovers on the next sync.

Layers cover the client (Cognito JWT, sessions), MCP service (FastMCP + Bedrock agent), tools and knowledge-base refresh, and Athena / Redshift / Bedrock Knowledge Bases backends. Goals: configuration-driven access, agent-agnostic tools, centralized permissions, and elastic scale. Read it as a **reference architecture from production practice**, not a new named managed MCP product—security and tenancy still need local design.
