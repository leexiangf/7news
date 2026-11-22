---
title: Chat SDK agents can stream generative UI with json-render
slug: vercel-json-render-chat-sdk
description: >-
  Vercel Changelog: Chat SDK agents write a typed JSON catalog that json-render
  turns into platform-native cards such as Slack Block Kit and Teams Adaptive
  Cards.
date: '2026-11-06'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Chat SDK
  - json-render
  - generative UI
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/changelog/json-render-and-chat-sdk-agents'
sourceLevel: A
publisher: vercel
faqs:
  - question: What does the agent emit?
    answer: A JSON spec against the catalog; json-render builds a Chat SDK card for each adapter’s native format.
  - question: What’s in the catalog?
    answer: Tables, charts, buttons, and more—so you don’t maintain a separate tool per message shape.
draft: false
candidateId: vercel-2026-11-06-ca6f08fa82
---
Vercel’s Changelog says **Chat SDK** agents can stream generative UI via **json-render**. You define a typed component **catalog**; the agent writes a JSON spec that `json-render` turns into a Chat SDK card, then each adapter posts it in the platform’s native format—**Block Kit** on Slack, **Adaptive Cards** on Teams, and so on.

The catalog covers tables, charts, buttons, and more, so teams avoid a separate tool for every message shape. Samples wire `@json-render/core` / `@json-render/chat` with AI SDK `streamText` inside `onNewMention`.
