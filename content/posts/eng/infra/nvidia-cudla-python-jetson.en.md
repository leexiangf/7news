---
title: 'NVIDIA: native DLA inference in Python on Jetson AGX Orin via cuDLA'
slug: nvidia-cudla-python-jetson
description: >-
  cuda.bindings.cudla (≥13.3.0) exposes cuDLA to Python; CUDA_DLA hybrid mode
  sequences GPU pre/post and DLA on one stream; same API on RTX Spark.
date: '2026-11-13'
updated: '2026-11-21'
category: eng
subcategory: infra
tags:
  - NVIDIA
  - cuDLA
  - Jetson
  - Python
author: Editorial
locale: en
sourceUrls:
  - >-
    https://developer.nvidia.com/blog/run-native-dla-inference-in-python-on-nvidia-jetson-agx-orin-using-cudla/
sourceLevel: S
publisher: nvidia
faqs:
  - question: How to install?
    answer: JetPack already ships libcudla.so; pip install "cuda-bindings>=13.3.0"; Python ≥3.10.
  - question: How to prepare the loadable?
    answer: trtexec --useDLACore=0 --buildDLAStandalone (and peers) → .bin/.nvdla; TensorRT not needed at inference.
draft: false
candidateId: nvidia-developer-2026-11-13-a05643d828
---

NVIDIA’s technical blog (**13 Nov 2026**) shows native **DLA** inference in Python on **Jetson AGX Orin**: `cuda.bindings.cudla` (from **cuda-bindings 13.3.0**) is a thin wrap of the cuDLA C++ API. Motive: offload supported conv/pool ops to the fixed-function accelerator so multi-network edge apps save power and free the GPU.

## Hybrid vs standalone

Target is **CUDA_DLA hybrid mode**—one CUDA stream sequences GPU preprocess, DLA inference, and postprocess. This release **does not** support NvSci-based standalone mode; requests raise `ErrorUnsupportedOperation`. The same API applies to **RTX Spark** Windows AI laptops.

## Nine-step lifecycle

1. `cuInit` / create device (`Mode.CUDA_DLA`)  
2. `module_load_from_memory` (bytes—no filesystem path required)  
3. Introspect I/O tensor descriptors (`size_` drives allocs; no hardcodes)  
4. `cudaMalloc` GPU buffers  
5. `mem_register` buffers with DLA  
6. H2D + preprocess (only model-specific block)  
7. `Task` + `submit_task` onto the stream  
8. Sync + D2H  
9. Unregister / unload / destroy / free  

Build: `trtexec --useDLACore=0 --buildDLAStandalone` (sample targets TensorRT 11.4.1 / JetPack 7.2.2+); TensorRT 11 takes precision from tensor types—legacy `--fp16`/`--int8` gone. Failures raise `CudlaError` / `cudla.Status`. Developer tutorial—not a perf bench piece.
