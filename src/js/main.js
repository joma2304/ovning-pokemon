"use strict";

async function loadPokemon() {
    try {
        const container = document.getElementById("pokemon");
        for (let i = 1; i <= 12; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            const pokemonName = data.name;
            const pokemonElement = document.createElement("p");
            pokemonElement.textContent = pokemonName;
            container.appendChild(pokemonElement);
        }
    } catch (error) {
        console.error(error);
    }
}

loadPokemon();

async function loadPokemonPic() {
    try {
        const container = document.getElementById("pokemon");
        for (let i = 1; i <= 12; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            const pokemonName = data.name;
            const pokemonPic = data.sprites.front_default;
            const pokemonPicElement = document.createElement("img");
            pokemonPicElement.setAttribute("src", pokemonPic); // Sätt bildkällan med setAttribute
            container.appendChild(pokemonPicElement);
        }
    } catch (error) {
        console.error(error);
    }
}

loadPokemonPic();