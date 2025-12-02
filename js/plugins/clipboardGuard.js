(function ($, d) {
  function ClipboardGuard(opts) {
    this.opts = opts || {};
    this.alert = d.querySelector(".Alert");
    this._bind();
  }

  ClipboardGuard.prototype._show = function (text) {
    if (!this.alert) return;
    this.alert.innerHTML = text;
    this.alert.style.display = "flex";
    var self = this;
    setTimeout(function () {
      self.alert.style.display = "none";
    }, 3000);
    this.alert.onclick = function () {
      self.alert.style.display = "none";
    };
  };

  ClipboardGuard.prototype._bind = function () {
    var self = this;
    d.addEventListener("copy", function (e) {
      self._show("你在复制什么呢？");
      e.preventDefault();
    });
    d.addEventListener("paste", function (e) {
      self._show("你在粘贴什么呢？");
      e.preventDefault();
    });
    d.addEventListener("cut", function (e) {
      self._show("你在剪切什么呢？");
      e.preventDefault();
    });
    d.addEventListener("drag", function () {
      self._show("小主, 不要拽了,很痛的o(╥﹏╥)o");
    });
  };

  window.ClipboardGuard = ClipboardGuard;
})(window.jQuery, document);
