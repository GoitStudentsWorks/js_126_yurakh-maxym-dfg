import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

// import Raty from 'raty-js';

import {
  renderCategories,
  renderCategoriesSelect,
  renderDesserts,
} from '../render/renderDesserts.js';
import {getCategories} from '/js/services/api/categories.js';
import { getDesserts } from '../services/api/desserts.js';

let currentPage = 1;
let currentCategory = 'all';

const loadMoreBtn = document.querySelector(
  '.desserts_load-more-btn'
);


async function loadDesserts(params = {}) {
  const data = await getDesserts(params);

  renderDesserts(data.desserts);

  return data;
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

  select.addEventListener(
    'change',
    handleCategoryChange
  );
}

   const container = document.querySelector(
    '.desserts_categories-container'
  );

  container.addEventListener('change', handleCategoryChange);

select.addEventListener('change', handleCategoryChange);

loadMoreBtn.addEventListener(
  'click',
  handleLoadMore
);
}

async function handleCategoryChange(event) {
  const categoryId = event.target.value;


if (categoryId === 'all') {
  await loadDesserts({
    limit: 8,
  });
} else {
  await loadDesserts({
  category: categoryId,
  limit: 8,
});
}

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

  await loadDesserts(params);
}

initDesserts();