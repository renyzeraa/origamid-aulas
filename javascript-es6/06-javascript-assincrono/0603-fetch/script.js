// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
  .catch(error => resultadoCep.innerText = 'Não foi possível buscar este cep');
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc');
const btnAtualizaBtc = document.querySelector('.btcAtualiza');
const symbol = 'BRL';

async function fetchBtc() {
  return fetch('https://blockchain.info/ticker')
  .then((response) => {
    return response.text();
  })
  .then((apiBitcoin) => {
    const response = JSON.parse(apiBitcoin);
    btcDisplay.innerText = 'R$ ' + response[symbol].buy;
  });
}
fetchBtc();
btnAtualizaBtc.addEventListener('click' , fetchBtc);

// setInterval(fetchBtc, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function fetchPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then((piada) => {
    paragrafoPiada.innerText = piada.value;
  })
}
fetchPiada();
btnProxima.addEventListener('click', fetchPiada);