### 基本介紹
1.此專案使用 create-react-app 搭建
2.環境包含了 react 全家桶成員 ['react', 'react-router', 'redux', 'react-redux']
3.CSS 部份採用 styled-components
4.全域 css 樣式已配置 reset.css 於路徑 /assets/styles 中
5.api 部份採用 axios
6.本地 api 模擬使用 express + express-mockjs
7.使用自定義路徑名稱套件，"react-app-rewire-aliases" + "react-app-rewired"，更動了原生
  CRA script 指令碼以符合套件需求，另於根目錄增加 config-overrides.js 做配置

### API
1.本地 api 模擬請參照 api-interface/mocks/sample.js 檔案
2.搭載 express-mockjs 可亂數產生資料，詳情參考 http://mockjs.com/
3.路徑 /api/urlConfig.js 為 apiUrl 配置文件
4.路徑 /api/index.js 為 api function，可在此定義更多行為
5.本地 api 模擬中如有圖片資源為 /static 開頭請將對應檔案放置於 /public/static 中

### react-router
1.路由配置文件分為三部份，"路由常數(links.js)" + "路由配置表(config.js)" + "路由入口(index.js)"
2.路由配置表預先搭載選項 nav (是否需要導航) 及 auth (是否需要會員權限)
3.路由入口判定多項行為，如未於配置表設定元件導向 404 頁面，及取得會員資料進 redux ... 等，可自行依需求配置

### redux
1.路徑 /reducers/index.js 配置 store 基本資訊，於 index.jsx 中引入使用
2.預先搭載 loading reducer
3.配合路徑 /actions

### cording style
[import sort]
import module 除第 1、2 點無需註解外，其他匯入需依照類型加上註解以便分類，匯入排序如下：
1.react：依順序為 reactCore > routerCore > routerDOM > routerLink > redux
2.style-component：一般為引入 styled hook 作使用
3.context：包含 contextProvider + contextState
4.constants：各種頁面需要使用的常數
5.plugin：外部引用的 component 及其相關依賴，如 react-slick 及其 CSS 檔案
6.components：組件引用，如使用 style-component 包裝元件，排序應在最上方
7.assets：各種靜態資源引用
8.api：發 request 所需文件
8.action：各種 action
10.utils：自定義函式及外部引用功能

### 打包正式環境
P.S 需留意 appkey 是否正確符合版本
set "REACT_APP_KEY=MTAwMSYxMDAxMTE=" && npm run build# B03
