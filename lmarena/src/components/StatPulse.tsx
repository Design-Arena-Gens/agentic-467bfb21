type StatPulseProps = {
  label: string;
  value: string;
  caption?: string;
};

export const StatPulse = ({ label, value, caption }: StatPulseProps) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-5 shadow-lg shadow-sky-900/50 transition hover:border-sky-400/60 hover:bg-slate-900/90">
    <div className="absolute -inset-x-6 -top-8 h-24 bg-gradient-to-b from-sky-500/20 via-sky-400/5 to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
      {label}
    </p>
    <p className="mt-3 text-3xl font-bold text-white">{value}</p>
    {caption && <p className="mt-2 text-sm text-slate-300">{caption}</p>}
  </div>
);
