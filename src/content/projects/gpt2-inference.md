---
title: "GPU-Accelerated GPT-2 Transformer Inference"
date: "Fall 2025"
sort: 2025.9
summary: "High-performance GPU-accelerated GPT-2 transformer inference with Flash Attention, KV caching, and CUTLASS optimizations"
dek: "High-performance GPU-accelerated implementation of GPT-2 transformer inference using CUDA. This ECE 408 final project optimized the forward pass of the GPT-2 language model, transforming a baseline CPU implementation into a highly optimized GPU implementation leveraging advanced parallel programming techniques."
image: "/images/Full_GPT_architecture.png"
tags: ["CUDA","C++","Machine Learning"]
stack: ["CUDA","C++","GPT-2","Profiling"]
links:
  report: "/documents/ECE408_Milestone_3_Report.pdf"
featured: true
---

## Overview

As part of UIUC's ECE 408 Applied Parallel Programming course, our team implemented all GPT-2 transformer kernels in CUDA for high-performance inference on NVIDIA GPUs. GPT-2 is a transformer-based language model that demands significant computational resources for inference, making GPU optimization critical for practical deployment.

We built all core transformer operations from scratch in CUDA, including matrix multiplications, layer normalization, attention mechanisms, and feed-forward networks. The implementation progressed through multiple milestones, each introducing new optimization techniques to maximize GPU utilization and memory efficiency.

Throughout development, we utilized Nsight Systems and Nsight Compute for comprehensive profiling and performance analysis, enabling data-driven optimization decisions. The final implementation demonstrated significant performance improvements while maintaining numerical accuracy, successfully bridging the gap between theoretical GPU capabilities and practical transformer inference performance.

## Optimizations

- **Register Tiling + Shared Memory Tiling:** Implemented register and shared memory tiling strategies for matrix multiplication to maximize data reuse and minimize memory bandwidth
- **Tensor Core Utilization (TF32 Precision):** Leveraged NVIDIA Tensor Cores with TF32 precision for accelerated matrix operations on Ampere and newer architectures
- **cuBLAS Integration:** Integrated cuBLAS library for high-performance matrix multiplications on modern NVIDIA GPUs
- **Reduction Optimization:** Applied optimized reduction techniques for efficient parallel sum operations across thread blocks
- **Flash Attention (IO-Aware Tiling):** Implemented Flash Attention with IO-aware tiling strategies to reduce memory bandwidth requirements and improve computation efficiency
- **Configuration Sweep:** Performed systematic exploration of block sizes, thread counts, and loop unrolling parameters to find optimal kernel configurations
- **Constant Memory Optimization:** Utilized constant memory for frequently accessed data to reduce global memory bandwidth and improve cache efficiency
- **__restrict__ Keyword:** Applied __restrict__ keyword for pointer aliasing hints to enable compiler optimizations
- **Windowed/Local Attention:** Implemented attention with limited context windows to reduce quadratic complexity for longer sequences
- **Split-K GEMM Decomposition:** Decomposed GEMM operations across the K dimension to increase parallelism and improve GPU utilization
- **KV Cache System:** Cached key-value pairs from previous tokens to avoid redundant computation during autoregressive generation
- **CUTLASS Integration:** Leveraged NVIDIA's CUTLASS library for highly optimized GEMM operations utilizing tensor cores
