---
title: LangChain 公开 GTM Agent 如何稳定产出销售文档
slug: langchain-gtm-agent-artifacts
description: >-
  LangChain 介绍内部 GTM Agent 的销售工件生成：12 周产出 1540
  份材料；称发出工件的交易进入后续阶段比例约 47% 对 16%。
date: '2026-11-10'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - GTM Agent
  - Deep Agents
  - 销售
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/gtm-agent-high-quality-sales-artifacts'
sourceLevel: A
publisher: langchain
faqs:
  - question: 源页日期？
    answer: 博客标注 2026-11-10。
  - question: 外人怎么复现？
    answer: 官方称可基于 Deep Agents harness；Managed Deep Agents 已含沙箱、skills 与记忆等依赖。
draft: false
candidateId: langchain-2026-11-11-1279967aa2
---
LangChain 博客分享内部 **GTM Agent** 如何生成一致、合品牌的销售工件。过去 **12 周**称节省销售代表大量手工时间，共生成 **1,540** 份材料（账户计划、价值证明、提案 deck、入职计划等），近周节奏约 **100+ 份/周**；发出给客户的工件对应约 **337** 小时代表时间节省。

关键结果（公司自述、匹配对照）：发出工件的交易进入后续阶段约 **47%**，对照未发约为 **16%**；约 **46%** 工件在 **14 天内**跟进客户通话。质量主因被归为**业务上下文**而非单纯调 prompt：Salesforce、用量、通话纪要、阶段门槛，以及「品牌即代码」模板；Agent 还能按交易阶段主动建议缺的文档。读者可在 **Deep Agents** / **Managed Deep Agents** 上复用沙箱、skills、记忆与定时跑。数字均为 LangChain 内部运营统计，外推需谨慎。
