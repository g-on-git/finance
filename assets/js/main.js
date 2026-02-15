(function ($) {
  "use strict";

  const $documentOn = $(document);
  const $window = $(window);

  $documentOn.ready(function () {
    // Clone main menu into mobile menu
    if ($("#mobile-menu").length) {
      let mobileMenuContent = $("#mobile-menu").html();
      $(".mobile-menu").html(mobileMenuContent);
    }
    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    if ($(".hero-slider").length) {
      const heroSlider = new Swiper(".hero-slider", {
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        speed: 3000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-next",
          prevEl: ".array-prev",
        },
      });
    }
  });
})(jQuery);
