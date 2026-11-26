export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  highlights: string[];
  tags: string[];
}

export interface ResearchItem {
  title: string;
  org: string;
  period: string;
  advisor?: string;
  summary: string;
  tags: string[];
  links?: { label: string; url: string }[];
}

export interface SelfHostedItem {
  name: string;
  category: string;
  description: string;
  status: "Active" | "Planned";
}

export const PROFILE = {
  name: "Arnav Gupta",
  handle: "arnavgupta",
  headline: "Software Engineer @ Google Search (Agentic Workflows) · Systems & Security",
  location: "Bangalore, India",
  statusBadge: "At NeurIPS — Open for 15-min coffee chats",
  bio: "Software Engineer at Google working on Agentic Workflows for Google Search (Core Search & AIM Engineering). Previously built high-reliability backend infrastructure (4-9s SLA), taught applied cybersecurity, and researched systems security at IIITD.",
  email: "arnav.gupta.2003@gmail.com",
  // Replace these with your exact URLs before deploying
  socials: {
    linkedin: "https://www.linkedin.com/in/arnavgupta-/",
    github: "https://github.com/arnavgupta2003",
    x: "https://x.com/arnavgupta",
  },
  // Live n8n webhook created via MCP (Handle portfolio contact submission)
  contactWebhookUrl: "https://n8n.bizad.in/webhook/portfolio-contact",
  // Self-hosted Cal.com links
  calComUrl: "https://cal.qubit.bizad.in/arnav/15min",
  calCom30Url: "https://cal.qubit.bizad.in/arnav/30min",
  // Optional self-hosted Umami analytics (leave empty until deployed)
  umami: {
    scriptUrl: "",
    websiteId: "",
  },
  kpis: [
    {
      label: "Current Role",
      value: "Google Search",
      detail: "Agentic Workflows & AIM Engineering",
    },
    {
      label: "Infra Reliability",
      value: "4-9s SLA",
      detail: "Resilient systems & 99.99% uptime",
    },
    {
      label: "Security Footprint",
      value: "800+ Trained",
      detail: "Cybersecurity labs & IIT Guwahati CTFs",
    },
    {
      label: "Research Lab",
      value: "IIITD NetSec",
      detail: "Side-channels & VPN traffic analysis",
    },
  ],
  experience: [
    {
      company: "Google",
      role: "Software Engineer (SWE) – Agentic Workflows for Google Search (Core Search & AIM)",
      period: "2025 – Present",
      location: "Bangalore, India",
      badge: "Full-Time",
      highlights: [
        "Building and scaling agentic workflows and LLM-powered ranking features inside Google Search pipelines to drive algorithmic relevance at global scale.",
        "Leading end-to-end full-stack feature development, latency and throughput optimizations, and scalable AI infrastructure.",
        "Collaborating across Core Search and AIM engineering teams to ship production-grade evaluation, orchestration, and reliability guardrails.",
        "SWE Intern (May 2024 – Aug 2024): Improved local categorical rankings for mixed-language queries by closing classifier score gaps and integrating an NLP query classifier into the local web triggering pipeline.",
      ],
      tags: ["Agentic Workflows", "Google Search", "LLMs", "Ranking Systems", "AI Infra"],
    },
    {
      company: "Bizad",
      role: "Chief Technology Officer (CTO)",
      period: "2023 – 2025",
      location: "Remote",
      badge: "Leadership",
      highlights: [
        "Led end-to-end technical strategy, system architecture, and full-stack product engineering from zero-to-one prior to joining Google.",
        "Architected scalable cloud infrastructure, containerized deployments, and automated CI/CD pipelines for rapid, reliable iteration.",
        "Designed resilient backend services, APIs, and data models supporting multi-tenant workloads and low-latency user experiences.",
        "Established engineering standards, security best practices, and observability tooling across the stack.",
      ],
      tags: ["System Architecture", "Cloud Infra", "Full-Stack", "CI/CD"],
    },
    {
      company: "AccioJob",
      role: "Cybersecurity Instructor & Curriculum Engineer",
      period: "Apr 2024 – Jun 2025",
      location: "New Delhi, India",
      badge: "Education",
      highlights: [
        "Designed hands-on cybersecurity curricula, risk mitigation labs, and technical training programs across 800+ learners.",
        "Authored production-grade Capture The Flag (CTF) challenges covering web exploitation, network security, and binary/system hardening.",
        "Delivered specialized applied cybersecurity workshops and course modules for IIT Guwahati faculty.",
        "Mentored engineers on secure coding practices, threat modeling, and practical vulnerability assessment.",
      ],
      tags: ["Cybersecurity", "CTF Design", "Curriculum", "Training"],
    },
    {
      company: "ScrapUncle",
      role: "Chief Technology Officer (CTO)",
      period: "Mar 2024 – Dec 2024",
      location: "New Delhi, India",
      badge: "Executive",
      highlights: [
        "Modernized core backend infrastructure and deployment workflows to achieve 4-9s (99.99%) SLA reliability.",
        "Re-architected database and data-ingestion pipelines with fault-tolerant recovery loops, ensuring zero data loss and high throughput.",
        "Introduced structured observability, automated alerting, and graceful degradation patterns across critical production services.",
        "Aligned technical roadmap and engineering execution with operational growth, improving system maintainability and release velocity.",
      ],
      tags: ["Distributed Infra", "Database Pipelines", "Fault Tolerance", "SRE"],
    },
  ] as ExperienceItem[],
  research: [
    {
      title: "The EALS Framework: Multi-Objective Leader Election in Robotic Teams",
      org: "IEEE Publication · IIITD",
      period: "2024 – 2025",
      summary:
        "Designed EALS (Energy-Aware Leadership Selection), a modular multi-objective leader election framework with Proximity, Taskload, Comms, and Reliability variants and Pareto-optimal tie-breaking. Validated via Z3 SMT formal verification, Python simulation, and decentralized ROS2 deployment—reducing leader churn by up to 87%.",
      tags: ["IEEE Paper", "Distributed Systems", "Z3 SMT", "ROS2", "Multi-Robot"],
      links: [
        { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/11096969/" },
        {
          label: "Paper PDF",
          url: "https://github.com/arnavgupta2003/arnavgupta2003/blob/main/EALS__IEEE_Release-5.pdf",
        },
      ],
    },
    {
      title: "Android Side-Channel Analysis & Behavioral Classification",
      org: "Networking & Security Lab, IIITD",
      period: "Jun 2023 – May 2024",
      advisor: "Dr. Sambuddho Chakravarty",
      summary:
        "Investigated OS and hardware side-channel leakage on Android across system calls, Perfetto traces, Adreno GPU performance counters, CPU cache/branch patterns, and eBPF kernel tracing. Built a CNN-GRU behavioral classifier achieving 97% accuracy (0.97 F1) across 32+ classes to inform proactive mobile defenses.",
      tags: ["Android Internals", "Side-Channels", "eBPF", "CNN-GRU", "Systems Security"],
      links: [
        {
          label: "BTP Report PDF",
          url: "https://github.com/arnavgupta2003/arnavgupta2003/blob/main/BTP%20Report%20Android%20Side%20Channel%20Attacks_Term1.pdf",
        },
      ],
    },
    {
      title: "GPU-Based High-Throughput Firewall",
      org: "Systems & Network Security, IIITD",
      period: "2023",
      summary:
        "Engineered a CUDA-accelerated packet-filtering firewall offloading rule-matching and hash-based packet inspection onto GPU threads for high-throughput, parallel network traffic filtering.",
      tags: ["CUDA", "GPU Computing", "Network Security", "Packet Filtering"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/arnavgupta2003/GPU-Based-Firewall" },
      ],
    },
    {
      title: "VPN Traffic Identification & ISP-Adversary Evasion",
      org: "Networking & Security Lab, IIITD",
      period: "Jun 2023 – 2025",
      advisor: "Dr. Sambuddho Chakravarty",
      summary:
        "Evaluated VPN protocol fingerprinting under ISP-level adversary models and engineered privacy-preserving evasion techniques using packet-size manipulation, SNI handling, and MTU tuning.",
      tags: ["Network Security", "VPN Protocols", "Traffic Analysis", "Privacy"],
    },
  ] as ResearchItem[],
  education: {
    institution: "Indraprastha Institute of Information Technology (IIITD)",
    degree: "B.Tech in Computer Science and Applied Mathematics (CSAM)",
    period: "2021 – 2025",
    cgpa: "8.13",
    coursework: [
      "Networks & System Security",
      "Distributed Systems",
      "Parallel Runtimes for Modern Processors",
      "Theory of Computation",
      "Algorithmic Techniques for Robot Planning",
      "Optimization Mathematics",
    ],
  },
  selfHosted: [
    {
      name: "Self-Maintaining LLM Wiki",
      category: "Obsidian · MCP · Git · Kaneo",
      description:
        "Two-speed automated knowledge base: daily inbox capture + weekly Git worktree consolidation PRs with an event-driven GitHub → n8n → Kaneo human-in-the-loop review loop.",
      status: "Active",
    },
    {
      name: "AGY ↔ Kaneo Agent Runner",
      category: "Docker · Dagu · n8n · Kaneo",
      description:
        "Remote phone & Slack → n8n → Kaneo task queue executed by an always-on Dockerized Dagu + autonomous coding CLI runner over Tailscale.",
      status: "Active",
    },
    {
      name: "xyOps + Paperclip GPU Queue",
      category: "xyOps · Ollama · Local GPU",
      description:
        "Concurrency-controlled local GPU job scheduler & AI control plane powering shared Ollama inference for CI diff reviews, security alert triage, and OCR pipelines.",
      status: "Active",
    },
    {
      name: "n8n Automation Backbone",
      category: "Webhooks · Slack · Data Tables",
      description:
        "Event-driven automation hub powering this portfolio's Connect webhook → #portfolio-inbox Slack alerts, GitHub PR review cards, and Slack-to-Kaneo triage.",
      status: "Active",
    },
    {
      name: "Posta Email Infra",
      category: "goposta · Custom SMTP",
      description:
        "Self-hosted transactional email delivery API backed by custom domain SMTP for automated notifications and outreach.",
      status: "Active",
    },
    {
      name: "Cal.com · Ghost · Umami",
      category: "Scheduling · Blog · Analytics",
      description:
        "Self-hosted 15-min coffee scheduler, technical Ghost blog, cookie-free Umami analytics, plus Immich & Jellyfin across a multi-node homelab & VPS fleet.",
      status: "Active",
    },
  ] as SelfHostedItem[],
};
