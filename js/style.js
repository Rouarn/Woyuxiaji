/* JS */
//点击btn按钮时，执行function里的内容
MarkBtnShow.onclick = function () {
  LinkMark.style.display = "block";
  MarkBtnConceal.style.display = "block";
  topBgMask.style.display = "block";
  navLinkMarkBox.style.display = "block";
  MarkBtnShow.style.width = "0";
  MarkBtnShow.style.height = "0";
  topBgMask.style.zIndex = "10";
  navLinkMarkBox.style.display = "block";
  //点击btn1(MarkBtnShow)按钮时，btn1(MarkBtnShow)添加hidden类名
  MarkBtnShow.classList.add("hidden");
};

MarkBtnConceal.onclick = function () {
  LinkMark.style.display = "none";
  topBgMask.style.display = "none";
  navLinkMarkBox.style.display = "block";
  MarkBtnShow.style.display = "block";
  MarkBtnConceal.style.display = "none";
  MarkBtnShow.style.width = "25px";
  MarkBtnShow.style.height = "2px";
  topBgMask.style.zIndex = "-10";
  navLinkMarkBox.style.display = "none";
  //点击btn1(MarkBtnShow)按钮时，btn1(MarkBtnShow)添加hidden类名
  MarkBtnShow.classList.remove("hidden");
};
topBgMask.onclick = function () {
  LinkMark.style.display = "none";
  topBgMask.style.display = "none";
  navLinkMarkBox.style.display = "none";
  MarkBtnShow.style.display = "block";
  MarkBtnConceal.style.display = "none";
  MarkBtnShow.style.width = "25px";
  MarkBtnShow.style.height = "2px";
  topBgMask.style.zIndex = "-10";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList2.style.backgroundColor = "transparent";
  sideList1.style.backgroundColor = "transparent";
  //点击btn1(MarkBtnShow)钮时，btn1(MarkBtnShow)添加hidden类名
  MarkBtnShow.classList.remove("hidden");
};
// 用来控制点击其他按钮时（侧边菜单）背景的显示与消失
sideList1.onclick = function () {
  sideList1.style.backgroundColor = "rgba(255, 255, 255, .6)";
  sideList2.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
};

sideList2.onclick = function () {
  sideList2.style.backgroundColor = "rgba(255, 255, 255, .6)";
  sideList1.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
};
sideList3.onclick = function () {
  sideList3.style.backgroundColor = "rgba(255, 255, 255, .6)";
  sideList2.style.backgroundColor = "transparent";
  sideList1.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
};
sideList4.onclick = function () {
  sideList4.style.backgroundColor = "rgba(255, 255, 255, .6)";
  sideList2.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList1.style.backgroundColor = "transparent";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
};

// 此为sideListbox（侧边菜单）的遮罩层，用来控制点击空白处时其背景的消失
sideListboxMark.onclick = function () {
  sideList1.style.backgroundColor = "transparent";
  sideList2.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
};
lightColor.onclick = function () {
  lightColor.style.display = "none";
  darkColor.style.display = "block";
  DarkColorMask.style.display = "block";
  DarkColorMask.style.zIndex = "9";
  underLine.style.backgroundColor = "#aaaaff";
  woyuxaiji.classList.add("dark");
  /* 页面反色-深色主题 */
  html.style.filter = "invert(1)";
  footer.classList.add("inverseRepair");
  topBg.classList.add("inverseRepair");
  LinkMark.classList.add("inverseRepair");
  lightColor.classList.add("inverseRepair");
  DarkButton.classList.add("inverseRepair");
  navLogoMain.classList.add("inverseRepair");
  navLogoText.classList.add("inverseRepair");
  DarkColorMask.classList.add("inverseRepair");
  workLinkPic1.classList.add("inverseRepair");
  workLinkPic2.classList.add("inverseRepair");
  workLinkPic3.classList.add("inverseRepair");
  workLinkPic4.classList.add("inverseRepair");
  workLinkPic5.classList.add("inverseRepair");
  workLinkPic6.classList.add("inverseRepair");
  workLinkPic7.classList.add("inverseRepair");
  workLinkPic8.classList.add("inverseRepair");
  workLinkPic9.classList.add("inverseRepair");
  lightMenuList1.innerHTML = "坤坤爱跳舞";
  lightMenuList2.innerHTML = "坤坤爱唱歌";
  lightMenuList3.innerHTML = "坤坤爱rap";
  lightMenuList4.innerHTML = "坤坤爱篮球";
  lightMenuList5.innerHTML = "坤坤两年半";
};

