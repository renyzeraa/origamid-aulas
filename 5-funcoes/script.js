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
