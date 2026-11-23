---
title: LlamaIndex opens Document Parsing Protocol 0.1 as a shared answer key
slug: llamaindex-document-parsing-protocol
description: >-
  LlamaIndex: Document Parsing Protocol (DPP) working draft 0.1 publishes ~140
  rules for text, tables, forms, charts, and diagrams—with example pages and
  expected outputs for shared grading.
date: '2026-10-28'
updated: '2026-11-23'
category: ai-office
subcategory: doc
tags:
  - LlamaIndex
  - Parsing
  - Benchmark
  - Standards
author: Editorial
locale: en
sourceUrls:
  - 'https://www.llamaindex.ai/blog/introducing-the-document-parsing-protocol'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: What problem does it address?
    answer: Parsers can capture every word yet structure a page differently; agents only see the parse, with no shared “correct” definition.
  - question: Where to try it?
    answer: parseprotocol.com; Claude Skill or ChatGPT reference file on a page image; issues/PRs welcome on GitHub.
draft: false
candidateId: llamaindex-2026-11-23-67e05e36b6
---
LlamaIndex (**28 Oct 2026**) publishes the **Document Parsing Protocol (DPP)** working draft **0.1**: a shared answer key for what a correctly parsed page should look like. About **140** rules cover text, tables, forms, charts, and diagrams. Each rule ships with example pages and expected output, grown from ParseBench labeling rules.

The sales-table example shows three parsers emitting different Markdown for the same two-row header; agents then guess the wrong Q2 2024 column. DPP keeps both header rows and uses HTML tables when Markdown cannot express colspans. Forms use `[blank]` for empty fields and `[x]`/`[ ]` for checkboxes. Charts become numeric tables. Diagrams become Mermaid when every label fits; otherwise a labeled description. The draft lives at **parseprotocol.com**, with Claude Skill / ChatGPT trial prompts. It is an open draft standard—not a new parser product.
