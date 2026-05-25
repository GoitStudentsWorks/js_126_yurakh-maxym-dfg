export function renderCategories(categories) {
  const container = document.querySelector(
  '.categories-desktop'
);

 if (!container) return;

const categoriesWithAll = [
  {
    _id: 'all',
    name: 'Всі десерти',
  },
  ...categories,
];

  const markup = categoriesWithAll
    .map(
      ({ _id, name }, index) => `
      <label>
        <input
          type="radio"
          name="category"
          value="${_id}"
          ${index === 0 ? 'checked' : ''}
        >
        <span class="category-name">
          ${name}
        </span>
      </label>
    `
    )
    .join('');

  container.innerHTML = markup;
}

const ICONS = new URL('../../img/icons.svg', import.meta.url).href;

export function renderDesserts(desserts,
  append = false) {
  const container = document.querySelector(
    '.desserts-list'
  );

  const markup = desserts
    .map(
      ({
        _id,
        image,
        category,
        name,
        description,
        price,
      }) => `
        <li class="dessert-card">
          <img
          class="dessert-card__image"
            src="${image}"
            alt="${name}"
          >

          <p class="dessert-card__category">${category.name}</p>

          <h3 class="dessert-card__title">${name}</h3>

          <p class="dessert-card__description">${description}</p>

          <div class="dessert-card__block">
            <p class="dessert-card__price">${price} грн</p>
            
            <button
      type="button"
      class="dessert-details-btn"
      data-id="${_id}"
      data-modal-open
    >
      <svg class="dessert-details-btn__icon" width="24" height="24">
        <use href="${ICONS}#icon-arrow-outward"></use>
      </svg>
    </button>
          </div>
        </li>
      `
    )
    .join('');

if (append) {
    container.insertAdjacentHTML(
      'beforeend',
      markup
    );
  } else {
    container.innerHTML = markup;
  }
}

export function renderCategoriesSelect(categories) {
  const container = document.querySelector(
    '.categories-mobile'
  );

 if (!container) return;

  const markup = `
    <select class="categories-select">
      <option value="all">Всі десерти</option>

      ${categories
        .map(
          ({ _id, name }) => `
            <option value="${_id}">
              ${name}
            </option>
          `
        )
        .join('')}
    </select>
  `;

  container.innerHTML = markup;
}
