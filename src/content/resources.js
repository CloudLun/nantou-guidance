// 輔導用具：key 對應網址 /resources/:category
// 欄位：name 品名、code 編號、image 照片、quantity 數量、note 備註（選填）
// 照片放在 public/images/resources/，image 欄位寫 /images/resources/檔名
// 沒有照片就不寫 image，會顯示預設圖

export const borrowingInfo = {
  rules: ['借用對象：本縣各級學校教職員', '借期：2 週，可續借 1 次', '請於上班時間至中心辦理借還'],
  contact: '借用請洽 049-000-0000 分機 000',
}

export const resources = {
  'board-games': {
    title: '桌遊類',
    items: [
      { name: '範例桌遊一', code: '10501', image: '/images/resources/10501.jpg', quantity: 1 },
      { name: '範例桌遊二', code: '10502', quantity: 2, note: '缺卡 2 張' },
    ],
  },
  magazines: {
    title: '雜誌類',
    items: [{ name: '範例雜誌', code: '20501', quantity: 1 }],
  },
  books: {
    title: '書籍類',
    items: [{ name: '範例書籍', code: '30501', quantity: 3 }],
  },
  media: {
    title: '影音類',
    items: [{ name: '範例影片', code: '40501', quantity: 1, note: 'DVD' }],
  },
  others: {
    title: '其他',
    items: [{ name: '範例教具', code: '50501', quantity: 1 }],
  },
}