---
title: MCP 之后，Anthropic 把 Agent Skills 也捐给了 AAIF
slug: anthropic-agent-skills-to-aaif
description: >-
  Agent Skills 进入 Linux Foundation 旗下 AAIF。官方称 70 多家平台已接入；捐赠含名称、GitHub
  组织与域名。文中生态数字均为厂商自报。
date: '2026-10-22'
updated: '2026-11-06'
category: agent
subcategory: mcp
tags:
  - Anthropic
  - Agent Skills
  - AAIF
  - MCP
  - 开源治理
author: 编辑部
sourceUrls:
  - >-
    https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation
\npublisher: anthropic
faqs:
  - question: Agent Skills 和 MCP 有什么不同？
    answer: 按官方叙事，MCP 侧重智能体如何连接工具与上下文；Agent Skills 侧重用 SKILL.md 等文件注入「怎么完成一类任务」的程序性知识。
  - question: 不加入 AAIF 还能用 Skills 吗？
    answer: 官方写明可以继续使用或贡献该标准，不必加入基金会。
draft: false
candidateId: anthropic-2026-10-22-86405d6d1e
locale: zh
publisher: anthropic
---
Anthropic 宣布，把开放标准 Agent Skills 捐赠给 Agentic AI Foundation（AAIF）。AAIF 设在 Linux Foundation 之下。公司称，去年与 Block、OpenAI 共同发起该基金会，并曾向其捐赠 Model Context Protocol（MCP）。

两件事可以放在一起看。MCP 回答的是智能体如何连接工具和上下文。Skills 回答的是如何把某一类任务的步骤与领域知识装进智能体。官方定义里，一个 skill 是含 `SKILL.md`、以及可选脚本和参考材料的文件夹。

这条线从 Claude Code 实践里长出来。通用知识工作尚可，业务流程往往缺「按步骤做完」的程序感。约 2025 年 10 月相关能力上线后，开发者在 GitHub 上发布大量 skills，并为 Codex、Cursor、OpenCode 等写了加载器。同年 12 月，Anthropic 用独立的 GitHub 组织和域名，把 Agent Skills 立成开放标准。

生态规模来自官方自报：超过 70 个智能体平台已集成，点名包括 ChatGPT、Cursor、GitHub Copilot、VS Code；约 100 万个 skills 已发布，安装量接近 2.8 亿。捐赠范围包括 Agent Skills 的名称与标识、GitHub organization，以及 agentskills.io 域名。官方还写明：标准保持开放、社区驱动、厂商中立；不加入 AAIF 也可以继续使用或贡献。

对正在写内部 skill 包的团队，短期动作很具体：目录和 `SKILL.md` 约定尽量贴公开标准，换运行时的成本会低一些。中期要盯的是 AAIF 的版本节奏和提案通道。捐赠把标准放进中立治理框架，并不等于功能冻结，也不自动证明跨产品行为已经一致。上述接入量与安装量目前只能按厂商披露理解，公开仪表盘若后续放出，再单独核对。
