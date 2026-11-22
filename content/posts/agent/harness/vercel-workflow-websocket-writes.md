---
title: Vercel Workflow SDK 默认经 WebSocket 写入事件与流
slug: vercel-workflow-websocket-writes
description: >-
  Vercel Changelog：Workflow SDK 5.2.0+ 将事件/流写入默认改为 WebSocket，替代按次
  HTTP；升级后新 run 生效，进行中的 run 仍走原部署。
date: '2026-11-09'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Workflow
  - WebSocket
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vercel.com/changelog/workflow-writes-now-use-websockets-on-vercel'
sourceLevel: A
publisher: vercel
faqs:
  - question: 要改业务代码吗？
    answer: 一般不用；升级到 workflow@5.2.0 或更新即可，既有流式写法可保持。
  - question: 进行中的 run？
    answer: 在启动它们的旧部署上跑完；新 run 才用 WebSocket 写入。
draft: false
candidateId: vercel-2026-11-09-cae1c36134
---
Vercel Changelog 宣布：**Workflow SDK** 向 Vercel Workflows 发送事件写入与流写入时，默认改走 **WebSocket**，不再「每次写入（或流写入组）一次 HTTP」。升级到 **`workflow@5.2.0`** 或更新即可，无需改业务逻辑；既有 `getWritable` 流式写法可原样使用。

部署升级后，**新 run** 使用 WebSocket；**进行中的 run** 仍在启动它们的部署上结束。对高频 token/chunk 写出的步骤，可减少逐条 HTTP 开销。
