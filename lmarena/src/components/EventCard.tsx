type Event = {
  name: string;
  date: string;
  time: string;
  location: string;
  prizePool: string;
  highlight: string;
  status: "Open" | "Closed" | "Soon";
};

const statusStyles: Record<Event["status"], string> = {
  Open: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50",
  Closed: "bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/40",
  Soon: "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/40",
};

export const EventCard = ({
  event,
}: {
  event: Event;
}) => {
  return (
    <article className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-sky-900/40 backdrop-blur transition hover:border-sky-500/50 hover:bg-slate-900/80">
      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${statusStyles[event.status]}`}
      >
        {event.status}
      </span>
      <div>
        <h3 className="text-xl font-semibold text-white">{event.name}</h3>
        <p className="mt-2 text-sm text-slate-300">{event.highlight}</p>
      </div>
      <dl className="grid grid-cols-2 gap-3 text-xs text-slate-400">
        <div>
          <dt className="font-semibold text-slate-200">Date</dt>
          <dd>{event.date}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-200">Time</dt>
          <dd>{event.time}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-200">Arena</dt>
          <dd>{event.location}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-200">Prize Pool</dt>
          <dd>{event.prizePool}</dd>
        </div>
      </dl>
      <button className="inline-flex items-center justify-center rounded-full bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
        Reserve Slot
      </button>
    </article>
  );
};
