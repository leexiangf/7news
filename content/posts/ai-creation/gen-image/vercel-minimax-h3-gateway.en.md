---
title: MiniMax H3 Image and Highspeed land on Vercel AI Gateway
slug: vercel-minimax-h3-gateway
description: >-
  Vercel Changelog: minimax/minimax-h3-image and the highspeed variant support
  text-to-image and edits via AI Gateway—custom sizes through 2K/4K, no separate
  MiniMax account.
date: '2026-11-10'
updated: '2026-11-20'
category: ai-creation
subcategory: gen-image
tags:
  - Vercel
  - MiniMax
  - AI Gateway
author: Editorial
locale: en
sourceUrls:
  - >-
    https://vercel.com/changelog/minimax-h3-image-and-highspeed-now-available-on-ai-gateway
sourceLevel: A
publisher: vercel
faqs:
  - question: Model IDs?
    answer: minimax/minimax-h3-image and minimax/minimax-h3-image-highspeed.
  - question: Image editing?
    answer: Yes—pass the image with a text instruction; OpenAI-compatible /v1/images routes are supported too.
draft: false
candidateId: vercel-2026-11-10-39585ac01d
---
Vercel’s Changelog adds **MiniMax H3 Image** and **H3 Image Highspeed** on **AI Gateway** as **`minimax/minimax-h3-image`** and **`minimax/minimax-h3-image-highspeed`**. One Gateway API key covers text-to-image and edits—no separate MiniMax account.

Both support custom dimensions and aspect ratios, including **2K / 4K**; Highspeed is faster with the same generate/edit options. Examples use the AI SDK `generateImage` helper; edits pass the prior image with a text instruction. OpenAI-compatible `/v1/images/generations` and `/v1/images/edits` are also listed. Pricing and limits follow the Gateway model pages.
