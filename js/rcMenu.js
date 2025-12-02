var $light = $('.light');
var $lightMenuList = $('.light-menu-list');
var $lightMenuItemList = $('.light-menu-list li');
var $dark = $('.dark');
var $darkMenuList = $('.dark-menu-list');
var $darkMenuItemList = $('.dark-menu-list li');

$light.on('contextmenu', function (e) {
  e.preventDefault();
  var clientX = e.clientX,
    clientY = e.clientY;
  $lightMenuList.attr(
    'style',
    `--width: ${$lightMenuList[0].scrollWidth}; --height: ${$lightMenuList[0].scrollHeight}`
  );
  $lightMenuList.css({ top: clientY + 'px', left: clientX + 'px' }).addClass('menu-show');
  $lightMenuItemList.addClass('menu-item-show');
});
$(document).on('click', function () {
  $lightMenuList.removeClass('menu-show');
  $lightMenuItemList.removeClass('menu-item-show');
});

$dark.on('contextmenu', function (e) {
  e.preventDefault();
  var clientX = e.clientX,
    clientY = e.clientY;
  $darkMenuList.attr(
    'style',
    `--width: ${$darkMenuList[0].scrollWidth}; --height: ${$darkMenuList[0].scrollHeight}`
  );
  $darkMenuList.css({ top: clientY + 'px', left: clientX + 'px' }).addClass('menu-show');
  $darkMenuItemList.addClass('menu-item-show');
});
$(document).on('click', function () {
  $darkMenuList.removeClass('menu-show');
  $darkMenuItemList.removeClass('menu-item-show');
});
