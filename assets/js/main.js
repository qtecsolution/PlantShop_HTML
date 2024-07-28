// nice-select2
document.addEventListener("DOMContentLoaded", function (e) {
  var els = document.querySelectorAll(".selectize");
  els.forEach(function (select) {
    NiceSelect.bind(select);
    console.log(select);
  });
});

// swiper js
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#button-next-relacionados",
    prevEl: "#button-prev-relacionados",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: "#meetExpertNext",
    prevEl: "#meetExpertPrev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: "#universityNext",
    prevEl: "#universityPrev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// AOS
AOS.init();
