---
title: 'Ollama + Together: open models for long-horizon agents via prefix cache'
slug: ollama-long-horizon-agents
description: >-
  Ollama and Together AI co-author a post on agent traffic with large inputs and
  tiny tool-call outputs—and how to keep prefix caches intact across harness and
  inference.
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Ollama
  - Together AI
  - agents
  - prefix cache
author: Editors
locale: en
sourceUrls:
  - 'https://ollama.com/blog/open-models-long-horizon-agents'
sourceLevel: A
publisher: ollama
faqs:
  - question: What’s the traffic pattern?
    answer: >-
      Coding agents often resend the full transcript each step but get back a
      short tool call—large ISL, small OSL—so prefix caching helps, and is easy
      to break.
draft: false
candidateId: ollama-blog-2026-11-20-0accc1483e
---
Ollama’s blog, co-authored with Together AI, looks at long-horizon agentic loads: each coding-agent step often resends the **entire conversation** while the model returns only a short tool call—large ISL, small OSL. Recomputing the full transcript every turn gets slower and costlier; **prefix caching** saves most of that work, and is easy to break from either side.

Ollama owns harness choices (what goes in each request); Together owns the inference engine (what happens on arrival). The post aims to write down cache-protection practices for both, including prefill vs decode. Concrete knobs live in the original.

Runtime authors should audit whether each step needlessly rewrites a cacheable prefix before buying more GPUs.
