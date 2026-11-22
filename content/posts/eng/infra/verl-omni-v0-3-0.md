---
title: VeRL-Omni v0.3.0：异步多模态 RL、默认 V1 trainer，以及何时该分卡
slug: verl-omni-v0-3-0
description: >-
  VeRL-Omni v0.3.0 把 V1 trainer 设为默认，扩展 separate-async 与扩散 OPD 调度，并用 MiniMax H3、
  MiniCPM-o 案例说明「重叠 rollout/训练」要按负载测量，附升级注意项。
date: '2026-11-06'
updated: '2026-11-20'
category: eng
subcategory: infra
tags:
  - VeRL
  - vLLM
  - RL
  - 多模态
author: 编辑部
locale: zh
sourceUrls:
  - 'https://vllm.ai/blog/2026-11-06-verl-omni-v0-3-0'
  - 'https://github.com/verl-project/verl-omni/releases/tag/v0.3.0'
sourceLevel: A
publisher: vllm
faqs:
  - question: V1 是不是强制？
    answer: >-
      默认 `trainer.use_v1=true`，V0 弃用。未迁移配方（含部分 DiffusionNFT、offline DPO）需显式
      `trainer.use_v1=false`。
  - question: separate-async 一定更快吗？
    answer: >-
      否。MiniCPM-o 案例在短回答时 colocated 更合适；强制更长响应后 separate-async 才在
      per-prompt 上反超。需按生成长度与关键路径测量。
draft: false
candidateId: vllm-blog-2026-11-06-8d333dacbc
---

接续 8 月的 v0.2.0，**VeRL-Omni v0.3.0**（博文日期 **2026-11-06**）把重点从「能训更多模态」推进到「生成、奖励、策略更新与权重同步如何协作」。rollout 栈升到 **vLLM / vLLM-Omni 0.30.0**；**V1 trainer**（TransferQueue + ReplayBuffer）成为默认。

## 异步与解耦：多几条路，而不是一条教条

多模态 RL 的各阶段资源画像不同：自回归生成、扩散去噪、音视频奖励解码都可能成为瓶颈。严格交替循环会让一侧空转。v0.3.0 给出更丰富的执行路径：

- 全异步 rollout 扩到更多 Omni / 文本与音频输入配方（FSDP 路径以 release 支持表为准）  
- **separate-async**：actor 与 rollout 分 GPU 池，经 replay buffer 与可配置同步间隔连接  
- 扩散训练可按需把 colocated 副本借给 rollout，再收回训练  
- 扩散 OPD：teacher 可独立调度与路由  

设计原则写在案例里：**重叠是否划算，取决于你的负载**——不是「异步一定更快」。

## 两个案例怎么读

**MiniMax H3 + DiffusionNFT** 走文本/首帧条件的音视频后训练，奖励侧示例用 CLAP 与 ImageBind（ImageBind 许可为 CC-BY-NC-SA）。博文强调：奖励曲线上升只说明优化了所选信号，**不能**单独证明画质或时序变好；且训练/推理权重布局、时间步约定、音频是否同时进奖励与导出，都需要显式校验。注意：文中 DiffusionNFT launcher 仍传 `trainer.use_v1=false`，数字**不应**当成 V1 结果。

**MiniCPM-o 4.5 GSPO（AVQA）** 对比 colocated sync 与 separate-async：早期收敛接近。效率实验（4×H800）按强制响应长度给出 per-prompt 视角：

| 平均响应长度 | Colocated 倾向 | Separate-async 倾向 |
| --- | --- | --- |
| ~101（自然） | per-prompt 更快（async 约慢 **9%**） | 不优先 |
| 512（强制） | 大致打平 | 大致打平 |
| 1024（强制） | — | per-prompt 约快 **6.7%** |

短答、训练侧吃紧时，colocated 仍是合理默认；生成足够长且允许 TP1 rollout 副本时，再考虑 3+1 式分卡。

## 升级前先改这些

| 项 | 动作 |
| --- | --- |
| Trainer | 默认 V1；旧入口显式 `use_v1=false`；offline DPO 仍在 v0 |
| 扩散媒体产物 | 未命名 tensor 会被拒绝，改用 named artifact 约定 |
| Attention | 缺 FlashAttention 内核时启动失败（不再静默回退 SDPA） |
| 依赖 | vLLM / vLLM-Omni **0.30.0**，Python 3.11+，Diffusers 0.40.0+，CUDA 13.0+ 栈 |
| Qwen3-Omni | 用 `verl_omni.trainer.main_omni`；旧 `main_ppo` 与 monkey-patch 已删 |

完整迁移细节以 [博文](https://vllm.ai/blog/2026-11-06-verl-omni-v0-3-0) 与 [v0.3.0 Release](https://github.com/verl-project/verl-omni/releases/tag/v0.3.0) 为准。选型顺序建议：先选定模型/硬件配方，再决定 sync 还是 separate-async，最后才把墙钟数字写进容量表。
