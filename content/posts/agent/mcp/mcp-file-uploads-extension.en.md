---
title: MCP drafts a file uploads and downloads extension
slug: mcp-file-uploads-extension
description: >-
  The MCP blog outlines an experimental File Uploads extension so large files
  can move out-of-band between clients, servers, and storage—aimed to stabilize
  by year-end.
date: '2026-11-10'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - MCP
  - file transfer
  - agents
author: Editorial
locale: en
sourceUrls:
  - >-
    https://blog.modelcontextprotocol.io/posts/exploring-file-uploads-and-downloads-in-mcp/
  - >-
    https://github.com/modelcontextprotocol/experimental-ext-file-uploads/blob/main/specification/draft/file-uploads.md
sourceLevel: S
publisher: mcp
faqs:
  - question: Extension ID?
    answer: io.modelcontextprotocol/files, for protocol revision 2026-07-28 and later.
  - question: Mandatory?
    answer: No. The extension is optional; clients and servers that skip it need no changes.
draft: false
candidateId: mcp-2026-11-10-ede7b2f07c
---
The Model Context Protocol blog covers the **File Uploads Working Group**: as agents save PDFs to cloud storage or pull large CSVs into sandboxes, developers asked for a shared pattern instead of bespoke tool conventions.

The draft extension is **`io.modelcontextprotocol/files`**, for protocol revision **2026-07-28** and later. Servers advertise `upload` / `maxInlineBytes` in `server/discover`; clients declare upload/download capability in request metadata. Files should travel out-of-band to their destination so the model need not read every byte. The work is still experimental—no reference implementation yet—with a goal to finalize and stabilize before year-end. The draft lives in the experimental-ext-file-uploads repo.
