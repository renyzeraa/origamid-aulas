// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto'
  const marca = 'Fiat'
  let portas = 4
  console.log(cor, marca, portas)
}
//console.log(var, marca, portas);
// Resposta: esta chamando o 'var' em vez da variavel, colocar console.log dentro do escopo.

// Como corrigir o erro abaixo?
const dois = 2
function somarDois(x) {
  return x + dois
}
function dividirDois(x) {
  return x + dois
}
console.log(somarDois(4))
console.log(dividirDois(6))
//tirar o const dois, e deixar o numero, ja que sempre vai ser constante '2'

// O que fazer para total retornar 500?
const numero = 50
// mudar var para const
for (let numero = 0; numero < 10; numero++) {
  //mudar o var para let
  console.log(numero)
}

const total = 10 * numero
console.log(total)
