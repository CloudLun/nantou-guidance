import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { navigation, site } from '../data/navigation'
import { ChevronDown, MenuIcon, CloseIcon } from './Icons'

function isInSection(pathname, path) {
  return pathname === path || pathname.startsWith(path + '/')
}

function DesktopItem({ item }) {
  const { pathname } = useLocation()
  const active = isInSection(pathname, item.path)
  const base = 'flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors'
  const tone = active ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'

  if (!item.children) {
    return (
      <li>
        <Link to={item.path} className={`${base} ${tone}`}>
          {item.title}
        </Link>
      </li>
    )
  }

  return (
    <li className="group relative">
      <Link to={item.path} className={`${base} ${tone}`} aria-haspopup="true">
        {item.title}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="min-w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
          {item.children.map((child) => (
            <li key={child.path}>
              <NavLink
                to={child.path}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'}`
                }
              >
                {child.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

function MobileNav() {
  return (
    <nav id="mobile-nav" aria-label="主選單" className="border-t border-slate-200 bg-white lg:hidden">
      <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3">
        {navigation.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 font-medium ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700'}`
              }
            >
              {item.title}
            </NavLink>
            {item.children && (
              <ul className="mb-2 ml-3 border-l border-slate-200 pl-3">
                {item.children.map((child) => (
                  <li key={child.path}>
                    <NavLink
                      to={child.path}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-1.5 text-sm ${isActive ? 'text-brand-700' : 'text-slate-500'}`
                      }
                    >
                      {child.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-lg font-bold text-white">輔</span>
          <span className="leading-tight">
            <span className="block text-xs text-slate-500">{site.county}</span>
            <span className="block font-bold text-slate-800">{site.shortName}</span>
          </span>
        </Link>

        <nav aria-label="主選單" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <DesktopItem key={item.path} item={item} />
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? '關閉選單' : '開啟選單'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {open && <MobileNav />}
    </header>
  )
}
