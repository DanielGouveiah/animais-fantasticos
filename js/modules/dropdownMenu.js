import outSideClick from "./outSideClick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.menus = document.querySelectorAll(dropdownMenus);
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
    this.activeClass = "ativo";

    this.activeDropdown = this.activeDropdown.bind(this);
  }

  activeDropdown(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.menus.forEach((item) => {
      ["click", "touchstart"].forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }

  init() {
    if (this.menus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
