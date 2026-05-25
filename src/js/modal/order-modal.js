import { createOrder } from '../services/api/orders.js';

const refs = {
  closeModalBtn: document.querySelector('[data-order-close]'),
  modal: document.querySelector('[data-order]'),
  form: document.querySelector('.order-form'),
};

window.addEventListener('order:open', event => {
  const { dessertId } = event.detail;

  refs.modal.classList.remove('is-hidden');
  refs.modal.dataset.dessertId = dessertId;

  document.addEventListener('keydown', onEscPress);
});

refs.closeModalBtn.addEventListener('click', closeModal);

refs.modal.addEventListener('click', event => {
  if (event.target === refs.modal) {
    closeModal();
  }
});

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscPress);
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

refs.form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const orderData = {
    dessertId: refs.modal.dataset.dessertId,
    name: formData.get('name'),
    phone: formData.get('phone'),
    comment: formData.get('comment'),
  };

  try {
    await createOrder(orderData);
    alert('Замовлення успішно оформлено!');
    refs.form.reset();
    closeModal();
  } catch (error) {
    console.error(error);
    alert('Щось пішло не так при відправці замовлення.');
  }
});
