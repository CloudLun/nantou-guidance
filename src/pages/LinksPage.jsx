import { linkGroups } from '../content/links'
import { findSection } from '../data/navigation'
import PageShell from '../components/PageShell'
import { ExternalIcon } from '../components/Icons'

export default function LinksPage() {
  const section = findSection('/links')
  return (
    <PageShell title={section.title} lead={section.description}>
      <div className="space-y-8">
        {linkGroups.map((g) => (
          <section key={g.title}>
            <h2 className="mb-3 text-lg font-bold text-slate-900">{g.title}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {g.links.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-200 hover:bg-brand-50"
                  >
                    <span>
                      <span className="block font-medium text-slate-800 group-hover:text-brand-700">{l.name}</span>
                      {l.description && <span className="mt-1 block text-sm text-slate-500">{l.description}</span>}
                    </span>
                    <ExternalIcon className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                    <span className="sr-only">（另開新視窗）</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  )
}
