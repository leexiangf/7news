---
title: Workflow SDK writes over WebSockets on Vercel by default
slug: vercel-workflow-websocket-writes
description: >-
  Vercel Changelog: Workflow SDK 5.2.0+ sends event and stream writes to Vercel
  Workflows over a WebSocket instead of one HTTP request per write; new runs
  pick it up after upgrade.
date: '2026-11-09'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Vercel
  - Workflow
  - WebSocket
author: Editorial
locale: en
sourceUrls:
  - 'https://vercel.com/changelog/workflow-writes-now-use-websockets-on-vercel'
sourceLevel: A
publisher: vercel
faqs:
  - question: Code changes required?
    answer: Usually no—upgrade to workflow@5.2.0+; existing streaming writers keep working.
  - question: In-flight runs?
    answer: They finish on the deployment they started on; only new runs use WebSocket writes.
draft: false
candidateId: vercel-2026-11-09-cae1c36134
---
Vercel’s Changelog says the **Workflow SDK** now sends event writes and stream writes to **Vercel Workflows** over a **WebSocket** by default, replacing one HTTP request per write (or per write group for streams). Upgrade to **`workflow@5.2.0`** or later—no application code change required; existing `getWritable` streaming patterns keep working.

After you deploy the upgrade, **new runs** use WebSockets; **in-flight runs** finish on the deployment they started on. Steps that burst AI tokens benefit from fewer per-chunk HTTP round-trips.
