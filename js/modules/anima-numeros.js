export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerHTML;
      const incremento = Math.floor(total / 100);

      let i = 0;
      const intervalo = setInterval(() => {
        i += incremento;
        numero.innerHTML = i;
        if (i > total) {
          numero.innerHTML = total;
          clearInterval(intervalo);
        }
      }, 30 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros();
      observer.disconnect();
    }
  }
  const observedSection = document.querySelector(".numeros");
  observer = new MutationObserver(handleMutation);
  observer.observe(observedSection, { attributes: true });
}
