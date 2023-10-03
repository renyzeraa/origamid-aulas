// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(sNome, iIdade) {
  this.nome = sNome;
  this.idade = iIdade;
  this.andar = () => {
    console.log(this.nome + ' andou');
  }
  return this;
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  this.seletor = seletor;
  const aElementsList = document.querySelectorAll(seletor);
  this.elements = aElementsList
  this.addClass = (sClasse) => {
    this.elements.forEach(element => {
      element.classList.add(sClasse);
    });
  }
  this.removeClass = (sClasse) => {
    this.elements.forEach(element => {
      element.classList.remove(sClasse);
    });
  }
}