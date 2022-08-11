export default class ToolTip {
  constructor(toolTips) {
    this.toolTips = document.querySelectorAll(toolTips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.createToolTip = this.createToolTip.bind(this);
  }

  onMouseMove(event) {
    if (event.pageX + 280 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 180}px`;
    } else {
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    }
    this.toolTipBox.style.top = `${event.pageY + 20}px`;
  }

  onMouseOver({ currentTarget }) {
    this.createToolTip(currentTarget);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseLeave({ currentTarget }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  createToolTip(element) {
    const toolTipBox = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = texto;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  addToolTipEvents() {
    this.toolTips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.toolTips.length) {
      this.addToolTipEvents();
    }
    return this;
  }
}
