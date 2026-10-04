type IconName = "grid" | "layers" | "shield" | "database" | "activity" | "settings" | "arrow" | "check" | "clock" | "lock" | "terminal" | "chevron";

type IconProps = { name: IconName; size?: number; stroke?: number };

function Icon({ name, size = 18, stroke = 1.8 }: IconProps) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths: Record<IconName, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    layers: <><path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" /><path d="m3.5 12 8.5 4.5 8.5-4.5" /><path d="m3.5 16.5 8.5 4.5 8.5-4.5" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.3 2.3 4.8-5" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    activity: <><path d="M3 12h4l2.2-6 4.1 12 2.2-6H21" /></>,
    settings: <><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" /><path d="m19.4 15 .1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 0 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 0 1-2.5-2.5l.1-.1a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 0 1 0-3.6h.2a1.8 1.8 0 0 0 1.3-3.1l-.1-.1a1.8 1.8 0 0 1 2.5-2.5l.1.1a1.8 1.8 0 0 0 3.1-1.3v-.2a1.8 1.8 0 0 1 3.6 0v.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 0 1 2.5 2.5l-.1.1a1.8 1.8 0 0 0 1.3 3.1h.2a1.8 1.8 0 0 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.1Z" /></>,
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4.2 4.2L19 6.5" />,
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    terminal: <><path d="m5 7 5 5-5 5" /><path d="M12 17h7" /></>,
    chevron: <path d="m9 18 6-6-6-6" />
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const moduleGroups = [
  { label: "Identity & trust", count: "05", items: ["auth", "users", "profiles", "verification", "trust"] },
  { label: "Opportunity lifecycle", count: "06", items: ["opportunities", "applications", "matching", "work-management", "attendance", "agreements"] },
  { label: "Community operations", count: "07", items: ["training", "partners", "field-coordination", "notifications", "moderation", "disputes", "audit"] },
  { label: "Platform services", count: "05", items: ["wage-ledger", "payments", "fraud", "analytics", "consent"] }
];

