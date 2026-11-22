---
title: LlamaIndex 谈 KYC 自动化：用文档 Agent 替换规模化人工核验
slug: llamaindex-kyc-automation
description: >-
  LlamaIndex KYC 用例文：五阶段流程（采集→核验抽取→制裁筛查→风险评分→持续监测）；强调文档解析是短板；合规不能替代法律意见。
date: '2026-11-20'
updated: '2026-11-21'
category: ai-office
subcategory: workflow
tags:
  - LlamaIndex
  - KYC
  - 自动化
  - 文档
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.llamaindex.ai/blog/kyc-automation'
sourceLevel: A
publisher: llamaindex
faqs:
  - question: 文章性质？
    answer: 行业用例 / 方案叙事；指向用 Agent 文档处理做 KYC；各地监管不同，不能替代法律意见。
  - question: 文中怎么定义「真自动化」？
    answer: 自动抽取、实时制裁筛查、按规则评分，仅把例外路由给人——仅数字化收件仍靠人工审的不算。
draft: false
candidateId: llamaindex-2026-11-20-b3c38dea97
---

LlamaIndex 发布 *KYC Automation: How to Replace Manual Verification at Scale*：把「了解你的客户」放进 Agent 文档处理叙事。论点：人工核验在规模上又慢又不一致；做错面对 AML 罚金与欺诈，做过头又推高开户流失——自动化同时压两边成本。

## 五阶段（文中拆解）

| 阶段 | 内容 |
| --- | --- |
| 1 采集入库 | 证件与证明材料接入 |
| 2 身份核验与抽取 | 自动读字段、验真伪 |
| 3 制裁 / 负面媒体 | 实时筛查而非周期批跑 |
| 4 风险评分 | 按预设规则打分 |
| 5 持续监测 | 关系存续期再筛 |

「真自动化」定义写得很硬：标准件自动跑完，**只把例外给人**；只做电子收件仍逐份人工审的，不算自动化 KYC。

## 落地提醒（厂商文 + 合规边界）

文中强调多数系统**低估文档解析**：版面、表格、扫描件质量决定抽取能否进规则引擎——与同日 ParseBench-2 叙事可对照。实践建议：先画文档类型与失败点 → 定准确率门槛 → 从一个客群试点 → 设计人在回路 → **第一天就建审计轨迹**。

KYC 受司法辖区约束；本稿是用例入口，**不能替代**合规与法律审查。生产前补齐风控、留痕与人工复核点。
