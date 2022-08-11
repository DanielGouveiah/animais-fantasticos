export default class AnimaNumeros {
  constructor(numeros, observedSection, mutationClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observedSection = document.querySelector(observedSection);
    this.mutationClass = mutationClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
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
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.mutationClass)) {
      this.animaNumeros();
      this.observer.disconnect();
    }
  }

  addHandleMutation() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observedSection, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observedSection) {
      this.addHandleMutation();
    }
    return this;
  }
}
