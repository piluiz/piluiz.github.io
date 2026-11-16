---
title: "353NET: Link-State Routing Protocol"
date: "Spring 2022"
course: "USC CSCI 353"
sort: 2022.3
summary: "Peer-to-peer network routing system implementing link-state protocol with autonomous neighbor discovery, topology flooding, and multi-threaded connection management"
dek: "Implemented a complete peer-to-peer network routing system in C++ that simulates how Internet routers discover topology and communicate. Built as part of USC's CSCI 353: Introduction to Internetworking, this project implements a custom link-state routing protocol (similar to OSPF) to enable distributed nodes to automatically discover neighbors, share network topology, and build a complete graph of the network without central coordination."
image: "/images/osi.png"
tags: ["C++","Networking","Distributed Systems"]
stack: ["C++","Networking","Multi-threading","Distributed Systems"]
---

## Overview

This project implements a distributed link-state routing protocol that enables network nodes to autonomously discover neighbors and share topology information, similar to how Internet routers use OSPF. The system uses a sophisticated multi-threaded architecture to handle concurrent connections and implements message flooding with duplicate detection to ensure all nodes eventually have a consistent view of the network.

The system features a custom peer-to-peer network protocol (353NET/1.0) where each node acts as both server and client. Nodes automatically establish bidirectional connections with configured peers using a handshake protocol, flood link-state updates throughout the network when connections change, and construct a complete view of the network topology by aggregating information from all reachable nodes using BFS traversal.

Building this system from scratch taught me how the Internet actually works at a fundamental level. Working with raw POSIX system calls for all networking—socket(), bind(), listen(), accept(), connect()—forced me to really understand what's happening under the hood. The multi-threaded architecture was particularly challenging, with dedicated reader and writer threads per connection, careful synchronization to avoid race conditions, and implementing the message flooding protocol with TTL-based duplicate detection. Debugging race conditions and ensuring proper thread termination during shutdown required careful design of signaling mechanisms through shared state with condition variables.
