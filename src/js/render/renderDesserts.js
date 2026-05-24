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
            src="${image}"
            alt="${name}"
          >

          <p>${category.name}</p>

          <h3>${name}</h3>

          <p>${description}</p>

          <p>${price} грн</p>
          
          <button
    type="button"
    class="dessert-details-btn"
    data-id="${_id}"
  >
    <svg width="24" height="24">
      <use href="/img/icons.svg#icon-arrow-outward"></use>
    </svg>
  </button>
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