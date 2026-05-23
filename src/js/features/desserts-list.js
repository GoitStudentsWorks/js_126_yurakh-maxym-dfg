import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

import Raty from 'raty-js';

import {renderCategories} from '/js/render/renderDesserts.js';
import {getCategories} from '/js/services/api/categories.js';

async function initDesserts() {
  const categories = await getCategories();

  renderCategories(categories);
}

initDesserts();

