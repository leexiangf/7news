---
title: Gemini 4 Neon lands in GitHub Copilot for Pro+ and up
slug: gemini-4-neon-github-copilot
description: >-
  GitHub’s 18 Nov 2026 changelog makes Gemini 4 Neon generally available in
  Copilot for agentic coding and multistep tool use—selectable for Pro+, Max,
  Business, and Enterprise on provider list pricing with a gradual rollout.
date: '2026-11-18'
updated: '2026-11-20'
category: ai-coding
subcategory: ide
tags:
  - GitHub Copilot
  - Gemini 4 Neon
  - AI coding
author: Editors
locale: en
sourceUrls:
  - 'https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot'
  - 'https://deepmind.google/blog/introducing-gemini-4-neon/'
sourceLevel: A
publisher: github
faqs:
  - question: Which plans get access?
    answer: >-
      Copilot Pro+, Max, Business, and Enterprise can pick Neon in the model
      picker. Rollout is gradual—if it is missing, check again later.
  - question: How is billing and admin control handled?
    answer: >-
      Usage is billed at provider list pricing under Copilot’s models and
      pricing page. Business and Enterprise admins manage access via model
      policy; new models auto-enable unless the global default is off or the
      model is explicitly disabled.
draft: false
candidateId: github-changelog-2026-11-18-f6cf8ded0e
---
GitHub’s changelog on 18 November 2026 says **Gemini 4 Neon** is **generally available** in GitHub Copilot for agentic coding, multistep tool use, and knowledge work. This is a distribution note for the IDE/Copilot surface; model specs still come from Google DeepMind’s Neon announcement the same day.

GitHub relays Google’s framing: Neon aims for quality close to Gemini 4 Carbon at a lower token cost per task; versus Carbon it starts responding faster, makes fewer unrequested coding changes, and is less likely to make unsupported claims about code, tools, or test results. Those comparisons are Google’s claims as cited by GitHub, not an independent GitHub evaluation.

Access and controls are more concrete. **Copilot Pro+, Max, Business, and Enterprise** can select Neon in the model picker. Rollout is **gradual**. Billing follows **provider list pricing** under usage-based Copilot billing—see GitHub’s Models and pricing page. Business and Enterprise admins manage access through **model policy** in Copilot settings; under default model enablement, new models turn on automatically unless the global default is off or Neon is explicitly disabled.

For teams already living in Copilot, Neon is the efficiency-leaning Google option alongside heavier Carbon-class work: pilot on a slice of tasks and watch unrequested edits and tool-honesty before making it the default. Enterprises should confirm whether auto-enable is still on so an unreviewed model does not appear in production sessions unannounced. For full specs, list prices, and Fairwind-style channels, return to the DeepMind Neon post and Google’s pricing materials.
