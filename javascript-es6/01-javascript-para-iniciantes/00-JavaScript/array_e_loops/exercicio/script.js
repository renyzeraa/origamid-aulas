const links = document.querySelectorAll("nav a")

function ativarLink(link){
  const href = link.href
  const url = document.location.href

  if(href === url){
    link.style.background = "black"
    link.style.color = "red"
  }
}

links.forEach(ativarLink)
