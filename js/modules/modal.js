export default function initModal() {
  const loginBtn = document.querySelector("[data-modal='abrir']");
  const modalContainer = document.querySelector("[data-modal='container']");
  const modalExit = document.querySelector("[data-modal='fechar']");
  const body = document.querySelector("body");

  function toggleModal(e) {
    e.preventDefault();
    modalContainer.classList.toggle("ativo");
    body.classList.toggle("parado");
  }

  function outModal(e) {
    if (e.target === modalContainer) {
      toggleModal(e);
    }
  }

  modalExit.addEventListener("click", toggleModal);
  loginBtn.addEventListener("click", toggleModal);
  modalContainer.addEventListener("click", outModal);
}
