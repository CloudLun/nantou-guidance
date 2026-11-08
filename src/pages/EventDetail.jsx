import { Link, useParams } from 'react-router'
import { events } from '../content/events'
import PageShell from '../components/PageShell'
import Blocks from '../components/Blocks'
import NotFound from './NotFound'

export default function EventDetail() {
  const { id } = useParams()
  const event = events.find((e) => e.id === id)
  if (!event) return <NotFound />

  return (
    <PageShell title={event.title} extraCrumb={event.title}>
      <dl className="mb-6 flex flex-wrap gap-x-6 gap-y-2 rounded-xl border border-slate-200 bg-white p-4 text-sm">
        <div><dt className="inline text-slate-400">日期：</dt><dd className="inline"><time dateTime={event.date}>{event.date}</time></dd></div>
        <div><dt className="inline text-slate-400">分類：</dt><dd className="inline">{event.category}</dd></div>
        {event.location && <div><dt className="inline text-slate-400">地點：</dt><dd className="inline">{event.location}</dd></div>}
      </dl>
      <Blocks blocks={event.content} />
      <Link to="/events" className="mt-10 inline-block text-sm text-brand-700 hover:underline">← 回活動列表</Link>
    </PageShell>
  )
}
