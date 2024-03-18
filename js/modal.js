(() => {
  const refs = {
    modal: document.querySelector('#modal'),
    openBtn: document.querySelector('#modal-open'),
    closeBtn: document.querySelector('#modal-close'),
    body: document.querySelector('body'),
  };
  refs.modal.addEventListener('close', () =>
    refs.modal.classList.remove('modal-open')
  );
  refs.openBtn.addEventListener('click', () => {
    refs.modal.showModal();
    refs.modal.classList.add('modal-open');
    burger.body.classList.add('lock');
  });
  refs.closeBtn.addEventListener('click', () => {
    refs.modal.close();
    burger.body.classList.remove('lock');
  });

  const burger = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[burger-menu]'),
    body: document.querySelector('body'),
    menu: document.querySelectorAll('[header-menu]'),
  };

  burger.openBurgerBtn.addEventListener('click', addBurger);
  burger.closeBurgerBtn.addEventListener('click', removeBurger);
  for (i = 0; i < burger.menu.length; i++) {
    burger.menu[i].addEventListener('click', removeBurger);
  }
  function removeBurger() {
    burger.body.classList.remove('lock');
    burger.burger.classList.remove('is-burger-open');
  }
  function addBurger() {
    burger.body.classList.add('lock');
    burger.burger.classList.add('is-burger-open');
  }
})();
