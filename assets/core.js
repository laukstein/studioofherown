(function () {
    "use strict";

    function sticky() {
        if (sticky.el && (!sticky.el.style.height || (document.documentElement.scrollTop <= sticky.diff) || sticky.el.height > sticky.minHeight)) {
            sticky.el.style.height = Math.max(sticky.minHeight, sticky.naturalHeight - document.documentElement.scrollTop) + "px";
        }
    }

    sticky.el = document.getElementById("logo");
    // sticky.el && sticky.el.naturalHeight;
    sticky.naturalHeight = 126;
    sticky.minHeight = 63;
    sticky.diff = sticky.naturalHeight - sticky.minHeight;

    window.addEventListener("scroll", sticky);
    sticky();


    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        dataLayer.push(arguments);
    };

    gtag("js", new Date());
    gtag("config", "UA-140023036-1");
}());
