---
title: "给工具加守卫：校验、超时与审计"
slug: "02-tool-guards"
description: "可靠 Agent 的关键不在更聪明的规划，而在工具调用的守卫。"
date: "2026-10-21"
category: "agent"
subcategory: "mcp"
tags: ["专栏", "MCP"]
order: 2
draft: false
---

## 本讲目标

为每个工具补上输入校验、超时与审计日志。下一篇再谈评测。

## 检查

任意写工具都必须能在日志里回答：谁、何时、对什么资源做了什么。
