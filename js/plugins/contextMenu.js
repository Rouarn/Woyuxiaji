(function ($, d) {
  function ContextMenu(opts) {
    this.opts = opts || {};
    this.light = d.querySelector('.light');
    this.dark = d.querySelector('.dark');
    this.lightMenu = d.querySelector('.light-menu-list');
    this.darkMenu = d.querySelector('.dark-menu-list');
    this._bind();
  }

  ContextMenu.prototype._bind = function () {
    var self = this;
    if (this.light) {
      $(this.light).on('contextmenu', function (e) {
        e.preventDefault();
        var x = e.clientX,
          y = e.clientY;
        if (self.lightMenu) {
          $(self.lightMenu)
            .css({ top: y + 'px', left: x + 'px' })
            .addClass('menu-show');
          $(self.lightMenu).find('li').addClass('menu-item-show');
        }
      });
    }
    if (this.dark) {
      $(this.dark).on('contextmenu', function (e) {
        e.preventDefault();
        var x = e.clientX,
          y = e.clientY;
        if (self.darkMenu) {
          $(self.darkMenu)
            .css({ top: y + 'px', left: x + 'px' })
            .addClass('menu-show');
          $(self.darkMenu).find('li').addClass('menu-item-show');
        }
      });
    }
    $(d).on('click', function () {
      if (self.lightMenu) {
        $(self.lightMenu).removeClass('menu-show').find('li').removeClass('menu-item-show');
      }
      if (self.darkMenu) {
        $(self.darkMenu).removeClass('menu-show').find('li').removeClass('menu-item-show');
      }
    });
  };

  window.ContextMenu = ContextMenu;
})(window.jQuery, document);
