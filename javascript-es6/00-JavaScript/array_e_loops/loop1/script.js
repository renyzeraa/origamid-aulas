const lista = ["js", "css", "html" ]
const body = document.querySelector("body")

for(index = 0; index < lista.length; index++){
  const itens = lista[index].toUpperCase()
  body.innerHTML += "<li>" + itens + "</li>"
}