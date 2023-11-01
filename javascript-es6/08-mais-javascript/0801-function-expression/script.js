// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 454,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function() {
  const nome = 'Renan';
  console.log(nome);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(() => {
  console.log('Teste de Active');
});