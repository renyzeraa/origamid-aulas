const botao = document.querySelector('button')

  function somar() {
    const valortela = document.querySelector("div")
    const total = Number(valortela.innerText) + 1
    
    if(total <= 10){
      valortela.innerText = total;
    } else {
      console.log("Não da para adicionar mais")
    }
  }

  if(botao){
    botao.addEventListener("click", somar)

  }
