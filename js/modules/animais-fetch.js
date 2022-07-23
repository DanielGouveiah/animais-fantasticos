import initAnimaNumeros from "./anima-numeros.js";

export default function initAnimaisFetch() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJson.forEach((animal) => {
        const animalDiv = createAnimal(animal);
        numerosGrid.appendChild(animalDiv);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimais("../animaisapi.json");
}
