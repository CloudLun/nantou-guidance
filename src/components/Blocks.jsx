import { DownloadIcon, ExternalIcon, PhoneIcon } from './Icons'

const calloutTone = {
  info: 'border-sky-200 bg-sky-50 text-sky-900',
  warning: 'border-amber-200 bg-amber-50 text-amber-900',
  danger: 'border-rose-200 bg-rose-50 text-rose-900',
}

function Downloads({ title, items }) {
  return (
    <section>
      {title && <h3 className="mb-3 font-bold text-slate-800">{title}</h3>}
      <ul className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200 bg-white">
        {items.map((d, i) => (
          <li key={i}>
            <a href={d.file} download className="flex items-center gap-4 px-4 py-3 hover:bg-brand-50">
              <span className="grid h-10 w-12 shrink-0 place-items-center rounded-md bg-slate-100 text-xs font-bold text-slate-500">
                {d.format}
              </span>
              <span className="flex-1">
                <span className="block font-medium text-slate-800">{d.name}</span>
                {d.updated && <span className="text-xs text-slate-400">更新：{d.updated}</span>}
              </span>
              <DownloadIcon className="h-5 w-5 text-brand-600" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Contacts({ title, items }) {
  return (
    <section>
      {title && <h3 className="mb-3 font-bold text-slate-800">{title}</h3>}
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((c, i) => {
          const href = c.phone ? `tel:${c.phone}` : c.url
          return (
            <li key={i}>
              <a
                href={href}
                {...(c.url ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-200 hover:bg-brand-50"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 text-brand-700">
                  {c.phone ? <PhoneIcon className="h-5 w-5" /> : <ExternalIcon className="h-5 w-5" />}
                </span>
                <span>
                  <span className="block text-sm text-slate-500">{c.name}</span>
                  <span className="block text-lg font-bold text-slate-900">{c.phone ?? '前往網站'}</span>
                  {c.note && <span className="block text-xs text-slate-400">{c.note}</span>}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="pt-2 text-xl font-bold text-slate-900">{block.text}</h2>
    case 'paragraph':
      return <p className="leading-8">{block.text}</p>
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag className={`space-y-2 pl-6 leading-7 ${block.ordered ? 'list-decimal' : 'list-disc'} marker:text-brand-500`}>
          {block.items.map((t, i) => <li key={i}>{t}</li>)}
        </Tag>
      )
    }
    case 'steps':
      return (
        <ol className="space-y-3">
          {block.items.map((s, i) => (
            <li key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
              <div>
                <p className="font-bold text-slate-800">{s.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <div role="note" className={`rounded-xl border p-4 ${calloutTone[block.tone ?? 'info']}`}>
          {block.title && <p className="font-bold">{block.title}</p>}
          <p className="mt-1 text-sm leading-6">{block.text}</p>
        </div>
      )
    case 'downloads':
      return <Downloads {...block} />
    case 'contacts':
      return <Contacts {...block} />
    default:
      if (import.meta.env.DEV) console.warn('未知的 block type：', block.type)
      return null
  }
}

export default function Blocks({ blocks = [] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => <Block key={i} block={b} />)}
    </div>
  )
}
