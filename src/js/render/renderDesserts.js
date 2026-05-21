export function renderCategories(categories) {
  const container = document.querySelector('.desserts_categories-container');

  const markup = categories.map(({ _id, name }) => `
    <label>
      <input
        type="radio"
        name="category"
        value="${_id}"
      >
      ${name}
    </label>
  `).join('');

  container.innerHTML = markup;
}