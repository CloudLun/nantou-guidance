import { Link } from 'react-router'
import { navigation, site } from '../data/navigation'
import { sortedEvents } from '../content/events'
import EventCard from '../components/EventCard'
import { ChevronRight } from '../components/Icons'

const quickLinks = [
  { title: '下載轉介單', path: '/guidance/referral' },
  { title: '危機處理機制', path: '/guidance/crisis' },
  { title: '兒少保護通報', path: '/child-protection' },
  { title: '借用輔導用具', path: '/resources' },
]

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-brand-200">{site.county}</p>
          <h1 className="mt-2 text-3xl font-bold md:text-5xl">{site.shortName}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            整合縣內輔導資源，支持學校推動三級輔導工作，陪伴每一位學生安心成長。
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {quickLinks.map((q) => (
              <li key={q.path}>
                <Link to={q.path} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/20 hover:bg-white/20">
                  {q.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>


      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_380px]">
        <section aria-labelledby="services">
          <h2 id="services" className="text-xl font-bold text-slate-900">服務項目</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {navigation.map((item, i) => (
              <li key={item.path}>
                <Link to={item.path} className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-sm">
                  <span className="text-sm font-bold text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mt-1 font-bold text-slate-800 group-hover:text-brand-700">{item.title}</span>
                  <span className="mt-1 text-sm text-slate-500">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="latest">
          <div className="flex items-baseline justify-between">
            <h2 id="latest" className="text-xl font-bold text-slate-900">活動訊息</h2>
            <Link to="/events" className="text-sm text-brand-700 hover:underline">看全部</Link>
          </div>
          <ul className="mt-4 space-y-3">
            {sortedEvents.slice(0, 3).map((e) => (
              <li key={e.id}><EventCard event={e} /></li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
