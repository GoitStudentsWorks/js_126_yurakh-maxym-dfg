(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuLinks: document.querySelectorAll('.mobile-menu-link, .mobile-menu-btn'),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) {
    return;
  }

  refs.openMenuBtn.addEventListener('click', openMenu);
  refs.closeMenuBtn.addEventListener('click', closeMenu);

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function openMenu() {
    refs.menu.classList.add('is-menu-open');
    document.body.classList.add('no-scroll');
    refs.openMenuBtn.setAttribute('aria-expanded', 'true');

    document.addEventListener('keydown', onEscPress);
  }

  function closeMenu() {
    refs.menu.classList.remove('is-menu-open');
    document.body.classList.remove('no-scroll');
    refs.openMenuBtn.setAttribute('aria-expanded', 'false');

    document.removeEventListener('keydown', onEscPress);
  }

  function onEscPress(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }
})();