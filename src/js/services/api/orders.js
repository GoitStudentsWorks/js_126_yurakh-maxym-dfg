import { api } from './api';

export async function createOrder(orderData) {
  const { data } = await api.post(
    '/orders',
    orderData
  );

  return data;
}