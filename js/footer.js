var $CMList = $('.light-menu-list>li');
var $alert = $('.Alert');
var tag = null;
$(document).on('contextmenu', function(e){ tag = e.target || e.srcElement; return false; });

$CMList.each(function(index, item){
  if (index === 0) {
    $(item).on('click', function(e){
      $alert.html('你在复制什么呢？').css('display', 'flex');
      setTimeout(function(){ $alert.css('display', 'none'); }, 3000);
      $alert.on('click', function(){ $alert.css('display', 'none'); });
      var url = window.location.href;
      var title = document.title;
      var content = '(●ˇ∀ˇ●) 不让复制';
      var str = `网址：${url}  标题：${title}  内容：${content}`;
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(str); }
      e.preventDefault();
    });
  } else if (index === 1) {
    $(item).on('click', function(e){
      $alert.html('你在粘贴什么呢？').css('display', 'flex');
      setTimeout(function(){ $alert.css('display', 'none'); }, 3000);
      $alert.on('click', function(){ $alert.css('display', 'none'); });
      e.preventDefault();
    });
  } else if (index === 2) {
    $(item).on('click', function(e){
      $alert.html('你在剪切什么呢？').css('display', 'flex');
      setTimeout(function(){ $alert.css('display', 'none'); }, 3000);
      $alert.on('click', function(){ $alert.css('display', 'none'); });
      e.preventDefault();
    });
  } else if (index === 3) {
    $(item).on('click', function(e){
      $alert.html('你在保存什么呢？').css('display', 'flex');
      setTimeout(function(){ $alert.css('display', 'none'); }, 3000);
      $alert.on('click', function(){ $alert.css('display', 'none'); });
      e.preventDefault();
    });
  } else if (index === 5) {
    $(item).on('click', function(e){
      $alert.html('你在删除什么呢？').css('display', 'flex');
      setTimeout(function(){ $alert.css('display', 'none'); }, 3000);
      if (tag && tag.remove) { $(tag).remove(); }
      e.preventDefault();
    });
  }
});

