---
title: "Sleep Right"
date: "Spring 2023"
sort: 2023.3
summary: "A prototype smart wearable that wakes you during your optimal sleep stage."
dek: "Sleep Right is a prototype for a smart wearable device designed to improve sleep quality by waking users during their optimal sleep stage. This was my electrical engineering senior design capstone project for USC's [EE 459Lx Embedded Systems Design Laboratory](https://ece-classes.usc.edu/ee459/)."
image: "/images/sleep-right.png"
tags: ["Embedded C","ATMega328P"]
stack: ["Embedded C","ATMega328P"]
links:
  report: "/documents/SleepRight_FinalReport.pdf"
  github: "https://github.com/piluiz/sleep-right"
  course: "https://ece-classes.usc.edu/ee459/"
featured: true
---

## Overview

My semester's design theme was "a smart device that benefits the environment in some manner." Our team chose to go the health route, focusing on sleep quality, specifically optimal wake-up times. The goal was to address jarring wake-ups that interrupt deep sleep cycles, leaving people groggy and tired.

We developed a wearable prototype that monitors sleep patterns and intelligently wakes users during their lightest sleep phase within a specified time window. The system used an ATMega328P microcontroller with inputs from a pulse sensor, real-time clock, rotary encoder, and buttons, with outputs to a haptic motor for wake-up alerts and LCD for user interface.

I was responsible for most of the software stack, including sanitizing heart rate inputs, calculating running averages, and implementing the sleep stage detection algorithms that classified user sleep phases based on heart rate patterns.

The outcome was a working prototype that successfully demonstrated intelligent wake-up functionality. In retrospect, we recognized that reliable sleep stage detection requires additional inputs beyond heart rate, such as accelerometers to detect movement and more sophisticated algorithms for personalized sleep pattern recognition. While our prototype validated the core concept, transitioning to a functional consumer product would require significant additional development.
