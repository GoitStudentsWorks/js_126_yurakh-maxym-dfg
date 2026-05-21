

import {renderCategories} from '/js/render/renderDesserts.js';
import {getCategories} from '/js/services/api/categories.js';

const categories = await getCategories();

renderCategories(categories);