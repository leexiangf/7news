---
title: Vercel Sandbox Python SDK hits 1.0 with TypeScript parity
slug: vercel-sandbox-python-sdk-1
description: >-
  Vercel Changelog: Sandbox Python SDK 1.0 stabilizes the public API and matches
  the TypeScript SDK; context managers, AnyIO async; 0.x upgrades include bytes
  I/O breaking changes.
date: '2026-11-16'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - Vercel
  - Sandbox
  - Python
  - SDK
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/changelog/vercel-sandbox-python-sdk-1-0-is-now-available'
sourceLevel: A
publisher: vercel
faqs:
  - question: Install?
    answer: uv add 'vercel-sandbox>=1.0'; use vercel.sandbox.sync for sync code.
  - question: 0.x caveats?
    answer: Changelog flags breaking changes such as command I/O as bytes—read the 1.0 release notes.
draft: false
candidateId: vercel-2026-11-16-48cf304f4f
---
Vercel’s Changelog (**16 Nov 2026**) ships **Sandbox Python SDK 1.0**: a stable public API with feature parity to the TypeScript SDK for running AI-generated code, testing changes, and analyzing datasets from Python apps.

Context managers clean up sandboxes automatically; AnyIO covers async (`asyncio` and Trio). Synchronous callers use `vercel.sandbox.sync`. Install with `uv add 'vercel-sandbox>=1.0'`. A common pattern: spin a sandbox from a Git branch, run tests, then let cleanup reclaim it. Upgrading from **0.x** needs the 1.0 release notes—command input/output moved to **bytes** and other breaks. Details live in the Python SDK docs.
