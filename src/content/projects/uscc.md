---
title: "USCC – University Simple C Compiler"
date: "Spring 2022"
course: "USC ITP 439"
sort: 2022.3
summary: "A simple C compiler built using LLVM for educational purposes"
dek: "USCC (University Simple C Compiler) is a complete compiler for the University Simple C language, a subset of Standard C. Built as part of USC's [ITP 439 Compiler Design](https://itp439-20231.github.io/USCC.html) course, this project implements all major compiler phases from lexical analysis to LLVM IR generation."
image: "/images/uscc.png"
hideImage: true
tags: ["C++","LLVM","Compiler Design"]
stack: ["C++","LLVM","Recursive Descent Parsing","SSA","Register Allocation"]
links:
  github: "https://github.com/piluiz/uscc"
  course: "https://itp439-20231.github.io/USCC.html"
---

## Overview

USCC was built over six programming assignments (PAs) in USC's [ITP 439 Compiler Design](https://itp439-20231.github.io/USCC.html) course, implementing a complete compiler pipeline for the University Simple C language.

**PA1 - Recursive Descent Parser:** Implemented a recursive descent parser using Flex for lexical analysis and custom C++ parsing logic. The parser constructs an Abstract Syntax Tree (AST) and handles syntax error recovery with detailed error messages showing exact line and column positions.

**PA2 - Semantic Analysis:** Added semantic analysis including type checking, symbol table management, and scope resolution. The compiler validates type consistency, handles function declarations and calls, and manages variable scoping.

**PA3 - LLVM IR Generation:** Implemented LLVM IR code generation from the AST. Each AST node has a corresponding LLVM IR generation function that creates basic blocks, instructions, and control flow structures.

**PA4 - Static Single Assignment (SSA):** Added SSA form conversion, which is crucial for optimization passes. This involved implementing phi nodes and ensuring each variable has a single definition point.

**PA5 - Optimization Passes:** Implemented various LLVM optimization passes including constant folding, dead code elimination, and loop optimizations to improve generated code efficiency.

**PA6 - Register Allocation:** Built a custom graph coloring register allocation pass for efficient machine code generation, supporting both x86_64 and ARM64 architectures.

The final compiler supports the full University Simple C language including arrays, functions, control structures, and generates optimized LLVM bitcode that can be compiled to executable binaries.
