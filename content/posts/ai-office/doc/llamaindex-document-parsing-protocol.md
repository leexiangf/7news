---
title: LlamaIndex 发布 Document Parsing Protocol 0.1，统一「正确解析」口径
slug: llamaindex-document-parsing-protocol
description: >-
  LlamaIndex：提出 Document Parsing Protocol（DPP）工作草案 0.1，约 140 条规则覆盖文本/表格/表单/图表/
  图示，并附示例页与期望输出，供基准与标注共用。
date: '2026-10-28'
updated: '2026-11-23'
category: ai-office
subcategory: doc
tags:
  - LlamaIndex
  - Parsing
  - Benchmark
  - Standards
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-the-document-parsing-protocol'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: 要解决什么问题？
    answer: 不同解析器对同一页做不同结构判断，Agent 只看到解析结果，缺少「正确输出」的公开定义。
  - question: 在哪里查看？
    answer: parseprotocol.com；可用 Claude Skill 或 ChatGPT 参考文件对单页试跑；GitHub 可提 issue/PR。
draft: false
candidateId: llamaindex-2026-11-23-67e05e36b6
---
LlamaIndex（**2026-10-28**）发布 **Document Parsing Protocol（DPP）** 工作草案 **0.1**：给文档解析一套可公开争论的「标准答案」。约 **140** 条规则覆盖文本、表格、表单、图表、图示等，每条带示例页与期望输出；规则源自 ParseBench 标注约定。

动机很具体：同一张销售表可被三种解析器拆成三种 Markdown，Agent 问「2024 Q2」时会猜错列。DPP 要求保留双行表头；跨列头无法用 Markdown 表达时，改用 HTML 表。表单空字段写 `[blank]`，复选框用 `[x]`/`[ ]`；图表转成数值表；图示能则出 Mermaid，否则描述并保留标签。站点 **parseprotocol.com** 可对照源页与期望输出，并支持用 Claude Skill / ChatGPT 试跑。这是开放规范草案，不是新的解析器产品。
