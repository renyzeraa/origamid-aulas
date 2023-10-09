// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
  event.preventDefault()
  linksInternos.forEach(link => {
    link.classList.remove('ativo')
  })
  this.classList.add('ativo')
  console.log(event)
}

linksInternos.forEach(link => {
  link.addEventListener('click', handleLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const total = document.querySelectorAll('body *')

function handleElemento(event) {
  console.log(event.currentTarget)
}

total.forEach(elemento => {
  elemento.addEventListener('click', handleElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleRemove(event) {
  event.currentTarget.remove()
}
// total.forEach(elemento => {
//   elemento.addEventListener('click', handleRemove)
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClick(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleClick)
