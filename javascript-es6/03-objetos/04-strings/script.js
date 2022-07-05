// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const cashBalance = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39'
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99'
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49'
  }
]

let recebimentoTotal = 0
let taxaTotal = 0
cashBalance.forEach(item => {
  const numeroLimpo = +item.valor.replace('R$ ', '')
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numeroLimpo
  } else {
    recebimentoTotal += numeroLimpo
  }
})
console.log('Valor Total de Recebimento = ' + taxaTotal)
console.log('Valor Total de taxa = ' + recebimentoTotal)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`

let htmlWithA = html.split('span').join('a')
console.log(htmlWithA)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!'
const ultimoCaracter = frase.slice(-1)
console.log(ultimoCaracter)

// Retorne o total de taxas
const transacoes = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial'
]

let taxasTotal = 0
transacoes.forEach(item => {
  item = item.toLocaleLowerCase().trim()
  if (item.slice(0, 4) === 'taxa') taxasTotal++
})

console.log(taxasTotal)
