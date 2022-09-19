const galeria = document.querySelectorAll('#galeria img')

function galeriaTrocar(event) {
  const imgPrincipal = document.querySelector('#imagem-principal')
  const clicada = event.currentTarget
  imgPrincipal.setAttribute('src', clicada.src)
}

function galeriaClick(imagem) {
  imagem.addEventListener('click', galeriaTrocar)
}

galeria.forEach(galeriaClick)
