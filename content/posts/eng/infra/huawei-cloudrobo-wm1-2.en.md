---
title: Huawei Cloud open-sources Ascend-native CloudRobo-WM1.2 embodied world model
slug: huawei-cloudrobo-wm1-2
description: >-
  “Industry AI Dream Factory” open-sources Ascend-native CloudRobo-WM1.2: shared
  backbone + DualAct; claims #1 on RoboTwin 2.0 and LiberoPro 2.0; five core
  techniques and four inference modes.
date: '2026-11-17'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - Huawei Cloud
  - CloudRobo
  - embodied AI
  - Ascend
author: Editorial
locale: en
sourceUrls:
  - 'https://www.huaweicloud.com/news/2026/20261116171910882.html'
sourceLevel: S
publisher: huawei
faqs:
  - question: What shipped?
    answer: CloudRobo-WM1.2—an Ascend-native embodied world model, open-sourced with the Industry AI Dream Factory launch; shared backbone and DualAct.
  - question: What about the benchmarks?
    answer: Huawei Cloud claims #1 on RoboTwin 2.0 and LiberoPro 2.0—vendor claims; reproduce against the official suites and submission rules.
draft: false
candidateId: huawei-cloud-news-2026-11-17-a5dd50e249
---

Huawei Cloud in Hangzhou (**16 Nov 2026**) launched its “Industry AI Dream Factory” and **open-sourced** the Ascend-native embodied world model **CloudRobo-WM1.2**. The company cites a shared world-model backbone for prediction-enhanced representations and native **DualAct** action generation, claiming first place on **RoboTwin 2.0** and **LiberoPro 2.0**.

## Why “world-model-native action”

Embodied systems leaving the lab hit multimodal physics understanding, cognition–action coupling, heterogeneous data at scale, cross-embodiment generalization, and real-time inference cost. CloudRobo-WM1.2 answers with five techniques:

| Technique | Point |
| --- | --- |
| PPA multimodal world representation | From static recognition to anticipating 4D interaction |
| DualAct / MOT | World model emits high-precision actions; tunable action-expert size |
| Multi-granularity adaptive pretraining | Keep partially missing annotations instead of dropping whole samples |
| Embodiment-faithful motion modeling | Unified “action translator” for single-arm / dual-arm / wheeled |
| Four elastic inference modes | World/Expert Action × Joint/Action-only, matched to compute and latency |

## Openness and engineering narrative

The triad: sustained investment, full openness (models / toolchains / Ascend Cloud), and shared ecosystem building. Engineering claims cover sim cold-start, cloud-native training, cross-embodiment adaption, continual learning, and safe operation—mostly platform messaging.

Repos, licenses, and repro steps live on Huawei Cloud’s pages and code hosts; leaderboard ranks are vendor claims. For embodied readers: treat it as an Ascend-stack world-model open-source signal—check license and benchmark protocol before citing “#1.”
