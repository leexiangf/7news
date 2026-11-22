---
title: 'LangChain: proactive agents reopen context-engineering problems'
slug: langchain-context-challenges-2026
description: >-
  Harrison Chase argues that after LLM-in-a-loop agents converged, always-on,
  goal-oriented agents surface new context challenges around notifications,
  memory, async work, goals, alignment, and browser use.
date: '2026-11-02'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - agents
  - context engineering
author: Editorial
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/context-engineering-challenges-late-2026'
sourceLevel: A
publisher: langchain
faqs:
  - question: Which “solved” practices does the post list?
    answer: >-
      Thread summarization, offloading large tool results, Skills for
      progressive disclosure, tool search, subagents for isolation, and Bash as
      a primary tool.
  - question: Is this a product launch?
    answer: No. It is an essay naming open problems, not a single API release.
draft: false
candidateId: langchain-2026-11-02-7a45c5f680
---
On the LangChain blog, Harrison Chase pushes back on the idea that agent context engineering is “done.” After builders converged on an LLM-in-a-loop calling tools inside a sandbox, he says **proactive, always-on, goal-oriented agents** are opening a new problem set—with few general solutions yet.

He grants a familiar toolkit: summarizing long threads, offloading bulky tool results, Skills for progressive disclosure, tool search, subagents for isolation, and Bash as a primary tool. The new list is different: **calibrating proactive notifications** without drowning users; **deciding what memory to keep** (simple stores, hard intelligence layers); **async tools and subagents** that must notify a still-responsive main agent; **goal decomposition and long-horizon consistency**; **alignment** against specification gaming; and treating the **browser** as the new Bash, with image/DOM context costs.

Read it as a roadmap of open harness questions, not a changelog entry.
