(() => {
  const refs = {
      // Додати атрибут data-menu-open на кнопку відкриття
      openModalBtn: document.querySelector('[data-menu-open]'),
      // Додати атрибут data-menu-close на кнопку закриття
      closeModalBtn: document.querySelector('[data-menu-close]'),
      // Додати атрибут data-menu на div-контейнер модалки
      modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-menu-open це клас який буде додаватися/забиратися на div-контейнері при натисканні на кнопки
    refs.modal.classList.toggle('is-menu-open');
  }
})();
