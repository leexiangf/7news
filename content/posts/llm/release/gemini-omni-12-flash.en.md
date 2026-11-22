---
title: 'Gemini Omni 1.2 Flash: native 15-second clips and ~30% lower 720p pricing'
slug: gemini-omni-12-flash
description: >-
  Google DeepMind launches Gemini Omni 1.2 Flash with native clips up to 15
  seconds, multi-turn conversational edits, and about 30% lower pricing versus
  1.1—now generally available on the Gemini API and Google Cloud.
date: '2026-11-05'
updated: '2026-11-07'
category: llm
subcategory: release
tags:
  - Google
  - DeepMind
  - Gemini Omni
  - video generation
author: Editorial
sourceUrls:
  - >-
    https://deepmind.google/blog/gemini-omni-12-flash-fast-and-cost-effective-with-longer-clips/
\npublisher: google
faqs:
  - question: How much longer are clips versus 1.1?
    answer: >-
      DeepMind says native generation and editing now reach 15 seconds, up from
      about 10, with one-second steps from 3 to 15.
  - question: What price did they publish?
    answer: >-
      The post claims roughly 30% lower pricing versus Omni 1.1, at $0.07 per
      second for 720p—confirm on the live pricing page.
draft: false
candidateId: deepmind-2026-11-05-825a50d1c0
locale: en
publisher: google
---
On 5 November 2026 Google DeepMind shipped Gemini Omni 1.2 Flash and said the model is generally available across the Gemini API and Gemini for business / Google Cloud paths. Against Omni 1.1, the post stresses three product moves: longer native clips, multi-turn conversational editing, and a lower unit price.

Length is the easy headline. 1.2 Flash can generate and edit videos natively up to 15 seconds (about 10 seconds on 1.1), with duration set in one-second steps from 3 to 15. DeepMind also claims stronger reference adherence: character, product, or style images can be combined with short motion clips (up to three seconds) and audio cues, with faces, garments, packaging type, and brand colors said to hold better across camera angles.

On workflow, the company sells a cost path—draft at 360p or 720p, fix one detail in a follow-up turn instead of regenerating the whole clip, then upscale keepers to 1080p or 4K. Multi-turn edits can span a full 15-second clip (background, lighting, aspect ratio) without a fresh brief. Pricing: about 30% down versus 1.1, listed at $0.07 per second for 720p.

For production teams, the GA language matters as much as the demos: Provisioned Throughput, enterprise infrastructure framing, and an imperceptible SynthID watermark on outputs sit in the same announcement. DeepMind still flags gaps—fast sports action, rapid script changes, complex physics. If you need 15-second ad variants at lower cost, the post is a clear yes; if you need hard action fidelity, you still need your own bake-off.
