export default function initAccordion() {
  const activeClass = "ativo";
  const dt = document.querySelectorAll("[data-anime='accordion'] dt");
  dt[0].classList.add("ativo");
  dt[0].nextElementSibling.classList.add("ativo");
  function accordionActive() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (dt.length) {
    dt.forEach((item) => {
      item.addEventListener("click", accordionActive);
    });
  }
}
