export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const diaAgora = new Date().getDay();
  const horaAgora = new Date().getHours();

  const diaAberto = diaSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];

  const aberto = diaAberto && horarioAberto;

  if (aberto) {
    funcionamento.classList.add("aberto");
  }
}