darkColor.onclick = function () {
  darkColor.style.display = "none";
  lightColor.style.display = "block";
  DarkColorMask.style.display = "none";
  underLine.style.backgroundColor = "rgba(0, 255, 0, .6)";
  woyuxaiji.classList.remove("dark");
  /* 页面反色-浅色主题 */
  html.style.filter = "invert(0)";
  footer.classList.remove("inverseRepair");
  topBg.classList.remove("inverseRepair");
  LinkMark.classList.remove("inverseRepair");
  lightColor.classList.remove("inverseRepair");
  DarkButton.classList.remove("inverseRepair");
  navLogoMain.classList.remove("inverseRepair");
  navLogoText.classList.remove("inverseRepair");
  DarkColorMask.classList.remove("inverseRepair");
  workLinkPic1.classList.remove("inverseRepair");
  workLinkPic2.classList.remove("inverseRepair");
  workLinkPic3.classList.remove("inverseRepair");
  workLinkPic4.classList.remove("inverseRepair");
  workLinkPic5.classList.remove("inverseRepair");
  workLinkPic6.classList.remove("inverseRepair");
  workLinkPic7.classList.remove("inverseRepair");
  workLinkPic8.classList.remove("inverseRepair");
  workLinkPic9.classList.remove("inverseRepair");
  lightMenuList1.innerHTML = "小黑子";
  lightMenuList2.innerHTML = "唱,跳";
  lightMenuList3.innerHTML = "rap";
  lightMenuList4.innerHTML = "篮球";
  lightMenuList5.innerHTML = "你会吗";
};
//此间为切换深浅色按钮
sideList5.onclick = function () {
  DarkColorMask.style.display = "block";
  DarkColorMask.style.zIndex = "9";
  sideList6.style.backgroundColor = "rgba(255, 255, 255, .6)";
  sideList2.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList1.style.backgroundColor = "transparent";
  sideList5.style.backgroundColor = "transparent";
  sideList5.style.visibility = "hidden";
  sideList6.style.visibility = "visible";
  underLine.style.backgroundColor = "#aaaaff";
  /* 页面反色-深色主题 */
  html.style.filter = "invert(1)";
  footer.classList.add("inverseRepair");
  topBg.classList.add("inverseRepair");
  LinkMark.classList.add("inverseRepair");
  lightColor.classList.add("inverseRepair");
  DarkButton.classList.add("inverseRepair");
  navLogoMain.classList.add("inverseRepair");
  navLogoText.classList.add("inverseRepair");
  DarkColorMask.classList.add("inverseRepair");
  workLinkPic1.classList.add("inverseRepair");
  workLinkPic2.classList.add("inverseRepair");
  workLinkPic3.classList.add("inverseRepair");
  workLinkPic4.classList.add("inverseRepair");
  workLinkPic5.classList.add("inverseRepair");
  workLinkPic6.classList.add("inverseRepair");
  workLinkPic7.classList.add("inverseRepair");
  workLinkPic8.classList.add("inverseRepair");
  workLinkPic9.classList.add("inverseRepair");
};
sideList6.onclick = function () {
  lightColor.style.display = "block";
  DarkColorMask.style.display = "none";
  sideList5.style.backgroundColor = "rgba(255, 255, 255, .6)";
  sideList6.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList2.style.backgroundColor = "transparent";
  sideList1.style.backgroundColor = "transparent";
  sideList6.style.visibility = "hidden";
  sideList5.style.visibility = "visible";
  underLine.style.backgroundColor = "rgba(0, 255, 0, .6)";
  /* 页面反色-主题 */
  html.style.filter = "invert(0)";
  footer.classList.remove("inverseRepair");
  topBg.classList.remove("inverseRepair");
  LinkMark.classList.remove("inverseRepair");
  lightColor.classList.remove("inverseRepair");
  DarkButton.classList.remove("inverseRepair");
  navLogoMain.classList.remove("inverseRepair");
  navLogoText.classList.remove("inverseRepair");
  DarkColorMask.classList.remove("inverseRepair");
  workLinkPic1.classList.remove("inverseRepair");
  workLinkPic2.classList.remove("inverseRepair");
  workLinkPic3.classList.remove("inverseRepair");
  workLinkPic4.classList.remove("inverseRepair");
  workLinkPic5.classList.remove("inverseRepair");
  workLinkPic6.classList.remove("inverseRepair");
  workLinkPic7.classList.remove("inverseRepair");
  workLinkPic8.classList.remove("inverseRepair");
  workLinkPic9.classList.remove("inverseRepair");
};
// 此为屏幕宽度小于750px时点击关于我隐藏导航栏弹出框的效果
about.onclick = function () {
  LinkMark.style.display = "none";
  MarkBtnShow.style.display = "block";
  MarkBtnConceal.style.display = "none";
  MarkBtnShow.style.width = "25px";
  MarkBtnShow.style.height = "2px";
  topBgMask.style.zIndex = "-10";
  navLinkMarkBox.style.display = "none";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList2.style.backgroundColor = "transparent";
  sideList1.style.backgroundColor = "transparent";
};
// 此为屏幕宽度小于750px时点击返回顶部隐藏导航栏弹出框的效果
backToTop.onclick = function () {
  LinkMark.style.display = "none";
  MarkBtnShow.style.display = "block";
  MarkBtnConceal.style.display = "none";
  MarkBtnShow.style.width = "25px";
  MarkBtnShow.style.height = "2px";
  topBgMask.style.zIndex = "-10";
  navLinkMarkBox.style.display = "none";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList2.style.backgroundColor = "transparent";
  sideList1.style.backgroundColor = "transparent";
};
// 此为屏幕宽度小于750px时点击返回顶部隐藏导航栏弹出框的效果
works.onclick = function () {
  LinkMark.style.display = "none";
  MarkBtnShow.style.display = "block";
  MarkBtnConceal.style.display = "none";
  MarkBtnShow.style.width = "25px";
  MarkBtnShow.style.height = "2px";
  topBgMask.style.zIndex = "-10";
  navLinkMarkBox.style.display = "none";
  sideList5.style.backgroundColor = "transparent";
  sideList6.style.backgroundColor = "transparent";
  sideList4.style.backgroundColor = "transparent";
  sideList3.style.backgroundColor = "transparent";
  sideList2.style.backgroundColor = "transparent";
  sideList1.style.backgroundColor = "transparent";
};

