import initNumerosAnimation from './numeros-animacao.js';

export default function initFetchAnimais() {
  const url = './animaisapi.json';
  async function fetchAnimals(url) {
    const promiseJson = await fetch(url);
    const animaisJson = await promiseJson.json();
    const numerosGrid = document.querySelector('.numeros-grid');
  
    animaisJson.forEach(animal => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });

    initNumerosAnimation();
  }
  fetchAnimals(url);
  
  function createAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div
  }
}
