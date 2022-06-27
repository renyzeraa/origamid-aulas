// function livro(nome, ano , autor){
//   // nome = 'O poder do habito'
//   // ano = '2009'
//   // autor = 'T Harv.'
  
//   const nomeM = nome.toUpperCase()
//   const anos =  '2050' - ano

//   const frase = nome + ' por ' + autor
 
//   const objeto = {
//     nome: nomeM , 
//     anos , 
//     frase,
//   }

//   return objeto
// }

// const livroRetorno = livro('O poder do habito', 1999, 'T Harv')

// console.log(livroRetorno.frase)


// FATORADO
// function livroFatorado (nome, ano, autor) {
//   return {
//     nome: nome.toUpperCase(),
//     ano: 2050 - ano,
//     frase: nome + ' por ' + autor,
//   }
// }

// const livroRetorno2 = livroFatorado('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')
// console.log(livroRetorno2.frase)

//refazendo

function livroDois(nome, ano, autor){
  return {
    nome: nome.toUpperCase(),
    ano: 2050 - ano,
    frase: nome + ' por ' + autor,
  }
}

const retorno = livroDois('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')
console.log(retorno.frase)
