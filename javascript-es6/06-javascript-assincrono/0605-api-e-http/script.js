fetch('https://pokeapi.co/api/v2/pokemon')
.then(response => response.json())
.then(pokemon => {
  pokemon.results.forEach(console.log);
});

// const url = 'https://cors-anywhere.herokuapp.com';

// fetch(url)
// .then(response => response.text())
// .then(text => console.log(text));