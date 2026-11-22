---
title: 给智能体接入 MCP：工具注册、权限和调试的三个坑
slug: mcp-server-checklist
description: 把 MCP 接到 Agent 时最容易翻车的三处：注册表漂移、权限过大、以及调试时分不清是模型问题还是工具契约问题。
date: '2026-11-04'
category: agent
subcategory: mcp
tags:
  - MCP
  - Agent
  - 调试
author: 编辑部
\npublisher: mcp
sourceUrls:
  - 'https://modelcontextprotocol.io/'
faqs:
  - question: MCP 和普通 function calling 有何不同？
    answer: MCP 强调可发现的工具契约与宿主侧连接；对团队协作和多客户端复用更友好，但运维面也更大。
  - question: 权限最小应该怎么切？
    answer: 按资源与动作拆分，默认只读，写操作单独授权并记录审计。
draft: false
publisher: mcp
---

## 先讲三个坑

### 1. 工具注册表漂移

宿主里登记的工具名、参数 schema 与服务器实际暴露的不一致。模型会「一本正经地」调用不存在的参数。

**处理**：构建期生成一份工具清单快照，启动时做校验，不一致直接失败。

### 2. 权限过大

为了省事给了文件系统或数据库的宽权限。Agent 一旦循环调用，损失会被放大。

**处理**：每个工具声明允许的路径前缀与操作动词；危险工具需要二次确认策略。

### 3. 调试归因错误

超时、空结果、schema 错误常被当成「模型笨」。先用固定输入跑工具单测，再把同一输入塞进 Agent。

## 最小检查清单

```text
[ ] schema 与实现同源生成
[ ] 只读/写入工具分桶
[ ] 超时与重试有上限
[ ] 每次调用写结构化日志
[ ] 有一份固定回归用例
```

把清单挂进 CI 后，MCP 接入会从「神秘仪式」变成可维护的接口工程。
