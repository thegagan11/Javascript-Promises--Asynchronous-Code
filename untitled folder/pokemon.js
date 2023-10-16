document.getElementById('fetchPokemon').addEventListener('click', fetchRandomPokemon);

function fetchRandomPokemon() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1118';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const allPokemon = data.results;
            const randomPokemon = [];

            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * allPokemon.length);
                randomPokemon.push(allPokemon[randomIndex]);
            }

            const pokemonList = document.getElementById('pokemonList');
            pokemonList.innerHTML = '';  // Clear the list before adding new items

            randomPokemon.forEach(pokemon => {
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${pokemon.name}, URL: ${pokemon.url}`;
                pokemonList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
}
