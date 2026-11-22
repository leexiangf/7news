---
title: OpenAI’s BioBasicsBench tests agents on everyday wet-lab evidence
slug: openai-biobasicsbench
description: >-
  OpenAI and Ligo introduce BioBasicsBench: 100 routine wet-lab analysis tasks
  built on raw, often ambiguous experimental data, with official scores for
  GPT‑6 Astra and peers.
date: '2026-11-06'
updated: '2026-11-20'
category: llm
subcategory: eval
tags:
  - OpenAI
  - evaluation
  - biology
  - agents
author: Editorial
locale: en
sourceUrls:
  - 'https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science'
sourceLevel: S
publisher: openai
faqs:
  - question: How is this different from paper-figure benchmarks?
    answer: >-
      Tasks use raw gels, plates, microscopy, and instrument exports, preserving
      failures and ambiguity and scoring recognition of insufficient evidence.
  - question: What are the headline scores?
    answer: >-
      At the xhigh setting, GPT‑6 Astra averaged 66.7% of available credit versus
      43.8% for GPT‑5.6 Sol, per OpenAI’s evaluation.
draft: false
candidateId: openai-2026-11-04-cfd4354afa
---
OpenAI introduced **BioBasicsBench**, built with biotech company **Ligo**: **100** routine wet-lab tasks that ask AI agents to interpret **raw experimental evidence**—gels and blots, colony plates, microscopy, sequencing, instrument readouts—and to spot errors or say when the evidence cannot support a conclusion. The motivation is that paper-ready figures often hide the ambiguity of real benches.

Tasks span protein methods, imaging and cytometry, quantification and assays, nucleic acid methods, and molecular cloning. Each item pairs scientist-authored data with an expert rubric and multi-stage review. Across model and effort settings, OpenAI reports that at **xhigh**, **GPT‑6 Astra** earned **66.7%** of available credit on average versus **43.8%** for **GPT‑5.6 Sol**, with remaining gaps in image reading, control checks, and experimental context. Quote scores with the effort setting and mean-reward definition attached.
