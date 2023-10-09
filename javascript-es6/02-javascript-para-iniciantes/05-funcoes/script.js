// Crie uma função para verificar se um valor é Truthy
function verdadeiro(valor) {
  return !!valor
}
console.log(verdadeiro(1))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function somarLados(lado) {
  total = lado * 4
  console.log(total)
}
somarLados(4)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function meuNome(nome, sobrenome) {
  return nome + sobrenome
}
console.log(meuNome('renan', ' silva'))

// Crie uma função que verifica se um número é par
function verificarPar(numero) {
  if (numero % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(verificarPar(5))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeOf(dado) {
  return typeof dado
}
console.log(typeOf('renan'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
  console.log('renan')
})

// Corrija o erro abaixo
var totalPaises = 193
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

console.log(precisoVisitar(10))
console.log(jaVisitei(1))
