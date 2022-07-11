const numeros = [10, 25, 60, 5, 35, 10]

const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior
})

const menorValor = numeros.reduce((anterior, atual) => {
  return anterior > atual ? atual : anterior
})

maiorValor // 60
console.log(maiorValor)
console.log(menorValor)
