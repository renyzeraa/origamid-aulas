"use strict"; // executa no modo restrito, código mais limpo e seguro

function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }

  return Object.freeze({
    text,
    element
  });
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

// btnComprar.text = 'Novo texto'; -> ira gerar erro
// btnComprar.element = 'Novo texto';

console.log(btnComprar, btnVender)

function Pessoa(nome) {
  if(!(this instanceof Pessoa))
    return new Pessoa(nome)
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');

console.log(designer);