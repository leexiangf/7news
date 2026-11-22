---
title: 'LangChain: shifting agents from tasks to goals'
slug: langchain-tasks-to-goals
description: >-
  LangChain argues agent UX is moving from user-specified tasks to
  user-specified goals, with agents decomposing, executing, and revising task
  lists iteratively.
date: '2026-11-16'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - LangChain
  - agents
  - goals
author: Editors
locale: en
sourceUrls:
  - 'https://www.langchain.com/blog/from-tasks-to-goals'
sourceLevel: A
publisher: langchain
faqs:
  - question: What changes in practice?
    answer: >-
      Users state a goal; the agent decomposes into tasks, runs some, updates
      the list, and iterates—requiring better brainstorming and task selection
      via new context/prompt strategies.
draft: false
candidateId: langchain-2026-11-16-cfa79461fd
---
LangChain’s *From tasks to goals* post frames a product shift: users used to specify tasks; now they specify a **goal**, and the agent decomposes, executes some work, revises the task list, and iterates.

That changes what an agent does, what it needs, how it is built, and how people interact with it. Agents must brainstorm and select tasks well—with new context engineering and prompting—and avoid looping on the same suggestions. Treat it as methodology, not a single API drop.

Builders of long-horizon agents can check whether their UI is still task-list-only; implementation details stay in LangChain/LangSmith docs.
