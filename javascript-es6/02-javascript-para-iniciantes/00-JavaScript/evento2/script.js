const botao = document.querySelector('.ativar')
const texto = document.querySelector('.texto')

function mostrar() {
  texto.classList.toggle('hide');
} 

botao.addEventListener('click', mostrar);
