// 当页面被隐藏时.,修改页面的title为"页面被隐藏了"
// 当页面被显示时,修改页面的title为"页面被显示了"
let docTitleHide = "   QAQ 酱酱好伤心、好想哭、呜呜呜...";
let docTitleShow = "   O(∩_∩)O 你回来了 酱酱好开心、么么哒...";
let TitleHideTimer = null;

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    // 页面标题太长设置滚动效果
    function scrollTitle() {
      docTitleHide = docTitleHide.substring(1, docTitleHide.length) + docTitleHide.substring(0, 1);
      document.title = docTitleHide;
    }
    TitleHideTimer = setInterval(scrollTitle, 500);
  }
});

document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    // 清除定时器
    clearInterval(TitleHideTimer);

    function scrollTitle() {
      docTitleShow = docTitleShow.substring(1, docTitleShow.length) + docTitleShow.substring(0, 1);
      document.title = docTitleShow;
    }
    let TitleShowTimer = setInterval(scrollTitle, 500);

    setTimeout(function () {
      clearInterval(TitleShowTimer);
      document.title = "我与夏季";
    }, 5000);
  }
});

// 用户拷贝页面内容时触发
document.addEventListener("copy", function userCopy(e) {
  //  创建一个弹窗,显示在页面中间,3秒后自动关闭
  let pasteAlert = document.querySelector(".Alert");
  pasteAlert.innerHTML = "你在复制什么呢？";
  pasteAlert.style.display = "flex";
  setTimeout(function () {
    pasteAlert.style.display = "none";
  }, 3000);

  pasteAlert.onclick = function () {
    pasteAlert.style.display = "none";
  };
  // 获取地址栏的url
  let url = window.location.href;
  // 获取当前页面的title
  let title = document.title;
  // 获取当前页面的内容
  let content = "(●ˇ∀ˇ●) 不让复制";
  // 将内容拼接成一个字符串
  let str = `网址：${url}  标题：${title}  内容：${content}`;
  // 将拼接好的字符串放入剪贴板中
  e.clipboardData.setData("text/plain", str);
  e.preventDefault();
});

// 用户粘贴页面内容时触发
document.addEventListener("paste", function userPaste(e) {
  //  创建一个弹窗,显示在页面中间,3秒后自动关闭
  let pasteAlert = document.querySelector(".Alert");
  pasteAlert.innerHTML = "你在粘贴什么呢？";
  pasteAlert.style.display = "flex";
  setTimeout(function () {
    pasteAlert.style.display = "none";
  }, 3000);

  pasteAlert.onclick = function () {
    pasteAlert.style.display = "none";
  };

  e.preventDefault();
});

// 用户剪切页面内容时触发
document.addEventListener("cut", function userCut(e) {
  //  创建一个弹窗,显示在页面中间,3秒后自动关闭
  let pasteAlert = document.querySelector(".Alert");
  pasteAlert.innerHTML = "你在剪切什么呢？";
  pasteAlert.style.display = "flex";
  setTimeout(function () {
    pasteAlert.style.display = "none";
  }, 3000);

  pasteAlert.onclick = function () {
    pasteAlert.style.display = "none";
  };

  e.preventDefault();
});

// 用户拖拽页面内容时触发
document.addEventListener("drag", function userDrag(e) {
  //  创建一个弹窗,显示在页面中间,3秒后自动关闭
  let pasteAlert = document.querySelector(".Alert");
  pasteAlert.innerHTML = "小主, 不要拽了,很痛的o(╥﹏╥)o";
  pasteAlert.style.display = "flex";

  // 用户拖拽页面元素松开时触发
  document.addEventListener("dragend", function userDragEnd(e) {
    pasteAlert.style.display = "none";
  });

  e.preventDefault();
});

// 阻止Alert的右键菜单
document.querySelector(".Alert").oncontextmenu = function (e) {
  e.preventDefault();
};
