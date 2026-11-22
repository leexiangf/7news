---
title: SenseTime ships SenseNova Loop-9B GA with looped depth
slug: sensenova-loop-9b
description: >-
  SenseTime’s SenseNova Loop-9B GA: ~9B params, shared middle layers run twice
  for 56 layer passes, 512K context; cites NL2Repo/AIDABench near Qwen3.8-27B;
  weights and AWQ 4bit open.
date: '2026-11-17'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - SenseTime
  - SenseNova
  - Loop
  - Open Weights
author: Editorial
locale: en
sourceUrls:
  - 'https://www.sensetime.com/cn/news/sensenova-loop-9b-20261118-1059'
sourceLevel: A
publisher: sensetime
faqs:
  - question: Architecture?
    answer: ~9B unique params; layers 4–27 shared and executed twice → 56 layer passes from 32 physical layers; dual-stream mHC; text+image in, text out; up to 512K.
  - question: Deploy and download?
    answer: ~4.9GB 4bit weights; ~10 GiB at 64K with 8bit KV; HF collection sensenova/sensenova-loop; needs Loop/mHC-aware serving.
draft: false
candidateId: sensetime-cn-2026-11-16-b4298b8faa
---
SenseTime’s Chinese news page (**17 Nov 2026**) ships **SenseNova Loop-9B** GA on the Preview Loop + dual-stream **mHC** path: about **9B** unique parameters, with layers **4–27** weight-shared and run **twice** so **32** physical decoder layers become **56** layer passes per forward; text and image in, text out, context up to **512K**.

Vendor scores: gains over Preview on several boards; versus **Qwen3.8-27B**, **NL2Repo** about **41.36** vs **44.60** and **AIDABench** about **65.31** vs **65.01**. Day-0 official **AWQ 4bit** weights are cited at ~**4.9GB**; with 4bit weights and 8bit KV, about **10 GiB** at 64K and **15 GiB** at 256K. Weights and code are open via the [Hugging Face collection](https://huggingface.co/collections/sensenova/sensenova-loop); samples mention Transformers **5.18.0**. The post flags weak spots on complex tool schemas, long-horizon stability, and rich dynamic pages (often multi-turn). Default loop count stays **2**. Treat numbers as vendor-reported and check the original tables before citing.
