// 一般內容頁：以「路徑」為 key，內容用 blocks 組成。
// 可用的 block type：heading / paragraph / list / steps / callout / downloads / contacts
// ⚠️ 以下皆為範例內容，請替換為中心實際資料。
// 表單檔案請放在 public/files/，file 欄位寫 /files/檔名

export const pages = {
  '/guidance/workflow': {
    title: '輔導工作流程',
    lead: '依《學生輔導法》三級輔導架構，說明學校輔導工作的分工與流程。',
    blocks: [
      { type: 'heading', text: '三級輔導架構' },
      {
        type: 'steps',
        items: [
          {
            title: '發展性輔導',
            description: '針對全體學生，透過班級經營、生命教育、生涯輔導等活動，促進學生身心健康發展。',
          },
          {
            title: '介入性輔導',
            description: '針對經發展性輔導仍無法有效適應的學生，由輔導教師進行個別或團體諮商、個案管理。',
          },
          {
            title: '處遇性輔導',
            description: '針對偏差行為或嚴重適應困難的學生，結合專業輔導人員、社政、醫療等資源進行處遇。',
          },
        ],
      },
      { type: 'heading', text: '轉介至本中心流程' },
      {
        type: 'list',
        ordered: true,
        items: [
          '學校評估學生需求，確認校內介入性輔導已執行。',
          '填寫轉介單並經學校輔導主任核章。',
          '以公文或電子郵件送交本中心。',
          '本中心受理後進行派案，並於期限內回覆學校。',
          '結案後提供結案報告予學校。',
        ],
      },
      {
        type: 'downloads',
        title: '相關文件',
        items: [{ name: '輔導工作流程圖', file: '/files/workflow.pdf', format: 'PDF', updated: '2026-09-01' }],
      },
    ],
  },

  '/guidance/referral': {
    title: '轉介單',
    lead: '學校轉介學生至本中心時使用的表單與注意事項。',
    blocks: [
      {
        type: 'callout',
        tone: 'info',
        title: '填寫前請先確認',
        text: '轉介前請確認校內已完成介入性輔導，並取得家長／監護人知情同意。',
      },
      {
        type: 'downloads',
        title: '表單下載',
        items: [
          { name: '學生轉介單', file: '/files/referral-form.docx', format: 'DOCX', updated: '2026-09-01' },
          { name: '學生轉介單', file: '/files/referral-form.pdf', format: 'PDF', updated: '2026-09-01' },
          { name: '家長同意書', file: '/files/consent-form.pdf', format: 'PDF', updated: '2026-09-01' },
        ],
      },
      { type: 'heading', text: '送件方式' },
      { type: 'paragraph', text: '紙本請以公文送達；電子檔請寄至中心信箱，主旨註明「轉介－學校名稱－學生代號」。' },
    ],
  },

  '/guidance/records': {
    title: '紀錄表',
    lead: '輔導過程中常用的各類紀錄表單。',
    blocks: [
      {
        type: 'downloads',
        items: [
          { name: '個別輔導紀錄表', file: '/files/individual-record.docx', format: 'DOCX', updated: '2026-09-01' },
          { name: '團體輔導紀錄表', file: '/files/group-record.docx', format: 'DOCX', updated: '2026-09-01' },
          { name: '親師聯繫紀錄表', file: '/files/parent-contact.docx', format: 'DOCX', updated: '2026-09-01' },
          { name: '個案結案報告', file: '/files/closing-report.docx', format: 'DOCX', updated: '2026-09-01' },
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: '資料保密',
        text: '紀錄表內含學生個人資料，請依個人資料保護法妥善保存，勿以未加密方式傳送。',
      },
    ],
  },

  '/guidance/crisis': {
    title: '危機處理機制',
    lead: '校園發生學生危機事件時的處理步驟與聯絡窗口。',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        title: '緊急狀況請先確保人身安全',
        text: '如有立即危險，請先撥打 110（警察）或 119（消防／救護）。',
      },
      { type: 'heading', text: '處理步驟' },
      {
        type: 'steps',
        items: [
          { title: '立即處置', description: '確保學生與現場人員安全，必要時送醫並通知家長。' },
          { title: '通報', description: '依規定完成校安通報，涉及兒少保護者須於 24 小時內完成責任通報。' },
          { title: '啟動危機小組', description: '學校召開危機處理小組會議，分工處理後續事宜。' },
          { title: '聯繫本中心', description: '需要專業輔導人員協助時，請聯繫本中心申請入校支援。' },
          { title: '後續追蹤', description: '對當事人及受影響師生進行持續關懷與輔導。' },
        ],
      },
      {
        type: 'contacts',
        title: '緊急聯絡資源',
        items: [
          { name: '保護專線', phone: '113', note: '兒少保護、家庭暴力、性侵害' },
          { name: '安心專線', phone: '1925', note: '24 小時心理諮詢' },
          { name: '生命線', phone: '1995', note: '24 小時協談' },
          { name: '張老師專線', phone: '1980', note: '心理協談' },
        ],
      },
    ],
  },

  '/mentoring': {
    title: '認輔工作',
    lead: '結合學校教職員與社會資源，對適應困難學生提供一對一的陪伴與關懷。',
    blocks: [
      { type: 'heading', text: '認輔對象' },
      {
        type: 'list',
        items: ['家庭功能不彰或遭遇變故之學生', '學習適應困難之學生', '人際關係或情緒困擾之學生', '經學校評估需要長期陪伴之學生'],
      },
      { type: 'heading', text: '認輔教師職責' },
      {
        type: 'list',
        items: ['定期與認輔學生晤談或陪伴', '記錄認輔過程並回報輔導處室', '參加認輔相關研習與個案研討', '必要時協助轉介專業資源'],
      },
      {
        type: 'downloads',
        title: '認輔相關表單',
        items: [
          { name: '認輔學生名冊', file: '/files/mentoring-list.xlsx', format: 'XLSX', updated: '2026-09-01' },
          { name: '認輔紀錄表', file: '/files/mentoring-record.docx', format: 'DOCX', updated: '2026-09-01' },
        ],
      },
    ],
  },

  '/child-protection': {
    title: '兒少保護',
    lead: '教育人員為兒少保護責任通報人員，知悉相關情事應於 24 小時內通報。',
    blocks: [
      {
        type: 'callout',
        tone: 'danger',
        title: '24 小時內完成通報',
        text: '依《兒童及少年福利與權益保障法》，教育人員於執行業務時知悉兒少有受虐等情形，應立即且至遲不得超過 24 小時通報。',
      },
      { type: 'heading', text: '通報流程' },
      {
        type: 'steps',
        items: [
          { title: '知悉', description: '發現或經學生揭露疑似受虐、疏忽等情事。' },
          { title: '保護學生', description: '確保學生安全，避免讓學生重複陳述創傷經驗。' },
          { title: '責任通報', description: '透過關懷e起來網站或撥打 113 保護專線完成通報。' },
          { title: '校安通報', description: '同步完成教育部校安通報。' },
          { title: '配合後續', description: '配合社工調查與後續輔導，並注意當事人隱私保密。' },
        ],
      },
      {
        type: 'contacts',
        title: '通報管道',
        items: [
          { name: '保護專線', phone: '113', note: '24 小時' },
          { name: '關懷e起來', url: 'https://ecare.mohw.gov.tw/', note: '線上通報' },
        ],
      },
    ],
  },
}