// var time = setInterval(() => {
// 	var d = new Date() //获取当前时间
// 	var year = d.getFullYear() //年
// 	var month = d.getMonth() + 1 //月
// 	var date = d.getDate() //日
// 	var hour = d.getHours() //小时
// 	var minute = d.getMinutes() //分钟
// 	var second = d.getSeconds() //秒钟
// 	// console.log(d);

// 	var a =
// 		`今天是${year}年${month<10?'0'+month:month}月${date<10?'0'+date:date}日${hour<10?'0'+hour:hour}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`
// 	sj.innerHTML = a
// }, 1000)

//开启周期性定时器，每隔1秒钟获取当前的日期时间，最咸渲梁成以下效果
//当网页一打开获取系统时间，渲头一次:
//每隔1秒钟再获取系统时间，再去渲梁
let CurrentTime = document.querySelector(".currentTime");

if (CurrentTime) {
  function clock() {
    //获取系统时间!
    var d = new Date(); //当前时间
    var year = d.getFullYear(); //年
    var month = d.getMonth() + 1; //月
    var date = d.getDate(); //日
    var hour = d.getHours(); //时
    var minute = d.getMinutes(); //分
    var second = d.getSeconds(); //秒
    //将获取时间拼接起来然后渲染
    CurrentTime.style.color = "#fff";
    CurrentTime.innerHTML = `今天是${year}年${month < 10 ? "0" + month : month}月${date < 10 ? "0" + date : date}日${hour < 10 ? "0" + hour : hour}:${
      minute < 10 ? "0" + minute : minute
    }:${second < 10 ? "0" + second : second}`;
  }

  //当网页一打开获取系统时间，渲染一次;
  clock();
  //开启周期性的定时器，每隔1 秒钟再获取系统时间，再去渲染
  setInterval(clock, 1000);
} else {
  console.log("当前页面没有当前时间的标签");
}

//清除时间上方闪烁的光标
let h2Span = document.getElementById("h2Span");

