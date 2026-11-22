---
title: Copilot code review 支持 API 管理设置，概览评论更紧凑
slug: github-copilot-code-review-api
description: >-
  GitHub Changelog：可经 REST/GraphQL 管理企业到仓库的 code review
  设置；概览评论更紧凑，并补充归因与计费等修复。
date: '2026-11-06'
updated: '2026-11-20'
category: ai-coding
subcategory: ide
tags:
  - GitHub Copilot
  - code review
  - API
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates
sourceLevel: S
publisher: github
faqs:
  - question: 哪些计划可用？
    answer: Copilot Pro、Pro+、Max、Business、Enterprise。
  - question: App / fine-grained PAT 限制？
    answer: 企业与组织设置端点不支持 GitHub Apps 与 fine-grained PAT；仓库设置端点在 Administration 权限下支持。
draft: false
candidateId: github-changelog-2026-11-06-d28d7745dd
---
GitHub Changelog 更新 **Copilot code review**：除既有请求评审外，现可经 **REST / GraphQL** 从企业策略管到单个仓库的开关、默认 effort 与 runner 配置；响应可标识 Copilot 产出、effort，以及评论所引用的 skills / MCP / 自定义指令。

UI 侧，评审概览更紧凑：effort 与问卷进页脚；跳过与内容排除文件合并为「Files not reviewed」；空区段省略。差评后可选择原因反馈。另含计费、自动评审与可靠性修复。面向 Pro 到 Enterprise 计划；企业/组织设置端点对 Apps 与 fine-grained PAT 有限制，详见 Changelog。
