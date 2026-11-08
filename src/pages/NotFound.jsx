import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-6xl font-bold text-brand-200">404</p>
      <h1 className="mt-4 text-xl font-bold text-slate-800">找不到這個頁面</h1>
      <p className="mt-2 text-slate-500">頁面可能已移除或網址有誤。</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-brand-600 px-5 py-2 text-white hover:bg-brand-700">回首頁</Link>
    </div>
  )
}
