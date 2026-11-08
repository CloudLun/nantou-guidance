import { Link, NavLink, useLocation } from 'react-router'
import { findTrail } from '../data/navigation'
import { ChevronRight } from './Icons'

/**
 * 內頁共用外框：麵包屑 + 標題 + （若該大項有子項）側欄
 * extraCrumb：例如活動詳細頁要多一層標題
 */
export default function PageShell({ title, lead, extraCrumb, children }) {
  const { pathname } = useLocation()
  const [section, child] = findTrail(pathname)
  const crumbs = [
    { title: '首頁', path: '/' },
    ...(section ? [{ title: section.title, path: section.path }] : []),
    ...(child ? [{ title: child.title, path: child.path }] : []),
    ...(extraCrumb ? [{ title: extraCrumb }] : []),
  ]
  const hasSidebar = section?.children?.length > 0

  return (
    <>
      <div className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
          <nav aria-label="麵包屑">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1
                return (
                  <li key={i} className="flex items-center gap-1">
                    {last || !c.path ? (
                      <span aria-current={last ? 'page' : undefined} className="text-slate-700">{c.title}</span>
                    ) : (
                      <Link to={c.path} className="hover:text-brand-700">{c.title}</Link>
                    )}
                    {!last && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
                  </li>
                )
              })}
            </ol>
          </nav>
          <h1 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">{title}</h1>
          {lead && <p className="mt-2 max-w-3xl text-slate-600">{lead}</p>}
        </div>
      </div>

      <div className={`mx-auto max-w-6xl px-4 py-8 ${hasSidebar ? 'grid gap-8 md:grid-cols-[220px_1fr]' : ''}`}>
        {hasSidebar && (
          <aside>
            <nav aria-label={`${section.title}子選單`} className="md:sticky md:top-24">
              <p className="mb-2 px-3 text-xs font-medium tracking-wider text-slate-400">{section.title}</p>
              <ul className="flex gap-1 overflow-x-auto md:flex-col">
                {section.children.map((c) => (
                  <li key={c.path} className="shrink-0">
                    <NavLink
                      to={c.path}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-sm ${
                          isActive ? 'bg-brand-600 font-medium text-white' : 'text-slate-600 hover:bg-slate-100'
                        }`
                      }
                    >
                      {c.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
        <div className="min-w-0">{children}</div>
      </div>
    </>
  )
}
