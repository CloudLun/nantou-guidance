import { Link } from 'react-router'
import { findSection } from '../data/navigation'
import PageShell from '../components/PageShell'
import { ChevronRight } from '../components/Icons'

/** 有子項目的大項首頁（輔導業務公告、輔導用具） */
export default function SectionIndex({ sectionPath }) {
  const section = findSection(sectionPath)

  return (
    <PageShell title={section.title} lead={section.description}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {section.children.map((c) => (
          <li key={c.path}>
            <Link to={c.path} className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:bg-brand-50">
              <span className="font-bold text-slate-800 group-hover:text-brand-700">{c.title}</span>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-brand-600" />
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
