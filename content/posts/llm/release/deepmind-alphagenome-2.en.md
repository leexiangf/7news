---
title: >-
  DeepMind ships AlphaGenome 2: cell-type–conditioned DNA effect prediction
slug: deepmind-alphagenome-2
description: >-
  Google DeepMind’s next DNA model predicts under a chosen biological condition
  and roughly doubles causal-variant recall on single-cell tests; research API
  open, commercial use in private preview.
date: '2026-11-11'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - DeepMind
  - AlphaGenome
  - Genomics
author: Editorial
locale: en
sourceUrls:
  - >-
    https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/
  - 'https://www.biorxiv.org/content/10.64898/2026.11.11.765857'
sourceLevel: S
publisher: deepmind
faqs:
  - question: How does it differ from v1?
    answer: >-
      It is a conditional model—one tissue, cell type, or state at a time—and can
      encode novel states from a researcher’s single-cell experiment.
  - question: How do I get access?
    answer: >-
      Non-commercial research via the AlphaGenome API; commercial research via
      Google Cloud private preview. Research only—not clinically approved.
draft: false
candidateId: deepmind-2026-11-11-5b916f1bea
---
Google DeepMind released **AlphaGenome 2**, aimed at predicting how the same DNA is read across human cell types. Where the first generation emitted many bulk-tissue tracks in parallel, v2 is a **conditional model**: along with roughly a megabase of sequence, it injects a target biological condition (tissue, cell type, or state) throughout, and a **cell encoder** can mint unseen states from a lab’s own single-cell run.

Training covers human and mouse bulk and single-cell data—DeepMind cites more than **107 million** cell profiles—with outputs for expression, histone marks, chromatin accessibility, and newly **DNA methylation**. On TenK10K-style checks, recall of expression-changing causal variants rises from about **16% to 30%**, and directional gene-effect accuracy from about **23% to 43%** versus a fine-tuned v1 and other specialist tools. Non-commercial research goes through the API; commercial use is a Cloud private preview. The company stresses **research only, not clinical diagnosis**, with a companion bioRxiv paper.
