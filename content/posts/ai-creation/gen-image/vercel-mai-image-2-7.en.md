---
title: Microsoft MAI-Image-2.7 and Flash hit Vercel AI Gateway preview
slug: vercel-mai-image-2-7
description: >-
  Vercel Changelog: microsoft/mai-image-2.7 and mai-image-2.7-flash in public
  preview on AI Gateway—up to 2048×2048, transparent backgrounds, up to five
  reference images; no Microsoft account required.
date: '2026-11-17'
updated: '2026-11-20'
category: ai-creation
subcategory: gen-image
tags:
  - Vercel
  - Microsoft
  - MAI-Image
  - AI Gateway
author: Editorial
locale: en
sourceUrls:
  - >-
    https://vercel.com/changelog/mai-image-2-7-and-mai-image-2-7-flash-now-available-on-ai-gateway
sourceLevel: A
publisher: vercel
faqs:
  - question: Which tier?
    answer: mai-image-2.7 for final quality; mai-image-2.7-flash for faster, cheaper prompt exploration and variants.
  - question: Transparent PNG?
    answer: Set providerOptions.azure.background to transparent in AI SDK 6+.
draft: false
candidateId: vercel-2026-11-17-b56b81dd41
---
Vercel’s Changelog (**17 Nov 2026**) puts Microsoft’s **MAI-Image-2.7** and **MAI-Image-2.7-Flash** in **public preview** on **AI Gateway** as `microsoft/mai-image-2.7` and `microsoft/mai-image-2.7-flash`. Generate or edit with one Gateway key—no Microsoft account—up to **2048×2048**, with transparent backgrounds on generate and edit, photorealism and text rendering, targeted product/portrait/layout edits, and up to **five** reference images.

Use 2.7 when quality wins; Flash when you are exploring prompts or variants. Samples need **AI SDK 6+** `generateImage` with `providerOptions.azure.background: 'transparent'` for clear PNGs; the AI CLI works the same ids. This is a **Gateway preview availability** note; commercial limits sit with Microsoft and Gateway docs.
