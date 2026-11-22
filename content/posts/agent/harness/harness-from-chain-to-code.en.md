---
title: "Agent harness evolution: chains, graphs, then code"
slug: "harness-from-chain-to-code"
description: "Linear prompts, graph workflows, and code harnesses each fit different reliability and cost targets—and validation still is not optional."
date: "2026-11-03"
category: "agent"
subcategory: "harness"
tags: ["Harness", "Agent", "architecture"]
author: "Editors"
locale: en
faqs:
  - question: "Is newer always better?"
    answer: "No. Do not escalate to a graph if a chain works; do not rush to code if a graph already delivers stably."
draft: false
---

## Three shapes

1. **Chain:** Prompts in sequence—fast to change, weak control.
2. **Graph:** Nodes and edges for branching—easy to visualize, complexity climbs quickly.
3. **Code harness:** Control flow in code—testable and reusable, steeper bar.

## How to choose

Write three metrics first: reliability, latency, cost. Then pick the **simplest option that hits them**. Model output still needs guards—format, citations, and side effects.

## Practice note

Split plan from execute: planning can be loose; execution needs a narrow interface. Code alone does not equal reliability. Reliability comes from tests and boundaries.