if (h2Span) {
  setTimeout(() => {
    h2Span.style.borderRight = "none";
    // console.log("已清除时间上方闪烁的光标");
  }, 7000);
}

const author = `
			我与夏季 - 刘亮
			主页: https://woyuxaiji.top/
			Github: https://github.com/Rouarn
			`;

const autograph = `
 _          __  _____  __    __  _   _  __    __  _       ___       _   _  
| |        / / /  _  \ \ \  / / | | | | \ \  / / | |     /   |     | | | | 
| |  __   / /  | | | |  \ \/ /  | | | |  \ \/ /  | |    / /| |     | | | | 
| | /  | / /   | | | |   \  /   | | | |   }  {   | |   / / | |  _  | | | | 
| |/   |/ /    | |_| |   / /    | |_| |  / /\ \  | |  / /  | | | |_| | | | 
|___/|___/     \_____/  /_/     \_____/ /_/  \_\ |_| /_/   |_| \_____/ |_|    
      `;
const Totems = `
//
//......................................&&.........................
//....................................&&&..........................
//.................................&&&&............................
//...............................&&&&..............................
//.............................&&&&&&..............................
//...........................&&&&&&....&&&..&&&&&&&&&&&&&&&........
//..................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..............
//................&...&&&&&&&&&&&&&&&&&&&&&&&&&&&&.................
//.......................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.........
//...................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...............
//..................&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&............
//...............&&&&&@  &&&&&&&&&&..&&&&&&&&&&&&&&&&&&&...........
//..............&&&&&&&&&&&&&&&.&&....&&&&&&&&&&&&&..&&&&&.........
//..........&&&&&&&&&&&&&&&&&&...&.....&&&&&&&&&&&&&...&&&&........
//........&&&&&&&&&&&&&&&&&&&.........&&&&&&&&&&&&&&&....&&&.......
//.......&&&&&&&&.....................&&&&&&&&&&&&&&&&.....&&......
//........&&&&&.....................&&&&&&&&&&&&&&&&&&.............
//..........&...................&&&&&&&&&&&&&&&&&&&&&&&............
//................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&............
//..................&&&&&&&&&&&&&&&&&&&&&&&&&&&&..&&&&&............
//..............&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&....&&&&&............
//...........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&......&&&&............
//.........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.........&&&&............
//.......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&............
//......&&&&&&&&&&&&&&&&&&&...&&&&&&...............&&&.............
//.....&&&&&&&&&&&&&&&&............................&&..............
//....&&&&&&&&&&&&&&&.................&&...........................
//...&&&&&&&&&&&&&&&.....................&&&&......................
//...&&&&&&&&&&.&&&........................&&&&&...................
//..&&&&&&&&&&&..&&..........................&&&&&&&...............
//..&&&&&&&&&&&&...&............&&&.....&&&&...&&&&&&&.............
//..&&&&&&&&&&&&&.................&&&.....&&&&&&&&&&&&&&...........
//..&&&&&&&&&&&&&&&&..............&&&&&&&&&&&&&&&&&&&&&&&&.........
//..&&.&&&&&&&&&&&&&&&&&.........&&&&&&&&&&&&&&&&&&&&&&&&&&&.......
//...&&..&&&&&&&&&&&&.........&&&&&&&&&&&&&&&&...&&&&&&&&&&&&......
//....&..&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&&&&&.....
//.......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..............&&&&&&&....
//.......&&&&&.&&&&&&&&&&&&&&&&&&..&&&&&&&&...&..........&&&&&&....
//........&&&.....&&&&&&&&&&&&&.....&&&&&&&&&&...........&..&&&&...
//.......&&&........&&&.&&&&&&&&&.....&&&&&.................&&&&...
//.......&&&...............&&&&&&&.......&&&&&&&&............&&&...
//........&&...................&&&&&&.........................&&&..
//.........&.....................&&&&........................&&....
//...............................&&&.......................&&......
//................................&&......................&&.......
//.................................&&..............................
//..................................&..............................
//
				`;
//控制台输出
// console.log(author);
// console.log(name)

const styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgba(56, 201, 47, 0.8);
`;
const styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`;
const styleTitle3 = `
font-size:12px;
color: rgba(0, 255, 0, .6);
`;
console.log(`%c${author} %c${Totems} %c${autograph}`, styleTitle1, styleTitle2, styleTitle3);

console.log("");
console.log("");
