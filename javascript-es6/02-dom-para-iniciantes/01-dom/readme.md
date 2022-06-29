# console.log(window)

window é o objeto global do browser
possui diferentes métodos e propriedades

`window.innerHeight // retorna a altura do browser`

# WINDOW E DOCUMENT

São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

```
window.alert('Isso é um alerta')
alert('Isso é um alerta') // Funciona

document.querySelector('h1') // Seleciona o primeiro h1
document.body // Retorna o body
```

window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

# NODE

Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

```
const titulo = document.querySelector('h1')

titulo.innerText // retorna o texto;
titulo.classList // retorna as classes;
titulo.id // retorna o id;
titulo.offsetHeight // retorna a altura do elemento;

titulo.addEventListener('click', callback)
```

ativa a função callback ao click no titulo

## Contato

<img align="left" src="https://avatars.githubusercontent.com/renyzeraa?size=100">

Feito por [Renan Silva](https://github.com/renyzeraa)!

<a href="https://www.linkedin.com/in/renan-silva-307733224/" target="_blank">
    <img style="border-radius:50%;" src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a>&nbsp;

<br clear="left"/>
