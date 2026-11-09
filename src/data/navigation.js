// 網站基本資訊 —— 請替換為中心實際資料
export const site = {
  name: '南投縣南投市新豐國小學生輔導資源中心',
  shortName: '學生輔導資源中心',
  county: '南投縣',
  address: '台灣南投縣南投市新興里彰南路三段221號',
  phone: '049-000-0000',
  email: 'service@example.edu.tw',
  hours: '週一至週五 08:00–17:00',
}

// 資訊架構：選單、麵包屑、側欄都從這裡產生
export const navigation = [
  {
    title: '輔導業務公告',
    path: '/guidance',
    description: '輔導工作流程、轉介單、紀錄表與危機處理機制。',
    children: [
      { title: '輔導工作流程', path: '/guidance/workflow' },
      { title: '轉介單', path: '/guidance/referral' },
      { title: '紀錄表', path: '/guidance/records' },
      { title: '危機處理機制', path: '/guidance/crisis' },
    ],
  },
  {
    title: '認輔工作',
    path: '/mentoring',
    description: '認輔制度說明、認輔教師職責與相關表單。',
  },
  {
    title: '兒少保護',
    path: '/child-protection',
    description: '責任通報流程、通報管道與保護資源。',
  },
  {
    title: '輔導用具',
    path: '/resources',
    description: '桌遊、雜誌、書籍、影音等輔導資源借用。',
    children: [
      { title: '桌遊類', path: '/resources/board-games' },
      { title: '雜誌類', path: '/resources/magazines' },
      { title: '書籍類', path: '/resources/books' },
      { title: '影音類', path: '/resources/media' },
      { title: '其他', path: '/resources/others' },
    ],
  },
  {
    title: '活動訊息公告',
    path: '/events',
    description: '研習、講座與各項輔導活動訊息。',
  },
  {
    title: '好站連結',
    path: '/links',
    description: '輔導、心理健康與兒少保護相關網站。',
  },
]

/** 依目前路徑找出 [大項, 子項?]，給麵包屑與側欄使用 */
export function findTrail(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'
  for (const section of navigation) {
    if (clean === section.path) return [section]
    const child = section.children?.find((c) => clean === c.path)
    if (child) return [section, child]
    if (clean.startsWith(section.path + '/')) return [section]
  }
  return []
}

export function findSection(path) {
  return navigation.find((s) => s.path === path)
}
