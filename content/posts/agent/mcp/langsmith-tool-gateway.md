---
title: LangSmith Tool Gateway 公测：统一管工具身份与策略
slug: langsmith-tool-gateway
description: >-
  LangSmith Tool Gateway 公测：单一 kit URL 管 MCP/内置工具的凭证、身份、拒绝/审批与追踪；与 LLM Gateway
  并列；兼容 Claude Code / Cursor 等 MCP 客户端。
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: mcp
tags:
  - LangChain
  - LangSmith
  - MCP
  - Governance
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/langsmith-tool-gateway'
sourceLevel: A
publisher: langchain
faqs:
  - question: 和 LLM Gateway 什么关系？
    answer: 并列：LLM Gateway 管模型调用，Tool Gateway 管工具调用的身份、策略与追踪。
  - question: 身份怎么走？
    answer: 可代用户（OAuth）或代 agent（agent auth / 共享 profile）。
draft: false
candidateId: langchain-2026-11-19-48de2ffa10
---

LangChain 博客（**2026-11-19**）宣布 **LangSmith Tool Gateway** 进入**公测**（挂在 LangSmith Agent Platform）：托管工具层，让 agent、编码 agent 与后端经**单一 kit URL** 调工具，由 Gateway 解析身份、管访问并记追踪。

## 能力拆解

| 能力 | 要点 |
| --- | --- |
| 注册 | 一次接入 MCP 或内置服务器（Google、Salesforce、GitHub、Linear 等） |
| Tool kit | 按需拼装；大规模工具可用 search mode 按任务加载 |
| 身份 | 「代用户」（OAuth）或「代 agent」（agent auth / 共享 profile） |
| 策略 | 管理员 deny 与人工审批 |
| 可观测 | 工具调用进 LangSmith trace（工具、服务器、用户、结果、延迟）；Enterprise 另有审计日志 |

与 **LLM Gateway** 并列，覆盖模型侧与工具侧治理。兼容任意 MCP 客户端（含 LangChain、Claude Code、Cursor）。属**平台公测**；拒绝策略与审计日志高级能力按产品权限开通。试点时先钉一两个 kit，再扩策略面。
