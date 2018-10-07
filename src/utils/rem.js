(function (a, d) {
    var b = a.documentElement, c = function () {
        var a = b.clientWidth;
        a && (b.style.fontSize = a / 750 * 100 + "px")
    };
    a.addEventListener && (d.addEventListener("orientationchange" in window ? "orientationchange" : "resize", c, !1), a.addEventListener("DOMContentLoaded", c, !1))
})(document, window);

