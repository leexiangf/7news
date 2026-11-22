---
title: LangSmith Enterprise adds layered controls for sensitive traces
slug: langchain-langsmith-trace-controls
description: >-
  LangChain: LangSmith Enterprise can hide trace inputs/outputs, grant access by
  user group, and apply ABAC from root-run metadata—store full fidelity, show
  least privilege.
date: '2026-11-17'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - LangSmith
  - Security
  - Governance
author: Editorial
locale: en
sourceUrls:
  - >-
    https://www.langchain.com/blog/protect-sensitive-data-in-your-traces-new-controls-in-langsmith
sourceLevel: A
publisher: langchain
faqs:
  - question: Three controls?
    answer: Restrict input/output visibility; user-group permissions on top of RBAC/ABAC; trace-level policies from root-run metadata.
  - question: Availability?
    answer: LangSmith Enterprise now; docs cover input/output access, user groups, and metadata policies.
draft: false
candidateId: langchain-2026-11-17-207b91be11
---
LangChain’s blog (Trammell Saltzgaber, **17 Nov 2026**) adds three **LangSmith Enterprise** controls for sensitive production traces: engineers can keep run trees, latency, and cost while **inputs/outputs** stay hidden; **user groups** carry workspace-scoped permissions; and **root-run metadata** drives trace-level ABAC (customer id, user id, and peers).

The model is full-fidelity storage without duplicate redacted workspaces, then least-privilege views—support sees I/O only for their customers, while agent engineers see performance trees with I/O masked. Governance feature ship, not an open-source harness change.
