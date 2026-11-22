---
title: 'DeepSeek opens App capabilities on the API: search, files, links, and voice'
slug: deepseek-app-api
description: >-
  DeepSeek’s 13 Nov 2026 API note makes App-parity features callable: V4.1-Flash
  built-in web search, URL reading, file parsing, and safety checks, plus
  standalone OCR/ASR/TTS and an open-source demo.
date: '2026-11-13'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - DeepSeek
  - API
  - V4.1-Flash
  - tool use
author: Editors
locale: en
sourceUrls:
  - 'https://api-docs.deepseek.com/news/news261113'
  - 'https://api-docs.deepseek.com/guides/build_a_chatbot'
  - 'https://github.com/deepseek-ai/chat-demo'
sourceLevel: S
publisher: deepseek
faqs:
  - question: What built-in capabilities shipped?
    answer: >-
      On V4.1-Flash (deepseek-flash) across Messages, Responses, and Chat
      Completions, the server can assemble web/image search with citations
      (non-thinking), deep-thinking search that reads pages, file input
      (PDF/Office/images), automatic URL fetching from user messages, and
      input/output safety checks.
  - question: 'How do I enable them, and what are the compliance notes?'
    answer: >-
      Use deepseek_web_search for search and deepseek_read_url for link reading.
      Public-facing apps must enable safety checks; developers remain
      responsible for moderation, applicable model registration, and AI-content
      labeling. Extended tools add usage fees on top of token charges—see
      DeepSeek’s tool pricing table.
draft: false
candidateId: deepseek-news-2026-11-20-c1a85d8bd6
---
DeepSeek’s API docs news page says the capabilities behind the DeepSeek App are now available through the API. The official dated entry is **13 November 2026**. The pitch is practical: stop rebuilding search, files, links, and voice plumbing, and spend cycles on product differentiation.

There are two integration paths. First, built-in tools on **V4.1-Flash (`deepseek-flash`)** across `Messages`, `Responses`, and `Chat Completions`, with tool calls and context assembly handled server-side: web or image search with citations in non-thinking mode; search-and-read during multi-step reasoning; parsing PDFs, Office files, and images into context; fetching URLs that appear in user messages; and safety checks that can return refusal indicators. Enable search with `deepseek_web_search` and URL reading with `deepseek_read_url`. Second, standalone Search, Fetch, OCR, ASR, and TTS APIs for custom workflows.

Compliance and cost sit in the same note. Public-facing apps **must** turn on safety checks; developers still own moderation, applicable model registration, and AI-generated content labeling. Extended capabilities add **tool usage fees** beyond standard token charges—use DeepSeek’s tool pricing table for numbers (this article does not reprint a table that may change without a separate news post). DeepSeek also points to an open-source frontend demo that can import DeepSeek chat history: a hosted demo, the `deepseek-ai/chat-demo` repo, and a chatbot build guide.

For integrators, treat this as App surface area becoming API surface area: use built-ins to match the consumer app quickly, or compose OCR/ASR/TTS yourself. Before production, verify safety flags and tool bills, and reproduce a minimal path from the chatbot guide. Watch whether tool prices move and whether models beyond Flash inherit the same tool surface.
