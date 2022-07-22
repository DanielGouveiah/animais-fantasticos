export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  // Executa o evento de toggle
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona o evento de toggle
  addEventElement() {
    if (this.accordionList.length) {
      this.accordionList.forEach((item) => {
        item.addEventListener("click", () => this.toggleAccordion(item));
      });
    }
  }

  // Inicia o accordion
  init() {
    // Adiciona ativo ao primeiro item
    this.toggleAccordion(this.accordionList[0]);
    this.addEventElement();
  }
}
