function areaQuadrado(lado) {
  return lado * lado
}
console.log(areaQuadrado(4)) // 16
console.log(areaQuadrado(5)) // 25
console.log(areaQuadrado(2)) // 4
// Chamada de function declaration

//Parênteses () executam uma função
function pi() {
  return 3.14
}
var total = 5 * pi() // 15.7

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2
  return imc
}

imc(80, 1.8) // 80 e 1.80 são os argumentos
imc(60, 1.7) // 60 e 1.70 são os argumentos

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Você gosta do céu'
  } else if (cor === 'verde') {
    return 'Você gosta de mato'
  } else {
    return 'Você não gosta de nada'
  }
}
console.log(corFavorita('azul')) //

addEventListener('click', function () {
  console.log('Clicou')
})
/*
  A função possui dois argumentos
  Primeiro é a string 'click'
  Segundo é uma função anônima

  Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}
*/

// PODE OU NÃO RETORNAR UM VALOR

function imc2(peso, altura) {
  const imc = peso / altura ** 2
  console.log(imc)
}

imc2(80, 1.8) // retorna o imc
console.log(imc2(80, 1.8)) // retorna o imc e undefined

// VALORES RETORNADOS
function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!' //quando para em um dos return, o resto da funcao nao é execultada !
  } else if (idade >= 60) {
    return true
  } else {
    return false
  }
}

console.log(terceiraIdade(50))

// ESCOPO
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(precisoVisitar(2))
//console.log(totalPaises) // erro, totalPaises não definido

// ESCOPO LEXICO
var profissao = 'Designer'

function dados() {
  var nome = 'André'
  var idade = 28
  function outrosDados() {
    var endereco = 'Rio de Janeiro'
    var idade = 29
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}

console.log(dados()) // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados() // retorna um erro

// HOISTING
imc(80, 1.8) // imc aparece no console

function imc(peso, altura) {
  const imc = peso / altura ** 2
  console.log(imc)
}
