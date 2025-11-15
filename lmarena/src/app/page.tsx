import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  Waves,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { StatPulse } from "@/components/StatPulse";

export default function Home() {
  const stats = [
    {
      label: "Live Arenas",
      value: "38",
      caption: "Synchronized venues streaming multi-perspective match feeds.",
    },
    {
      label: "Avg. Uptime",
      value: "99.97%",
      caption: "Redundant control layers and automated recovery protocols.",
    },
    {
      label: "Stream Latency",
      value: "< 1.2s",
      caption: "Edge-optimized CDN and adaptive bitrate orchestration.",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Cinematic Broadcast Modes",
      description:
        "Blend virtual and physical stages with layered overlays, instant replays, and AR-driven player spotlights.",
    },
    {
      icon: BarChart3,
      title: "Match Intelligence",
      description:
        "Real-time analytics pulled from official APIs with predictive momentum scoring and tactical breakdowns.",
    },
    {
      icon: Users,
      title: "Arena Presence Cloud",
      description:
        "Coordinate casting, hosts, and audience engagement across venues with collaborative run-of-show tools.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Control Fabric",
      description:
        "Role-based access, zero-trust tunnels, and automated audit logging keep competitive integrity intact.",
    },
  ];

  const upcomingEvents = [
    {
      name: "Legends Major - Pacific Split",
      date: "May 18, 2025",
      time: "13:00 JST · Hybrid Broadcast",
      location: "Pulse Center · Tokyo",
      prizePool: "$450K USD",
      highlight:
        "12 invited squads, synchronized AR stage reveals, and on-site watch parties in 3 satellite hubs.",
      status: "Open" as const,
    },
    {
      name: "City Circuit Finals",
      date: "June 8, 2025",
      time: "19:30 CET · Arena Feed",
      location: "Aether Dome · Berlin",
      prizePool: "$185K USD",
      highlight:
        "Crowd-reactive lighting system with influencer co-stream integration and VIP analyst suite.",
      status: "Soon" as const,
    },
    {
      name: "Creators Showdown",
      date: "July 2, 2025",
      time: "17:00 PST · Remote",
      location: "Signal Studio · Los Angeles",
      prizePool: "$95K USD",
      highlight:
        "Seasonal invitational with audience voting overlays, live merch drops, and interactive sponsor tunnels.",
      status: "Open" as const,
    },
  ];

  const controlFlow = [
    {
      title: "Sync",
      description:
        "Auto-ingest match lobbies, player stats, and sponsor briefs into a unified run-of-show timeline.",
    },
    {
      title: "Amplify",
      description:
        "Trigger scene macros, lighting presets, and talent cues with millisecond accuracy across venues.",
    },
    {
      title: "Engage",
      description:
        "Blend chat overlays, arena pulse metrics, and in-seat activations into a cohesive broadcast moment.",
    },
    {
      title: "Evolve",
      description:
        "Review post-event insights with heatmaps, retention curves, and automation suggestions.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The latency improvements alone transformed our finals weekend. We ran nine venues in sync with zero drift.",
      name: "Alexis Chan",
      role: "Head of Live Ops · Nova Esports",
    },
    {
      quote:
        "Producers, casters, analysts—everyone works from the same source of truth. The control fabric is unreal.",
      name: "Mateo Ruiz",
      role: "Executive Producer · City Circuit League",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[720px] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_bottom,rgba(79,70,229,0.18),transparent_60%)]" />
      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 ring-2 ring-sky-400/60">
              <Waves className="h-6 w-6 text-sky-300" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
                LMArena
              </p>
              <p className="text-lg font-semibold text-white">
                Live Match Arena Control
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <Link href="#platform" className="transition hover:text-white">
              Platform
            </Link>
            <Link href="#events" className="transition hover:text-white">
              Events
            </Link>
            <Link href="#workflow" className="transition hover:text-white">
              Workflow
            </Link>
            <Link href="#testimonials" className="transition hover:text-white">
              Partners
            </Link>
          </nav>
          <Link
            href="#contact"
            className="hidden rounded-full border border-sky-400/70 px-5 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-400/10 md:inline-flex"
          >
            Book a tour
          </Link>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 lg:px-12">
          <section className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                <Video className="h-4 w-4" />
                Hybrid esports booth
              </span>
              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Orchestrate every arena moment from a single luminous command
                center.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                LMArena unifies tournament production, analytics, and
                engagement. Launch immersive broadcasts, synchronize on-site and
                remote talent, and amplify audience energy across every venue
                you activate.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#events"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500/90 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Explore upcoming events
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#platform"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:text-white"
                >
                  See platform overview
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-[0_40px_120px_-40px_rgba(14,165,233,0.5)]">
              <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
                <ShieldCheck className="h-4 w-4" />
                Synced
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    Control fabric
                  </p>
                  <h2 className="text-2xl font-semibold text-white">
                    Arena Pulse Dashboard
                  </h2>
                </div>
                <dl className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Live feeds
                    </dt>
                    <dd className="mt-2 text-lg font-semibold text-white">
                      12 synced POVs
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Audience energy
                    </dt>
                    <dd className="mt-2 text-lg font-semibold text-white">
                      97% crescendo
                    </dd>
                  </div>
                </dl>
                <div className="rounded-2xl border border-sky-400/40 bg-sky-500/20 p-4 text-sm text-slate-100">
                  <p className="text-xs uppercase tracking-[0.35em] text-sky-200">
                    Smart automation
                  </p>
                  <p className="mt-2 leading-relaxed text-slate-100">
                    Scene macros primed for clutch plays. Lighting cues synced to
                    caster emphasis. Sponsor overlays queued for dynamic breaks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="platform" className="space-y-14">
            <SectionHeader
              eyebrow="Platform"
              title="Purpose-built infrastructure for immersive hybrid arenas."
              description="From remote qualifiers to arena finals, LMArena keeps talent, tech, and audiences aligned. Deploy production-grade pipelines without hiring additional engineers every season."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-[0_20px_70px_-30px_rgba(14,165,233,0.4)] transition hover:border-sky-400/50 hover:bg-slate-900/90"
                >
                  <div className="absolute -right-12 top-6 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl transition group-hover:opacity-80" />
                  <Icon className="h-10 w-10 text-sky-200" />
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatPulse key={stat.label} {...stat} />
            ))}
          </section>

          <section id="events" className="space-y-12">
            <SectionHeader
              eyebrow="Upcoming"
              title="Arena slate · Summer split 2025"
              description="Reserve your slot with production-ready briefs, automation presets, and remote rehearsal blocks baked in."
            />
            <div className="grid gap-8 md:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.name} event={event} />
              ))}
            </div>
          </section>

          <section id="workflow" className="space-y-14">
            <SectionHeader
              eyebrow="Workflow"
              title="A control loop that keeps producers in flow."
              description="Design your perfect broadcast rhythm. LMArena synchronizes field operations, digital overlays, and narrative beats into one continuous pipeline."
            />
            <div className="grid gap-6 md:grid-cols-4">
              {controlFlow.map(({ title, description }, index) => (
                <div
                  key={title}
                  className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-sky-900/40 transition hover:border-sky-400/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                      {`0${index + 1}`}
                    </span>
                    <RadioTower className="h-5 w-5 text-sky-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="testimonials"
            className="grid items-center gap-12 rounded-3xl border border-white/10 bg-slate-900/60 p-10 md:grid-cols-[1fr_1.1fr]"
          >
            <div>
              <SectionHeader
                eyebrow="Partner voices"
                title="Trusted by the teams who redefine the stage."
                description="Top esports leagues rely on LMArena to keep their storytelling, talent pacing, and remote venues in harmony."
                align="left"
              />
            </div>
            <div className="space-y-6">
              {testimonials.map(({ quote, name, role }) => (
                <figure
                  key={name}
                  className="rounded-3xl border border-sky-400/20 bg-slate-950/80 p-6 shadow-lg shadow-sky-900/40"
                >
                  <blockquote className="text-base leading-relaxed text-slate-200">
                    “{quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-slate-400">
                    <span className="font-semibold text-slate-100">{name}</span>{" "}
                    · {role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="relative overflow-hidden rounded-3xl border border-sky-400/40 bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-slate-900/80 p-10 text-slate-100 shadow-[0_45px_120px_-40px_rgba(56,189,248,0.65)]"
          >
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold">
                  Ready to enliven your next arena moment?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">
                  Secure a command studio walkthrough. We’ll tailor an automation
                  stack, content pipeline, and analytics suite to your next live
                  series.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="mailto:hello@lmarena.gg"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  hello@lmarena.gg
                </Link>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-200">
                  Response within 24h
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-12">
            <p>© {new Date().getFullYear()} LMArena Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="transition hover:text-slate-200">
                Terms
              </Link>
              <Link href="#" className="transition hover:text-slate-200">
                Privacy
              </Link>
              <Link href="#" className="transition hover:text-slate-200">
                Status
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
