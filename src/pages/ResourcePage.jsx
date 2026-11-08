import { useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { resources, borrowingInfo } from '../content/resources'
import PageShell from '../components/PageShell'
import { SearchIcon } from '../components/Icons'
import NotFound from './NotFound'

const statusLabel = {
  available: { text: '可借用', cls: 'bg-brand-100 text-brand-700' },
  borrowed: { text: '借出中', cls: 'bg-slate-100 text-slate-500' },
  reference: { text: '館內使用', cls: 'bg-accent-100 text-accent-600' },
}

export default function ResourcePage() {
  const { category } = useParams()
  const data = resources[category]
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState(null)

  // 換分類時重設篩選
  const [lastCategory, setLastCategory] = useState(category)
  if (lastCategory !== category) {
    setLastCategory(category)
    setQuery('')
    setTag(null)
  }

  const tags = useMemo(() => [...new Set(data?.items.flatMap((i) => i.tags ?? []) ?? [])], [data])
  const items = useMemo(() => {
    if (!data) return []
    const q = query.trim().toLowerCase()
    return data.items.filter(
      (i) =>
        (!tag || i.tags?.includes(tag)) &&
        (!q || `${i.name}${i.description}${i.tags?.join('')}`.toLowerCase().includes(q)),
    )
  }, [data, query, tag])

  if (!data) return <NotFound />

  return (
    <PageShell title={data.title} lead={data.description}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">搜尋{data.title}</span>
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜尋名稱、說明或標籤"
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-brand-500 focus:outline-none"
          />
        </label>
      </div>

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="標籤篩選">
          {[null, ...tags].map((t) => (
            <button
              key={t ?? 'all'}
              type="button"
              aria-pressed={tag === t}
              onClick={() => setTag(t)}
              className={`rounded-full px-3 py-1 text-sm ${tag === t ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'}`}
            >
              {t ?? '全部'}
            </button>
          ))}
        </div>
      )}

      <p className="mt-4 text-sm text-slate-500" aria-live="polite">共 {items.length} 項</p>

      <ul className="mt-3 grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const s = statusLabel[item.status] ?? statusLabel.available
          return (
            <li key={item.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-bold text-slate-800">{item.name}</p>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${s.cls}`}>{s.text}</span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{item.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                {item.ages && <span>適用：{item.ages}</span>}
                {item.quantity != null && <span>數量：{item.quantity}</span>}
                {item.tags?.map((t) => <span key={t} className="text-brand-600">#{t}</span>)}
              </div>
            </li>
          )
        })}
      </ul>

      {items.length === 0 && <p className="mt-6 text-center text-slate-400">沒有符合條件的項目</p>}

      <section className="mt-10 rounded-xl bg-brand-50 p-5">
        <h2 className="font-bold text-brand-800">借用說明</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {borrowingInfo.rules.map((r) => <li key={r}>{r}</li>)}
        </ul>
        <p className="mt-2 text-sm text-slate-600">{borrowingInfo.contact}</p>
      </section>
    </PageShell>
  )
}
