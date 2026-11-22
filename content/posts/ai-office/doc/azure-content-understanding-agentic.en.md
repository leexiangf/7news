---
title: Azure Content Understanding adds agentic mode (preview)
slug: azure-content-understanding-agentic
description: >-
  Microsoft Foundry’s Content Understanding agentic mode uses a document-native
  harness for hard multi-step tasks—while standard single-pass extraction still
  covers most schemas.
date: '2026-11-09'
updated: '2026-11-20'
category: ai-office
subcategory: doc
tags:
  - Azure
  - Content Understanding
  - documents
  - agents
author: Editorial
locale: en
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/when-one-pass-isnt-enough-agentic-mode-in-azure-content-understanding/
sourceLevel: A
publisher: microsoft
faqs:
  - question: When to pick agentic over standard?
    answer: >-
      Cross-page search, multi-step math/checks, and evidence assembly; keep
      simple field extraction on single-pass mode.
  - question: Availability?
    answer: The post says agentic mode is in preview.
draft: false
candidateId: microsoft-foundry-2026-11-09-e24cadf382
---
Microsoft Foundry introduces **agentic mode** for **Azure Content Understanding** (preview). Most documents still fit one efficient pass that fills a schema; a few need search, inspection, calculation, completeness checks, and retries inside the document.

Examples include totaling January 2003 agency outlays across a two-page Treasury table with exclusions and notation cleanup—landing on **180,681** million dollars—plus reading economic charts and summing long network logs. Agentic mode supplies a document-native harness so answers assemble from evidence rather than a single extract. Rule of thumb: standard mode for simple fields, agentic for hard multi-step work.
