---
title: 'LangChain: Eval-Driven Development for improving AI agents'
slug: langchain-eval-driven-development
description: >-
  LangChain outlines Eval-Driven Development: define success, write evals before
  changes, compare results, and keep evals running through release and
  production.
date: '2026-11-09'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - evaluation
  - agents
  - LangSmith
author: Editorial
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/what-is-eval-driven-development'
sourceLevel: A
publisher: langchain
faqs:
  - question: Core steps?
    answer: >-
      Define what good looks like, write the eval before building, change and
      compare, then keep automated and production evals running.
  - question: Product launch?
    answer: No. It is a methodology essay; LangSmith is an optional place to operationalize it.
draft: false
candidateId: langchain-2026-11-09-dc65a26b51
---
LangChain’s blog frames **Eval-Driven Development (EDD)** as the loop for improving agents: define success before you tweak prompts or tools, write the eval first, compare before/after, and keep evals alive through shipping and production.

Sections walk through defining “good,” writing evals up front, making changes against that bar, automating the suite, and evaluating in production. Treat it as a **methodology piece**, not an API launch—LangSmith can host the workflow, but the claim stands on its own.
