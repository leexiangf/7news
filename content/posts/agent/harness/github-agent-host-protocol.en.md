---
title: 'GitHub’s Agent Host Protocol for cross-device sessions'
slug: github-agent-host-protocol
description: >-
  GitHub Engineering describes an Agent Host Protocol aimed at continuing agent
  sessions across devices instead of tying them to one local host.
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags: [GitHub, Agent Host Protocol, sessions]
author: Editors
locale: en
sourceUrls:
  - 'https://github.blog/engineering/engineering-principles/building-the-agent-host-protocol-for-sessions-that-continue-across-devices/'
sourceLevel: A
publisher: github
faqs:
  - question: Problem statement?
    answer: >-
      Building a host protocol so agent sessions continue across devices; wire
      formats and security live in GitHub’s engineering post.
draft: false
candidateId: github-blog-2026-11-17-e2c93b2ad7
---

GitHub Engineering describes an **Agent Host Protocol** for sessions that continue across devices rather than staying stuck on one local process. For teams mixing cloud agents and local IDEs, whether session state can be externalized and resumed is a core UX question.

Message formats, auth, state sync, and security boundaries live in GitHub’s original. Multi-device agent builders can read it alongside “externalize session state, swappable hosts” designs.
