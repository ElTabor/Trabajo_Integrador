import React from 'react'
import './pokeCard.css'

export default function PokeCard({pokemonData}) {

    if(!pokemonData) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="card">
            <img id="image" src={pokemonData.sprites.front_default} alt="Pokemon Image" />
            <h2 id="name">{pokemonData.name}</h2>
            {/* <p id="type">Type: {pokemonData.types}</p>
            <p id="Abilities">Abilities: {pokemonData.abilities}</p> */}
        </div>
    )
}