import { api } from './api';

export async function getDesserts(params = {}) {
  const { data } = await api.get('/desserts', {
    params,
  });

  return data;
}


export async function getDessertById(id) {
  const { data } = await api.get(`/desserts/${id}`);

  return data;
}