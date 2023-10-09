// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('.animais-lista')
let distancia = primeiraImagem.offsetTop
console.log(distancia)

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  let soma = 0
  const imagens = document.querySelectorAll('img')
  imagens.forEach(imagem => {
    soma += imagem.offsetWidth
  })
  console.log(soma)
}
window.onload = () => {
  somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach(link => {
  const linkHeight = link.offsetHeight
  const linkWidth = link.offsetWidth
  if (linkHeight >= 48 && linkWidth >= 48) {
    console.log(link, ' Possui acessibilidade')
  } else {
    console.log(link, ' Não boa possui acessibilidade')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mobileFirst = window.matchMedia('(max-width: 720px)').matches

if (mobileFirst) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}
