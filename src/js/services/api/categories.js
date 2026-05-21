import { api } from './api';

export async function getCategories() {
  const { data } = await api.get('/categories');

  return data;
}

const categories = await getCategories();
