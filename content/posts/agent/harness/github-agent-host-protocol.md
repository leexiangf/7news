---
title: GitHub 工程：Agent Host Protocol 让会话跨设备续跑
slug: github-agent-host-protocol
description: >-
  GitHub 工程博客介绍 Agent Host Protocol，目标是让 Agent 会话能在设备之间延续，而不是绑死在单一本地主机。
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags: [GitHub, Agent Host Protocol, 会话]
author: 编辑部
locale: zh
sourceUrls:
  - 'https://github.blog/engineering/engineering-principles/building-the-agent-host-protocol-for-sessions-that-continue-across-devices/'
sourceLevel: A
publisher: github
faqs:
  - question: 解决什么问题？
    answer: 构建让 Agent 会话可跨设备继续的 Host Protocol；消息格式、鉴权与状态模型以 GitHub 工程原文为准。
draft: false
candidateId: github-blog-2026-11-17-e2c93b2ad7
---

GitHub 工程博客讨论如何用 **Agent Host Protocol** 让 Agent 会话跨设备延续，而不是绑定在单一本机进程上。对多端协作、云端 Agent 与本地 IDE 混用的团队，会话状态能否外置与续跑是关键体验问题。

消息格式、鉴权、状态同步与安全边界以 GitHub 原文为准。做多端 Agent 产品时，可对照「会话状态外置、主机可替换」的架构思路阅读该文。
