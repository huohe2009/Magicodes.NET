/* ========================================
 * Magicodes Blog Front-end JavaScript
 * ver. 0.0.100
 * by taojiachun
 * ======================================== */






/* ========================================
 * 通用页面
 * fixed footer-sole
 * ======================================== */

+function ($) {
  'use strict';
  
  // 当footer-sole为fixed时，使其在页面底部与之前内容的距离如同非fixed一样高。
  if ($(".footer-sole").css("position") === "fixed") {
    
    var fPH, fsPH;
    
    // footer中container的padding-bottom值
    fPH = $(".footer").children(".container").css("padding-bottom").slice(0, $(".footer").children(".container").css("padding-bottom").length - 2);
    
    // footer-sole的高度
    fsPH = $(".footer-sole").outerHeight();
    
    // 将footer-sole的高度加到footer的padding-bootm上去
    $(".footer").children(".container").css("padding-bottom", Number(fPH) + Number(fsPH) + "px");

  }
  
}(jQuery);




/* ========================================
 * Homepage
 * 顶部 topbar & 底部 footer 背景变色
 * ======================================== */

+function ($) {
  'use strict';
  
  $(window).scroll(function () {
    
    /* topbar */
    if ($(window).scrollTop() > 30) {
      $(".topbar").css("background", "rgba(0, 0, 0, 0.8)");
    }
    if ($(window).scrollTop() < 30) {
      $(".topbar").css("background", "none");
    }
    
    /* footer */    
    if ($("body").hasClass("m-home")) {
      if ($(window).scrollTop() > 1) {
        $(".footer-sole").css("background", "rgba(0, 0, 0, 0.8)");
      }
      if ($(window).scrollTop() < 1) {
        $(".footer-sole").css("background", "none");
      }
    }
    
  });

}(jQuery);
















