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
  headline: "Software Engineer @ Google Search (Agentic Workflows) · Ex-CTO · Systems Security",
  location: "Bangalore, India",
  statusBadge: "At NeurIPS — Open for 15-min coffee chats",
  bio: "Software Engineer at Google working on Agentic Workflows for Google Search (Core Search & AIM Engineering), and former Fractional/Silent CTO focused on production AI systems, high-reliability infrastructure recovery (4-9s SLA), applied systems security, and self-hosted agentic infrastructure.",
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
      detail: "Deep architecture & pipeline recovery",
    },
    {
      label: "Security Footprint",
      value: "800+ Trained",
      detail: "Cyber consulting & IIT Guwahati CTFs",
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
        "Leading end-to-end full-stack feature development, technical optimizations, and scalable AI infrastructure.",
        "SWE Intern (May 2024 – Aug 2024): Improved local categorical rankings for mixed-language queries by closing classifier score gaps and integrating an NLP query classifier into the local web triggering pipeline.",
      ],
      tags: ["Agentic Workflows", "Google Search", "LLMs", "Ranking Systems", "AI Infra"],
    },
    {
      company: "Bizad",
      role: "Silent Chief Technology Officer (CTO)",
      period: "2023 – 2025",
      location: "Remote",
      badge: "Leadership",
      highlights: [
        "Formulated stealth-mode product roadmaps, foundational architecture, and scalable infrastructure for rapid deployment and agile market delivery prior to joining Google.",
      ],
      tags: ["System Architecture", "Product Strategy", "Cloud Infra"],
    },
    {
      company: "AccioJob",
      role: "Lead Consultant – Cybersecurity",
      period: "Apr 2024 – Dec 2025",
      location: "New Delhi, India",
      badge: "Advisory",
      highlights: [
        "Directed security consulting operations, risk mitigation frameworks, and technical training across 800+ individuals.",
        "Designed production-grade Capture The Flag (CTF) challenges and delivered elite cybersecurity courses for IIT Guwahati professors.",
      ],
      tags: ["Cybersecurity", "CTF Design", "Risk Frameworks", "Training"],
    },
    {
      company: "ScrapUncle",
      role: "Chief Technology Officer (CTO)",
      period: "Mar 2024 – Dec 2024",
      location: "New Delhi, India",
      badge: "Executive",
      highlights: [
        "Re-engineered an unstable, bleeding-edge infrastructure stack to achieve resilient SLA stability.",
        "Eliminated severe architectural and database pipeline bottlenecks causing raw data ingress loss, introducing fault-tolerant recovery loops.",
      ],
      tags: ["Infra Recovery", "Database Pipelines", "Fault Tolerance", "SRE"],
    },
  ] as ExperienceItem[],
  research: [
    {
      title: "Android Side-Channel Malware & Input Reconstruction",
      org: "Networking & Security Lab, IIITD",
      period: "Jun 2023 – 2025",
      advisor: "Dr. Sambuddho Chakravarty",
      summary:
        "Investigated kernel-level side-channel vulnerabilities for end-to-end data extraction, fingerprinted kernel behavior, and applied ML models for high-precision keyboard snooping and input reconstruction.",
      tags: ["Android Internals", "Side-Channels", "Applied ML", "Systems Security"],
    },
    {
      title: "VPN Traffic Identification & ISP-Adversary Evasion",
      org: "Networking & Security Lab, IIITD",
      period: "Jun 2023 – 2025",
      advisor: "Dr. Sambuddho Chakravarty",
      summary:
        "Evaluated VPN protocol fingerprinting under ISP-level adversary models and engineered novel evasion techniques using packet-size manipulation, SNI poisoning, and MTU tuning.",
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
