(function ($) {
  if (!$) return;
  $.fn.themeToggle = function (options) {
    var opts = $.extend(
      {
        container: "body",
        lightSelector: ".darkButton",
        darkSelector: ".lightButton",
        duration: 500,
      },
      options || {}
    );

    var $container = $(opts.container);
    var $body = $("body");

    function toDark() {
      $body.css("background-color", "#000");
      $body.addClass("dark-animation");
      $body.removeClass("light-animation");
      setTimeout(function () {
        $body.css("background-color", "transparent");
        $body.removeClass("dark-animation");
      }, opts.duration);
    }

    function toLight() {
      $body.css("background-color", "#fff");
      $body.addClass("light-animation");
      $body.removeClass("dark-animation");
      setTimeout(function () {
        $body.removeClass("light-animation");
        $body.css("background-color", "transparent");
      }, opts.duration);
    }

    $container.on("click", function (e) {
      var target = e.target;
      if (!target) return;
      var darkBtn = target.closest(opts.darkSelector);
      var lightBtn = target.closest(opts.lightSelector);
      if (darkBtn) toDark();
      if (lightBtn) toLight();
    });

    return this;
  };
})(window.jQuery);
