# wataiDesign1020
蛙設計文創工作室切版測試

DEMO- https://u10210018.github.io/wataiDesign1120/

行動裝置展示- [responsinator.com/wataiDesign1120](https://www.responsinator.com/?url=https%3A%2F%2Fu10210018.github.io%2FwataiDesign1120%2F)

## 所需目標

1.中間版面置中，寬1200px

2.不用特別做RWD，但是切換成手機模式瀏覽畫面要正常(不要跑版就OK)

3.中間區塊可以做動態，或是切成一張圖片也可以(可自由發揮)

4.輸入框區塊，必須使用input。

5.按鈕需要有滑入效果(下方三個區塊也是要做滑入效果)

6.使用html、css(scss/sass)，也可以使用javascript等程式或套件做效果
  (但不要使用Bootstrap等大框架)


## 說明

`css`:使用`reset.scss`，一致化既定格式。`@media query`主要以768px為分界，並大部分利用`flexbox`進行自適應的調整，最小可支援至`320px`寬的畫面。
`js`:由於本次切板較為靜態，未使用`jquery`、`vue`等框架，以`vanilla js`的方式撰寫，而本次使用的唯一套件: `day.js` : 簡化時間輸出顯示的過程。

動態部分除了按鍵增加`hover`滑入效果外，樸片的部分，在中間的兩輛車在葉面進入時會移動，呈現動感，下方圖片的車輛也是以此做為`hover`效果。
上方的語言選項也可進行選擇點擊，是利用`ul` `li` 模擬選項製作。
時間顯示的部分也會每秒進行更新。
