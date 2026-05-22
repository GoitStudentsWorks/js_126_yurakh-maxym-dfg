(() => {
  const refs = {
      // Додати атрибут data-order-open на кнопку відкриття
      openModalBtn: document.querySelector('[data-order-open]'),
      // Додати атрибут data-order-close на кнопку закриття
      closeModalBtn: document.querySelector('[data-order-close]'),
      // Додати атрибут data-order на div-контейнер модалки
      modal: document.querySelector('[data-order]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-order-open це клас який буде додаватися/забиратися на div-контейнері при натисканні на кнопки
    refs.modal.classList.toggle('is-order-open');
  }
})();
