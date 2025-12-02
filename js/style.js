var $MarkBtnShow = $('#MarkBtnShow');
var $MarkBtnConceal = $('#MarkBtnConceal');
var $topBgMask = $('#topBgMask');
var $navLinkMarkBox = $('#navLinkMarkBox');
var $LinkMark = $('#LinkMark');
var $sideList1 = $('#sideList1');
var $sideList2 = $('#sideList2');
var $sideList3 = $('#sideList3');
var $sideList4 = $('#sideList4');
var $sideList5 = $('#sideList5');
var $sideList6 = $('#sideList6');
var $lightColor = $('#lightColor');
var $darkColor = $('#darkColor');
var $DarkColorMask = $('#DarkColorMask');
var $underLine = $('#underLine');
var $woyuxaiji = $('#woyuxaiji');
var $html = $('#html');
var $footer = $('#footer');
var $topBg = $('#topBg');
var $DarkButton = $('#DarkButton');
var $navLogoMain = $('#navLogoMain');
var $navLogoText = $('#navLogoText');
var $workLinkPic1 = $('#workLinkPic1');
var $workLinkPic2 = $('#workLinkPic2');
var $workLinkPic3 = $('#workLinkPic3');
var $workLinkPic4 = $('#workLinkPic4');
var $workLinkPic5 = $('#workLinkPic5');
var $workLinkPic6 = $('#workLinkPic6');
var $workLinkPic7 = $('#workLinkPic7');
var $workLinkPic8 = $('#workLinkPic8');
var $workLinkPic9 = $('#workLinkPic9');
var $about = $('#about');
var $backToTop = $('#backToTop');
var $works = $('#works');

$MarkBtnShow.on('click', function () {
  $LinkMark.show();
  $MarkBtnConceal.show();
  $topBgMask.show().css('zIndex', '10');
  $navLinkMarkBox.show();
  $MarkBtnShow.css({ width: '0', height: '0' }).addClass('hidden');
});

$MarkBtnConceal.on('click', function () {
  $LinkMark.hide();
  $topBgMask.hide().css('zIndex', '-10');
  $navLinkMarkBox.hide();
  $MarkBtnShow.show().css({ width: '25px', height: '2px' }).removeClass('hidden');
});

$topBgMask.on('click', function () {
  $LinkMark.hide();
  $topBgMask.hide().css('zIndex', '-10');
  $navLinkMarkBox.hide();
  $MarkBtnShow.show().css({ width: '25px', height: '2px' }).removeClass('hidden');
  $sideList1
    .add($sideList2)
    .add($sideList3)
    .add($sideList4)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});

$sideList1.on('click', function () {
  $sideList1.css('backgroundColor', 'rgba(255, 255, 255, .6)');
  $sideList2
    .add($sideList3)
    .add($sideList4)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});
$sideList2.on('click', function () {
  $sideList2.css('backgroundColor', 'rgba(255, 255, 255, .6)');
  $sideList1
    .add($sideList3)
    .add($sideList4)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});
$sideList3.on('click', function () {
  $sideList3.css('backgroundColor', 'rgba(255, 255, 255, .6)');
  $sideList2
    .add($sideList1)
    .add($sideList4)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});
$sideList4.on('click', function () {
  $sideList4.css('backgroundColor', 'rgba(255, 255, 255, .6)');
  $sideList2
    .add($sideList3)
    .add($sideList1)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});

$('#sideListboxMark').on('click', function () {
  $sideList1
    .add($sideList2)
    .add($sideList3)
    .add($sideList4)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});

$lightColor.on('click', function () {
  $lightColor.hide();
  $darkColor.show();
  $DarkColorMask.show().css('zIndex', '9');
  $underLine.css('backgroundColor', '#aaaaff');
  $woyuxaiji.addClass('dark');
  $html.css('filter', 'invert(1)');
  $footer
    .add($topBg)
    .add($LinkMark)
    .add($lightColor)
    .add($DarkButton)
    .add($navLogoMain)
    .add($navLogoText)
    .add($DarkColorMask)
    .add($workLinkPic1)
    .add($workLinkPic2)
    .add($workLinkPic3)
    .add($workLinkPic4)
    .add($workLinkPic5)
    .add($workLinkPic6)
    .add($workLinkPic7)
    .add($workLinkPic8)
    .add($workLinkPic9)
    .addClass('inverseRepair');
  $('#lightMenuList1').html('坤坤爱跳舞');
  $('#lightMenuList2').html('坤坤爱唱歌');
  $('#lightMenuList3').html('坤坤爱rap');
  $('#lightMenuList4').html('坤坤爱篮球');
  $('#lightMenuList5').html('坤坤两年半');
});

