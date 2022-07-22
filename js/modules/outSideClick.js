export default function outSideClick(element, events, callBack) {
  const html = document.documentElement;
  const outSide = "data-outside";
  function outSideEvent(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outSide);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, outSideEvent);
      });
      callBack();
    }
  }
  events.forEach((userEvent) => {
    if (!element.hasAttribute(outSide)) {
      setTimeout(() => {
        html.addEventListener(userEvent, outSideEvent);
      });
      element.setAttribute(outSide, " ");
    }
  });
}
