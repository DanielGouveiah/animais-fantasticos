import outSideClick from "./outSideClick.js";

export default function initMenuMobile() {
  const menuMobile = document.querySelector("[data-menu='button']");
  const listMobile = document.querySelector("[data-menu='list']");
  const events = ["click", "touch"];

  function abreMenu() {
    menuMobile.classList.add("ativo");
    listMobile.classList.add("ativo");

    outSideClick(listMobile, events, () => {
      menuMobile.classList.remove("ativo");
      listMobile.classList.remove("ativo");
    });
  }
  events.forEach((userEvent) => {
    menuMobile.addEventListener(userEvent, abreMenu);
  });
}
