var $shouye = $('.shouye');
var $navbar = $('#navbar');
var $navLinkBox = $('#navLinkBox');

var ticking = false;
$(window).on('scroll', function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      var scrollTop = $(document).scrollTop();
      if (scrollTop > $shouye.height() - 90) {
        $navbar.addClass('hidden animate__fadeIn');
        $navLinkBox.addClass('hidden');
      } else {
        $navbar.removeClass('hidden animate__fadeIn');
        $navLinkBox.removeClass('hidden');
      }
      ticking = false;
    });
    ticking = true;
  }
});

// // 点击主题切换按钮时,切换主题并显示主题切换动画
// // 获取深色主题切换按钮
var $lightButton = $('.lightButton');
var $darkButton = $('.darkButton');
