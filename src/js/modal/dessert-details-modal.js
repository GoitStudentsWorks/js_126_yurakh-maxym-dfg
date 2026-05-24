import Raty from 'raty-js';
import 'raty-js/src/raty.css';

const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');

const content = document.querySelector(
  '.dessert_modal_content'
);
const media = document.querySelector('.dessert-modal__media');


function createModalImageMarkup(dessert) {
  return `
    <img class="modal-image" src="${dessert.image}" alt="${dessert.name}">
  `;
}

function createModalInfoMarkup(dessert) {
  return `
    <h2 class="modal-title">${dessert.name}</h2>

    <p class="modal-price">${dessert.price} грн</p>

    <div class="modal-rating">
      <div class="rating-stars" data-rating="${dessert.rate}"></div>
    </div>

    <p class="modal-description">${dessert.description}</p>

    <p class="modal-composition">
      <span class="modal-composition-label">Склад</span>: ${dessert.composition}
    </p>
  `;
}

function roundToHalf(value) {
  return Math.round(value * 2) / 2;
}

function initRating() {
  if (!content) return;

  const starsEl = content.querySelector('.rating-stars');
  if (!starsEl) return;

  const raw = Number(starsEl.dataset.rating) || 0;
  const score = roundToHalf(raw); // якщо хочеш 4.3 -> 4.5

  const raty = new Raty(starsEl, {
    score,
    readOnly: true,
    halfShow: true,
    starType: "i",       
    number: 5,
  });

  raty.init();
}


export function renderModal(dessert) {
  if (!content) return;

  media.innerHTML =
    createModalImageMarkup(dessert);
  content.innerHTML =
    createModalInfoMarkup(dessert);
  
  initRating();
}

export function openDessertDetailsModal() {
  if (!modal) return;

  modal.classList.add('is-modal-open');
  document.body.classList.add('no-scroll');

  document.addEventListener('keydown', handleEscPress);
}

export function closeDessertDetailsModal() {
  if (!modal) return;

  modal.classList.remove('is-modal-open');
  document.body.classList.remove('no-scroll');

  document.removeEventListener('keydown', handleEscPress);
}

function handleEscPress(event) {
  if (event.key === 'Escape') {
    closeDessertDetailsModal();
  }
}

function handleBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeDessertDetailsModal();
  }
}

if (closeModalBtn) {
  closeModalBtn.addEventListener(
    'click',
    closeDessertDetailsModal
  );
}

if (modal) {
  modal.addEventListener(
    'click',
    handleBackdropClick
  );
}
