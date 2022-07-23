export default class Modal {
  constructor(botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(container);

    // define o this das funções como o constructor
    this.outSideModal = this.outSideModal.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
  }

  // Da toggle
  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
    document.body.classList.toggle("parado");
    console.log(this.modalContainer);
  }

  // Usa função de toggle no evento
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  // Fecha modal caso o clique seja fora dele
  outSideModal(e) {
    if (e.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  // Adiciona os eventos
  addModalEvent() {
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.outSideModal);
  }

  // Inicia a classe
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvent();
    }
  }
}
