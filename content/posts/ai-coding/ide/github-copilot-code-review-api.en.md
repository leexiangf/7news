---
title: Copilot code review gains API settings management and a tighter overview
slug: github-copilot-code-review-api
description: >-
  GitHub Changelog: manage code review settings via REST/GraphQL from enterprise
  to repo, with a more compact overview comment plus attribution and reliability
  fixes.
date: '2026-11-06'
updated: '2026-11-20'
category: ai-coding
subcategory: ide
tags:
  - GitHub Copilot
  - code review
  - API
author: Editorial
locale: en
sourceUrls:
  - >-
    https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates
sourceLevel: S
publisher: github
faqs:
  - question: Which plans?
    answer: Copilot Pro, Pro+, Max, Business, and Enterprise.
  - question: App / fine-grained PAT limits?
    answer: >-
      Enterprise and organization settings endpoints do not support GitHub Apps
      or fine-grained PATs; repository settings endpoints do with Administration
      permissions.
draft: false
candidateId: github-changelog-2026-11-06-d28d7745dd
---
GitHub’s Changelog expands **Copilot code review**: beyond requesting reviews, you can manage settings through **REST and GraphQL** from enterprise policy down to individual repositories—enablement, default effort, and runner configuration. Responses can attribute Copilot output, show effort when available, and list skills, MCP servers, and custom instructions cited for a comment.

The review overview comment is tighter: effort and surveys move to a compact footer; skipped and content-excluded files share one “Files not reviewed” section; empty blocks drop out. Thumbs-down feedback can pick a reason. Billing, automatic reviews, and reliability fixes ship too. Available on Pro through Enterprise; Apps and fine-grained PATs cannot hit enterprise/org settings endpoints—see the changelog for details.
