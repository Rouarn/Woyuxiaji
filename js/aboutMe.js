var docTitleHide = '   QAQ 酱酱好伤心、好想哭、呜呜呜...';
var docTitleShow = '   O(∩_∩)O 你回来了 酱酱好开心、么么哒...';
var TitleHideTimer = null;

$(document).on('visibilitychange', function () {
  if (document.hidden) {
    function scrollTitle() {
      docTitleHide = docTitleHide.substring(1, docTitleHide.length) + docTitleHide.substring(0, 1);
      document.title = docTitleHide;
    }
    TitleHideTimer = setInterval(scrollTitle, 500);
  }
});

$(document).on('visibilitychange', function () {
  if (!document.hidden) {
    clearInterval(TitleHideTimer);
    function scrollTitle() {
      docTitleShow = docTitleShow.substring(1, docTitleShow.length) + docTitleShow.substring(0, 1);
      document.title = docTitleShow;
    }
    var TitleShowTimer = setInterval(scrollTitle, 500);
    setTimeout(function () {
      clearInterval(TitleShowTimer);
      document.title = '我与夏季';
    }, 5000);
  }
});

$(document).on('copy', function (e) {
  var $alert = $('.Alert');
  $alert.html('你在复制什么呢？').css('display', 'flex');
  setTimeout(function () { $alert.css('display', 'none'); }, 3000);
  $alert.on('click', function () { $alert.css('display', 'none'); });
  var url = window.location.href;
  var title = document.title;
  var content = '(●ˇ∀ˇ●) 不让复制';
  var str = `网址：${url}  标题：${title}  内容：${content}`;
  if (e.originalEvent && e.originalEvent.clipboardData) {
    e.originalEvent.clipboardData.setData('text/plain', str);
  }
  e.preventDefault();
});

$(document).on('paste', function (e) {
  var $alert = $('.Alert');
  $alert.html('你在粘贴什么呢？').css('display', 'flex');
  setTimeout(function () { $alert.css('display', 'none'); }, 3000);
  $alert.on('click', function () { $alert.css('display', 'none'); });
  e.preventDefault();
});

$(document).on('cut', function (e) {
  var $alert = $('.Alert');
  $alert.html('你在剪切什么呢？').css('display', 'flex');
  setTimeout(function () { $alert.css('display', 'none'); }, 3000);
  $alert.on('click', function () { $alert.css('display', 'none'); });
  e.preventDefault();
});

$(document).on('drag', function () {
  var $alert = $('.Alert');
  $alert.html('小主, 不要拽了,很痛的o(╥﹏╥)o').css('display', 'flex');
});
$(document).on('dragend', function () { $('.Alert').css('display', 'none'); });

$('.Alert').on('contextmenu', function (e) { e.preventDefault(); });

