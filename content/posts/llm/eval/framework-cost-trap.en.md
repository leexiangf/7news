---
title: "Wrong frontend stack can double Claude build cost"
slug: "framework-cost-trap"
description: "When agents write UI, framework and scaffold choices amplify tokens and rework. Here is a cheaper default path."
date: "2026-10-30"
category: "llm"
subcategory: "eval"
tags: ["cost", "frontend", "eval"]
author: "Editors"
locale: en
draft: false
---

## What shows up in the bill

Same page requirements, different scaffolds: token use and repair rounds can differ by about 2×. The model is often fine; the context is stuffed with framework ceremony.

## Sensible defaults

- Small jobs: few dependencies, plain components
- Medium jobs: lock one stack the team already knows; ban the model from “helpfully upgrading”
- Eval: compare prompt strategies with the same acceptance scripts, not gut feel alone

Treat framework choice as a cost switch, not a taste argument.
