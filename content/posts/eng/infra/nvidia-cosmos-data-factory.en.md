---
title: 'NVIDIA Cosmos Data Factory: two prompts to orchestrate physical-AI training data'
slug: nvidia-cosmos-data-factory
description: >-
  CDF: five blueprints + six skills, orchestrated by a coding agent; claims up
  to ~60× faster dataset assembly and ~45× cheaper AV scenarios (GPU compute
  only).
date: '2026-11-18'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - Cosmos
  - Physical AI
  - Synthetic Data
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/
sourceLevel: S
publisher: nvidia
faqs:
  - question: What do the blueprints cover?
    answer: AV scenario generation, person-attribute augmentation, video weather/lighting aug, rare-event video, defect images.
  - question: Cost-figure caveats?
    answer: Eight RTX PRO 6000 self-tests of daily throughput and $/asset—GPU compute only; excludes capture, review, storage, agent cost.
draft: false
candidateId: nvidia-developer-2026-11-18-b1ff58d64c
---

NVIDIA’s technical blog (**18 Nov 2026**) introduces **Cosmos Data Factory (CDF)**: five cloud-native blueprints plus six composable skills, orchestrated by a coding agent with two prompts—curate, augment, synthesize, and label into “prompt-to-data” for physical-AI world-model training.

## Two-prompt workflow

1. **Prompt 1** — clone the Orchestration repo; run preflight / setup (check first, then mutate the env)  
2. **Prompt 2** — run the matching blueprint (retrieve → transform → Evaluator for physical plausibility → auto-label)

| Blueprint | Job |
| --- | --- |
| AV Dataset Generation | Find driving clips; weather/fog/snow transforms; Cosmos Evaluator checks |
| Image Attribute Augmentation | Person-crop clothing variants + search labels |
| Video Data Augmentation | Keep structure; change lighting/weather/environment |
| Event Video Generation | Rare events (falls, smoke, etc.) from a single image |
| Defect Image Generation | PCB / glass / metal defects (optional Isaac Sim USD) |

Six skills can be used à la carte: Auto Labeling, AnomalyGen, Augmentation, Curation/Retrieval, Simulation, Orchestration. Cosmos Dataset Search is cited as Apache 2.0 open source.

## Self-test throughput and “Nx” bounds

On eight **RTX PRO 6000 Blackwell** GPUs at ~**$40**/server-hour (~**$960**/day), daily throughput ÷ output estimates unit cost—**compute only**:

| Use case | Claim |
| --- | --- |
| Defect assembly | ~two months → one day, ~**60×** |
| AV scenarios | ~**$2.66**/clip vs ~**$125** road capture, ~**45×** cheaper |
| Person-attribute aug | ~**$0.023**/pair vs ~**$0.25** purchased, ~**10×** |
| Video aug | ~**$3.15**/~5-min clip vs ~**$22**, ~**7×** |

Customer figures (recall +24%, AOI engineering ~−85%, etc.) are “org-reported / expected.” Platform-skills explainer, not a single-model release—cite speedups with “GPU compute only, eight-GPU setup.”
