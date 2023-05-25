// 右键菜单事件
let CMList = document.querySelectorAll(".light-menu-list>li");

let pasteAlert = document.querySelector(".Alert");
let tag = null;
// 获取右键点击选中的内容
document.oncontextmenu = function (e) {
  e = e || event;
  tag = e.target || e.srcElement;
  return false;
};

// 遍历每一个右键菜单,绑定相应的事件
CMList.forEach((item, index) => {
  // 下标为0的是复制,下标为1的是粘贴,下标为2的是剪切,下标为3的是把选中的内容保存为网页,下标为4的时分割线,不做功能, 下标为5的是删除选中的内容元素
  if (index == 0) {
    item.addEventListener("click", function (e) {
      //  创建一个弹窗,显示在页面中间,3秒后自动关闭
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
      navigator.clipboard.writeText(str);
      // 阻止默认事件
      e.preventDefault();
    });
  } else if (index == 1) {
    item.addEventListener("click", function (e) {
      //  创建一个弹窗,显示在页面中间,3秒后自动关闭
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
  } else if (index == 2) {
    item.addEventListener("click", function (e) {
      //  创建一个弹窗,显示在页面中间,3秒后自动关闭
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
  } else if (index == 3) {
    item.addEventListener("click", function (e) {
      //  创建一个弹窗,显示在页面中间,3秒后自动关闭
      pasteAlert.innerHTML = "你在保存什么呢？";
      pasteAlert.style.display = "flex";
      setTimeout(function () {
        pasteAlert.style.display = "none";
      }, 3000);

      pasteAlert.onclick = function () {
        pasteAlert.style.display = "none";
      };

      e.preventDefault();
    });
  } else if (index == 5) {
    item.addEventListener("click", function (e) {
      //  创建一个弹窗,显示在页面中间,3秒后自动关闭
      pasteAlert.innerHTML = "你在删除什么呢？";
      pasteAlert.style.display = "flex";
      setTimeout(function () {
        pasteAlert.style.display = "none";
      }, 3000);

      tag.remove(); // 删除选中的元素   但是这个方法只能删除元素,不能删除文本

      e.preventDefault();
    });
  }
});
