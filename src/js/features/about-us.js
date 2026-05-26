import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiper = null;

function initSwiper() {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }

    return;
  }

  if (!swiper) {
    swiper = new Swiper('.about-us .mySwiper', {
      modules: [Navigation, Pagination],

      loop: false,

      slidesPerView: 1,
      spaceBetween: 24,

      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev',
        disabledClass: 'swiper-button-disabled',
      },

      pagination: {
        el: '.swiper-container .swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },

        1440: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);
