import { Link } from 'react-router'

export default function EventCard({ event }) {
  const [y, m, d] = event.date.split('-')
  return (
    <Link
      to={`/events/${event.id}`}
      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-200 hover:shadow-sm"
    >
      <time dateTime={event.date} className="flex w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-brand-50 py-2 text-brand-700">
        <span className="text-xs">{y}</span>
        <span className="text-lg font-bold leading-tight">{m}/{d}</span>
      </time>
      <div className="min-w-0">
        <span className="inline-block rounded-full bg-accent-100 px-2 py-0.5 text-xs font-medium text-accent-600">{event.category}</span>
        <p className="mt-1 font-bold text-slate-800">{event.title}</p>
        <p className="mt-1 line-clamp-2 text-sm text-slate-500">{event.summary}</p>
      </div>
    </Link>
  )
}
