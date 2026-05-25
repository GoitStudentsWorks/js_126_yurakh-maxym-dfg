import { api } from './api.js';

export async function getPopularDesserts(params = {}) {
  const { data } = await api.get('/desserts', {
    params: {
      type: 'popular',
      ...params,
    },
  });

  return data;
}