---
title: "先写清 Agent 循环：目标、观察、行动、停止"
slug: "01-define-loop"
description: "搭 Agent 前先把控制循环写明白，避免一上来堆工具。"
date: "2026-10-20"
category: "agent"
subcategory: "harness"
tags: ["专栏", "Agent"]
order: 1
draft: false
---

## 本讲目标

用一段伪代码描述你的 Agent：它何时观察、何时行动、何时停止。没有这一步，工具接得越多越乱。

## 练习

写下三个必须停止的条件，例如：达到目标、步数耗尽、连续两轮工具失败。
