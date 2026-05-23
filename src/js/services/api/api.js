import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://deserts-store.b.goit.study/api', 
  timeout: 10000,
});
