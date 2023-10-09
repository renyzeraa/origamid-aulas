// Selecione cada curso e retorne uma array 
// com objetos contendo o título, descricao, 
// aulas e horas de cada curso 

let html = document.querySelectorAll('.curso');
html = Array.from(html);
const objetoCurso = html.map((oItem) => {
  return {
    titulo: oItem.querySelector('h1').innerText,
    descricao: oItem.querySelector('p').innerText,
    aulas: parseFloat(oItem.querySelector('.aulas').innerText),
    horas: parseFloat(oItem.querySelector('.horas').innerText)
  };
});
console.log(objetoCurso);

 
// Retorne uma lista com os números maiores que 100 
const numeros = [3, 44, 333, 23, 122, 322, 33]; 
maioresQueCem = numeros.filter(number => number > 100);
console.log(maioresQueCem)

// Verifique se Baixo faz parte da lista de instrumentos e retorne true 
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 
'Teclado'] 
console.log(instrumentos.some(item => item === 'Baixo'))
 
// Retorne o valor total das compras 
const compras = [ 
  { 
    item: 'Banana', 
    preco: 'R$ 4,99'  
  }, 
  { 
    item: 'Ovo', 
    preco: 'R$ 2,99' 
  }, 
  { 
    item: 'Carne', 
    preco: 'R$ 25,49' 
  }, 
  { 
    item: 'Refrigerante', 
    preco: 'R$ 5,35' 
  }, 
  { 
    item: 'Quejo', 
    preco: 'R$ 10,60' 
  } 
]

const totalCompras = compras.reduce((Accum, oItem) => {
  return Accum += parseFloat(oItem.preco.slice(3).replace(',', '.'));
}, 0);

console.log(totalCompras)
