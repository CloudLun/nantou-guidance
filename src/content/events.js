// 活動訊息公告：新增活動只要在陣列加一筆。id 會成為網址 /events/:id
// content 使用與 pages.js 相同的 blocks 格式
// ⚠️ 以下皆為範例內容。

export const events = [
  {
    id: '2026-11-counselor-workshop',
    title: '115 學年度輔導教師專業知能研習',
    date: '2026-11-20',
    category: '研習',
    location: '本中心研習教室',
    summary: '邀請專家講授校園危機處理實務，歡迎本縣輔導教師報名參加。',
    content: [
      { type: 'paragraph', text: '本研習以校園危機事件處理為主題，透過案例討論強化輔導教師的危機應變能力。' },
      { type: 'list', items: ['時間：2026-11-20（四）09:00–16:00', '對象：本縣國中小輔導教師', '名額：40 名，額滿為止'] },
      { type: 'downloads', items: [{ name: '研習實施計畫', file: '/files/workshop-plan.pdf', format: 'PDF' }] },
    ],
  },
  {
    id: '2026-10-parent-talk',
    title: '親職教育講座：陪孩子面對情緒',
    date: '2026-10-25',
    category: '講座',
    location: '線上（Google Meet）',
    summary: '針對家長辦理的線上講座，分享陪伴孩子處理情緒的方法。',
    content: [{ type: 'paragraph', text: '講座錄影將於活動結束後提供給報名者觀看。' }],
  },
  {
    id: '2026-09-mentoring-recruit',
    title: '115 學年度認輔志工招募',
    date: '2026-09-10',
    category: '公告',
    summary: '招募熱心人士擔任認輔志工，陪伴需要關懷的學生。',
    content: [{ type: 'paragraph', text: '有意願者請填寫報名表，經面談與培訓後投入服務。' }],
  },
]

export const sortedEvents = [...events].sort((a, b) => b.date.localeCompare(a.date))
export const eventCategories = [...new Set(events.map((e) => e.category))]
