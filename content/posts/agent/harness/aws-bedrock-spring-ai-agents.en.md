---
title: AWS shows Spring AI agents on Amazon Bedrock AgentCore
slug: aws-bedrock-spring-ai-agents
description: >-
  AWS ML Blog walks Java teams through spring-ai-agentcore: familiar Spring
  patterns on Bedrock, with a travel assistant and multi-agent IDP examples.
date: '2026-11-11'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - AWS
  - Bedrock
  - Spring AI
  - Agent
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/build-autonomous-ai-agents-with-amazon-bedrock-and-spring-ai/
sourceLevel: A
publisher: aws
faqs:
  - question: Who is this for?
    answer: JVM/Spring teams that already own CI/CD and ops patterns and want agents in production.
  - question: What do the samples cover?
    answer: A single-agent travel assistant (tools + memory) and a multi-agent intelligent document processing (IDP) stack with rules and alerting.
draft: false
candidateId: amazon-ml-2026-11-11-4fde59b892
---
AWS’s machine-learning blog targets **Java** shops: JVM pipelines and ops habits are already there, but agent prototypes often lack defaults for scale, governance, and day-two ops. The post pairs **Spring AI** (auto-config, DI, composable advisors) with **Amazon Bedrock AgentCore** (framework- and model-agnostic runtime, memory, browser automation, code execution, identity) via the community **spring-ai-agentcore** library.

Two walkthroughs: a **single-agent travel assistant** for tool calling and multi-turn memory, and a **multi-agent intelligent document processing (IDP)** system where specialists, a rules engine, and alerting cooperate. The pitch is to build planning and tool use with the same Spring idioms used for REST, security, and data access—not a parallel AI-only stack. Prerequisites and code live in the linked samples; this is an architecture guide, not a new foundation-model launch.
