(function () {
  var d = document;

  function showAlert(message) {
    var el = d.querySelector(".Alert");
    if (!el) return;
    el.innerHTML = message;
    el.style.display = "flex";
    setTimeout(function () {
      el.style.display = "none";
    }, 3000);
    el.onclick = function () {
      el.style.display = "none";
    };
  }

  window.addEventListener("error", function (e) {
    showAlert("脚本错误已捕获");
    console.error(e.error || e.message || e);
  });
  window.addEventListener("unhandledrejection", function (e) {
    showAlert("异步错误已捕获");
    console.error(e.reason || e);
  });

  var $body = window.jQuery ? window.jQuery("body") : null;
  var cache = {
    body: $body,
    navbar: d.getElementById("navbar"),
    navLinkBox: d.getElementById("navLinkBox"),
  };
  window.AppCache = cache;

  if (window.jQuery && window.jQuery.fn && window.jQuery.fn.themeToggle) {
    window.jQuery("body").themeToggle({
      container: "#navbar",
      lightSelector: ".darkButton",
      darkSelector: ".lightButton",
      duration: 500,
    });
  }

  if (window.ContextMenu) { try { new window.ContextMenu(); } catch (e) {} }
  if (window.ClipboardGuard) { try { new window.ClipboardGuard(); } catch (e) {} }

  var initWOW = function () {
    if (window.WOW) {
      try {
        new window.WOW().init();
      } catch (err) {
        console.warn(err);
      }
    }
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(initWOW);
  } else {
    setTimeout(initWOW, 0);
  }
})();
