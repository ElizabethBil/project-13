(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    closeMenuLink: document.querySelectorAll('.header-mobile-nav-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeMenuLink.forEach(item =>
    item.addEventListener('click', toggleModal)
  );

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
