export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    this.diaAberto = this.diaSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto =
      this.horaAgora >= this.horarioSemana[0] && this.horaAgora < this.horarioSemana[1];

    return this.diaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    this.dadosFuncionamento();
    this.dadosAgora();

    if (this.funcionamento) {
      this.ativaAberto();
    }
    return this;
  }
}
