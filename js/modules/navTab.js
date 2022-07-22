export default function initNavTab() {
  const activeClass = "ativo";
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll(" [data-tab='content']  section");
  function tabActive(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        tabActive(index);
      });
    });
  }
}
