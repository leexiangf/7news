---
title: Meta F3 Lightning：广告特征可独立发布且保持共享执行
slug: meta-f3-lightning
description: >-
  F3 Lightning 把发布边界与执行边界拆开：单特征独立编译上线，启动时用稳定计算标识去重成共享计划；可比特征约快
  3.6× 上线且算力成本未升。
date: '2026-11-03'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - Meta
  - 特征工程
  - 广告
  - ML Infra
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://engineering.fb.com/2026/11/03/ml-applications/f3-lightning-how-meta-accelerates-ads-ml-features-to-production/
sourceLevel: A
publisher: meta
faqs:
  - question: 原先 F3 的瓶颈？
    answer: 所有特征编译进一张合并图并作为发布单元；任一坏定义卡住整管线。规模超 2 万特征后更频繁。
  - question: 3.6× 指什么？
    answer: 可比 extraction 特征相对旧 F3 到达生产约快 3.6×，且基础设施算力成本未升——Meta 自测。
draft: false
candidateId: meta-engineering-2026-11-03-072a276663
---

Meta Engineering（**2026-11-03**）介绍广告特征框架 **F3** 之上的 **F3 Lightning**。F3 把特征抽取编成 DAG 并合并共享计算，单请求可服务 **2 万+** 特征；合并图也是发布单元——一个坏定义（或昂贵的模型相关测试）会挡住整批。

## 发布边界 ≠ 执行边界

早期「按特征发布」原型解决了阻塞，却因不再共享计算把 CPU 打高。Lightning 的解法：

| 边界 | 行为 |
| --- | --- |
| 发布 | 每特征独立编译、校验、上线、回滚；按优先级队列出队 |
| 执行 | 启动时把活跃配置按**稳定计算标识**去重，收成单一执行计划 |

标识由「操作 + 参数 + 输入标识」派生，与节点编号无关——两周前与今天编译的同一七天过滤仍能对上。

## 四步把效率追回来

1. **稳定标识** — 让独立编译的图能识别「同一计算」  
2. **单一执行计划** — 拓扑排序后扁平为有序列表；失败只污染下游分支  
3. **共享内存缓冲** — 每请求一块缓冲，去掉跨配置跳转与重复拷贝  
4. **稠密下标** — 启动时把标识映成连续 slot，请求路径只做数组下标

文中强调：即便运算次数已与旧 F3 相同，**结果放哪、拷几份**仍可拉开 CPU——这是最少被想到、却最可推广的教训。

## 结果与可读点

可比 extraction 特征到达生产约 **3.6×** 更快，基础设施算力成本未升——便于同周期内做更多模型迭代。对广告 / 推荐特征平台：这是「合并执行效率 vs 独立发布速度」的工程样本；迁移时对齐自身特征类型与校验成本，勿直接套 3.6×。
