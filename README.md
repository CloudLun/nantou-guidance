# 南投縣學生輔導資源中心

純前端靜態網站：React 19 + Vite + Tailwind CSS v4 + React Router v7，部署於 Vercel。
沒有後端與資料庫，所有內容都放在 `src/content/` 的 JS 檔中。

## 開發

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 輸出到 dist/
npm run preview
```

## 資訊架構與路由

| 選單 | 路由 | 內容檔 |
|---|---|---|
| 輔導業務公告 | `/guidance` | — |
| └ 輔導工作流程／轉介單／紀錄表／危機處理機制 | `/guidance/workflow` `referral` `records` `crisis` | `src/content/pages.js` |
| 認輔工作 | `/mentoring` | `src/content/pages.js` |
| 兒少保護 | `/child-protection` | `src/content/pages.js` |
| 輔導用具 | `/resources` | — |
| └ 桌遊／雜誌／書籍／影音／其他 | `/resources/board-games` `magazines` `books` `media` `others` | `src/content/resources.js` |
| 活動訊息公告 | `/events`、`/events/:id` | `src/content/events.js` |
| 好站連結 | `/links` | `src/content/links.js` |

選單、麵包屑、側欄都由 `src/data/navigation.js` 產生；中心名稱、地址、電話也在這裡。

## 如何更新內容

- **一般頁面**：編輯 `pages.js`，內容由 blocks 組成：
  `heading` / `paragraph` / `list` / `steps` / `callout`（tone: info | warning | danger）/ `downloads` / `contacts`
- **新增活動**：在 `events.js` 陣列加一筆，`id` 即網址。
- **輔導用具**：在 `resources.js` 對應分類加 item，`status` 為 `available` / `borrowed` / `reference`。
- **下載檔案**：把檔案放進 `public/files/`，`file` 欄位寫 `/files/檔名`。

> 目前內容皆為**範例**，上線前請替換成中心實際資料並確認所有外部連結。

## 部署（Vercel）

1. 推到 GitHub。
2. Vercel → Add New Project → 匯入此 repo，Framework 選 **Vite**（自動偵測），其餘預設。
3. `vercel.json` 已設定 SPA rewrite，重新整理任何子頁不會 404。

之後若要換到其他主機，`npm run build` 產生的 `dist/` 是純靜態檔，任何靜態主機都能放（需設定同樣的 fallback 到 `index.html`）。
