---
title: MCP 推进文件上传/下载扩展草案
slug: mcp-file-uploads-extension
description: >-
  MCP 博客介绍 File Uploads Working Group 的实验性扩展：让大文件在客户端、服务器与存储间带外传输，年底前目标稳定。
date: '2026-11-10'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - MCP
  - 文件传输
  - Agent
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://blog.modelcontextprotocol.io/posts/exploring-file-uploads-and-downloads-in-mcp/
  - >-
    https://github.com/modelcontextprotocol/experimental-ext-file-uploads/blob/main/specification/draft/file-uploads.md
sourceLevel: S
publisher: mcp
faqs:
  - question: 扩展标识？
    answer: io.modelcontextprotocol/files；适用于协议修订 2026-07-28 及以后。
  - question: 是否强制？
    answer: 否。扩展可选；不打算支持的客户端/服务器无需改动。
draft: false
candidateId: mcp-2026-11-10-ede7b2f07c
---
Model Context Protocol 博客介绍 **File Uploads Working Group** 的进展：面对「对话里存 PDF 到云盘」「把大 CSV 拉进沙箱」等需求，社区拿出实验性扩展草案，避免各家自造工具约定与传输机制。

扩展标识为 **`io.modelcontextprotocol/files`**，面向协议修订 **2026-07-28** 及以后。服务器可在 `server/discover` 中声明 `upload` / `maxInlineBytes`；客户端在请求元数据中声明上传/下载能力。设计原则是模型不必读完每个字节，文件可带外直达目标存储。当前仍属实验、尚无参考实现；官方期望年底前定稿并稳定。草案见 experimental-ext-file-uploads 仓库。
