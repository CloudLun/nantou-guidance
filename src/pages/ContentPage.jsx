import { useLocation } from 'react-router'
import { pages } from '../content/pages'
import PageShell from '../components/PageShell'
import Blocks from '../components/Blocks'
import NotFound from './NotFound'

export default function ContentPage() {
  const { pathname } = useLocation()
  const page = pages[pathname.replace(/\/+$/, '')]
  if (!page) return <NotFound />

  return (
    <PageShell title={page.title} lead={page.lead}>
      <Blocks blocks={page.blocks} />
    </PageShell>
  )
}
