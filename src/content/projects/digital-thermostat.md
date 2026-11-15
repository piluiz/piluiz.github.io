---
title: "Digital Thermostat System"
date: "Fall 2020"
course: "USC EE 109"
sort: 2020.9
summary: "Temperature control system with LCD interface, rotary encoder threshold adjustment, automatic climate control, and non-volatile memory persistence"
dek: "A fully functional temperature control system built with Arduino in C. This was my final project for USC's EE 109: Introduction to Embedded Systems course. Features real-time temperature monitoring, user-configurable thresholds with rotary encoder interface, automatic heating/cooling control through LEDs, LCD display, and EEPROM persistence for settings."
image: "/images/arduino.png"
hideImage: true
tags: ["C","Arduino","Embedded Systems"]
stack: ["C","Arduino","Embedded Systems","EEPROM"]
---

## Overview

This Arduino project implements a complete temperature control system coded in C with sophisticated user interface and climate control logic. The system continuously monitors ambient temperature using a DS18B20 digital sensor, displays real-time readings on a 16x2 LCD, and automatically triggers heating or cooling modes based on user-configurable temperature thresholds.

The user interface features a rotary encoder for precise threshold adjustment and push buttons to toggle between configuring high and low temperature setpoints. The system maintains two independent thresholds (default 40°F and 70°F) with smart constraints that prevent invalid configurations—the low threshold cannot exceed the high threshold and vice versa. All threshold settings persist in EEPROM, so the system remembers user preferences across power cycles.

The most interesting technical challenges were implementing the 1-Wire protocol for DS18B20 communication and designing the rotary encoder state machine with proper debouncing using pin change interrupts (PCINT). I implemented efficient LCD updates that only refresh when values change to avoid flicker, and created modular code with separate driver files for the LCD and temperature sensor. The system provides clear visual feedback with red and blue LEDs indicating heating and cooling modes, and the LCD displays both the current temperature (with 0.1°F precision) and which threshold is being adjusted.
