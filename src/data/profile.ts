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

export interface FeaturedReadItem {
  title: string;
  category: string;
  summary: string;
  url: string;
}

export const PROFILE = {
  name: "Arnav Gupta",
  handle: "arnavgupta",
  headline: "Software Engineer @ Google Search (Agentic Workflows) · Systems & Security",
  location: "Bangalore, India",
  lastUpdated: "Nov 27, 2026",
  statusBadge: "At NeurIPS — Open for 15-min coffee chats",
  qrUrl: "https://arnavgupta2003.github.io/?utm_source=qr",
  bio: "Software Engineer at Google working on Agentic Workflows for Google Search (Core Search & AIM Engineering). Previously built high-reliability backend infrastructure (4-9s SLA), taught applied cybersecurity, and researched systems security at IIITD.",
  email: "arnav.gupta.2003@gmail.com",
  // Replace these with your exact URLs before deploying
  socials: {
    linkedin: "https://www.linkedin.com/in/arnavgupta-/",
    github: "https://github.com/arnavgupta2003",
    x: "https://x.com/arnavgupta5",
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
  // PostHog analytics (set NEXT_PUBLIC_POSTHOG_KEY in GitHub repo variables or .env.local)
  posthog: {
    key: process.env.NEXT_PUBLIC_POSTHOG_KEY || "",
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
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
    {
      company: "Networks and System Security Lab, IIITD",
      role: "Undergraduate Student Researcher",
      period: "May 2023 – Jun 2025",
      location: "New Delhi, India",
      badge: "Research",
      highlights: [
        "Co-authored 'VPN or Vpwn? How Afraid Should You be of VPN Traffic Identification?' (IEEE TMA '25) under Dr. Sambuddho Chakravarty, evaluating ISP-scale detection across OpenVPN, WireGuard, IPSec/IKEv2, SSH, TLS, and commercial VPNs.",
        "Demonstrated practical VPN evasion techniques (packet-size alteration, dummy traffic, TLS ClientHello SNI obfuscation) and proposed a scalable OpenVPN plaintext-hiding mechanism.",
        "Investigated OS and hardware side-channel leakage on Android (system calls, Perfetto traces, Adreno GPU counters, CPU cache/branch patterns, eBPF) and built a CNN-GRU behavioral classifier achieving 97%+ accuracy across 32+ classes.",
        "Built a CUDA-accelerated GPU-Based Firewall for parallel packet inspection and rule matching; also served as Technical Developer & CTF problem setter for d4rkc0de and OWASP IIITD.",
      ],
      tags: ["Systems Security", "Network Privacy", "IEEE TMA '25", "Side-Channels", "CUDA"],
    },
  ] as ExperienceItem[],
  research: [
    {
      title: "VPN or Vpwn? How Afraid Should You be of VPN Traffic Identification?",
      org: "IEEE TMA '25 · Networking & Security Lab, IIITD",
      period: "Jun 2023 – Jun 2025",
      advisor: "Dr. Sambuddho Chakravarty",
      summary:
        "Published at the 9th Network Traffic Measurement and Analysis Conference (TMA 2025). Analyzed ISP-scale VPN traffic identification across OpenVPN, WireGuard, IPSec/IKEv2, SSH, TLS, and seven commercial/open-source VPNs. Demonstrated evasion techniques (packet-size alteration, dummy traffic, TLS ClientHello SNI obfuscation) and proposed a scalable OpenVPN plaintext-hiding mechanism.",
      tags: ["IEEE TMA '25", "Network Security", "VPN Protocols", "Traffic Analysis", "Privacy"],
      links: [
        { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/11096969/" },
      ],
    },
    {
      title: "The EALS Framework: Multi-Objective Leader Election in Robotic Teams",
      org: "IIIT Delhi",
      period: "2024 – 2025",
      summary:
        "Designed EALS (Energy-Aware Leadership Selection), a modular multi-objective leader election framework with Proximity, Taskload, Comms, and Reliability variants and Pareto-optimal tie-breaking. Validated via Z3 SMT formal verification, Python simulation, and decentralized ROS2 deployment—reducing leader churn by up to 87%.",
      tags: ["Distributed Systems", "Z3 SMT", "ROS2", "Multi-Robot", "Optimization"],
      links: [
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
      name: "Private LLM Cloud",
      category: "Tailscale · xyOps · Ollama · n8n",
      description:
        "Distributed Ollama inference pool clustered across bare-metal nodes over Tailscale, health-monitored by xyOps (xySat) and exposed via an OpenAI-compatible n8n gateway with zero public ports.",
      status: "Active",
    },
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
      name: "Dokploy PaaS & Edge Routing",
      category: "Dokploy · Traefik v3 · Cloudflared · Tailscale",
      description:
        "Self-hosted VPS PaaS running containerized workloads and preview deployments behind Traefik v3, Cloudflare Zero Trust tunnels, and a Tailscale exit node.",
      status: "Active",
    },
    {
      name: "Distributed S3, Backups & Docs",
      category: "Garage S3 · MinIO · Duplicati · Paperless-ngx",
      description:
        "Garage S3 object storage on VPS paired with MinIO at home, encrypted Duplicati scheduled backups, Syncthing multi-device sync, and Paperless-ngx OCR archive.",
      status: "Active",
    },
    {
      name: "n8n · Posta · Kaneo Backbone",
      category: "n8n · Posta SMTP · Kaneo · WAHA",
      description:
        "Event-driven automation hub powering this portfolio's Connect webhook → #portfolio-inbox Slack alerts, Posta transactional email delivery, WAHA, and Kanban triage.",
      status: "Active",
    },
    {
      name: "Split-Horizon Proxy & Monitoring",
      category: "Nginx Proxy Manager · Uptime Kuma · NetAlertX",
      description:
        "Dual public and internal Nginx Proxy Manager ingress paired with Uptime Kuma alerting, NetAlertX network auditing, Portainer, and Cockpit.",
      status: "Active",
    },
    {
      name: "Media, Vision & *arr Stack",
      category: "Jellyfin · Immich · Frigate · *arr",
      description:
        "Automated media pipeline spanning Prowlarr indexing on VPS to Jellyseerr, Radarr, Sonarr, Bazarr, qBittorrent, and Jellyfin at home—alongside Immich photo backups and Frigate NVR.",
      status: "Active",
    },
    {
      name: "Cal.com · ARSphere · Umami",
      category: "Scheduling · Ghost · Analytics",
      description:
        "Self-hosted 15-min/30-min Cal.com scheduler, Ghost engineering blog (blog.kontour.in), and cookie-free Umami analytics across a multi-node homelab & VPS fleet.",
      status: "Active",
    },
  ] as SelfHostedItem[],
  featuredReads: [
    {
      title: "Building a Private LLM Cloud: Distributed Ollama Orchestration with Tailscale, xyOps, and n8n",
      category: "Infrastructure Design",
      summary:
        "Clustering mismatched bare-metal servers over Tailscale into a self-healing, OpenAI-compatible LLM pool using xyOps health monitoring and an n8n streaming gateway.",
      url: "https://blog.kontour.in/building-a-private-llm-cloud-distributed-ollama-orchestration-with-tailscale-xyops-and-n8n/?utm_source=arnavgupta2003.github.io&utm_medium=portfolio&utm_campaign=selfhosted",
    },
    {
      title: "When Monitoring Lies: A Case Study in the Observer Effect",
      category: "Interesting Studies",
      summary:
        "Debugging frozen Prometheus & Grafana CPU metrics across Nginx Proxy Manager vs. Cloudflare Zero Trust Tunnel—tracing cf-cache-status: HIT on /metrics and fixing it with Cache-Control: no-store.",
      url: "https://blog.kontour.in/when-monitoring-lies-a-case-study-in-the-observer-effect/?utm_source=arnavgupta2003.github.io&utm_medium=portfolio&utm_campaign=selfhosted",
    },
  ] as FeaturedReadItem[],
  blogUrl: "https://blog.kontour.in/?utm_source=arnavgupta2003.github.io&utm_medium=portfolio&utm_campaign=selfhosted",
};
