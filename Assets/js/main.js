let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    }
  });

  