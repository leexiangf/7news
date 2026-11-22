---
title: Microsoft Foundry Dev Pack goes GA for one-install agent tooling
slug: foundry-dev-pack
description: >-
  Foundry Blog: Dev Pack GA installs Foundry CLI (azd ai), Foundry Skill, VS
  Code Toolkit, and Copilot app plugin in one shot—winget, brew, or Linux
  script.
date: '2026-11-18'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft
  - Foundry
  - Developer Tools
  - Ignite
author: Editorial
locale: en
sourceUrls:
  - >-
    https://devblogs.microsoft.com/foundry/the-foundry-dev-pack-is-here-build-foundry-agents-your-way/
sourceLevel: A
publisher: microsoft
faqs:
  - question: What’s in the pack?
    answer: Foundry CLI (azd ai) and Microsoft Foundry Skill; Toolkit and Copilot app plugin when those apps are present.
  - question: Install?
    answer: Windows winget install Microsoft.FoundryDevPack; macOS brew cask; Linux curl install script from aka.ms.
draft: false
candidateId: microsoft-foundry-2026-11-18-64f4d5a8fe
---
Microsoft’s Foundry Blog (**18 Nov 2026**, Ignite) ships the **Foundry Dev Pack** as **GA**: one install that puts agent tooling on your machine—the **Foundry CLI (`azd ai`)**, **Microsoft Foundry Skill**, plus the VS Code Toolkit and GitHub Copilot app plugin when those apps are present. Tools share project files so you can scaffold in one place, debug in another, and deploy from whichever fits.

Install via Windows `winget install Microsoft.FoundryDevPack`, macOS `brew install --cask microsoft/foundry/devpack`, or the Linux `aka.ms/foundry-devpack-install.sh` script. CLI samples cover `azd ai agent init/provision/run/deploy` (azd **≥1.37.0**, Python **≥3.13**, and peers). Developer-tooling release, not a new model.
