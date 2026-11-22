---
title: LangChain 谈「公司级 Harness」的五个底座
slug: langchain-company-harness
description: >-
  LangChain 用内部 GTM、工程与内容智能体总结多玩家 Harness：入口、身份、记忆、沙箱执行与大量后台调度，并指向 Managed Deep
  Agents。
date: '2026-10-24'
updated: '2026-11-12'
category: agent
subcategory: harness
tags:
  - LangChain
  - Harness
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.langchain.com/blog/components-building-company-harness'
\npublisher: langchain
faqs:
  - question: 五个底座是什么？
    answer: >-
      官方归纳为：落在已有工作入口（他们是 Slack）；按场景做 OBO
      或固定身份；全局/用户级记忆；代码在沙箱执行并可经受控代理访问需鉴权服务；大量运行由日程或事件触发而非每次人工点开。
  - question: 这是产品发布吗？
    answer: >-
      主要是实践总结，并说明其内部智能体建在 Managed Deep Agents（基于开源 Deep Agents
      harness）上；不是单一新模型发版新闻。
draft: false
candidateId: langchain-2026-10-24-e7cd8ea3e3
publisher: langchain
---
LangChain 于 2026 年 10 月 24 日发文，总结他们在营销、销售与工程侧搭内部智能体时反复撞上的问题，并抽出一套「公司级 Harness」共用底座。文章不是新模型发布，而是把多玩家场景里真正卡住的工程件摊开——对正在从单人 Demo 拉到全员可用代理的团队更有用。

五个底座写得很具体：智能体待在人已经在用的入口（他们选 Slack，可 DM/频道 @，并支持「掰出」独立线程以免污染人工讨论）；身份上区分 **OBO（代表提问者）** 与 **固定服务账号**，按工具拆分——例如 OpenSWE 前台开 PR 用你的 GitHub 身份，后台审 PR 用 GitHub App；GTM 在共享频道禁用需代表个人的邮件类工具。记忆分全局与用户两级，由智能体决定记到哪一层。代码在沙箱里跑，经 LangSmith Sandboxes 的 secret proxy 受控访问需鉴权服务。大量运行是**日程或事件触发**（ambient），而非每次人工点开——例如监听新 PR 做评审，或用户让 GTM 自己建每日简报 cron。

文中点名三类内部代理：GTM（线索、邮件、日简报）、OpenSWE（开/审 PR）、Content Studio（按品牌语气起草多形态内容）。体验上他们承认 Slack 不够用时会补专用 UI（如大批量待发邮件队列）。整套建在 Managed Deep Agents 上，底层是开源 Deep Agents harness。

可读作一份架构清单，而不是「上了某框架就自动可靠」。落地时优先对齐：入口是否在人的主战场、每把工具的身份模型是否说得清、后台调度是否占运行大头。观察点是你自己的 OBO/服务账号矩阵，以及沙箱出站鉴权有没有统一代理，而不是先纠结模型品牌。
