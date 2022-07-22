import outSideClick from "./outSideClick.js";

export default function initDropDown() {
  const menus = document.querySelectorAll("[data-dropdown]");
  function toggleDropdown(e) {
    e.preventDefault();
    this.classList.add("ativo");
    outSideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }
  menus.forEach((item) => {
    ["click", "touchstart"].forEach((userEvent) => {
      item.addEventListener(userEvent, toggleDropdown);
    });
  });
}
