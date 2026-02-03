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
