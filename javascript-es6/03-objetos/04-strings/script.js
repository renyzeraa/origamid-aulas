const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
const arrayItens = listaItens.split(' ')
console.log(arrayItens)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('</div>')
const htmlNovo = htmlArray.join('section')

console.log(htmlArray)
