---
title: 大晓机器人与南洋理工发布 Mundo 可交互机器人世界模型
slug: sensetime-mundo-world-model
description: >-
  商汤新闻称大晓机器人联合南洋理工大学 S-Lab 发布 Mundo：用少量影像构建可探索、带物理响应并可服务导航与操作训练的三维世界。
date: '2026-11-03'
updated: '2026-11-20'
category: llm
subcategory: release
tags:
  - 商汤
  - 世界模型
  - 机器人
  - Mundo
author: 编辑部
locale: zh
sourceUrls:
  - 'https://www.sensetime.com/cn/news/mundo-robotics-world-model-20261104-1605'
  - 'https://mundo-world-model.github.io/'
sourceLevel: A
publisher: sensetime
faqs:
  - question: 输入需要多少图？
    answer: 新闻举例用 1～12 张图像即可围绕室内结构探索；更大场景可用数十张上下文分段生成并靠重叠帧衔接。
  - question: 和 Kairos 什么关系？
    answer: 文中写 Mundo 在以 Kairos 为核心的体系里补充环境建模、训练数据生成与仿真训练。
draft: false
candidateId: sensetime-cn-2026-11-03-cf0f86a071
---
商汤新闻报道：大晓机器人联合南洋理工大学 **S-Lab** 发布面向具体环境的世界模型 **Mundo**。定位是把少量图片/视频扩成**可探索、可编程交互**、并可用于机器人导航与操作训练的三维世界；项目页见 [mundo-world-model.github.io](https://mundo-world-model.github.io/)。

能力要点按官方表述可分成三块。一是**长路径探索**：先建三维代理再沿相机路径生成新视角，输入图像约束已见区域，未见区域由模型补全；更大环境可分段生成并用重叠帧衔接。二是**物理属性**：场景程序配置质量、摩擦等，脚本施力后由物理引擎算运动与碰撞，再结合参考图渲染。三是**导航与操作贯通**：同一定制场景支持路径规划视角、多形态机器人操作任务，以及「冻结时间再换视角」的四维观察；文中提到酒店楼层与洗衣区等应用试验。

在大晓以 **Kairos** 为核心的世界模型叙事里，Mundo 被写成补环境建模与仿真训练的一环。引用时区分「可演示能力」与「已规模化落地」——新闻未给出公开基准分数。
