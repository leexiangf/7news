---
title: 'NVIDIA: build Rust tool-calling parsers for new models with AI agents'
slug: nvidia-rust-tool-calling-parsers
description: >-
  frontend-crates: reusable Rust tool-call parsers shared with Dynamo; agents
  generate parsers + tests; handle truncation, malformed calls, and markup
  leaks.
date: '2026-11-19'
updated: '2026-11-21'
category: agent
subcategory: mcp
tags:
  - NVIDIA
  - Dynamo
  - Rust
  - tool calling
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/build-tool-calling-parsers-in-rust-with-ai-agents/
sourceLevel: A
publisher: nvidia
faqs:
  - question: What does the parser do?
    answer: Consume token IDs or decoded text; split reasoning, visible text, and tool calls; adapt into OpenAI-compatible responses.
draft: false
candidateId: nvidia-developer-2026-11-19-fbd6104676
---

NVIDIA’s technical blog (around **19 Nov 2026**) shows how to add **tool-calling parsers** for new models. The base is **frontend-crates**—reusable Rust components sharing lineage with NVIDIA Dynamo’s tool-call parsing—plus an AI agent that generates parse logic from a human-reviewed test set.

## Path and hard edges

| Stage | Behavior |
| --- | --- |
| Frontend | Prepare prompts |
| Inference engine | Emit tokens |
| Parser | Split reasoning, visible text, and tool calls in order |
| Protocol adapter | Emit OpenAI-compatible responses |

Edges: truncated calls, markers inside arguments, calls mixed into prose—can drop data, double-fire tools, or leak model-specific markup. Weather-query and Nemotron failure examples show how a half-written city name or a call to an unprovided tool breaks the next agent step.

For inference-gateway and agent-runtime authors: engineering tutorial—repos and APIs follow NVIDIA’s post and frontend-crates docs. Prefer a parser test set before letting an agent author the implementation.
