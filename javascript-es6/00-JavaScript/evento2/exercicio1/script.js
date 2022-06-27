const circulo = document.querySelector('#bola');

function seguirMouse(event) {
  circulo.style.top = event.y + 'px';
  circulo.style.left = event.x + 'px';
}

window.addEventListener('mousemove', seguirMouse);
