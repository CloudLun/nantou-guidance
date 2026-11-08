import { useState } from 'react'
import { sortedEvents, eventCategories } from '../content/events'
import { findSection } from '../data/navigation'
import PageShell from '../components/PageShell'
import EventCard from '../components/EventCard'

export default function EventsPage() {
  const section = findSection('/events')
  const [category, setCategory] = useState(null)
  const list = category ? sortedEvents.filter((e) => e.category === category) : sortedEvents

  return (
    <PageShell title={section.title} lead={section.description}>
      <div className="flex flex-wrap gap-2" role="group" aria-label="分類篩選">
        {[null, ...eventCategories].map((c) => (
          <button
            key={c ?? 'all'}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-3 py-1 text-sm ${category === c ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'}`}
          >
            {c ?? '全部'}
          </button>
        ))}
      </div>
      <ul className="mt-6 space-y-3">
        {list.map((e) => (
          <li key={e.id}><EventCard event={e} /></li>
        ))}
      </ul>
    </PageShell>
  )
}
