import { openDessertModal } from '/js/features/desserts-list.js';

(() => {
  const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector('[data-modal-open]'),
      // Додати атрибут data-modal-close на кнопку закриття
      closeModalBtn: document.querySelector('[data-modal-close]'),
      // Додати атрибут data-modal на div-контейнер модалки
      modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-modal-open це клас який буде додаватися/забиратися на div-контейнері при натисканні на кнопки
    refs.modal.classList.toggle('is-modal-open');
  }
})();
