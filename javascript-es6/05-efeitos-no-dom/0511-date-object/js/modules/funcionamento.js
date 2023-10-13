export default function initFuncionamento() {

}

const funcionamento = document.querySelector('[data-semana]');
const aDias = funcionamento.dataset.semana.split(',').map(Number);
const aHorarios = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horaAgora = dataAgora.getHours();

const semanaAberto = aDias.indexOf(diaAgora) !== -1;
const horarioAberto = aHorarios.every(iHorario => {
  return (iHorario < 13) ? horaAgora > iHorario : horaAgora < iHorario;
});

if (semanaAberto && horarioAberto) {
  funcionamento.classList.add('aberto');
}