"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Briefcase,
  ShieldCheck,
  Server,
  Mail,
  Calendar,
  Download,
  Copy,
  Check,
  Menu,
  X,
  ArrowUpRight,
  Send,
  GraduationCap,
  MapPin,
  BookOpen,
  QrCode,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { PROFILE } from "@/data/profile";

type TabId = "overview" | "experience" | "research" | "selfhosted" | "connect";

const NAV_ITEMS: { id: TabId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "research", label: "Research & Security", icon: ShieldCheck },
  { id: "selfhosted", label: "Self-Hosted", icon: Server },
  { id: "connect", label: "Connect", icon: Mail },
];

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${PROFILE.name}`,
    `N:Gupta;Arnav;;;`,
    "ORG:Google (Core Search & AIM)",
    "TITLE:Software Engineer",
    `EMAIL;TYPE=INTERNET:${PROFILE.email}`,
    `URL:${PROFILE.socials.linkedin}`,
    "NOTE:Met at NeurIPS / Personal Engineering Dashboard",
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Arnav_Gupta.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedQr, setCopiedQr] = useState(false);

  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [metAtNeurips, setMetAtNeurips] = useState(true);
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error";
    text: string;
  }>({ type: "idle", text: "" });

  function selectTab(tab: TabId) {
    setActiveTab(tab);
    setMobileNavOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }

  async function handleCopyQrLink() {
    try {
      await navigator.clipboard.writeText(PROFILE.qrUrl);
      setCopiedQr(true);
      setTimeout(() => setCopiedQr(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  }

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitState({ type: "idle", text: "" });

    try {
      const res = await fetch(PROFILE.contactWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          metAtNeurips,
          website,
          source: "github-pages-dashboard",
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok === false) {
        throw new Error(data.message || "Could not send message. Please try emailing directly.");
      }

      setSubmitState({
        type: "success",
        text: data.message || "Sent! Arnav got your ping on Slack and will reply soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setSubmitState({
        type: "error",
        text: err instanceof Error ? err.message : "Network error — please try emailing directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const SidebarContent = (
    <div className="flex h-full flex-col justify-between p-4">
      <div>
        <div className="mb-6 flex items-center gap-3 px-2 pt-1">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 font-mono-code text-sm font-semibold text-zinc-100">
            AG
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-zinc-100">{PROFILE.name}</p>
            <p className="truncate text-xs text-zinc-400">SWE · Systems · Security</p>
          </div>
        </div>

        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => selectTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  active
                    ? "bg-zinc-800/90 text-zinc-50"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="space-y-2 border-t border-zinc-800/80 pt-4">
        <button
          onClick={downloadVCard}
          className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
        >
          <Download className="h-3.5 w-3.5" />
          Save Contact (.vcf)
        </button>
        <a
          href={PROFILE.calComUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
        >
          <Calendar className="h-3.5 w-3.5" />
          15-min Coffee Chat
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      {/* Mobile Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-zinc-800/80 bg-[#09090b]/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 font-mono-code text-xs font-semibold">
            AG
          </div>
          <span className="text-sm font-semibold">{PROFILE.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => selectTab("connect")}
            className="rounded-md bg-zinc-100 px-2.5 py-1.5 text-xs font-semibold text-zinc-950"
          >
            Connect
          </button>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation"
            className="rounded-md border border-zinc-800 p-1.5 text-zinc-300"
          >
            {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 border-r border-zinc-800 bg-[#09090b]">{SidebarContent}</div>
          <div
            className="flex-1 bg-black/60"
            onClick={() => setMobileNavOpen(false)}
          />
        </div>
      )}

      <div className="mx-auto flex max-w-6xl">
        {/* Desktop Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-60 shrink-0 border-r border-zinc-800/80 md:block">
          {SidebarContent}
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-8">
          {/* Status Banner */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-zinc-800/90 bg-zinc-900/50 px-4 py-2.5">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-medium text-zinc-200">{PROFILE.statusBadge}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <span className="font-mono-code text-[11px] text-zinc-500">
                Updated {PROFILE.lastUpdated}
              </span>
              <span className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>{PROFILE.location}</span>
              </div>
            </div>
          </div>

          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <section className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-6">
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                  {PROFILE.name}
                </h1>
                <p className="mt-1.5 text-sm font-medium text-zinc-400">{PROFILE.headline}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  {PROFILE.bio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <button
                    onClick={() => selectTab("connect")}
                    className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Message / Connect
                  </button>
                  <a
                    href={PROFILE.calComUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-100 transition-colors hover:bg-zinc-800"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Book 15-min Coffee
                  </a>
                  <button
                    onClick={downloadVCard}
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Save Contact
                  </button>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
                  >
                    {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    {copiedEmail ? "Email Copied" : "Copy Email"}
                  </button>
                </div>
              </section>

              {/* KPI Grid */}
              <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {PROFILE.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-4"
                  >
                    <p className="text-xs font-medium text-zinc-400">{kpi.label}</p>
                    <p className="mt-1.5 font-mono-code text-lg font-semibold text-zinc-100">
                      {kpi.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{kpi.detail}</p>
                  </div>
                ))}
              </section>

              {/* Compact Summary Cards */}
              <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-zinc-100">Recent Roles</h2>
                    <button
                      onClick={() => selectTab("experience")}
                      className="text-xs text-zinc-400 hover:text-zinc-200"
                    >
                      View all →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {PROFILE.experience.map((exp) => (
                      <div
                        key={`${exp.company}-${exp.role}`}
                        className="flex items-start justify-between gap-3 border-b border-zinc-800/60 pb-3 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="text-sm font-medium text-zinc-100">{exp.company}</p>
                          <p className="text-xs text-zinc-400">{exp.role}</p>
                        </div>
                        <span className="shrink-0 font-mono-code text-[11px] text-zinc-500">
                          {exp.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-zinc-100">Self-Hosted Stack</h2>
                    <button
                      onClick={() => selectTab("selfhosted")}
                      className="text-xs text-zinc-400 hover:text-zinc-200"
                    >
                      Explore →
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {PROFILE.selfHosted.map((app) => (
                      <div
                        key={app.name}
                        className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-zinc-200">{app.name}</span>
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              app.status === "Active" ? "bg-emerald-400" : "bg-amber-400"
                            }`}
                          />
                        </div>
                        <p className="mt-1 text-[11px] text-zinc-500">{app.category}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              <div>
                <h1 className="text-xl font-semibold text-zinc-50">Work Experience</h1>
                <p className="mt-1 text-sm text-zinc-400">
                  Large-scale AI search systems, resilient backend infrastructure, and applied cybersecurity.
                </p>
              </div>
              <div className="space-y-4">
                {PROFILE.experience.map((exp) => (
                  <article
                    key={`${exp.company}-${exp.period}`}
                    className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-base font-semibold text-zinc-100">{exp.company}</h2>
                          <span className="rounded border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 font-mono-code text-[10px] text-zinc-300">
                            {exp.badge}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-zinc-300">{exp.role}</p>
                      </div>
                      <div className="text-right font-mono-code text-xs text-zinc-400">
                        <p>{exp.period}</p>
                        <p className="text-zinc-500">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="mt-3.5 space-y-2 text-sm leading-relaxed text-zinc-300">
                      {exp.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono-code text-[11px] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* RESEARCH & SECURITY TAB */}
          {activeTab === "research" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-semibold text-zinc-50">Research & Security</h1>
                <p className="mt-1 text-sm text-zinc-400">
                  Academic security research at IIITD and applied systems foundations.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {PROFILE.research.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5"
                  >
                    <p className="font-mono-code text-[11px] text-zinc-400">{item.period}</p>
                    <h2 className="mt-1 text-base font-semibold text-zinc-100">{item.title}</h2>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      {item.org}
                      {item.advisor ? ` · Advisor: ${item.advisor}` : ""}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.summary}</p>
                    {item.links && item.links.length > 0 && (
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        {item.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700/80 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                          </a>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono-code text-[11px] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              {/* Education */}
              <section className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg border border-zinc-800 bg-zinc-950 p-2">
                      <GraduationCap className="h-4 w-4 text-zinc-300" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-zinc-100">
                        {PROFILE.education.institution}
                      </h2>
                      <p className="text-sm text-zinc-300">{PROFILE.education.degree}</p>
                    </div>
                  </div>
                  <div className="text-right font-mono-code text-xs text-zinc-400">
                    <p>{PROFILE.education.period}</p>
                    <p className="text-zinc-500">CGPA: {PROFILE.education.cgpa}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {PROFILE.education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* SELF-HOSTED TAB */}
          {activeTab === "selfhosted" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-semibold text-zinc-50">Self-Hosted Stack</h1>
                <p className="mt-1 text-sm text-zinc-400">
                  Services I run across my homelab and VPS fleet — including the n8n workflow behind
                  this site&apos;s Connect form.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {PROFILE.selfHosted.map((app) => (
                  <div
                    key={app.name}
                    className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-semibold text-zinc-100">{app.name}</h2>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono-code text-[10px] ${
                          app.status === "Active"
                            ? "border-emerald-900/80 bg-emerald-950/50 text-emerald-300"
                            : "border-amber-900/80 bg-amber-950/50 text-amber-300"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            app.status === "Active" ? "bg-emerald-400" : "bg-amber-400"
                          }`}
                        />
                        {app.status}
                      </span>
                    </div>
                    <p className="mt-1 font-mono-code text-[11px] text-zinc-500">{app.category}</p>
                    <p className="mt-2.5 text-xs leading-relaxed text-zinc-300">
                      {app.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Featured Reads from ARSphere (blog.kontour.in) */}
              <section className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-zinc-400" />
                    <h2 className="text-base font-semibold text-zinc-100">
                      Featured Reads on ARSphere
                    </h2>
                  </div>
                  <a
                    href={PROFILE.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    <span>blog.kontour.in</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                  {PROFILE.featuredReads.map((post) => (
                    <a
                      key={post.url}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono-code text-[10px] text-zinc-400">
                            {post.category}
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-200" />
                        </div>
                        <h3 className="mt-2.5 text-sm font-semibold leading-snug text-zinc-100 group-hover:text-white">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                          {post.summary}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* CONNECT TAB */}
          {activeTab === "connect" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl font-semibold text-zinc-50">Connect</h1>
                <p className="mt-1 text-sm text-zinc-400">
                  Met at NeurIPS, want to talk LLMs / infra / security, or grab a quick coffee?
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
                {/* n8n -> Slack Form */}
                <form
                  onSubmit={handleContactSubmit}
                  className="space-y-4 rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 lg:col-span-3"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-zinc-100">Drop a Quick Message</h2>
                    <span className="font-mono-code text-[11px] text-zinc-500">
                      n8n → Slack inbox
                    </span>
                  </div>

                  {/* Hidden honeypot for spam bots */}
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-zinc-300">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={120}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-zinc-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-zinc-300">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={160}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-zinc-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-300">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      maxLength={2000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What are you working on? Let's connect..."
                      className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-zinc-600 focus:outline-none"
                    />
                  </div>

                  <label className="flex cursor-pointer items-center gap-2.5 text-xs text-zinc-300">
                    <input
                      type="checkbox"
                      checked={metAtNeurips}
                      onChange={(e) => setMetAtNeurips(e.target.checked)}
                      className="h-4 w-4 rounded border-zinc-700 bg-zinc-950 accent-zinc-100"
                    />
                    <span>We met at NeurIPS (tags your ping with high priority)</span>
                  </label>

                  {submitState.type !== "idle" && (
                    <div
                      className={`rounded-md border px-3 py-2 text-xs ${
                        submitState.type === "success"
                          ? "border-emerald-900 bg-emerald-950/60 text-emerald-300"
                          : "border-red-900 bg-red-950/60 text-red-300"
                      }`}
                    >
                      {submitState.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 disabled:opacity-50 sm:w-auto"
                  >
                    <Send className="h-3.5 w-3.5" />
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>

                {/* Quick Actions Column */}
                <div className="space-y-4 lg:col-span-2">
                  <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5">
                    <h2 className="text-sm font-semibold text-zinc-100">Coffee &amp; Deep-Dive Chats</h2>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                      Grab a quick slot during NeurIPS or online to talk AI systems, engineering, or
                      security.
                    </p>
                    <div className="mt-4 flex flex-col gap-2">
                      <a
                        href={PROFILE.calComUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        15-min Coffee Chat
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={PROFILE.calCom30Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-3.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        30-min Deep Dive
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5">
                    <h2 className="text-sm font-semibold text-zinc-100">Direct Links</h2>
                    <div className="mt-3 space-y-2">
                      <button
                        onClick={downloadVCard}
                        className="flex w-full items-center justify-between rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-200 hover:border-zinc-700"
                      >
                        <span>Save Contact Card (.vcf)</span>
                        <Download className="h-3.5 w-3.5 text-zinc-400" />
                      </button>
                      <button
                        onClick={handleCopyEmail}
                        className="flex w-full items-center justify-between rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-200 hover:border-zinc-700"
                      >
                        <span className="truncate">{PROFILE.email}</span>
                        {copiedEmail ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 text-zinc-400" />
                        )}
                      </button>
                      <a
                        href={PROFILE.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-between rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-200 hover:border-zinc-700"
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                      </a>
                      <a
                        href={PROFILE.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-between rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-200 hover:border-zinc-700"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                      </a>
                      <a
                        href={PROFILE.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-between rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-200 hover:border-zinc-700"
                      >
                        <span>X (Twitter)</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                      </a>
                    </div>
                  </div>

                  {/* QR Code Card */}
                  <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <QrCode className="h-4 w-4 text-zinc-400" />
                        <h2 className="text-sm font-semibold text-zinc-100">Share Portfolio</h2>
                      </div>
                      <span className="font-mono-code text-[10px] text-zinc-500">utm_source=qr</span>
                    </div>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="shrink-0 rounded-lg bg-white p-2">
                        <QRCodeSVG value={PROFILE.qrUrl} size={96} level="M" />
                      </div>
                      <div className="min-w-0 space-y-2">
                        <p className="text-xs leading-relaxed text-zinc-400">
                          Scan to open this dashboard on mobile with QR attribution.
                        </p>
                        <button
                          onClick={handleCopyQrLink}
                          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-xs text-zinc-200 hover:border-zinc-700"
                        >
                          {copiedQr ? (
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="h-3.5 w-3.5 text-zinc-400" />
                          )}
                          <span>{copiedQr ? "Link Copied" : "Copy QR URL"}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
