import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getPopularDesserts } from '../services/api/popular.js';

import { openDessertModal } from './desserts-list.js';

const section = document.querySelector('.popular-products');
if (!section) {
} else {
  const wrapper = section.querySelector('.popular-products-wrapper');

  async function initPopular() {
    const data = await getPopularDesserts({ page: 1, limit: 10 });

    if (!data?.desserts || data.desserts.length < 3) {
      section.style.display = 'none';
      return;
    }

    wrapper.innerHTML = createSlidesMarkup(data.desserts);

    const swiper = new Swiper(section.querySelector('.popular-products-slider'), {
      modules: [Navigation, Pagination, Keyboard],
      loop: false,
      slidesPerView: 1,
      spaceBetween: 16,
      keyboard: { enabled: true },

      navigation: {
        nextEl: section.querySelector('.popular-products-next'),
        prevEl: section.querySelector('.popular-products-prev'),
        disabledClass: 'swiper-button-disabled',
      },

      pagination: {
        el: section.querySelector('.popular-products-pagination'),
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },

      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 16 },
        1440: { slidesPerView: 3, spaceBetween: 24 },
      },
    });

    wrapper.addEventListener('click', (e) => {
      const btn = e.target.closest('.dessert-details-btn');
      if (!btn) return;

      const id = btn.dataset.id;
      if (!id) return;

      openDessertModal(id);
    });
  }

  function createSlidesMarkup(desserts) {
    return desserts.map(d => {
      return `
        <div class="swiper-slide">
          ${createCardMarkup(d)}
        </div>
      `;
    }).join('');
    }
    
    const ICONS = new URL('../../img/icons.svg', import.meta.url).href;

  function createCardMarkup({ _id, image, category, name, description, price }) {
    return `
      <div class="dessert-card dessert-card--popular">
        <img class="dessert-card__image" src="${image}" alt="${name}">
        <p class="dessert-card__category">${category?.name ?? ''}</p>
        <h3 class="dessert-card__title">${name}</h3>
        <p class="dessert-card__description">${description}</p>

        <div class="dessert-card__block">
          <p class="dessert-card__price">${price} грн</p>

          <button type="button" class="dessert-details-btn" data-id="${_id}">
            <svg class="dessert-details-btn__icon" width="24" height="24">
              <use href="${ICONS}#icon-arrow-outward"></use>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  initPopular().catch((err) => {
  console.error('Popular products error:', err);
});
}