$darkColor.on('click', function () {
  $darkColor.hide();
  $lightColor.show();
  $DarkColorMask.hide();
  $underLine.css('背景颜色', 'rgba(0, 255, 0, .6)');
  $woyuxaiji.removeClass('dark');
  $html.css('filter', 'invert(0)');
  $footer
    .add($topBg)
    .add($LinkMark)
    .add($lightColor)
    .add($DarkButton)
    .add($navLogoMain)
    .add($navLogoText)
    .add($DarkColorMask)
    .add($workLinkPic1)
    .add($workLinkPic2)
    .add($workLinkPic3)
    .add($workLinkPic4)
    .add($workLinkPic5)
    .add($workLinkPic6)
    .add($workLinkPic7)
    .add($workLinkPic8)
    .add($workLinkPic9)
    .removeClass('inverseRepair');
  $('#lightMenuList1').html('小黑子');
  $('#lightMenuList2').html('唱,跳');
  $('#lightMenuList3').html('rap');
  $('#lightMenuList4').html('篮球');
  $('#lightMenuList5').html('你会吗');
});

$sideList5.on('click', function () {
  $DarkColorMask.show().css('zIndex', '9');
  $sideList6.css('backgroundColor', 'rgba(255, 255, 255, .6)');
  $sideList2.add($sideList3).add($sideList4).add($sideList1).css('backgroundColor', 'transparent');
  $sideList5.css('backgroundColor', 'transparent').css('visibility', 'hidden');
  $sideList6.css('visibility', 'visible');
  $underLine.css('backgroundColor', '#aaaaff');
  $html.css('filter', 'invert(1)');
  $footer
    .add($topBg)
    .add($LinkMark)
    .add($lightColor)
    .add($DarkButton)
    .add($navLogoMain)
    .add($navLogoText)
    .add($DarkColorMask)
    .add($workLinkPic1)
    .add($workLinkPic2)
    .add($workLinkPic3)
    .add($workLinkPic4)
    .add($workLinkPic5)
    .add($workLinkPic6)
    .add($workLinkPic7)
    .add($workLinkPic8)
    .add($workLinkPic9)
    .addClass('inverseRepair');
});
$sideList6.on('click', function () {
  $lightColor.show();
  $DarkColorMask.hide();
  $sideList5.css('背景颜色', 'rgba(255, 255, 255, .6)');
  $sideList6
    .add($sideList4)
    .add($sideList3)
    .add($sideList2)
    .add($sideList1)
    .css('backgroundColor', 'transparent');
  $sideList6.css('visibility', 'hidden');
  $sideList5.css('visibility', 'visible');
  $underLine.css('backgroundColor', 'rgba(0, 255, 0, .6)');
  $html.css('filter', 'invert(0)');
  $footer
    .add($topBg)
    .add($LinkMark)
    .add($lightColor)
    .add($DarkButton)
    .add($navLogoMain)
    .add($navLogoText)
    .add($DarkColorMask)
    .add($workLinkPic1)
    .add($workLinkPic2)
    .add($workLinkPic3)
    .add($workLinkPic4)
    .add($workLinkPic5)
    .add($workLinkPic6)
    .add($workLinkPic7)
    .add($workLinkPic8)
    .add($workLinkPic9)
    .removeClass('inverseRepair');
});

$about.on('click', function () {
  $LinkMark.hide();
  $MarkBtnShow.show().css({ width: '25px', height: '2px' });
  $MarkBtnConceal.hide();
  $topBgMask.css('zIndex', '-10');
  $navLinkMarkBox.hide();
  $sideList1
    .add($sideList2)
    .add($sideList3)
    .add($sideList4)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});
$backToTop.on('click', function () {
  $LinkMark.hide();
  $MarkBtnShow.show().css({ width: '25px', height: '2px' });
  $MarkBtnConceal.hide();
  $topBgMask.css('zIndex', '-10');
  $navLinkMarkBox.hide();
  $sideList1
    .add($sideList2)
    .add($sideList3)
    .add($sideList4)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});
$works.on('click', function () {
  $LinkMark.hide();
  $MarkBtnShow.show().css({ width: '25px', height: '2px' });
  $MarkBtnConceal.hide();
  $topBgMask.css('zIndex', '-10');
  $navLinkMarkBox.hide();
  $sideList1
    .add($sideList2)
    .add($sideList3)
    .add($sideList4)
    .add($sideList5)
    .add($sideList6)
    .css('backgroundColor', 'transparent');
});

var $CurrentTime = $('.currentTime');
if ($CurrentTime.length) {
  function clock() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    $CurrentTime.css('color', '#fff');
    $CurrentTime.html(
      `今天是${year}年${month < 10 ? '0' + month : month}月${date < 10 ? '0' + date : date}日${
        hour < 10 ? '0' + hour : hour
      }:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
    );
  }
  clock();
  setInterval(clock, 1000);
}

var $h2Span = $('#h2Span');
if ($h2Span.length) {
  setTimeout(function () {
    $h2Span.css('borderRight', 'none');
  }, 7000);
}

