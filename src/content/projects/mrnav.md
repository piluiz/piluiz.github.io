---
title: "MRNAV: Multi-Robot Aware Planning and Control Stack"
date: "2022 - 2023"
sort: 2023.5
summary: "Multi-robot collision and deadlock-free navigation system for cluttered environments with hierarchical planning and control"
dek: "MRNAV is collision- and deadlock-free navigation stack for multi-robot teams in cluttered environments. I collaborated on this research project at USC with the [Robotic Embedded Systems Laboratory](https://robotics.usc.edu/resl/)."
image: "https://img.youtube.com/vi/6WC0YCEctoE/maxresdefault.jpg"
tags: ["C++","ROS","Multi-Agent Systems"]
stack: ["C++","ROS","Multi-Agent Systems","Path Planning"]
links:
  paper: "https://arxiv.org/pdf/2308.13499"
  video: "https://www.youtube.com/watch?v=6WC0YCEctoE"
  github: "https://github.com/baskinburak/mrnav"
  lab: "https://robotics.usc.edu/resl/"
featured: true
---

## Overview

The goal was to solve multi-robot navigation in cluttered environments where traditional approaches fail due to collisions and deadlocks. We developed a hierarchical framework in C++ and ROS with three decision-making levels: short, medium, and long-term planning modules.

I implemented the short horizon planner that incorporates Safety Barrier Certificates (SBCs) for collision-free navigation. We tested in simulation and achieved 8-hour simulated flights with eight quadrotors navigating 300 dynamic obstacles with zero collisions or deadlocks, leading to a pre-print research paper.

## System Architecture

![MRNAV: Multi-Robot Aware Planning and Control Stack system architecture](/images/mrnav-stack.png)
