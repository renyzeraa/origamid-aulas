const botao = document.querySelector('button')
const div = document.querySelector('div')
let valorDiv = Number(div.innerHTML)

if (botao) {
  function somar() {
    valorDiv < 10 ? valorDiv++ : console.log('Valor Total !')
    div.innerHTML = String(valorDiv)
  }
}

botao.addEventListener('click', somar)
