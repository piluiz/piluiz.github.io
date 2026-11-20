export const experience: { company: string; role: string; team?: string; dates: string; year: string; bullets: string[] }[] = [
  {
    company: "NVIDIA",
    role: "Architecture Modeling Intern",
    dates: "May 2026 – Aug 2026",
    year: "2026",
    bullets: [
      "Extended a C++ GPU performance model and used it to study architecture trade-offs across GPU configurations",
    ],
  },
  {
    company: "NVIDIA",
    role: "Tegra Systems Architecture Intern",
    team: "Tegra SoC Architecture",
    dates: "May 2025 – Aug 2025",
    year: "2025",
    bullets: [
      "Architected an LLM-driven Python framework for SoC design-space exploration that connects large language models to hardware simulators, so it can orchestrate simulations, analyze the results, and propose new configurations on its own",
      "Built a feedback loop that sweeps SoC parameters and iteratively refines configurations toward configurable objectives, like ML workload performance under power constraints, matching or beating hand-tuned configurations with faster exploration and no manual tuning",
      "Designed the framework to be modular, so new architecture models and simulators plug in easily and it can be reused in future design work",
    ],
  },
  {
    company: "Applied Invention",
    role: "Software Engineer",
    team: "Robotics",
    dates: "Aug 2023 – Mar 2025",
    year: "2023–25",
    bullets: [
      "Designed a multithreaded C++ control architecture, centered on a ROS 2 state machine, for a 40 × 4 × 3 ft robotic gantry that travels on an overhead rail system in a greenhouse",
      "Developed the hardware/software interfaces between the control software and the robot's real-time systems, including motor controllers and sensors over CAN and ROS 2",
      "Designed core parts of the greenhouse environmental control system: data collection, processing, and storage, the APIs, and the control logic that drives actuators automatically",
    ],
  },
  {
    company: "Meta",
    role: "Software Engineer Intern",
    team: "Mobile Product Runtimes",
    dates: "May 2022 – Aug 2022",
    year: "2022",
    bullets: [
      "Profiled plugins in the Facebook Android app and optimized their code for a 12% speedup in app load time for over 50 million users",
      "Built a full-stack tool for my team to process A/B test data from SQL databases in Python and review the results in a React front end",
    ],
  },
  {
    company: "NVIDIA",
    role: "Computer Architecture Intern",
    team: "Streaming Multiprocessor Architecture",
    dates: "May 2021 – Aug 2021",
    year: "2021",
    bullets: [
      "Wrote directed texture workloads to characterize the power efficiency of the H100 SM",
      "Designed targeted microbenchmarks that each stress one part of the SM: hitting or missing at specific levels of the cache hierarchy, exposing long graphics pipeline latencies, and saturating SIMD throughput",
      "Built a pipeline for comparative power studies with these tests, then analyzed per-subunit energy data to pinpoint inefficiencies and inform optimizations for the next-generation SM",
    ],
  },
];
