import { useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { resources, borrowingInfo } from '../content/resources'
import PageShell from '../components/PageShell'
import { SearchIcon } from '../components/Icons'
import NotFound from './NotFound'

function ItemImage({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-slate-100 text-sm text-slate-400">
        尚無照片
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
    />
  )
}

export default function ResourcePage() {
  const { category } = useParams()
  const data = resources[category]
  const [query, setQuery] = useState('')

  // 換分類時清空搜尋
  const [lastCategory, setLastCategory] = useState(category)
  if (lastCategory !== category) {
    setLastCategory(category)
    setQuery('')
  }

  const items = useMemo(() => {
    if (!data) return []
    const q = query.trim().toLowerCase()
    if (!q) return data.items
    return data.items.filter((i) => `${i.name} ${i.code ?? ''}`.toLowerCase().includes(q))
  }, [data, query])

  if (!data) return <NotFound />

  return (
    <PageShell title={data.title}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative sm:w-72">
          <span className="sr-only">搜尋{data.title}</span>
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜尋品名或編號"
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-brand-600 focus:outline-none"
          />
        </label>
        <p className="text-sm text-slate-500" aria-live="polite">共 {items.length} 項</p>
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <li key={item.code ?? item.name} className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-brand-200 hover:shadow-md">
            <div className="relative aspect-square overflow-hidden bg-white">
              <ItemImage src={item.image} alt={item.name} />
              {item.code && (
                <span className="absolute left-2 top-2 rounded-md bg-white/90 px-2 py-0.5 font-mono text-xs text-slate-500 ring-1 ring-slate-200">
                  {item.code}
                </span>
              )}
            </div>
            <div className="border-t border-slate-100 p-3">
              <p className="font-bold leading-snug text-slate-800">{item.name}</p>
              <div className="mt-1 flex items-center justify-between gap-2 text-sm">
                <span className="text-slate-500">數量 {item.quantity ?? '—'}</span>
                {item.note && <span className="truncate text-xs text-accent-600" title={item.note}>{item.note}</span>}
              </div>
            </div>
          </li>
        ))}
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