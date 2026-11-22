---
title: OpenAI 与 Hacktron 合作：用红队能力压测自家系统与第三方交界
slug: openai-hacktron-security-partnership
description: >-
  OpenAI 宣布与安全公司 Hacktron 合作，共同选定高优先级测试面，重点看与第三方服务的交界；并扩大对方通过 Daybreak Red
  使用前沿模型的权限。
date: '2026-11-06'
updated: '2026-11-07'
category: llm
subcategory: release
tags:
  - OpenAI
  - 安全
  - 红队
  - Bug Bounty
author: 编辑部
sourceUrls:
  - 'https://openai.com/index/partnering-with-hacktron'
\npublisher: openai
faqs:
  - question: 这次合作主要测什么？
    answer: 官方写明会共同选定高优先级区域，重点关注 OpenAI 系统与第三方服务如何交互。
  - question: Daybreak Red 是什么角色？
    answer: 公告称将扩大 Hacktron 经 Daybreak Red 使用前沿模型的权限，用于加速其安全研究，并非面向普通用户的产品入口。
draft: false
candidateId: openai-2026-11-02-bc8f9eac19
locale: zh
publisher: openai
---
OpenAI 于 2026 年 11 月 6 日宣布与 Hacktron 建立合作，目标是在自家系统上发现漏洞。双方工程师与安全研究员将一起圈定高优先级测试范围；公告明确把「与第三方服务如何交互」列为重点，而不是只扫单一产品表面。

公司表示，认识 Hacktron 源于 Security Bug Bounty：对方团队做过的披露，让 OpenAI 愿意加深合作。Hacktron 的产品线偏 AI 驱动的代码审查、渗透测试与红队；其公开研究也常落在应用、云基础设施与身份系统的交界处。对 OpenAI 来说，这正好对上「AI agent 正在把更多服务串起来」之后，边界攻击面会变宽这一现实。

同周语境也很清楚：OpenAI 已宣布 Cathedral 研究员将参与下一轮安全冲刺，并上调了 bug bounty 奖励。Hacktron 合作是同一条「加速网络防御、也加速找自家洞」叙事里的正式伙伴关系，而不是单独的产品发布。作为合作的一部分，Hacktron 将获得更多经 Daybreak Red 调用前沿模型的权限。

对安全工程读者，可把信号收成三点：一是官方承认第三方交界是优先战场；二是独立红队被请进「联合选题」而不是只走公开赏金队列；三是前沿网络模型（via Daybreak Red）被当作研究加速器发给合作方。具体哪些系统在范围内、赏金细则，仍以 Bug Bounty 页面为准。公告未给出时间表或漏洞类别配额。
