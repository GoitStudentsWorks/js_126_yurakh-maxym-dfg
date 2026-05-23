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
        ${name}
      </label>
    `
    )
    .join('');

  container.innerHTML = markup;
}

export function renderDesserts(desserts) {
  const container = document.querySelector(
    '.desserts-list'
  );

  const markup = desserts
    .map(
      ({
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
        </li>
      `
    )
    .join('');

  container.innerHTML = markup;
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