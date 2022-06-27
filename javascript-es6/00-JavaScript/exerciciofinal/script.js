const imagens = document.querySelectorAll("#galeria li img")

function galeriaTrocar(event){
  const fotoPrincipal = document.querySelector("#principal")
  const clicada = event.currentTarget;
  fotoPrincipal.src = clicada.src;
  fotoPrincipal.alt = clicada.alt;
}

function trocarImagem(imagem){
  imagem.addEventListener('click', galeriaTrocar)
}
imagens.forEach(trocarImagem)