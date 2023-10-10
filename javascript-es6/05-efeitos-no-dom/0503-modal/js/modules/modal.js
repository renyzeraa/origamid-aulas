export default function initModal() {
  const btnLogin = document.querySelector('[data-modal="abrir"]');
  const oModalContainer = document.querySelector('.modal-container');
  const btnCloseModal = document.querySelector('[data-modal="fechar"]');

  if (!btnLogin && !oModalContainer && !btnCloseModal) {
    return;
  }
  btnLogin.addEventListener('click', handleModal);
  btnCloseModal.addEventListener('click', handleModal);
  oModalContainer.addEventListener('click', closeAllModal);

  function handleModal(oEv) {
    oEv.preventDefault();
    oModalContainer.classList.toggle('ativo');
  }

  function closeAllModal(event) {
    if (event.target === this) {
      oModalContainer.classList.toggle('ativo')
    }
  }
}

