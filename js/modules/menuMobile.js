import outSideClick from "./outSideClick.js";

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.menuMobile = document.querySelector(menuButton);
    this.listMobile = document.querySelector(menuList);
    this.events = ["click", "touch"];
    this.activeClass = "ativo";

    this.abreMenu = this.abreMenu.bind(this);
  }

  abreMenu() {
    this.menuMobile.classList.add(this.activeClass);
    this.listMobile.classList.add(this.activeClass);

    outSideClick(this.listMobile, this.events, () => {
      this.menuMobile.classList.remove(this.activeClass);
      this.listMobile.classList.remove(this.activeClass);
    });
  }

  addElementEvent() {
    this.events.forEach((userEvent) => {
      this.menuMobile.addEventListener(userEvent, this.abreMenu);
    });
  }

  init() {
    this.addElementEvent();
  }
}
