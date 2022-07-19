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
