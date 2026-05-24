import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import Raty from 'raty-js';
import 'raty-js/src/raty.css';
import Swal from 'sweetalert2';

const list = document.querySelector('.feedback-list');
const swiperContainer = document.querySelector('.feedback-slider');
const btnNext = document.querySelector('.feedback-slider .swiper-button-next');
const btnPrev = document.querySelector('.feedback-slider .swiper-button-prev');
const swiperPagin = document.querySelector(
  '.feedback-slider .swiper-pagination'
);
let currentPage = 1;
const perPage = 10;
let swiperInstance = null;

function createMarcup(arr) {
  return arr
    .map(
      ({ rate, description, author }) =>
        `<li class="feedback-card swiper-slide">
    <div class="feedback-card-rating" data-rate=${rate}>
   
    </div>
    <div class="feedback-container">
    <p class="feedback-card-description">"${description}"</p>
    <p class="feedback-card-author">${author}</p>
    </div>
        </li>`
    )
    .join('');
}
function initRatings() {
  const ratingElements = document.querySelectorAll('.feedback-card-rating');

  ratingElements.forEach(element => {
    const currentRate = element.getAttribute('data-rate');

    const ratyInstance = new Raty(element, {
      score: Number(currentRate),
      readOnly: true,
      halfShow: true,
      round: { down: 0.26, up: 0.76 },
      starType: 'i',
      number: 5,
    });

    ratyInstance.init();
  });
}

function initSwiper() {
  swiperInstance = new Swiper(swiperContainer, {
    modules: [Navigation, Pagination, Keyboard],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    pagination: {
      el: swiperPagin,
      clickable: true,
      dynamicBullets: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}

async function getInfo() {
  const URL = 'https://deserts-store.b.goit.study/api/';
  const andpoint = 'feedbacks';
  const params = {
    page: currentPage,
    limit: perPage,
  };
  try {
    const { data } = await axios(`${URL}${andpoint}`, { params });
    const feedbacks = data.feedbacks || data;
    list.innerHTML = createMarcup(feedbacks);
    initRatings();
    initSwiper();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Упс... Щось пішло не так',
      text: error.message,
    });
  }
}
getInfo();
