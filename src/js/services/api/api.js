const BASE_URL = 'https://deserts-store.b.goit.study/api';

export async function request(endpoint, options = {}) {
  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    options
  );

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}