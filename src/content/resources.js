// 輔導用具：key 對應網址 /resources/:category
// status：available（可借用）/ borrowed（借出中）/ reference（僅供館內使用）
// ⚠️ 以下皆為範例內容。

export const borrowingInfo = {
  rules: ['借用對象：本縣各級學校教職員', '借期：2 週，可續借 1 次', '請於上班時間至中心辦理借還'],
  contact: '借用請洽 049-000-0000 分機 000',
}

export const resources = {
  'board-games': {
    title: '桌遊類',
    description: '適用於情緒覺察、人際互動、團體輔導等情境的桌上遊戲。',
    items: [
      { name: '情緒卡牌組', description: '透過圖卡協助學生辨識與表達情緒。', ages: '國小以上', tags: ['情緒', '個別輔導'], quantity: 3, status: 'available' },
      { name: '合作型桌遊', description: '需全員合作完成任務，培養溝通與團隊合作。', ages: '國小中年級以上', tags: ['人際', '團體輔導'], quantity: 2, status: 'borrowed' },
      { name: '價值觀拍賣遊戲', description: '藉由拍賣情境探索個人價值觀。', ages: '國中以上', tags: ['生涯', '團體輔導'], quantity: 2, status: 'available' },
    ],
  },
  magazines: {
    title: '雜誌類',
    description: '輔導、親職與心理健康相關期刊雜誌。',
    items: [
      { name: '輔導季刊（範例）', description: '收錄輔導實務與研究文章。', tags: ['期刊'], quantity: 1, status: 'reference' },
      { name: '親子教養月刊（範例）', description: '親職教育與家庭溝通主題。', tags: ['親職'], quantity: 1, status: 'available' },
    ],
  },
  books: {
    title: '書籍類',
    description: '輔導專業書籍與適合學生閱讀的繪本、讀物。',
    items: [
      { name: '情緒繪本（範例）', description: '適合低年級學生的情緒主題繪本。', ages: '國小低年級', tags: ['繪本', '情緒'], quantity: 5, status: 'available' },
      { name: '焦點解決短期諮商（範例）', description: '輔導教師實務參考用書。', tags: ['專業書籍'], quantity: 2, status: 'available' },
    ],
  },
  media: {
    title: '影音類',
    description: '生命教育、性別平等、反霸凌等主題影片。',
    items: [
      { name: '反霸凌宣導影片（範例）', description: '適合班級宣導使用，片長約 20 分鐘。', ages: '國中', tags: ['反霸凌', 'DVD'], quantity: 2, status: 'available' },
      { name: '生命教育影片（範例）', description: '搭配學習單進行討論。', ages: '國小高年級以上', tags: ['生命教育'], quantity: 1, status: 'borrowed' },
    ],
  },
  others: {
    title: '其他',
    description: '沙盤、牌卡、教具等其他輔導用具。',
    items: [
      { name: '沙盤組', description: '含沙箱與各式小物件，需受過訓練之人員使用。', tags: ['沙遊', '個別輔導'], quantity: 1, status: 'reference' },
      { name: '職業興趣牌卡', description: '用於生涯探索。', ages: '國中以上', tags: ['生涯', '牌卡'], quantity: 4, status: 'available' },
    ],
  },
}
