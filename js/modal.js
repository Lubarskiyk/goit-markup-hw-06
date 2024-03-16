(() => {
  const refs = {
    modal: document.querySelector('#modal'),
    openBtn: document.querySelector('#modal-open'),
    closeBtn: document.querySelector('#modal-close'),
  };
  refs.modal.addEventListener('close', () =>
    refs.modal.classList.remove('modal-open')
  );
  refs.openBtn.addEventListener('click', () => {
    refs.modal.showModal();
    refs.modal.classList.add('modal-open');
  });
  refs.closeBtn.addEventListener('click', () => modal.close());

  const burger = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[burger-modal]'),
  };
  burger.openBurgerBtn.addEventListener('click', toggleBurger);
  burger.closeBurgerBtn.addEventListener('click', toggleBurger);
  function toggleBurger() {
    burger.burger.classList.toggle('is-burger-open');
  }
})();
