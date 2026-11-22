---
title: Azure Content Understanding adds GPT-5.6 / GPT-6 / GPT-6.1 with selection data
slug: azure-content-understanding-gpt-6
description: >-
  Foundry blog: Content Understanding gains GPT-5.6, GPT-6, and GPT-6.1; start
  document extraction on GPT-6.1 Sol, with task-level evals and relative token cost.
date: '2026-11-11'
updated: '2026-11-20'
category: ai-office
subcategory: doc
tags:
  - Azure
  - Content Understanding
  - GPT
  - Documents
author: Editorial
locale: en
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/content-understanding-adds-gpt-5-6-gpt-6-and-gpt-6-1-choose-the-right-model-for-your-workload/
sourceLevel: A
publisher: microsoft
faqs:
  - question: Where to start for document extraction?
    answer: Try GPT-6.1 Sol first; GPT-6 Luna when tokens dominate; GPT-6 Astra when remaining Sol errors are expensive.
  - question: Before spending up the model ladder?
    answer: Add a few labeled examples in Studio Knowledge—Luna rose from about 91.8% to 94.2% with five examples in their tests.
draft: false
candidateId: microsoft-foundry-2026-11-11-af1b7d0fc7
---
Microsoft Foundry says **Azure Content Understanding** now supports the **GPT-5.6, GPT-6, and GPT-6.1** families alongside the GPT-5 series, and refreshes its “mixing board” guidance: tune quality versus cost per workload instead of maxing every dial.

For **standard document field extraction**, start with **GPT-6.1 Sol**; try **GPT-6 Luna** when token spend matters most; test **GPT-6 Astra** when Sol’s leftover errors are costly. On the GA extraction set, Astra leads Schema-only LLM match (~**95.95%** vs Sol ~**95.74%**) but completion-token cost is about **5×** Sol; on a separate Preview set Sol leads Astra instead. Adding **five labeled examples** lifts Luna (~**91.82%→94.16%**), so high-volume pipelines should try “smaller model + Knowledge” before paying up.

Keep modalities separate: Astra leads document segmentation; among compared models **GPT-6 Sol** posts the highest headline video Generation F1 and long-video segmentation means, while **GPT-6.1 Sol** leads short-video ads; speech field classification/generation still references GPT-5.2 / 5.5 on current GA averages, with more investigation promised. Relative token axes use Sol Schema-only = 1.00× and exclude model-independent service fees. Re-bench on your own corpus.
