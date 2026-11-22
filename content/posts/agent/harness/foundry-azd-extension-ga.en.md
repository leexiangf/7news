---
title: Microsoft Foundry extension for Azure Developer CLI is GA
slug: foundry-azd-extension-ga
description: >-
  The microsoft.foundry azd extension bundle hits 1.0 GA, keeping agent config in
  azure.yaml with local Agent Inspector and the same deployment config in CI/CD.
date: '2026-11-05'
updated: '2026-11-20'
category: agent
subcategory: harness
tags:
  - Microsoft Foundry
  - azd
  - Azure
  - agents
author: Editorial
locale: en
sourceUrls:
  - 'https://devblogs.microsoft.com/foundry/microsoft-foundry-azure-developer-cli-ga/'
sourceLevel: A
publisher: microsoft
faqs:
  - question: Which tooling versions?
    answer: Azure Developer CLI 1.37.0+, a current uv release, and Python 3.13+ for the sample.
  - question: What is a hosted agent?
    answer: >-
      Your agent code on Foundry-managed compute; you pick the framework, Foundry
      runs the runtime.
draft: false
candidateId: microsoft-foundry-2026-11-05-9a4fc5949e
---
Microsoft Foundry announced that the **`microsoft.foundry`** extension bundle for **Azure Developer CLI (`azd`)** reached **1.0 GA**. `azd` still provisions Azure resources and deploys app code; the Foundry extension adds agent setup and local testing, with agent and deployment config living beside the code in `azure.yaml`.

What changes in the workflow: review agent and deployment diffs together; inspect local requests and responses in **Agent Inspector** while editing prompts, tools, or code; reuse the same deployment configuration locally and in CI/CD. The walkthrough creates a **hosted agent** (your code on managed compute) via `azd auth login`, `azd ext install microsoft.foundry`, and a Python Agent Framework sample. You need an Azure subscription, Foundry permissions, and model quota; provisioned resources and model usage bill as usual.
