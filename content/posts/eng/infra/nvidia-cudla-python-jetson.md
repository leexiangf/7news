---
title: NVIDIA：用 Python cuDLA 在 Jetson AGX Orin 上跑原生 DLA 推理
slug: nvidia-cudla-python-jetson
description: >-
  cuda.bindings.cudla（≥13.3.0）把 cuDLA 暴露给 Python；CUDA_DLA 混合模式用同一 stream 编排 GPU
  前后处理与 DLA；亦适用 RTX Spark。
date: '2026-11-13'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - cuDLA
  - Jetson
  - Python
author: 编辑部
locale: zh
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/run-native-dla-inference-in-python-on-nvidia-jetson-agx-orin-using-cudla/
sourceLevel: S
publisher: nvidia
faqs:
  - question: 如何安装？
    answer: JetPack 已带 libcudla.so；pip install "cuda-bindings>=13.3.0"；Python ≥3.10。
  - question: 负载如何准备？
    answer: trtexec --useDLACore=0 --buildDLAStandalone 等生成 .bin/.nvdla；推理时不再需要 TensorRT。
draft: false
candidateId: nvidia-developer-2026-11-13-a05643d828
---

NVIDIA 技术博客（**2026-11-13**）介绍在 **Jetson AGX Orin** 上用 Python 跑 **DLA** 原生推理：`cuda.bindings.cudla`（自 **cuda-bindings 13.3.0**）薄封装 cuDLA C++ API。动机：边缘多网络时把支持的卷积 / 池化等卸到固定功能加速器，省电并腾出 GPU。

## 混合模式 vs 独立模式

面向 **CUDA_DLA 混合模式**——同一 CUDA stream 上串联 GPU 预处理、DLA 推理与后处理。本发行**不支持**需 NvSci 的独立模式；请求会抛 `ErrorUnsupportedOperation`。同一 API 亦适用于 **RTX Spark** Windows 开发本。

## 九步生命周期

1. `cuInit` / 创建设备（`Mode.CUDA_DLA`）  
2. `module_load_from_memory`（bytes，不绑文件路径）  
3. 内省输入输出张量描述符（`size_` 驱动分配，无硬编码）  
4. `cudaMalloc` GPU 缓冲  
5. `mem_register` 把缓冲登记给 DLA  
6. H2D 拷贝 + 预处理（唯一模型相关段）  
7. `Task` + `submit_task` 入队到 stream  
8. 同步 + D2H  
9. unregister / unload / destroy / free  

编译：`trtexec --useDLACore=0 --buildDLAStandalone` 等（示例面向 TensorRT 11.4.1 / JetPack 7.2.2+）；TensorRT 11 精度跟模型类型走，旧 `--fp16`/`--int8` 已弃。错误以 `CudlaError` / `cudla.Status` 抛出。属**开发者教程**，非性能基准文。
