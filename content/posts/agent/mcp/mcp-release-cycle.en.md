---
title: MCP moves to two spec releases a year—last Tuesdays in March and September
slug: mcp-release-cycle
description: >-
  MCP maintainers lock a six-month release cadence and a Release Manager role.
  Next target is 2027-03-30; unfinished proposals slip instead of delaying the
  train.
date: '2026-11-11'
updated: '2026-11-12'
category: agent
subcategory: mcp
tags:
  - MCP
  - specification
  - release cycle
author: Editors
locale: en
sourceUrls:
  - 'https://blog.modelcontextprotocol.io/posts/mcp-release-cycle/'
\npublisher: mcp
faqs:
  - question: Do existing clients or servers need code changes?
    answer: >-
      No. The post says this changes how releases are prepared, not MCP messages
      or version negotiation. Spec versions remain date-based.
  - question: When is the next release?
    answer: >-
      The target is 30 March 2027, versioned 2027-03-30, with proposal deadlines
      and SDK beta dates published alongside.
draft: false
candidateId: mcp-2026-11-11-7c39b08289
publisher: mcp
---
MCP core maintainers announced on 11 November 2026 a **fixed six-month** specification cadence and a formal Release Manager role. The pain was familiar: plenty of ideas, but review, implementation, testing, and ship dates were scattered across meeting notes and GitHub threads—hard for proposal authors and SDK maintainers to plan against.

The new rule is blunt. Spec releases generally land on the **last Tuesday of March and September**, with proposal deadlines and SDK beta dates published so teams can work backward. The next target is **2027-03-30** (same date as the version id). Proposals that are not ready **move to a later release** instead of slipping the whole train. The post stresses this is process, not wire format: nothing in existing clients or servers must change because of the announcement. Spec versions stay date-stamped.

Luca Chang joins Den Delimarsky and David Soria Parra as Release Manager for the next cycle—queueing proposals, coordinating SDK work, chasing blockers—while Core Maintainers still decide what enters a release. SEP-3398 (Release Cycle Updates) is the de facto guide. Planning for a regular cycle starts about eight months out; soft freeze requires Final, merged proposals, then polish only; hard freeze limits changes to critical security or release-blocking interop fixes under a full Core Maintainer vote. Tier 1 SDKs need stable support before release day; if an SDK is late, the gap is documented **without moving the spec date**.

If you ship MCP servers or clients, align integration windows to those March/September ends and treat “not this train” as normal. Watch the forthcoming deadline and SDK beta dates, and use the post–soft-freeze betas to surface interop bugs while fixes can still land.
