---
title: NVIDIA 谈 AI 基建供应链：制造伙伴如何支撑平台量产节奏
slug: nvidia-ai-infra-supply-chain
description: >-
  运营负责人 Deb Shoquist 访谈：与台积电（自 1998）、富士康、纬创等伙伴协作；Amphenol 线缆匣约 1500 腿、目标低于
  1 DPPM；晶片出厂到系统出货最短约两周。
date: '2026-11-19'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - supply chain
  - manufacturing
author: 编辑部
locale: zh
sourceUrls:
  - 'https://blogs.nvidia.com/blog/ai-infrastructure-supply-chain/'
sourceLevel: A
publisher: nvidia
faqs:
  - question: 文章类型？
    answer: 人物与供应链叙事，不是新芯片规格发布；点名 TSMC、Foxconn、Wistron、SPIL、KYEC、Amphenol、Coherent、Lumentum 等。
  - question: 可核对的运营数字？
    answer: >-
      Amphenol 线缆匣约 1500 小腿、目标低于 1 DPPM；晶片从台积电出到富士康/纬创系统出货，供需紧时从约五周压到约两周。
draft: false
candidateId: nvidia-blogs-2026-11-19-66395cf511
---

NVIDIA 博客（**2026-11-16**）聚焦运营负责人 **Deb Shoquist**：她负责 AI 平台背后的供应链与制造。不是新 SKU 规格表，而是解释「全年导入领先技术」依赖什么样的伙伴与节奏。

## 选伙伴的三根支柱

Shoquist 把匹配写成三件事，缺一不可：**技术能力、财务与产能能跟得上爬坡、愿意做从未量产过的事**。只有两根时，公司可能投资补第三根——光学伙伴 Coherent、Lumentum 被举为「技术与意愿有了、规模与资本尚在建设」的例子；CPO 则是在带新伙伴进光学供应链。

点名长期关系：台积电自 **1998**；SPIL、KYEC 逾二十年组装测试；另有富士康、纬创、Unimicron、Amkor 等。她每年约六周走访台、中、韩、越、美工厂，并与关键供应商季度例会。

## 可核对的现场细节

| 场景 | 口径 |
| --- | --- |
| Amphenol 线缆匣 | 约 **1500** 小腿；目标质量低于 **1 DPPM**；逾百条自动化线 |
| 晶片分配 | 每周按工厂良率与持有时间决定谁拿到下一批评测晶片；全链路可追溯到客户发票 |
| 周期 | 晶片出台积电 → 富士康/纬创系统出货，供需紧时约 **五周 → 两周** |
| GB200 爬坡 | 自动 handler 吞吐不达标时改回人工装测，数百操作员顶住；NVIDIA「swarm」与富士康自动化一起改线 |

对基建读者：可作「为什么硬件能按代次量产」的组织背景；带宽、功耗、交换机参数仍应回产品白皮书，勿把故事性描述写成性能承诺。
