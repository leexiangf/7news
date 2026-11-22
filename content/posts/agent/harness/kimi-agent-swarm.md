---
title: Kimi Agent Swarm：最多百级子 Agent 并行，顶层订阅研究预览
slug: kimi-agent-swarm
description: >-
  Agent Swarm 以自组织分工替代单 Agent 长程串行；K2.5 可并行约 100 子 Agent、逾 1500 次工具调用，相对串行约快
  4.5×；顶层订阅研究预览。
date: '2026-11-20'
updated: '2026-11-21'
category: agent
subcategory: harness
tags:
  - Kimi
  - Moonshot
  - Agent Swarm
  - 多 Agent
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.kimi.com/en/blog/agent-swarm'
sourceLevel: S
publisher: moonshot
faqs:
  - question: 解决什么瓶颈？
    answer: 单 Agent 串行长程任务把上下文撑满，折叠/摘要有损；水平扩展成可分工组织才能撑宽检索与多视角综合。
  - question: 规模数字？
    answer: 搭配 K2.5 最多约 100 子 Agent、逾 1500 次工具调用，相对串行约快 4.5×——厂商自述。
  - question: 谁能用？
    answer: 顶层订阅用户；早期研究预览；后续计划含子 Agent 直连通信与并行宽度动态控制。
draft: false
candidateId: moonshot-2026-11-20-7b04d51d69
---

月之暗面（Kimi）发布 **Agent Swarm**：不是「再堆一个更强单助手」，而是运行时自组织的班子——统筹、检索、分析、核对在任务中生成，而非手写整棵 if-else。

## 为什么单 Agent 撞墙

长程、串行执行会填满上下文，随后只能折叠或摘要腾地方，压缩有损，后期推理变差。官方称这不是临时 bug，而是窗口、时间与单点管理结构的上限。对策是**水平扩展**：可并行的子 Agent 网络覆盖广域发现、批量下载、多文件与多视角写作；并强调「允许独立结论再强制对齐」，把分歧当结构能力。

## 可核对数字与用例

搭配 **Kimi K2.5**：

| 口径 | 数字 |
| --- | --- |
| 并行子 Agent | 最多约 **100** |
| 工具调用 | 逾 **1500** 次 |
| 相对串行 | 约快 **4.5×** |

适合：宽检索（如 100 个垂类 YouTube 找头部创作者）、散落文集汇总、数十 PDF 合成约百页综述、多风格续写等——博文附可分享演示链。速度与质量比较均为厂商自述；收益取决于任务是否真能并行、综合步是否引入新失败模式。

## 可用性

面向**顶层订阅**，标明**早期研究预览**；路线图提子 Agent 直连通信、并行宽度动态控制等 hardening。强依赖严格串行状态机的任务，先别假设百路并行一定更稳。观察点：预览权限发放、失败与冲突上报、通信与宽度控制何时落地。
