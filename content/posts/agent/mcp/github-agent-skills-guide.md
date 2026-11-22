---
title: GitHub：用 Agent Skills 一次写好、多客户端复用
slug: github-agent-skills-guide
description: >-
  GitHub Blog 实操指南：以 SKILL.md 固化可重复任务，示例含 Proof Agent
  对抗核验与 Data Forge 数据管线；强调清单与权限仍由环境提供。
date: '2026-11-12'
updated: '2026-11-20'
category: agent
subcategory: mcp
tags:
  - GitHub
  - Agent Skills
  - Copilot
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://github.blog/ai-and-ml/github-copilot/build-once-run-on-any-agent-a-practical-guide-to-agent-skills/
sourceLevel: A
publisher: github
faqs:
  - question: Skill 会不会自动给数据库权限？
    answer: 不会。Skill 描述如何查询；工具、凭证与权限仍由运行环境提供。
  - question: 多客户端怎么维护？
    answer: 示例以 skills/*/SKILL.md 为源，打包脚本生成 Claude/Cursor/Copilot 客户端文件，并可用 --check 做 CI。
draft: false
candidateId: github-blog-2026-11-12-657af3312a
---
GitHub Blog 发文讲解 **Agent Skills**：以版本化目录中的 `SKILL.md` 描述「何时、如何」做可重复任务，便于跨 Agent 复用；但**工具、凭证与权限仍由环境提供**——Skill 能写清怎么查库，却不能授权访问。

两条演示：**Proof Agent** 用独立核验者对抗「自评即核验」，输出需引用改动证据；**Data Forge** 把管线判断拆成 `forge-init` / `forge-builder` / `forge-dbx` / `forge-lint` 等协作 Skill，项目细节放进 **manifest**，标准与发现结果分离。工作流插入人工审批点；Copilot/Claude/Cursor 用打包脚本从同一源生成客户端文件。三条实践：业务上下文单文件、平台访问路径统一、指令引导 + CI/人工检查。属**工程指南**，不是单一产品发版。
