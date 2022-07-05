// Retorne um número aleatório
// entre 1050 e 2000
const number = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050 // entre 0 e 100
console.log(number)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 30, 109'
const arrayNumber = numeros.split(', ')
const maiorNumber = Math.max(...arrayNumber)
console.log(maiorNumber)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200']

function limparPrecos(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0
listaPrecos.forEach(preco => {
  soma += limparPrecos(preco)
})

limparPrecos(listaPrecos[1])

console.log(soma)