const boundaries = [
  { name: "Authentication & RBAC", status: "Foundation ready", color: "green", icon: "shield" as IconName },
  { name: "Database & migrations", status: "Schema mapped", color: "green", icon: "database" as IconName },
  { name: "API contract", status: "Versioned baseline", color: "green", icon: "terminal" as IconName },
  { name: "Product workflows", status: "Deferred to Part 02", color: "amber", icon: "clock" as IconName }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-sand lg:flex">
      <aside className="hidden w-[246px] shrink-0 flex-col border-r border-ink/10 bg-[#f8f6ef] px-5 py-6 lg:flex">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-moss text-mint shadow-sm"><span className="text-lg font-black">K</span></div>
          <div><p className="font-display text-[17px] font-black tracking-[-0.04em] text-ink">kaamsetu</p><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/45">platform core</p></div>
        </div>
        <div className="mt-12">
          <p className="eyebrow px-3">Workspace</p>
          <nav className="mt-3 space-y-1" aria-label="Primary navigation">
            {([["Foundation", "grid"], ["Architecture", "layers"], ["Security", "shield"], ["Data model", "database"], ["Observability", "activity"]] as Array<[string, IconName]>).map(([label, icon], index) => (
              <a key={label} href={index === 0 ? "#foundation" : `#${label.toLowerCase().replace(" ", "-")}`} className={`focus-ring flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${index === 0 ? "bg-mint text-moss" : "text-ink/55 hover:bg-white hover:text-ink"}`}>
                <Icon name={icon as IconName} size={17} /><span>{label}</span>{index === 0 && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-moss" />}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-auto rounded-2xl bg-moss p-4 text-mint">
          <div className="flex items-start justify-between"><span className="rounded-lg bg-white/10 p-2"><Icon name="settings" size={16} /></span><span className="rounded-full border border-mint/25 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-mint/75">Part 01</span></div>
          <p className="mt-5 text-sm font-bold">Build the trust layer first.</p>
          <p className="mt-1 text-xs leading-5 text-mint/70">The first release makes future modules safer to add.</p>
        </div>
      </aside>

      <section className="min-w-0 flex-1" id="foundation">
        <header className="flex items-center justify-between border-b border-ink/10 bg-sand/90 px-5 py-4 backdrop-blur md:px-10">
          <div className="flex items-center gap-3 lg:hidden"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-moss text-sm font-black text-mint">K</div><span className="font-display font-black tracking-[-0.04em]">kaamsetu</span></div>
          <div className="hidden items-center gap-2 text-xs font-semibold text-ink/45 md:flex"><span>Workspace</span><Icon name="chevron" size={13} /><span className="text-ink/75">Foundation</span></div>
          <div className="ml-auto flex items-center gap-3"><span className="hidden items-center gap-2 text-xs font-semibold text-ink/50 sm:flex"><span className="h-2 w-2 rounded-full bg-[#3aa879]" />Local environment</span><button className="focus-ring rounded-xl border border-ink/10 bg-white px-3 py-2 text-xs font-bold text-ink/70 transition hover:border-moss/30 hover:text-moss">English <span className="ml-1 text-ink/35">âŒ„</span></button><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d7e9df] text-xs font-black text-moss">KS</div></div>
        </header>

        <div className="mx-auto max-w-[1320px] px-5 pb-14 pt-8 md:px-10 md:pt-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="eyebrow">Platform foundation / 01</p><h1 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[1.04] tracking-[-0.06em] text-ink md:text-6xl">A safer way to build <span className="text-moss">local opportunity.</span></h1><p className="mt-5 max-w-xl text-[15px] leading-7 text-ink/60">KaamSetu is laying the systems underneath the marketplace first â€” clear boundaries, accountable data, and a design language built for real people.</p></div>
            <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-ink/10 bg-white px-3 py-2 text-xs font-bold text-ink/55 shadow-sm md:self-end"><span className="h-2 w-2 rounded-full bg-[#3aa879]" />Foundation status <span className="text-moss">On track</span></div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="panel p-5"><div className="flex items-center justify-between"><span className="rounded-xl bg-mint p-2.5 text-moss"><Icon name="layers" /></span><span className="eyebrow">Architecture</span></div><p className="mt-7 text-3xl font-black tracking-[-0.06em]">Modular monolith</p><p className="mt-2 text-sm leading-6 text-ink/55">One deployable system, bounded domains, no premature microservices.</p></div>
            <div className="panel p-5"><div className="flex items-center justify-between"><span className="rounded-xl bg-[#fff0d5] p-2.5 text-[#a96a0e]"><Icon name="shield" /></span><span className="eyebrow text-[#a96a0e]">Security</span></div><p className="mt-7 text-3xl font-black tracking-[-0.06em]">Secure by default</p><p className="mt-2 text-sm leading-6 text-ink/55">RBAC, validation, request IDs, auditability, and privacy boundaries from day one.</p></div>
            <div className="panel p-5"><div className="flex items-center justify-between"><span className="rounded-xl bg-[#e9e5f8] p-2.5 text-[#6658a5]"><Icon name="activity" /></span><span className="eyebrow text-[#6658a5]">Delivery</span></div><p className="mt-7 text-3xl font-black tracking-[-0.06em]">Ready to extend</p><p className="mt-2 text-sm leading-6 text-ink/55">Typed APIs, Prisma schema, tests, and environment strategy prepared for Part 02.</p></div>
          </div>

          <div className="mt-12 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
            <section className="panel overflow-hidden" id="architecture">
              <div className="flex flex-col gap-3 border-b border-ink/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow">Bounded context map</p><h2 className="mt-1 font-display text-xl font-black tracking-[-0.04em]">The system grows in clear directions</h2></div><span className="w-fit rounded-full bg-mint px-3 py-1.5 text-xs font-bold text-moss">30 module boundaries</span></div>
              <div className="grid gap-px bg-ink/10 sm:grid-cols-2">{moduleGroups.map((group) => <div className="bg-white p-6" key={group.label}><div className="flex items-center justify-between"><h3 className="text-sm font-black text-ink">{group.label}</h3><span className="font-mono text-xs font-bold text-ink/35">{group.count}</span></div><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span className="rounded-lg border border-ink/10 bg-[#fcfcfa] px-2.5 py-1.5 font-mono text-[11px] text-ink/60" key={item}>{item}</span>)}</div></div>)}</div>
            </section>

            <section className="panel" id="security"><div className="border-b border-ink/10 px-6 py-5"><p className="eyebrow">Guardrails</p><h2 className="mt-1 font-display text-xl font-black tracking-[-0.04em]">Foundation signals</h2></div><div className="divide-y divide-ink/10">{boundaries.map((item) => <div className="flex items-center gap-3 px-6 py-4" key={item.name}><span className={`rounded-lg p-2 ${item.color === "green" ? "bg-mint text-moss" : "bg-[#fff0d5] text-[#a96a0e]"}`}><Icon name={item.icon} size={16} /></span><div className="min-w-0"><p className="truncate text-sm font-bold text-ink">{item.name}</p><p className={`mt-0.5 text-xs font-semibold ${item.color === "green" ? "text-moss" : "text-[#a96a0e]"}`}>{item.status}</p></div>{item.color === "green" && <Icon name="check" size={16} stroke={2.5} />}</div>)}</div><div className="m-4 rounded-xl bg-[#f8f6ef] p-4"><div className="flex gap-3"><span className="mt-0.5 text-ink/40"><Icon name="lock" size={16} /></span><p className="text-xs leading-5 text-ink/55">Sensitive data stays behind authorized server workflows. Exact worker home coordinates and private contact details are never public.</p></div></div></section>
          </div>

          <section className="mt-8 rounded-panel bg-moss p-6 text-mint shadow-soft md:p-8" id="data-model"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-mint/65">Next boundary</p><h2 className="mt-2 max-w-xl font-display text-3xl font-black leading-tight tracking-[-0.05em]">From foundation to useful work, one trusted layer at a time.</h2><p className="mt-3 max-w-lg text-sm leading-6 text-mint/70">Part 01 deliberately stops before marketplace behavior. The next phase can add opportunities, applications, profiles, and verification without changing the core architecture.</p></div><a href="#architecture" className="focus-ring flex w-fit items-center gap-2 rounded-xl bg-mint px-4 py-3 text-sm font-black text-moss transition hover:bg-white">Review architecture <Icon name="arrow" size={16} /></a></div><div className="mt-8 grid gap-3 border-t border-mint/15 pt-5 text-xs font-semibold text-mint/65 sm:grid-cols-3"><span className="flex items-center gap-2"><Icon name="check" size={15} />Typed contracts</span><span className="flex items-center gap-2"><Icon name="check" size={15} />Privacy-aware data model</span><span className="flex items-center gap-2"><Icon name="check" size={15} />PWA-ready frontend</span></div></section>

          <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-ink/10 pt-5 text-xs text-ink/45 sm:flex-row"><span>KaamSetu foundation Â· Part 01</span><span>Built for clarity, access, and accountable opportunity.</span></footer>
        </div>
      </section>
    </main>
  );
}
