export default function innitScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  function animacaoScroll() {
    const windowMetade = window.innerHeight * 0.7;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade;
      if (isSectionVisible < 0) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    animacaoScroll();

    window.addEventListener("scroll", animacaoScroll);
  }
}
