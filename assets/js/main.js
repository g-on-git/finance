(function ($) {
  "use strict";

  const $documentOn = $(document);
  const $window = $(window);

  $documentOn.ready(function () {
    // Clone main menu into mobile menu
    // if ($("#mobile-menu").length) {
    //   let mobileMenuContent = $("#mobile-menu").html();
    //   $(".mobile-menu").html(mobileMenuContent);
    // }

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
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

  //>> Service Slider Start <<//
  if ($(".service-slider-3").length > 0) {
    const ServiceSlider3 = new Swiper(".service-slider-3", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },

      navigation: {
        nextEl: ".arrow-prev",
        prevEl: ".arrow-next",
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }
})(jQuery);
