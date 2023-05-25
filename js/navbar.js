const shouye = document.querySelector(".shouye");
const navbar = document.querySelector("#navbar");
const navLinkBox = document.querySelector("#navLinkBox");

window.onscroll = function () {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > shouye.clientHeight - 90) {
    // console.log("大于了");
    navbar.classList.add("hidden", "animate__fadeIn");
    navLinkBox.classList.add("hidden");
  } else {
    // console.log("小于了");
    navbar.classList.remove("hidden", "animate__fadeIn");
    navLinkBox.classList.remove("hidden");
  }

  // console.log("滚动距离" + scrollTop);
  // console.dir(shouye.clientHeight);
};

// // 点击主题切换按钮时,切换主题并显示主题切换动画
// // 获取深色主题切换按钮
// const lightButton = document.querySelector(".lightButton");
// // 获取浅色主题切换按钮
// const darkButton = document.querySelector(".darkButton");
// // 获取主题切换动画元素
// const SubjectSwitch = document.querySelector(".Subject_switch");

// lightButton.addEventListener("click", () => {
//   console.log("切换到深色主题");
//   // 显示主题切换动画元素
//   SubjectSwitch.style.display = "block";
//   // 创建一个span节点
//   const span = document.createElement("span");
//   // 设置span节点的内容
//   span.innerHTML = "正在切换到深色主题...... 更多主题敬请期待";
//   // 将span节点添加到主题切换动画元素中
//   SubjectSwitch.appendChild(span);

//   // 设置主题切换动画元素的显示时间
//   setTimeout(() => {
//     // 隐藏主题切换动画元素
//     SubjectSwitch.style.display = "none";
//     // 移除span节点
//     SubjectSwitch.removeChild(span);
//   }, 1500);
// });

// darkButton.addEventListener("click", () => {
//   console.log("切换到浅色主题");
//   // 显示主题切换动画元素
//   SubjectSwitch.style.display = "block";
//   // 创建一个span节点
//   const span = document.createElement("span");
//   // 设置span节点的内容
//   span.innerHTML = "正在切换到浅色主题...... 更多主题敬请期待";
//   // 将span节点添加到主题切换动画元素中
//   SubjectSwitch.appendChild(span);
//   setTimeout(() => {
//     // 隐藏主题切换动画元素
//     SubjectSwitch.style.display = "none";
//     // 移除span节点
//     SubjectSwitch.removeChild(span);
//   }, 1500);
// });

// // 点击主题切换按钮时,切换主题并显示主题切换动画
// // 获取深色主题切换按钮
const lightButton = document.querySelector(".lightButton");
// // 获取浅色主题切换按钮
const darkButton = document.querySelector(".darkButton");
// 获取主题切换动画元素
lightButton.addEventListener("click", () => {
  console.log("切换到深色主题");
  $("body").css("background-color", "#000");
  $("body").addClass("dark-animation");
  $("body").removeClass("light-animation");
  setTimeout(() => {
    $("body").css("background-color", "transparent");
    $("body").removeClass("dark-animation");
  }, 500);
});

darkButton.addEventListener("click", () => {
  console.log("切换到浅色主题");
  $("body").css("background-color", "#fff");
  $("body").addClass("light-animation");
  $("body").removeClass("dark-animation");
  setTimeout(() => {
    $("body").removeClass("light-animation");
    $("body").css("background-color", "transparent");
  }, 500);
});
