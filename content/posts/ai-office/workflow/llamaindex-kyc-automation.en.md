---
title: 'LlamaIndex on KYC automation: document agents instead of manual review at scale'
slug: llamaindex-kyc-automation
description: >-
  LlamaIndex KYC use-case post: five stages from intake to ongoing monitoring;
  document parsing as the underestimated bottleneck; not legal advice.
date: '2026-11-20'
updated: '2026-11-21'
category: ai-office
subcategory: workflow
tags:
  - LlamaIndex
  - KYC
  - automation
  - documents
author: Editorial
locale: en
sourceUrls:
  - 'https://www.llamaindex.ai/blog/kyc-automation'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: What kind of piece is this?
    answer: Industry use-case / solution narrative for agentic document KYC—jurisdiction rules vary; not legal advice.
  - question: How does it define “real” automation?
    answer: Auto extract, real-time sanctions screen, rule-based scoring—with only exceptions routed to humans; digitize-and-still-review-everything does not count.
draft: false
candidateId: llamaindex-2026-11-20-b3c38dea97
---

LlamaIndex published *KYC Automation: How to Replace Manual Verification at Scale*, framing Know Your Customer as an agentic document problem. Manual review is slow and inconsistent at volume; under-verify invites AML fines and fraud, over-friction kills onboarding—automation targets both costs.

## Five stages (as framed)

| Stage | Work |
| --- | --- |
| 1 Intake | Collect identity and supporting docs |
| 2 Verify & extract | Auto-read fields, check authenticity |
| 3 Sanctions / adverse media | Real-time screens, not periodic batches |
| 4 Risk scoring | Apply predefined rules |
| 5 Ongoing monitoring | Re-screen over the relationship |

“Real automation” is defined tightly: standard cases run end-to-end; **only exceptions** hit humans. Digitizing intake while still reviewing every file by hand is not automated KYC.

## Implementation notes (vendor + compliance bounds)

The post argues most stacks **underestimate document parsing**—layouts, tables, and scan quality decide whether extraction can feed the rules engine (pair with the same-day ParseBench-2 story). Practical start: map document types and failure points → set accuracy thresholds → pilot one segment → design human-in-the-loop → **build the audit trail on day one**.

KYC is jurisdiction-bound. Treat this as a use-case entry—**not** legal advice. Production still needs risk controls, retention, and explicit review points.
