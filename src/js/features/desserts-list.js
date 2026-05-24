import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

import {
  renderCategories,
  renderCategoriesSelect,
  renderDesserts,
} from '../render/renderDesserts.js';
import {getCategories} from '/js/services/api/categories.js';
import { getDesserts, getDessertById } from '../services/api/desserts.js';

let currentPage = 1;
let currentCategory = 'all';

const loadMoreBtn = document.querySelector(
  '.desserts_load-more-btn'
);


async function loadDesserts(params = {},
  append = false) {
  const data = await getDesserts(params);

  renderDesserts(
    data.desserts,
    append
  );

  return data;
}

function updateLoadMoreButton(data) {
  const totalPages = Math.ceil(
    data.totalItems / data.limit
  );

  loadMoreBtn.hidden =
    currentPage >= totalPages;
}

async function handleLoadMore() {
  currentPage += 1;

  const params = {
    page: currentPage,
    limit: 8,
  };

  if (currentCategory !== 'all') {
    params.category = currentCategory;
  }

const data = await loadDesserts(
  params,
  true
);

updateLoadMoreButton(data);
}



async function initDesserts() {
  const categories = await getCategories();

renderCategories(categories);
renderCategoriesSelect(categories);

await loadDesserts({
  limit: 8,
});

const select = document.querySelector(
  '.categories-select'
);

if (select) {
  new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });

  
}

   const container = document.querySelector(
    '.desserts_categories-container'
  );

  container.addEventListener('change', handleCategoryChange);

  select.addEventListener(
    'change',
    handleCategoryChange
  );

loadMoreBtn.addEventListener(
  'click',
  handleLoadMore
);

const dessertsList = document.querySelector(
  '.desserts-list'
);

dessertsList.addEventListener(
  'click',
  handleDessertClick
);
}

function handleDessertClick(event) {
  const btn = event.target.closest(
    '.dessert-details-btn'
  );

  if (!btn) return;

  const dessertId = btn.dataset.id;

  openDessertModal(dessertId);
}



async function handleCategoryChange(event) {
  const categoryId = event.target.value;
currentCategory = categoryId;
currentPage = 1;

if (categoryId === 'all') {
  const data = await loadDesserts({
    limit: 8,
  });
  updateLoadMoreButton(data);
} else {
  const data = await loadDesserts({
  category: categoryId,
  limit: 8,
});
  updateLoadMoreButton(data);
}

}



export async function openDessertModal(id) {
    const dessert = await getDessertById(id);
}

initDesserts();