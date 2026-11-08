import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import SectionIndex from './pages/SectionIndex'
import ContentPage from './pages/ContentPage'
import ResourcePage from './pages/ResourcePage'
import EventsPage from './pages/EventsPage'
import EventDetail from './pages/EventDetail'
import LinksPage from './pages/LinksPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        {/* 1. 輔導業務公告 */}
        <Route path="guidance" element={<SectionIndex sectionPath="/guidance" />} />
        <Route path="guidance/:slug" element={<ContentPage />} />

        {/* 2. 認輔工作 / 3. 兒少保護 */}
        <Route path="mentoring" element={<ContentPage />} />
        <Route path="child-protection" element={<ContentPage />} />

        {/* 4. 輔導用具 */}
        <Route path="resources" element={<SectionIndex sectionPath="/resources" />} />
        <Route path="resources/:category" element={<ResourcePage />} />

        {/* 5. 活動訊息公告 */}
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:id" element={<EventDetail />} />

        {/* 6. 好站連結 */}
        <Route path="links" element={<LinksPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
