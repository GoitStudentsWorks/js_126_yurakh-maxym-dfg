const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');

const content = document.querySelector(
  '.dessert_modal_content'
);


function createModalContentMarkup(dessert) {
  return `
    <img
      class="modal-image"
      src="${dessert.image}"
      alt="${dessert.name}"
    >

    <h2 class="modal-title">
      ${dessert.name}
    </h2>

    <p class="modal-price">
      ${dessert.price} грн
    </p>

    <div class="modal-rating">
      ${dessert.rate}
    </div>

    <p class="modal-description">
      ${dessert.description}
    </p>

    <p class="modal-composition">
      <span class="modal-composition-label">Склад</span>: ${dessert.composition}
    </p>
  `;
}


export function renderModal(dessert) {
  if (!content) return;

  content.innerHTML =
    createModalContentMarkup(dessert);
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
