---
title: 'Kimi K3.1 Pro: Moonshot’s 3T-class open-weight line with a 1M-token window'
slug: kimi-k3-1-pro
description: >-
  Moonshot introduces Kimi K3.1 Pro and a Highspeed variant—its strongest
  3T-class open-weight model to date, with a 1-million-token context—live on
  Kimi surfaces today, with full weights promised by 4 November 2026.
date: '2026-11-07'
updated: '2026-11-07'
category: llm
subcategory: release
tags:
  - Moonshot
  - Kimi
  - open weights
  - agents
author: Editorial
sourceUrls:
  - 'https://www.kimi.com/en/blog/kimi-k3-1-pro'
\npublisher: moonshot
faqs:
  - question: How much faster is Highspeed?
    answer: >-
      Moonshot says Kimi K3.1 Pro Highspeed runs about 2–3× faster than K3.1 Pro
      for snappier interactions.
  - question: When do the weights ship?
    answer: >-
      The tech blog says full model weights will be released by 4 November 2026;
      product access on Kimi.com, Work, Code, and the API is described as
      available today.
draft: false
candidateId: moonshot-2026-11-07-4f9e40843c
locale: en
publisher: moonshot
---
Moonshot is shipping Kimi K3.1 Pro as the first model in its K3.1 series, plus a Highspeed sibling. The company calls it its most capable 3T-class open-weight model to date, with a 1-million-token context window. Versus base K3, the post stresses heavier post-training compute and joint RL across many downstream domains. Product access: Kimi.com, Kimi Work, Kimi Code, and the Kimi API are described as available today; full weights are promised by 4 November 2026.

The capability pitch clusters around coding, 3D creation, and finance-style agent workflows. On Terminal-Bench 4.0 Moonshot reports 65.7%—ahead of GPT-6 Astra at 58.2% and just behind Claude Opus 5.5 at 66.4%, per the blog. Internally, Kimi Code Bench 3.0 Long-horizon is listed at 61.2% versus K3’s 55.95%. BenchCAD with tools is listed at 92.7%. Treat those figures as Moonshot-reported under the harness notes in the footnotes until independent runs land.

On safety for the open-weight drop, the post spends unusual space on cyber capability controls: identifying and removing vulnerability-research data from mid-training and RL environments while keeping general coding tasks. On an internal xdev-bench-hard suite, a checkpoint without those removals scores 90.5% pass@3; final K3.1 Pro scores 81.0%. Moonshot’s stated principles: do not push the absolute offensive cyber frontier via open weights, yet gradually raise dual-use capability that defenders can run on infrastructure they control.

For enterprises, admins must opt in—access is off by default. API IDs are `kimi-k3.1-pro` and `kimi-k3.1-pro-highspeed`, with Zero Data Retention called out for API customers. If you need product access today, the post says yes; if you need the weight tarball, watch the 4 November date and Moonshot’s official channels rather than third-party mirrors.
