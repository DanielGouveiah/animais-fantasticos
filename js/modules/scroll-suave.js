export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (this.options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.scrollSuave = this.scrollSuave.bind(this);
  }

  scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEventElement() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollSuave);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addEventElement();
    }
    return this;
  }
}
