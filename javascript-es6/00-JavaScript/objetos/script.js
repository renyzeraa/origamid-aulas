//livro
const nome = 'O senhor dos anéis'
const ano = '1964'
const autor = 'J.R.R. Tolkien'

//filme
const nomeFilme = 'O senhor dos anéis'
const anoFilme = '2001'
const diretorFilme = 'Peter'

//com objetos faremos assim

const livro = {
  nome: 'O senhor dos anéis',
  ano: '1964',
  autor: 'J.R.R. Tolkien'
}

const filme = {
  nome: 'O senhor dos anéis',
  ano: '2001',
  diretor: 'Peter'
}

//sempre verificar com console.log
//ira retornar meu objeto
console.log(livro)
console.log(filme)

//dado especifivo usado com o . depois to objeto
console.log(livro.ano)
console.log(livro.autor + ' ' + filme.diretor)
console.log(livro === filme)

const texto = document.querySelector('p')

console.log(texto.innerHTML) //pegar o html e transformar em texto
console.log(texto.innerHTML.toUpperCase()) //LETRA MAISCULA
console.log(texto.innerHTML.toLowerCase()) //letra minuscula

const decimal = 2.99
console.log(decimal.toFixed()) // arredondar números. me retorna uma string
console.log(10) //me retorna um number
//com cor é number
//sem cor é string

const total = (decimal.toFixed().length = 1200.9999)
//lenght quantidade de caracteres em uma string.
