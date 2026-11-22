---
title: 'AWS how-to: use Kimi Code CLI with models on Amazon Bedrock'
slug: kimi-code-cli-bedrock
description: >-
  AWS how-to wiring Kimi Code CLI to Bedrock model endpoints—auth, model IDs,
  CLI config, invoke path; not a new model launch.
date: '2026-11-19'
updated: '2026-11-21'
category: ai-coding
subcategory: cli-agent
tags:
  - AWS
  - Bedrock
  - Kimi Code CLI
author: Editorial
locale: en
sourceUrls:
  - >-
    https://aws.amazon.com/blogs/machine-learning/use-kimi-code-cli-with-models-on-amazon-bedrock/
sourceLevel: A
publisher: amazon
faqs:
  - question: What kind of piece?
    answer: Official how-to / integration note for Kimi Code CLI on Bedrock—not a Moonshot or AWS new-model launch.
draft: false
candidateId: amazon-ml-2026-11-19-712a49f1f6
---

AWS’s ML Blog published *Use Kimi Code CLI with models on Amazon Bedrock* for developers and platform teams who want Kimi’s coding CLI inside an AWS account while invoking models through Bedrock.

## How to read it

| Is | Is not |
| --- | --- |
| Cross-stack wiring checklist (auth, model pick, CLI config, invoke path) | New model / SKU launch |
| Hooking a CLI agent onto a managed model surface | A full replacement for Moonshot’s own CLI docs |

Supported model IDs, regions, IAM, and billing follow the post’s steps and the Bedrock console. If you already run Kimi Code or Bedrock, treat it as a join checklist; before production, apply least privilege and audit against account policy.
