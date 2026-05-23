import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

import Raty from 'raty-js';

import {
  renderCategories,
  renderDesserts,
} from '../render/renderDesserts.js';
import {getCategories} from '/js/services/api/categories.js';
import { getDesserts } from '../services/api/desserts.js';

async function initDesserts() {
  const categories = await getCategories();

  renderCategories(categories);

 const dessertsData = await getDesserts();

renderDesserts(dessertsData.desserts);

   const container = document.querySelector(
    '.desserts_categories-container'
  );

  container.addEventListener('change', handleCategoryChange);


}

async function handleCategoryChange(event) {
  const categoryId = event.target.value;

  let data;

  if (categoryId === 'all') {
    data = await getDesserts();
  } else {
    data = await getDesserts({
      category: categoryId,
    });
  }

  renderDesserts(data.desserts);
}


initDesserts();



