import AnimaNumeros from "./anima-numeros.js";

export default function AnimaisFetch(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function animaisAnimaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const animalDiv = createAnimal(animal);
    numerosGrid.appendChild(animalDiv);
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaisAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
