---
title: VeRL-Omni v0.3.0 defaults to V1 and asks you to measure async splits
slug: verl-omni-v0-3-0
description: >-
  VeRL-Omni v0.3.0 makes the V1 trainer default, widens separate-async and
  diffusion OPD scheduling, and uses MiniMax H3 / MiniCPM-o cases to show when
  overlapping rollout and training pays—plus upgrade gotchas.
date: '2026-11-06'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - VeRL
  - vLLM
  - RL
  - multimodal
author: Editorial
locale: en
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-06-verl-omni-v0-3-0'
  - 'https://github.com/verl-project/verl-omni/releases/tag/v0.3.0'
sourceLevel: A
publisher: vllm
faqs:
  - question: Is V1 mandatory?
    answer: >-
      Default is trainer.use_v1=true; V0 is deprecated. Unmigrated recipes
      (some DiffusionNFT, offline DPO) still need explicit use_v1=false.
  - question: Is separate-async always faster?
    answer: >-
      No. MiniCPM-o shows colocated wins on short answers; separate-async pulls
      ahead on a per-prompt basis only after forced longer responses.
draft: false
candidateId: vllm-blog-2026-11-06-8d333dacbc
---

After August’s v0.2.0, **VeRL-Omni v0.3.0** (blog **6 Nov 2026**) pushes past “more modalities” into how generation, rewards, policy updates, and weight sync **work together**. The rollout stack moves to **vLLM / vLLM-Omni 0.30.0**; the **V1 trainer** (TransferQueue + ReplayBuffer) becomes the default.

## Async and decoupled paths—not one dogma

Multimodal RL stages have different resource shapes: autoregressive generation, diffusion denoising, and AV reward decoding can each dominate. Strictly alternating loops idle one role. v0.3.0 widens the menu:

- Fully async rollouts for more Omni / text+audio recipes (FSDP paths per the support table)  
- **Separate-async**: actor and rollout on separate GPU pools, linked by a replay buffer and sync intervals  
- Diffusion training can lend colocated replicas to rollout on demand, then reclaim them  
- Diffusion OPD: teachers can be scheduled and routed independently  

The case studies’ design rule: **overlap only when it pays for your workload**.

## How to read the two recipes

**MiniMax H3 + DiffusionNFT** covers text- / first-frame-conditioned audio-video post-training with example rewards CLAP and ImageBind (ImageBind under CC-BY-NC-SA). A rising reward curve optimizes the chosen signal—it is **not** proof of general visual or temporal quality. Weight-layout mappings, timestep conventions, and whether audio reaches both scorers and exports still need explicit checks. The DiffusionNFT launchers still pass `trainer.use_v1=false`; those numbers are **not** V1 results.

**MiniCPM-o 4.5 GSPO (AVQA)** compares colocated sync vs separate-async with similar early convergence. An efficiency probe on 4×H800 (per-prompt view, forced lengths):

| Mean response length | Colocated tendency | Separate-async tendency |
| --- | --- | --- |
| ~101 (natural) | Faster per prompt (~**9%** slower async) | Not preferred |
| 512 (forced) | Roughly tied | Roughly tied |
| 1024 (forced) | — | ~**6.7%** faster per prompt |

Short, trainer-bound answers still favor colocated; when generation dominates and TP1 rollout replicas are viable, a 3+1-style split can win.

## Change these before you upgrade

| Item | Action |
| --- | --- |
| Trainer | V1 default; legacy entrypoints need explicit `use_v1=false`; offline DPO stays on v0 |
| Diffusion media | Unlabelled tensors rejected—move to named artifacts |
| Attention | Missing FlashAttention fails closed (no silent SDPA fallback) |
| Deps | vLLM / vLLM-Omni **0.30.0**, Python 3.11+, Diffusers 0.40.0+, CUDA 13.0+ stack |
| Qwen3-Omni | Use `verl_omni.trainer.main_omni`; old `main_ppo` and monkey-patches removed |

Full migration detail lives in the [blog](https://vllm.ai/blog/2026-11-06-verl-omni-v0-3-0) and [v0.3.0 release](https://github.com/verl-project/verl-omni/releases/tag/v0.3.0). Pick model/hardware recipe first, then sync vs separate-async, and only then put wall-clock numbers into capacity sheets.
