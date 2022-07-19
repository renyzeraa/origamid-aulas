# JAVASCRIPT COMPLETO ES6+

**_Código das aulas_**

## O CURSO

- [ ] JavaScript Completo ES6+

var, const, let, class, async, await, fetch, promise e mais

- [ ] Pré-requisitos

HTML / CSS

- [ ] Ferramentas

Visual Studio Code, Node.js, NPM e Git

## ANIMAIS FANTÁSTICOS

https://origamid.github.io/animais-fantasticos/

## GRADE

- [ ] Introdução

Sobre a linguagem e configuração o ambiente.

- [ ] JavaScript para Iniciantes

Dados, variáveis, operadores, boolean, funções, objetos, arrays, loops e mais.

- [ ] DOM para Iniciantes

Início do projeto, selecionar e manipular o dom, eventos, traversing e mais.

## GRADE

- [ ] Objetos

Constructor functions, prototype, String, Array, Math, Number, Function, Object.

- [ ] Efeitos no DOM

Modules, event bubble, setTimeout, forms e mais.

- [ ] JavaScript Assíncrono

Promises, Fetch (novo AJAX), JSON, API, HTTP, Async / Await e mais.

## GRADE

- [ ] Classes

Class, constructor, get, set, extends e mais.

- [ ] Mais JavaScript

IIFE, factory function, clojures, debugging, destructuring, rest, iterables.

- [ ] Regular Expression

Principais padrões e métodos.

## GRADE

- [ ] Automação Front End

CLI, NPM, ESLint, Webpack, Babel e Git.

- [ ] Projeto Final

Refatoração do projeto utilizando classes. Praticando com Git, ESLint e mais.

- [ ] Slide

Criação do plugin de slide.

## PEQUENO E SIMPLES

```
const btn = document.querySelector('.btn');

function activeButton() {
this.classList.add('active');
}

btn.addEventListener('click', activeButton);
```

## PEQUENO E COMPLEXO

```
export default function fetchBitcoin(url, target) {
fetch(url)
.then(response => response.json())
.then((bitcoin) => {
const btcPreco = document.querySelector(target);
btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
}).catch(erro => console.log(Error(erro)));
}
```

## GRANDE E COMPLEXO

```
  export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }
}
```

## Contact

<img align="left" src="https://avatars.githubusercontent.com/renyzeraa?size=100">

Made with ❤️ by [Renan L. Silva](https://github.com/renyzeraa)! <br>
🛠 Frontend Developer Jr. <br>
📍 Santa Catarina - Brazil <br>

<a href="https://www.linkedin.com/in/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="20"></a>&nbsp;
<a href="mailto:renansilvaytb@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="20"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="renan_s#7826" alt="Discord Badge" height="20"></a>&nbsp;
<a href="https://www.github.com/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="20"></a>&nbsp;

<br clear="left"/>
