// boolean
var possuiGraduacao = true
var possuiDoutorado = false

// CONDICIONAIS IF E ELSE
var possuiGraduacao = true

if (possuiGraduacao) {
  console.log('Possui graduação')
} else {
  console.log('Não possui graduação')
}
// retorna Possui Graduação e não executa o else

// CONDICIONAIS ELSE IF
var possuiGraduacao = true
var possuiDoutorado = false

if (possuiDoutorado) {
  console.log('Possui graduação e doutorado')
} else if (possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado')
} else {
  console.log('Não possui graduação')
}
// retorna Possui Graduação, mas não possui doutorado

// SWITCH
var corFavorita = 'Azul'

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.')
    break
  case 'Vermelho':
    console.log('Olhe para rosas.')
    break
  case 'Amarelo':
    console.log('Olhe para o sol.')
    break
  default:
    console.log('Feche os olhos')
}

// TRUTHY E FALSY
// Falsy
/*
  if(false)
  if(0) // ou -0
  if(NaN)
  if(null)
  if(undefined)
  if('') // ou "" ou ``
*/

// TRUTHY
/*
  if(true)
  if(1)
  if(' ')
  if('andre')
  if(-5)
  if({})

  Todo o resto é truthy
*/

// OPERADOR LÓGICO DE NEGAÇÃO !
/*
  if(!true) // false
  if(!1) // false
  if(!'') // true
  if(!undefined) // true
  if(!!' ') // true
  if(!!'') // false
*/

// OPERADORES DE COMPARAÇÃO
/*
  10 > 5; // true
  5 > 10; // false
  20 < 10; // false
  10 <= 10 // true
  10 >= 11 // false
*/

// OPERADORES DE COMPARAÇÃO
/*
  10 == '10'; // true
  10 == 10; // true
  10 === '10'; // false
  10 === 10 // true
  10 != 15 // true
  10 != '10' // false
  10 !== '10' // true
*/

// OPERADORES LÓGICOS &&
/*
  true && true; // true
  true && false; // false
  false && true; // false
  'Gato' && 'Cão'; // 'Cão'
  (5 - 5) && (5 + 5); // 0
  'Gato' && false; // false
  (5 >= 5) && (3 < 6); // true
  Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
*/

// OPERADORES LÓGICOS ||
/*
  true || true; // true
  true || false; // true
  false || true; // true
  'Gato' || 'Cão'; // 'Gato'
  (5 - 5) || (5 + 5); // 10
  'Gato' || false; // Gato
  (5 >= 5) || (3 < 6); // true
  retorna o primeiro valor true que encontrar
*/
