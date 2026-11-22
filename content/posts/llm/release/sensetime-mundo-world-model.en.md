---
title: Daxiaobot and NTU S-Lab release Mundo, an interactive robotics world model
slug: sensetime-mundo-world-model
description: >-
  SenseTime news says Daxiaobot and NTU S-Lab released Mundo: build explorable,
  physics-aware 3D worlds from a few images for robot navigation and
  manipulation training.
date: '2026-11-03'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - SenseTime
  - world model
  - robotics
  - Mundo
author: Editorial
locale: en
sourceUrls:
  - 'https://www.sensetime.com/cn/news/mundo-robotics-world-model-20261104-1605'
  - 'https://mundo-world-model.github.io/'
sourceLevel: A
publisher: sensetime
faqs:
  - question: How many images are needed?
    answer: >-
      The post cites examples with 1–12 images for room-scale exploration; larger
      scenes can use dozens of context frames stitched with overlap.
  - question: How does Mundo relate to Kairos?
    answer: >-
      SenseTime frames Mundo as the environment-modeling and sim-training piece
      inside a Kairos-centered world-model stack.
draft: false
candidateId: sensetime-cn-2026-11-03-cf0f86a071
---
SenseTime news reports that **Daxiaobot** and NTU **S-Lab** released **Mundo**, a world model aimed at concrete environments. The claim: turn a few photos or videos into an **explorable, programmatically interactive** 3D world usable for robot navigation and manipulation training. Project site: [mundo-world-model.github.io](https://mundo-world-model.github.io/).

Officially, three capabilities stand out. **Long-path exploration** builds a 3D proxy, then synthesizes new views along camera paths—seen regions stay constrained by inputs, unseen regions are completed; larger spaces can be generated in segments joined by overlapping frames. **Physics attributes** attach mass and friction via a scene program; a physics engine computes motion and contact, then a video model renders the change. **Navigation and manipulation** share the same custom scene, with path-planning views, multi-embodiment manipulation tasks, and “freeze time, move the camera” inspection. Hotel floor and laundry-area trials are mentioned.

Within Daxiaobot’s **Kairos**-centered narrative, Mundo fills environment modeling and sim data generation. Treat demo capability as distinct from scaled deployment; the news post does not publish public benchmark scores.
