import { createOrder } from '../services/api/orders.js';
import Swal from 'sweetalert2';

const refs = {
  closeModalBtn: document.querySelector('[data-order-close]'),
  modal: document.querySelector('[data-order]'),
  form: document.querySelector('.order-form'),
};

if (refs.closeModalBtn && refs.modal && refs.form) {
  window.addEventListener('order:open', event => {
    const { dessertId } = event.detail;
    refs.modal.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
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
    document.body.classList.remove('modal-open');
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

    const inputPhone = formData.get('phone') || formData.get('tel') || '';
    const cleanPhone = inputPhone.replace(/\D/g, '');

    const orderData = {
      dessertId: refs.modal.dataset.dessertId,
      name: formData.get('name'),
      phone: cleanPhone,
      comment: formData.get('comment'),
    };

    try {
      await createOrder(orderData);

      Swal.fire({
        title: 'Успішно!',
        text: 'Ваше замовлення успішно виконане!',
        icon: 'success',
        confirmButtonColor: '#f19898',
      });

      refs.form.reset();
      closeModal();
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: 'Помилка замовлення',
        text: 'Щось пішло не так при відправці замовлення. Перевірте, чи правильно вписані дані.',
        icon: 'error',
        confirmButtonColor: '#080c0c',
      });
    }
  });
}
