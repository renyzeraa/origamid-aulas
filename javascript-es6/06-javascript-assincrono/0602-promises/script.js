const promesa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    setTimeout(()=>{
      console.log('antes do resolve');
      resolve({nome: 'Andre', idade: 28});
    }, 1000)
  } else {
    reject('Um erro ocorreu na promise');
  }
});

const retorno = promesa
.then(resolucao => {
  resolucao.profissao = 'Designer';
  console.log('then 1');
  return resolucao;
})
.then(resolucao => {
  console.log('then 2');
  console.log(resolucao);
}, rejeitada => {
  console.log('catch');
  console.log(rejeitada);
}).finally((teste) => {
  console.log('finally', teste);
  console.log('---------------------------');
})

console.log(retorno);


const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 1500)
})

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
})