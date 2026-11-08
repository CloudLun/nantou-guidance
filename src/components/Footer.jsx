import { Link } from 'react-router'
import { navigation, site } from '../data/navigation'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-bold text-slate-800">{site.name}</p>
          <dl className="mt-3 space-y-1 text-sm text-slate-500">
            <div><dt className="inline">地址：</dt><dd className="inline">{site.address}</dd></div>
            <div><dt className="inline">電話：</dt><dd className="inline"><a href={`tel:${site.phone}`} className="hover:text-brand-700">{site.phone}</a></dd></div>
            <div><dt className="inline">信箱：</dt><dd className="inline"><a href={`mailto:${site.email}`} className="hover:text-brand-700">{site.email}</a></dd></div>
            <div><dt className="inline">服務時間：</dt><dd className="inline">{site.hours}</dd></div>
          </dl>
        </div>
        <nav aria-label="頁尾選單">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-slate-500 hover:text-brand-700">{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
