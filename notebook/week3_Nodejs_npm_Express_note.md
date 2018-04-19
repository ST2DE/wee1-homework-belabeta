---
title: ST2DE/ Online Course - Week3
tags: st2de
---

# Node.js, npm, Express
* ST2DE/ Online Course - Week3 共筆
* 投影片：https://hackmd.io/p/rJxemzi6jM#/

## 課堂筆記
![](https://i.imgur.com/iOlZ0PQ.png)

```shell=
#查看版本
npm -v 
# 使用 -g 安裝全域套件，成為本機共享的工具套件
npm install npm@latest - g
#自動默認設置
npm init [--y]  
--save存到package.jason
--save-dev(開發時用到

npm uninstall <package_name>

npm install //只要有package.json就能下這個，就能自動把該專案有安裝的套件安裝在本機
# 使用 --save 安裝，會將專案套件加入依賴列表中，未來可以快速的恢復開發環境
npm install --save // 會在安裝套件的時候，也順便把套件版本寫到 package.json 檔案內

補充：一般 npm install 的時候會把套件裝在專案資料夾下的 node_modules 內，在上傳或是共享專案的時候，通常不用把已經安裝的 node_modules 所有套件一起分享，僅需提供 package.json 讓對方可以自行下載即可。

```
```shell=
yarn -v
yarn init
yarn add<package_name>
Yarn remove <package_name>
Yarn [install]
# npm 5.6.0 版本後，安裝 package 的速度和用 yarn 安裝差不多
```
## Outline
* node.js
    * 長期安裝的話會安裝LTS(Long Term Support)版本
    * install with nvm (node version manager)

* npm
    * 套件管理系統 
* packages
    * 必填的值
        * name:<project name> 注意不能用跟package同樣的名稱
        * version:"1.0.0"
        * scripts:你可能會常用的指令 
            * start:執行的檔案(打 npm start即可執行)
            * test:測試
    * optional的值
        * license

    以上的詳細資訊可以到npm的網站上找，建議大家常去看官方文件。(https://www.npmjs.com/)
    因為有這個檔案(package.json)，所以在上傳 git 的時候，就可以不用把 node_modules 上傳
    
    * 尋找和選擇套件
      *  一些當年常見的 JS 套件
(https://risingstars.js.org/2017/zh/)
        * 在npm上找 [npm官網](https://www.npmjs.com/)
            * popularity(受歡迎的套件 縮寫p)
            * quaility(品質 縮寫q)
            * maintenance(維護 縮寫m)
                如果很久沒更新，會跟不上node的版本
        * github上找
            * star
            * issues and pull requests(pull request上的功能有可能未來會被merge進去)
            * master一般都會是比較新的版本
            * latest commit time

From Me to Everyone: (09:38 PM)
https://risingstars.js.org/2017/zh/
順手大家分享這個～這邊也有一些當年常見的 JS 套件

* fu6 Express
```shell=
#installing-1

$ mkdir first_app
$ cd first_app
$ npm install express --save
```

```
$ npm install express-generator -g (-g:在任何目錄下都可以輸入)
$ express -h

$ express --view=pug project_name
cd project_name
npm install # 因為幫你安裝好基礎套件了，只需要直接安裝即可
```
* routing
path(網址)
req =>  request

res => response

res.send => 一個字串
res.render => 回傳畫面

大專案一般都會把他抽出來

* serving static files
    * app.use(express.static('public'));
* template engines(pug ejs)
    * 可以塞變數，之後server會轉成html
    * pug要注意縮排
        * extends layout (引入共同樣式)


From xerviam@gmail.com to Everyone: (10:05 PM)
有產生器ＸＤ https://www.gitignore.io

### 

---
## Weekly Homework

應該會跟期中專案有關，細節週末會公布

---
## 上完本週課程，你應該要知道/掌握的內容： 

- [ ] npm - 了解 npm 基本指令，package.json 結構
- [ ] packages - 知道怎麼找到需要的 package
- [ ] Express - 知道怎麼從頭建立一個 Express 專案
- [ ] routing - 知道怎麼新增 routing
- [ ] serving static files - 知道怎麼在 Express 使用靜態檔案
- [ ] template engines - 知道怎麼設定 template engine

---
## 有什麼問題嗎？

1. 有 package.json 之後，是不是就不用把 node_modules 傳到 github 上面？
2. 可以問問「把 html 放在 public」跟用「res.render()」有什麼不一樣嗎？
3. 請問變數要在router宣告還是在template engine宣告好？（xerviam)
4. 第一次作業中有看 /api 開頭的 routing ，跟沒有 /api 開的有什麼嗎？
5. include 在ejs中跟extends 在pug中的差別，為何include layout 不行？
6. 期中專案可以用 genegator 嗎？
7. 地一周作業可以不用template engine做嗎?(直接建html檔) => 這樣的話會無法傳變數進去？
9. 提到include，那是什麼? => 是不是跟問題 5 重複惹？
11. 在哪邊可以看到 資料庫的資料? 資料也是後來自己 insert 到資料庫嗎?











