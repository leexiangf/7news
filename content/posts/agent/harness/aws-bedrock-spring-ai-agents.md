---
title: AWS：用 Spring AI 与 Bedrock AgentCore 在 Java 里做自主智能体
slug: aws-bedrock-spring-ai-agents
description: >-
  AWS 机器学习博客介绍 spring-ai-agentcore：让 JVM 团队用熟悉的 Spring 模式接入 Bedrock，示例含旅行助手与多智能体文档处理。
date: '2026-11-11'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - AWS
  - Bedrock
  - Spring AI
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/build-autonomous-ai-agents-with-amazon-bedrock-and-spring-ai/
sourceLevel: A
publisher: aws
faqs:
  - question: 面向谁？
    answer: 已有 JVM/Spring CI/CD 与运维习惯、希望把智能体推到生产的 Java 团队。
  - question: 示例覆盖什么？
    answer: 单智能体旅行助手（工具调用与记忆），以及带规则引擎与告警的多智能体智能文档处理（IDP）。
draft: false
candidateId: amazon-ml-2026-11-11-4fde59b892
---
AWS 机器学习博客面向 **Java** 团队：企业侧已有 JVM 工具链与 CI/CD，但智能体从原型到生产常缺扩缩、治理与运维默认能力。文中把 **Spring AI**（自动配置、依赖注入、Advisor 组合）与 **Amazon Bedrock AgentCore**（框架/模型无关的运行时、记忆、浏览器自动化、代码执行与身份等）接到一起，并指向社区库 **spring-ai-agentcore**。

两条示例路径：一是**单智能体旅行助手**，演示工具调用与多轮记忆；二是**多智能体智能文档处理（IDP）**，由专长智能体、规则引擎与告警协同。叙事重点是「用写 REST/安全/数据访问的同一套 Spring 习惯」搭自主规划与工具调用，而不是另起一套 AI 专用栈。落地细节、前置条件与代码以原文仓库示例为准；本文是架构引导，不是新基础模型发版。
