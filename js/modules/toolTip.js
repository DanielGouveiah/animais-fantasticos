export default function initToolTip() {
  const toolTips = document.querySelectorAll("[data-toolTip]");

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY + 20}px`;
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    },
  };
  function onMouseOver() {
    const onMouseLeave = {
      handleEvent() {
        this.toolTipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };

    function createToolTip(element) {
      const toolTipBox = document.createElement("div");
      const texto = element.getAttribute("aria-label");
      toolTipBox.classList.add("tooltip");
      toolTipBox.innerText = texto;
      document.body.appendChild(toolTipBox);
      return toolTipBox;
    }
    const toolTipBox = createToolTip(this);

    this.addEventListener("mouseleave", onMouseLeave);
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;

    this.addEventListener("mousemove", onMouseMove);
    onMouseMove.toolTipBox = toolTipBox;
  }
  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
