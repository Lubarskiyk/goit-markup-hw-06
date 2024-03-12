(() => {
  //   const refs = {
  //     openModalBtn: document.querySelector('[data-modal-open]'),
  //     closeModalBtn: document.querySelector('[data-modal-close]'),
  //     modal: document.querySelector('[data-modal]'),
  //   };

  const burger = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[burger-modal]'),
  };

  //   refs.openModalBtn.addEventListener('click', toggleModal);
  //   refs.closeModalBtn.addEventListener('click', toggleModal);

  burger.openBurgerBtn.addEventListener('click', toggleBurger);
  burger.closeBurgerBtn.addEventListener('click', toggleBurger);

  //   function toggleModal() {
  //     refs.modal.classList.toggle('is-open');
  //   }
  function toggleBurger() {
    burger.burger.classList.toggle('is-burger-open');
  }
})();
